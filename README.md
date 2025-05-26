![39_1x_shots_so](https://github.com/user-attachments/assets/757dbd83-79f9-4896-979e-26af8c4af7cf)

## [View demo](https://bhaveshxrawat.github.io/react-youtube-liteframe-demo/)

# react-youtube-liteframe Monorepo

This repository contains the source code for the `react-youtube-liteframe` package and `test-app` to test the package in a local development setup.

👉 See [packages/react-youtube-liteframe/README.md](packages/react-youtube-liteframe/README.md) for usage and documentation.

## 👨‍💻 Local Development

This project uses **pnpm workspaces** for local testing instead of global linking.

### 1. Project structure

```plaintext
/packages
  /react-youtube-liteframe  ← library
  /test-app                  ← your test app
pnpm-workspace.yaml
```

`pnpm-workspace.yaml`:

```yaml
packages:
  - "packages/*"
```

### 2. Setup

```bash
pnpm install
```

This installs dependencies across both the library and the test app and links them automatically.

### 3. Development workflow

- **Library**: inside `react-youtube-liteframe`
  ```bash
  pnpm dev
  ```
- **Test app**: inside `test-app`
  ```bash
  pnpm run dev
  ```

When you make changes inside your library, **rebuild it** (`pnpm run dev`), and your test app will pick them up automatically.

No `pnpm link` or global linking needed!
