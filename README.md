
# Doodax Markdown Previewer 🌌

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Doodax** is a professional-grade, real-time Markdown editor and previewer built for developers and content creators who value aesthetics and performance.

<div align="center">
  <h2><a href="https://doodax.com/tools/markdown-previewer/index.html" target="_blank">🚀 LIVE DEMO</a></h2>
  <p><em>Click the link above to experience the application in a new tab.</em></p>
</div>

## 📖 Overview

Doodax provides a seamless dual-pane interface where you can write Markdown syntax on the left and see it instantly rendered as styled HTML on the right. Wrapped in a stunning, animated galaxy theme, it transforms documentation writing into an immersive experience.

### Key Features

*   **⚡ Real-Time Rendering:** Instant conversion using the `marked.js` engine.
*   **🌌 Immersive UI:** A custom-built, CSS-animated nebula background.
*   **🔒 Privacy Focused:** 100% client-side processing. No data is sent to servers.
*   **🛠️ Developer Tools:** Syntax highlighting, HTML export, and clipboard integration.
*   **📱 Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.

## 📂 Project Structure

```bash
doodax-markdown-previewer/
├── components/          # React functional components
│   ├── MarkdownPreviewer.tsx  # Main editor logic
│   ├── ThemeLayout.tsx        # Layout, Footer, Modals
│   ├── SeoArticle.tsx         # SEO content component
│   └── Modal.tsx              # Reusable modal UI
├── public/              # Static assets
│   ├── favicon.svg      # App icon
│   ├── robots.txt       # Crawler directives
│   └── sitemap.xml      # SEO Sitemap
├── types.ts             # TypeScript definitions
├── App.tsx              # Application entry point
├── index.tsx            # DOM mounting
├── index.html           # Main HTML document
└── README.md            # Project documentation
```

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hsinidev/cosmic-markdown-previewer.git
    cd cosmic-markdown-previewer
    ```

2.  **Run the application**
    Since this is a client-side React app using ES modules, you can serve it with any static file server.
    ```bash
    npx serve .
    # OR
    python -m http.server
    ```

3.  **Open in Browser**
    Navigate to `http://localhost:3000` (or the port shown in your terminal).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📧 Contact

**HSINI MOHAMED**
*   Website: [doodax.com](https://doodax.com)
*   GitHub: [@hsinidev](https://github.com/hsinidev)
*   Email: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---
© 2023 Doodax Markdown Previewer. MIT License.
