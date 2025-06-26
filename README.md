# Frontend Mentor Projects

This repository contains multiple solutions to challenges from [Frontend Mentor](https://www.frontendmentor.io/). Each project is organized in its own directory and includes its own assets, scripts, and documentation as needed.

## Included Projects
- [Interactive Rating Component](#interactive-rating-component)
- (Add more projects here as you complete them)

---

## Interactive Rating Component
A basic interactive rating component project, inspired by Frontend Mentor challenges.

### Features
- Allows users to select a rating (typically 1–5)
- Submits the selected rating and displays a thank you message
- Responsive design for both desktop and mobile

### Project Structure
- `src/pages/interactive-rating-component/index.html` – Main HTML file for the component
- `src/styles/interactive-rating-component/style.css` – Styles for the component
- `src/index.js` – JavaScript logic for interactivity
- `public/` – (if present) Contains static assets like images
- `dist/` – Webpack output directory

### Getting Started

#### Prerequisites
- Node.js and npm installed

#### Installation
1. Clone this repository or download the project files.
2. Install dependencies (if package.json is present):
   ```bash
   npm install
   ```
3. Start the development server (if using Webpack):
   ```bash
   npm run dev
   ```
   or open `index.html` directly in your browser for basic usage.

#### Usage
- Select a rating by clicking one of the rating buttons.
- Click the submit button to see the thank you state.

#### Notes
- If you encounter static asset issues, ensure your dev server is configured to serve from `dist`, `public`, and `src` directories.
- For advanced usage or deployment, configure Webpack as needed (see project memories).

---

This repository is for educational purposes and inspired by [Frontend Mentor](https://www.frontendmentor.io/) challenges. Each project is an opportunity to practice modern frontend skills.
