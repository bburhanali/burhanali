# Burhan's Portfolio 🚀

> **Computer Science Undergrad @ FAST-NUCES Multan | 3rd Semester | Age 20**  
> *Robotics Enthusiast & Developer of the Autonomous Line Following Robot (LFR)*

A sleek, modern, high-performance portfolio built with **Next.js (App Router)** and **Tailwind CSS**, designed specifically for deployment to **GitHub Pages**.

---

## 🌟 Highlights & Sections
- **Hero & Identity**: Badges for FAST Multan, 3rd Semester CS, and Age 20 with ambient glow aesthetics.
- **Flagship Project — Line Following Robot (LFR)**: In-depth technical breakdown with PID control loops, 5-channel IR sensor matrix, and L298N motor driver architecture.
- **Projects**: Data Structures (BST, AVL, Graph algorithms), FAST Student Management System, and Ultrasonic Radar Bot.
- **Skills Matrix**: Programming (C++, Python, JS/TS), Robotics & Hardware, Core CS, and Modern Web Development.
- **Academic Roadmap**: Progression across Semesters 1, 2, and 3 at FAST Multan.
- **Interactive Contact**: Copy email to clipboard, inquiry form, and GitHub/LinkedIn integrations.

---

## 🛠️ Local Development

To run the portfolio locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Static Export for GitHub Pages

This project is pre-configured with `output: 'export'` in `next.config.ts`.

To create the production static export:

```bash
npm run build
```

This generates an **`out/`** folder containing pure static HTML, CSS, and JS (along with `.nojekyll` to support GitHub Pages).

---

## 🚀 How to Deploy to GitHub Pages

### Method 1: Automatic Deployment with GitHub Actions (Recommended)
This repository already includes `.github/workflows/deploy.yml`.

1. Create a repository on GitHub (e.g. `burhan-portfolio` or `<your-username>.github.io`).
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Burhan's portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. GitHub Actions will automatically build and deploy your site!

### Method 2: Manual Deploy from the `out` folder
If your repository serves from a `gh-pages` branch:
```bash
npm run build
npx gh-pages -d out
```
