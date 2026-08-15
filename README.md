# Mokshith H C | AI & Machine Learning Engineer Portfolio

A premium, high-performance personal portfolio website built as a lightweight, single-page application (SPA) using **Vite**, **React**, and **TypeScript**, with styling powered by **Tailwind CSS v4** and **Framer Motion**.

---

## 🚀 Key Features

* **Multi-Page Hash Routing**: Dynamic, instant client-side transitions using URL hashes (`#/about`, `#/projects`, etc.) for seamless navigation with complete browser back/forward support.
* **Achievements & Certifications Index**: An interactive certification catalog showing 17 PDF course credentials, searchable in real-time and filterable by topic ("AI & ML", "Software & Cloud", "Academic & CS Core", "Design").
* **Selected Projects**: Showcases details and engineering case studies for projects:
  * **Research Paper Assistant**: RAG-driven semantic PDF analyzer.
  * **CareerCompass**: NLP profile recommendation system.
  * **Voice Bank Assistant**: Speech intent matcher with audio signal waveforms.
* **Minimized Visual Motion**: Optimized, fast mount-driven animations that load layout components immediately. Persistently respects system-level accessibility (`prefers-reduced-motion`).
* **Premium Design System**: Glassmorphism cards, mesh radial follower cursor glows, and micro-particles background stars canvas.

---

## 🛠️ Tech Stack

* **Core**: React 19, TypeScript 5, Vite 5
* **Styling**: Tailwind CSS v4, Vanilla CSS
* **Animations**: Framer Motion 13 (Optimized)
* **Icons**: React Icons (Fi, Si)
* **Celebration**: Canvas-Confetti

---

## 💻 Local Setup & Execution

Follow these commands to spin up the local development environment:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
*Loads the application at [http://localhost:3000/](http://localhost:3000/)*

### 3. Build for Production
To compile and package the application into static HTML/CSS/JS (ready to host on GitHub Pages, Netlify, or Vercel static):
```bash
npm run build
```
*Outputs compiled assets to the `/dist` directory.*

### 4. Preview Build Locally
To test the built production bundle locally:
```bash
npm run preview
```

---

## 🎨 Customization Guidelines

### 📸 Adding a Profile Picture
To display your picture on the Home page:
1. Save your photo in the `public/` directory.
2. Name it **`profile.jpg`**.
*The system will automatically load the image. If the file is missing, it will gracefully fallback to the animated code icon placeholder.*

### 📄 Adding Certifications
To append new certificates to the searchable index:
1. Place the PDF certificate file in the `public/certificates/` directory.
2. Open `src/components/Achievements.tsx` and append a new certificate item to the `CERTIFICATIONS` metadata array:
   ```typescript
   {
     title: "Your Certification Title",
     issuer: "Issuer Name (e.g. Coursera)",
     category: "AI & ML", // Options: "AI & ML" | "Software & Cloud" | "Academic & CS Core" | "Design"
     file: "Your_Certificate_File.pdf"
   }
   ```
