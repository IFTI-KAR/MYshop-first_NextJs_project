

````markdown
# 🛍️ My Next App - Simple Shop (Next.js 15)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js-blue?style=for-the-badge&logo=auth0)](https://next-auth.js.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-teal?style=for-the-badge&logo=netlify)](https://www.netlify.com/)

Live Demo: [my-shop-iftikar.netlify.app](https://my-shop-iftikar.netlify.app/)

---

## 📖 Project Overview

This project is a simple **Next.js 15 (App Router)** application that demonstrates:
- Public and protected routes
- Authentication using **NextAuth.js**
- A basic **product management system**

Users can:
- Explore products and their details (publicly accessible)
- Login via **NextAuth**
- Access a protected **Dashboard** to add new products (authenticated users only)

---

## ✨ Core Features

1. **Landing Page** (`/`)
   - Includes **Navbar, Hero, Product Highlights, Footer**
   - Navigation to Login & Products
   - No authentication required

2. **Login Page** (`/login`)
   - Authentication with **NextAuth.js**
   - Supports **Google login** or credentials
   - Redirects to `/products` after successful login

3. **Product List Page** (`/products`)
   - Publicly accessible
   - Displays product list with **name, description, price**
   - Includes a **details button** for each product

4. **Product Details Page** (`/products/[id]`)
   - Publicly accessible
   - Shows full details of a selected product

5. **Protected Add Product Page** (`/dashboard/add-product`)
   - Accessible **only when logged in**
   - A form to add new products (stored in DB)
   - Redirect unauthenticated users → `/login`

---

## 🌟 Optional Enhancements
- ✅ Loading spinner during form submissions  
- ✅ Toast notifications on successful product addition  
- ✅ Light/Dark theme toggle  

---

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/) – Authentication
- [MongoDB / API Routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) – Backend
- [Netlify](https://www.netlify.com/) – Deployment

---

## ⚙️ Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/my-next-app.git
   cd my-next-app
````

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup Environment Variables**
   Create a `.env.local` file in the root with:

   ```bash
   MONGODB_URI=your-mongodb-connection-string
   DB_NAME=products_Assignment

   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

   > ⚠️ Do **not** share your real keys in public repos. Use placeholders like above.

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

5. Visit the app at:
   👉 `http://localhost:3000`

---

## 📂 Project Structure

```
my-next-app/
│── .next/                 # Next.js build output
│── node_modules/          # Dependencies
│── public/                # Static assets
│── src/
│   ├── app/               # App Router pages
│   │   ├── api/           # API Routes (Next.js Route Handlers)
│   │   │   ├── auth/      # NextAuth config
│   │   │   └── products/  # Product APIs
│   │   ├── dashboard/     # Protected dashboard
│   │   │   └── add-product/page.jsx
│   │   ├── login/page.jsx
│   │   ├── products/      # Product listing
│   │   │   ├── [id]/page.jsx
│   │   │   └── page.jsx
│   │   ├── layout.js      # Root layout
│   │   └── page.js        # Landing page
│   │
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   └── SessionProvider.jsx
│   │
│   └── lib/               # Utility functions
│       └── dbConnect.js   # MongoDB connection
│
├── .env.local             # Environment variables
├── eslint.config.mjs      # ESLint config
├── jsconfig.json          # Path aliases
├── netlify.toml           # Netlify deployment config
└── README.md              # Project documentation
```

---

## 🚀 Routes Summary

| Route                     | Type      | Description                                   |
| ------------------------- | --------- | --------------------------------------------- |
| `/`                       | Public    | Landing page (Navbar, Hero, Products, Footer) |
| `/login`                  | Public    | Login with NextAuth (Google/Credentials)      |
| `/products`               | Public    | Product list page                             |
| `/products/[id]`          | Public    | Product details page                          |
| `/dashboard/add-product`  | Protected | Add new product form (auth required)          |
| `/api/auth/[...nextauth]` | API       | NextAuth backend route                        |
| `/api/products`           | API       | Products API (GET/POST)                       |

---

## 📦 Deployment

This project is deployed on **Netlify**.
Live Demo 👉 [my-shop-iftikar.netlify.app](https://my-shop-iftikar.netlify.app/)

---

## 🙌 Author

**Iftikar**
Passionate MERN Stack Developer | [Portfolio](#) | [GitHub](https://github.com/your-username)


