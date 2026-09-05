# Frontend Intern Assessment

A pixel-perfect, responsive implementation of the provided Figma design using **Next.js** and **Tailwind CSS**.

## 🔗 Links

- **Live Demo:** https://tobams.vercel.app
- **GitHub Repository:** https://github.com/jexzyjames/tobams-repo
- **Figma Design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

## 🛠️ Tech Stack

- Next.js — App Router
- React
- TypeScript
- Tailwind CSS
- Next/Image
- Next/Font
- Vercel

## ✨ Features

- Pixel-focused implementation of the Figma design
- Fully responsive layout
- Mobile, tablet, and desktop support
- Reusable React components
- Semantic HTML
- Accessible buttons and links
- Optimized images with `next/image`
- Optimized fonts with `next/font`
- Tailwind CSS responsive utilities

## 📱 Responsive Design

The page is optimized for:

- **425px** — Mobile
- **768px** — Tablet
- **1280px+** — Desktop

Tailwind responsive prefixes such as `sm:`, `md:`, and `lg:` are used for responsive behavior.

## 📁 Project Structure

```text
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Footer.tsx
│
├── public/
│   └── images/
│
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md


## 🎨 Design Decisions

- The Figma design was used as the primary source of truth for layout, spacing, typography, colors, and visual hierarchy.
- The page was divided into reusable components to keep the code clean and maintainable.
- Tailwind CSS utility classes were used for styling.
- Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) were used for responsive layouts.
- A mobile-first approach was used to support different screen sizes.
- Semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` were used where appropriate.
- Images are optimized using `next/image`.
- Fonts are loaded using `next/font`.
- Native buttons and links are used for keyboard accessibility.
- No external UI libraries or CSS frameworks were used.

### Intentional Deviations

No intentional deviations were made from the provided Figma design.

Minor visual differences may occur due to browser and font rendering differences.

## 📱 Responsive Design

The page was implemented and tested for the required screen sizes:

- **425px** — Mobile
- **768px** — Tablet
- **1280px+** — Desktop

Tailwind's responsive utilities were used instead of custom media queries.

## ♿ Accessibility

Accessibility was considered throughout the implementation:

- Semantic HTML elements
- Meaningful `alt` text for images
- Keyboard-accessible buttons and links
- Visible focus states
- Logical heading structure
- Accessible navigation
- Native HTML controls for interactive elements

## ⚡ Performance

The project takes advantage of Next.js performance features:

- `next/image` for image optimization
- `next/font` for optimized font loading
- Server Components where appropriate
- Minimal client-side JavaScript
- Tailwind CSS utility classes

## 🤖 AI Disclosure

AI tools were used during development for assistance with:

- Code structure and implementation
- Debugging
- Problem solving
- Documentation

All generated suggestions were reviewed, modified, and adapted to fit the project requirements and the provided Figma design.

## 🚀 Deployment

The application is deployed using **Vercel**.

### Live Demo

https://tobams-repo.vercel.app

### GitHub Repository

https://github.com/jexzyjames/tobams-repo

The repository is publicly accessible and the production deployment is available without authentication.

## 📝 Known Issues

No known issues at the time of submission.

Minor differences may occur between the Figma design and browser rendering due to differences in font rendering and browser engines.

## 📋 Assessment Requirements

- [x] Next.js with App Router
- [x] Tailwind CSS
- [x] Responsive design
- [x] Reusable components
- [x] Semantic HTML
- [x] Accessibility
- [x] Optimized images
- [x] Optimized fonts
- [x] Public GitHub repository
- [x] Vercel deployment
- [x] Figma design referenced
- [x] Design decisions documented
- [x] AI usage disclosed

