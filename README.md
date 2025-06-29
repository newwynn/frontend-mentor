# Frontend Mentor Components Collection

This project is a collection of solutions to [Frontend Mentor](https://www.frontendmentor.io/) challenges. Each component or mini-project is organized in its own folder under `src/pages/`.

## How to Run Locally

To quickly set up and start the project, you can use one of the provided scripts:

- **Windows:** Double-click or run `run-dev.bat`
- **macOS/Linux/Git Bash/WSL:** Run `./run-dev.sh` (make it executable with `chmod +x run-dev.sh` if needed)

These scripts will automatically install dependencies and start the development server.

Alternatively, you can run the commands manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will launch the app using Webpack Dev Server. Open the provided local URL in your browser.

You can also open any `index.html` file in `src/pages/<component-name>/` directly in your browser for static viewing.

## Project Structure
- `src/index.html` – Main landing page linking to all components
- `src/pages/` – Contains individual component projects
- `public/assets/` – Shared images and static assets

---

#### Notes
- If you encounter static asset issues, ensure your dev server is configured to serve from `dist`, `public`, and `src` directories.
- For advanced usage or deployment, configure Webpack as needed (see project memories).

---

This repository is for educational purposes and inspired by [Frontend Mentor](https://www.frontendmentor.io/) challenges. Each project is an opportunity to practice modern frontend skills.
