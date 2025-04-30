## <!-- Start -->

# react-youtube-liteframe

> 🎥 A lightweight, accessible, lazy-loaded YouTube embed component for React.

---

## ✨ Features

- ⚡ Lazy-loads YouTube iframe **only on click** (better performance)
- 🎯 Accessible by default (keyboard focus, alt text, play button)
- 🖼️ `<picture>` element with WebP and JPG fallback
- 🚀 Optional `preconnect` to YouTube domains
- 🛡️ Optionally use YouTube **Privacy-Enhanced** mode (`youtube-nocookie.com`)
- 📦 Tiny bundle size
- 🛠️ Built for modern React apps

---

## 📦 Installation

```bash
pnpm add react-youtube-liteframe
# or
npm install react-youtube-liteframe
# or
yarn add react-youtube-liteframe
```

---

## 🛠 Usage

```tsx
import Youtube from "react-youtube-liteframe";

function App() {
  return <Youtube videoID="dQw4w9WgXcQ" />;
}

export default App;
```

---

## 🔖 Props

| Prop           | Type      | Default      | Description                                              |
| :------------- | :-------- | :----------- | :------------------------------------------------------- |
| `videoID`      | `string`  | **required** | The YouTube video ID to embed.                           |
| `videoTitle`   | `string`  | null         | The YouTube video title.                                 |
| `ytImpression` | `boolean` | `true`       | Show "Watch on YouTube" overlay text.                    |
| `preconnect`   | `boolean` | `false`      | Preconnect to YouTube domains for faster iframe loading. |
| `nocookie`     | `boolean` | `false`      | Use `youtube-nocookie.com` to improve privacy.           |

---

## ⚡ Why Liteframe Embeds?

Normal `<iframe>` embeds:

- Are **heavy** (multiple network requests, JS, CSS)
- Hurt your **Core Web Vitals** and performance scores
- Are often unnecessary until the user decides to interact

This package:

- Loads a lightweight thumbnail initially
- Defers loading the real player until **interaction**
- Offers **better performance and UX**

---

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

---

## 🛠 Build for production

To create a production-ready build:

```bash
pnpm run build
```

It will generate optimized files inside the `dist/` folder.

---

## 📚 Tech Stack

- React 18/19
- TypeScript
- Rollup
- PostCSS
- PNPM Workspaces

---

## 📝 License

MIT © [bhaveshxrawat](https://github.com/bhaveshxrawat)

---
