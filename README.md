# Nuxt 3 Basic Starter

A minimal **Nuxt 3** starter template with essential configurations for building modern web applications. This template includes useful Nuxt modules, security enhancements, and predefined scripts for easy development and deployment.

---

## ⚡️ Quick Start with `create-ersn-app`

The easiest way to use this template is with [`create-ersn-app`](https://www.npmjs.com/package/create-ersn-app). Just run:

```bash
npx create-ersn-app
# or
pnpm dlx create-ersn-app
# or
yarn dlx create-ersn-app
# or
bunx create-ersn-app
```

Then select the **Nuxt 3 Basic Starter** template from the list. 🚀

---

## 📦 Manual Installation

If you prefer to set up manually, you can clone the repository and install dependencies:

```bash
git clone https://github.com/ersankarimi/nuxt3-basic-starter.git your-project
cd your-project
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

---

## 🔧 Development

Run the development server using the `.env.local` configuration:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun run dev
```

---

## 🛠 Environment Files

This template supports multiple environment configurations. Make sure to create the necessary `.env` files before running the project:

- **`.env.local`** → Used for local development (`pnpm dev`).
- **`.env.development`** → Used for development builds (`pnpm dev:build`, `pnpm dev:generate`).
- **`.env.production`** → Used for production builds (`pnpm prod:build`, `pnpm prod:generate`).
- **`.env.example`** → Provides a reference for required environment variables.

---

## 🔨 Build & Generate

### **Build for Production**

```bash
pnpm build
# or
npm run build
# or
yarn build
# or
bun run build
```

### **Generate Static Site**

```bash
pnpm generate
# or
npm run generate
# or
yarn generate
# or
bun run generate
```

> You can also use environment-specific builds:

```bash
pnpm prod:build    # Production build
pnpm dev:build     # Development build

pnpm prod:generate # Generate static site with production env
pnpm dev:generate  # Generate static site with development env
```

---

## 👀 Preview

After building or generating, you can preview the site using:

```bash
pnpm preview
# or
npm run preview
# or
yarn preview
# or
bun run preview
```

> Or combine with generate/build:

```bash
pnpm prod:generate:preview
pnpm dev:generate:preview
pnpm prod:build:preview
pnpm dev:build:preview
```

---

## 🔍 Linting & Formatting

Since ESLint is already configured to format the code, there's no need for duplicating functionality with Prettier.

If you have Prettier installed in your editor, we recommend disabling it to avoid conflicts.

This project follows a strict linting and formatting setup using **ESLint** with **Antfu's ESLint config**:

### **Run Lint Check**

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
# or
bun run lint
```

### **Fix Linting Issues**

```bash
pnpm lint:fix
# or
npm run lint:fix
# or
yarn lint:fix
# or
bun run lint:fix
```

> The linting rules include best practices for **Vue 3**, **TypeScript**, and **ESLint recommendations**, ensuring consistent code quality.

---

## 📂 Folder Structure

```bash
📦 nuxt3-basic-starter
 ┣ 📂 .nuxt/        # Auto-generated Nuxt build files
 ┣ 📂 public/       # Static assets
 ┣ 📂 components/   # Vue components
 ┣ 📂 pages/        # Nuxt pages (auto-routing)
 ┣ 📂 layouts/      # Layout templates
 ┣ 📂 assets/       # Global styles & images
 ┣ 📂 middleware/   # Nuxt middleware
 ┣ 📂 composables/  # Reusable functions (auto-imported)
 ┣ 📂 plugins/      # Nuxt plugins
 ┣ 📜 nuxt.config.ts # Nuxt configuration
 ┣ 📜 .env.example  # Example environment file
 ┗ 📜 package.json   # Project dependencies & scripts
```

---

## 🛠 Configuration

Edit `nuxt.config.ts` to customize the setup, enable/disable modules, and tweak performance settings.

---

## ⚖ License

This project is licensed under the **MIT License**.
