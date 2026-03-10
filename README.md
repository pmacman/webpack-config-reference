# Webpack Configuration Demo (Legacy Reference)

## ℹ️ Overview

This repository is a **legacy reference project** demonstrating how to manually configure **Webpack 4 and Webpack 5** without relying on framework abstractions.

It was created to:

- Understand Webpack at a low level
- Compare configuration differences between major Webpack versions
- Serve as a hands-on learning and troubleshooting reference

Today, most modern frameworks abstract this complexity away. This project is therefore **educational and historical**, not production-ready.

## 📄 What This Demo Covers

- Separate configurations for **Webpack 4** and **Webpack 5**
- Development vs production builds
- JavaScript and CSS bundling
- Vendor vs application bundles
- Source maps for debugging
- Babel for JavaScript compatibility
- Sass compilation
- ESLint integration
- Build statistics and dependency graph analysis

## 🛠 Prerequisites

- Node.js
- npm

## 🚀 Running the Demo

Each Webpack version lives in its own folder.

```bash
cd webpack5
npm install
```

### Common Scripts

```bash
npm run build        # Production build
npm run build:dev    # Development build with watch mode
npm run clean        # Remove dist folder
npm run lint         # Run ESLint
npm run stats        # Generate bundle analysis stats
```

Build output is written to the `dist/` directory.  

Open `dist/index.html` in a browser to inspect results.

## 📁 Project Structure

```text
webpack-demo/
├─ webpack4/
│  └─ (same structure as webpack5)
├─ webpack5/
│  ├─ eslintrc.json
│  ├─ package.json
│  ├─ webpack.config.js
│  ├─ dist/
│  └─ src/
│     ├─ index.html
│     ├─ css/
│     └─ js/
```

Each folder is self-contained and intentionally verbose for learning purposes.

## 📄 Legacy Context

This project predates:

- Zero-config bundlers
- Native ES module support in browsers
- Modern dev servers with instant HMR
- Framework-managed build pipelines

It reflects a period when frontend engineers were expected to:

- Write and maintain complex bundler configs
- Optimize bundle size manually
- Understand loader and plugin chains in detail

## 🚩 When This Is Still Useful

- Debugging legacy Webpack projects
- Understanding migration pain points
- Explaining build tooling concepts to newer engineers
- Appreciating why modern tools exist

## 📄 License

MIT
