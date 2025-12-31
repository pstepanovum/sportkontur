#!/usr/bin/env node

/**
 * SVG Attribute Fixer for React/JSX
 *
 * This script automatically converts HTML-style SVG attributes to React/JSX camelCase format
 * Scans ALL .tsx files recursively in the icons directory
 *
 * Usage:
 *   node scripts/fix-svg-attributes.js
 */

const fs = require("fs");
const path = require("path");

// Map of incorrect attribute names to correct React/JSX names
const attributeMap = {
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-weight": "fontWeight",
  "text-anchor": "textAnchor",
  "text-decoration": "textDecoration",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "marker-start": "markerStart",
  "marker-mid": "markerMid",
  "marker-end": "markerEnd",
};

// Function to recursively find ALL .tsx files in directory and subdirectories
function findAllTsxFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }

  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      try {
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Recursively scan subdirectories
          findAllTsxFiles(filePath, fileList);
        } else if (file.endsWith(".tsx")) {
          fileList.push(filePath);
        }
      } catch (err) {
        console.warn(`⚠️  Warning: Could not access ${filePath}`);
      }
    });
  } catch (err) {
    console.warn(`⚠️  Warning: Could not read directory ${dir}`);
  }

  return fileList;
}

// Function to fix SVG attributes in a file
function fixSvgAttributes(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;
  const fixedAttributes = [];

  // Replace each incorrect attribute with the correct one
  Object.entries(attributeMap).forEach(([incorrect, correct]) => {
    // Match attribute="value" or attribute='value' or attribute={value}
    const regex = new RegExp(`\\b${incorrect}=`, "g");
    const matches = content.match(regex);

    if (matches && matches.length > 0) {
      content = content.replace(regex, `${correct}=`);
      modified = true;
      fixedAttributes.push(`${incorrect} → ${correct} (${matches.length}x)`);
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
  }

  return { modified, fixedAttributes };
}

// Main execution
const projectRoot = path.resolve(__dirname, "..");
const iconsPath = path.join(projectRoot, "src", "components", "icons");

console.log("╔══════════════════════════════════════════════════════════╗");
console.log("║   SVG Attribute Fixer for React/JSX - RECURSIVE SCAN    ║");
console.log("╚══════════════════════════════════════════════════════════╝\n");

console.log(`📂 Project root: ${projectRoot}`);
console.log(`🔍 Scanning ALL subdirectories in: ${iconsPath}\n`);

if (!fs.existsSync(iconsPath)) {
  console.error(`❌ Error: Icons path does not exist: ${iconsPath}`);
  console.error(`   Please check your project structure.`);
  process.exit(1);
}

// Find ALL .tsx files recursively
const tsxFiles = findAllTsxFiles(iconsPath);
console.log(
  `📁 Found ${tsxFiles.length} .tsx file(s) across all subdirectories\n`
);

if (tsxFiles.length === 0) {
  console.log("⚠️  No .tsx files found in the icons directory.");
  process.exit(0);
}

// Show directory structure
const directories = new Set();
tsxFiles.forEach((file) => {
  const dir = path.dirname(path.relative(iconsPath, file));
  if (dir && dir !== ".") {
    directories.add(dir);
  }
});

if (directories.size > 0) {
  console.log("📂 Scanning subdirectories:");
  Array.from(directories)
    .sort()
    .forEach((dir) => {
      const count = tsxFiles.filter(
        (f) => path.dirname(path.relative(iconsPath, f)) === dir
      ).length;
      console.log(`   • ${dir}/ (${count} files)`);
    });
  console.log("");
}

console.log("🔧 Processing files...\n");

let fixedCount = 0;
let totalFixes = 0;
const fileDetails = [];

tsxFiles.forEach((file, index) => {
  const result = fixSvgAttributes(file);
  if (result.modified) {
    fixedCount++;
    totalFixes += result.fixedAttributes.length;
    const relativePath = path.relative(iconsPath, file);
    fileDetails.push({
      path: relativePath,
      fixes: result.fixedAttributes,
    });
  }

  // Show progress
  if ((index + 1) % 10 === 0 || index === tsxFiles.length - 1) {
    process.stdout.write(
      `\r   Progress: ${index + 1}/${tsxFiles.length} files scanned...`
    );
  }
});

console.log("\n");

// Print results
if (fixedCount > 0) {
  console.log("═══════════════════════════════════════════════════════════");
  console.log(
    `✅ Fixed ${fixedCount} file(s) with ${totalFixes} total changes:\n`
  );

  fileDetails.forEach(({ path, fixes }) => {
    console.log(`📝 ${path}`);
    fixes.forEach((fix) => {
      console.log(`   • ${fix}`);
    });
    console.log("");
  });

  console.log("═══════════════════════════════════════════════════════════");
  console.log("🎉 All SVG attributes have been converted to React/JSX format!");
  console.log(`   ${fixedCount} files modified`);
  console.log(`   ${totalFixes} attributes fixed`);
  console.log(`   ${tsxFiles.length - fixedCount} files already correct`);
} else {
  console.log("═══════════════════════════════════════════════════════════");
  console.log(
    "✨ No issues found - all files are already correctly formatted!"
  );
  console.log(`   ${tsxFiles.length} files checked`);
  console.log("═══════════════════════════════════════════════════════════");
}

console.log("\n✓ Script completed successfully\n");
