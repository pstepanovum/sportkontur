const archiver = require("archiver");
const fs = require("fs");
const { Client } = require("ssh2");
const colors = require("colors");
const cliProgress = require("cli-progress");
require("dotenv").config({ path: ".env.local" });

const SSH_CONFIG = {
  host: process.env.SSH_HOST,
  port: parseInt(process.env.SSH_PORT),
  username: process.env.SSH_USER,
  password: process.env.SSH_PASSWORD,
};

const REMOTE_ROOT = process.env.SSH_REMOTE_ROOT;
const ZIP_NAME = "deploy.zip";

async function deploy() {
  console.log(
    colors.blue.bold("\n🚀 Starting ZIP deployment to dev.sportkontur.ru...\n")
  );

  // Step 1: Create ZIP archive
  console.log(colors.cyan("📦 Creating archive from ./out folder..."));

  const output = fs.createWriteStream(ZIP_NAME);
  const archive = archiver("zip", { zlib: { level: 9 } });

  let zipSize = 0;

  archive.on("progress", (progress) => {
    zipSize = progress.fs.processedBytes;
  });

  output.on("close", async () => {
    const sizeMB = (archive.pointer() / 1024 / 1024).toFixed(2);
    console.log(colors.green(`✅ Archive created: ${sizeMB} MB\n`));

    await uploadAndExtract(sizeMB);
  });

  archive.on("error", (err) => {
    console.log(colors.red("❌ Archive error:"), err);
    throw err;
  });

  archive.pipe(output);
  archive.directory("out/", false);
  await archive.finalize();
}

async function uploadAndExtract(sizeMB) {
  const conn = new Client();

  return new Promise((resolve, reject) => {
    conn.on("ready", () => {
      console.log(colors.cyan("📤 Uploading archive to server..."));

      const progressBar = new cliProgress.SingleBar({
        format:
          "Upload |" +
          colors.cyan("{bar}") +
          "| {percentage}% | {uploadedMB}/{totalMB} MB",
        barCompleteChar: "\u2588",
        barIncompleteChar: "\u2591",
        hideCursor: true,
      });

      conn.sftp((err, sftp) => {
        if (err) {
          conn.end();
          return reject(err);
        }

        const remotePath = `${REMOTE_ROOT}/${ZIP_NAME}`;
        const readStream = fs.createReadStream(ZIP_NAME);
        const writeStream = sftp.createWriteStream(remotePath);

        const fileSize = fs.statSync(ZIP_NAME).size;
        let uploaded = 0;

        progressBar.start(fileSize / 1024 / 1024, 0, {
          uploadedMB: 0,
          totalMB: sizeMB,
        });

        readStream.on("data", (chunk) => {
          uploaded += chunk.length;
          progressBar.update(uploaded / 1024 / 1024, {
            uploadedMB: (uploaded / 1024 / 1024).toFixed(2),
            totalMB: sizeMB,
          });
        });

        writeStream.on("close", () => {
          progressBar.stop();
          console.log(colors.green("✅ Upload complete\n"));

          // Extract on server
          console.log(colors.cyan("📂 Extracting files on server..."));

          const extractCmd = `cd ${REMOTE_ROOT} && unzip -o ${ZIP_NAME} && rm ${ZIP_NAME} && chmod -R 755 . && find . -type f -exec chmod 644 {} \\;`;

          conn.exec(extractCmd, (err, stream) => {
            if (err) {
              conn.end();
              return reject(err);
            }

            let output = "";
            stream.on("data", (data) => {
              output += data.toString();
            });

            stream.on("close", (code) => {
              conn.end();

              // Cleanup local ZIP
              fs.unlinkSync(ZIP_NAME);

              if (code === 0) {
                console.log(colors.green("✅ Files extracted successfully\n"));
                console.log(
                  colors.green.bold("✅ Deployment finished successfully!")
                );
                console.log(
                  colors.gray(`🌐 View at: http://dev.sportkontur.ru\n`)
                );
                resolve();
              } else {
                console.log(
                  colors.red("❌ Extraction failed with code:"),
                  code
                );
                reject(new Error("Extraction failed"));
              }
            });
          });
        });

        readStream.pipe(writeStream);
      });
    });

    conn.on("error", (err) => {
      console.log(colors.red.bold("\n❌ SSH Connection error:"), err.message);
      reject(err);
    });

    conn.connect(SSH_CONFIG);
  });
}

deploy().catch((err) => {
  console.log(colors.red("\n❌ Deployment failed:"), err.message);
  process.exit(1);
});
