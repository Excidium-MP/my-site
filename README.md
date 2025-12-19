# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a clean design with dark/light mode toggle and optimized for GitHub Pages deployment.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 18** - Modern React with hooks
- 📘 **TypeScript** - Type-safe code
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark/Light Mode** - Toggle with localStorage persistence
- 📱 **Mobile-Friendly** - Fully responsive design
- 🚀 **GitHub Pages Ready** - Pre-configured for deployment

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components (Home, etc.)
│   ├── assets/         # Images, icons, etc.
│   ├── data/           # Data files and constants
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

## Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production (outputs to `dist/`)
- **`npm run preview`** - Preview production build locally
- **`npm run deploy`** - Deploy to GitHub Pages

## Deployment to GitHub Pages

### Initial Setup

1. **Update package.json**: Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"
```

2. **Create GitHub repository** named `portfolio`

3. **Push your code**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Deploy

Simply run:
```bash
npm run deploy
```

This will:
1. Build your project
2. Push the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve your site

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/` within a few minutes!

## Customization

### Dark Mode

The dark mode toggle is in the top-right corner. The preference is saved in localStorage and persists across sessions.

### Tailwind Configuration

Customize colors, fonts, and more in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      // Add custom colors
    },
  },
}
```

### Adding Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`:
```tsx
<Route path="/about" element={<About />} />
```

## Technologies Used

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Routing

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you encounter any issues, please check:
- Node.js version is 18 or higher
- All dependencies are installed (`npm install`)
- GitHub Pages is enabled in repository settings

For deployment issues, verify that the `homepage` field in `package.json` matches your GitHub username and repository name.
