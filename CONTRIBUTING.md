## <!-- Start -->

# Contributing to react-youtube-liteframe

First off, thanks for considering contributing! 🫶
We want to make contributing as easy and transparent as possible.

---

## 🛠 Setup instructions

1. Fork the repo and clone your fork locally:

```bash
git clone https://github.com/your-username/react-youtube-liteframe.git
cd react-youtube-liteframe
```

2. Install all dependencies using **pnpm**:

```bash
pnpm install
```

> This sets up both the library and the example test app via pnpm workspaces.

3. Develop and test:

Since there's no `dev` (watch) command yet, you’ll need to manually rebuild after making code changes:

```bash
pnpm run build
```

> After running `pnpm build`, refresh your test app to see updated changes.

4. (Optional) Navigate into the test app and run:

```bash
cd packages/test-app
pnpm dev
```

---

## 📚 Guidelines

- Use **TypeScript**.
- Keep pull requests **small and focused**.
- Write clear, descriptive **commit messages**.
- Update documentation (like **README.md**) if you add/change props (e.g., `nocookie`).

---

## 💡 Available Scripts

| Script           | What it does                               |
| :--------------- | :----------------------------------------- |
| `pnpm run build` | Bundles the library using Rollup           |
| `pnpm run dev`   | Watches the files for changes using Rollup |

---

## 📦 Publishing (for maintainers)

1. Build:

```bash
pnpm run build
```

2. Publish:

```bash
pnpm publish --access public
```

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

# Thank you for contributing! 🚀

You're helping make performance-first web development easier. 🙌

---
