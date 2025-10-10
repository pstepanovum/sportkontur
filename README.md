# 🏗️ SportKontur Web Platform

> A modern web application for **SportKontur (ООО «Спорт-Контур»)** — a leading Russian manufacturer and installer of outdoor sports and playground equipment.
> Built with **Next.js**, **TypeScript**, and **SQL** for data management and content automation.

---

## 🚀 Overview

**SportKontur Web App** is a digital platform that brings the company’s catalog, project portfolio, and client interaction online.
The application provides a smooth, responsive, and multilingual experience for both B2B and B2C customers.

Key features:

* 📦 Interactive product catalog (children’s playgrounds, sports complexes, equipment)
* 🏗️ Admin dashboard for managing products, images, and descriptions
* 💬 Customer contact forms and inquiry system
* 🌍 Multilingual support (Russian 🇷🇺 / English 🇬🇧)
* 📊 SQL database for products, categories, and client requests
* ⚡ Optimized with SSR (Server-Side Rendering) and SEO meta tags

---

## 🧱 Tech Stack

| Layer               | Technology                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| **Frontend**        | [Next.js 15](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) |
| **Backend**         | Next.js API routes (Node.js)                                                                             |
| **Database**        | PostgreSQL / MySQL (SQL-based)                                                                           |
| **ORM**             | Prisma                                                                                                   |
| **Authentication**  | NextAuth.js                                                                                              |
| **Deployment**      | Vercel / AWS Amplify                                                                                     |
| **Version Control** | Git + GitHub                                                                                             |
| **Language**        | TypeScript                                                                                               |

---

## 🗂️ Project Structure

```
sportkontur-web/
├── prisma/              # Database schema and migrations
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # Reusable UI components
│   ├── lib/             # Utility functions and helpers
│   ├── pages/           # Static pages (if needed)
│   ├── api/             # API routes for data fetching
│   ├── styles/          # Tailwind CSS and global styles
│   └── types/           # TypeScript types/interfaces
├── public/              # Static assets (images, icons, etc.)
├── .env.example         # Example environment variables
├── package.json
├── README.md
└── tsconfig.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-org>/sportkontur-web.git
cd sportkontur-web
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Copy the example file:

```bash
cp .env.example .env.local
```

Then fill in:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/sportkontur"
NEXTAUTH_SECRET="your_secret_key"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Run Database Migrations

```bash
npx prisma migrate dev
```

### 5. Start the Development Server

```bash
npm run dev
```

App will be available at **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Database Schema (Example)

Example of a simple **Product** model for playgrounds and sports equipment:

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  category    String
  description String
  imageUrl    String?
  price       Float?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## 🧠 Future Enhancements

* 🗺️ Interactive map of installations across Russia
* 🛒 Online order & quote request system
* 🖼️ 3D previews for equipment models
* 📱 Mobile-optimized catalog view
* 🔒 Role-based admin panel with analytics

---

## 🤝 Contributing

Pull requests and feature suggestions are welcome!
To contribute:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🧑‍💻 Maintainers

**SportKontur Web Team**

* [Alexander Stepanov](mailto:info@sportkontur.ru) — General Director
* [Pavel Stepanov](https://github.com/pavelstepanov) — Lead Developer

Official Website: [sportkontur.ru](https://sportkontur.ru)
