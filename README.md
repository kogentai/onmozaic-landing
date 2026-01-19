# Mozaic Landing Page

A modern, dark-themed landing page for Mozaic - The Trusted Data Engineer. Built with React + Vite and deployed to GitHub Pages.

## 🚀 Features

- **Dark Theme Design**: Modern, minimalist design with dark backgrounds and white text
- **Responsive Layout**: Mobile-first design that works on all devices
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Design System**: Consistent styling with CSS variables and design tokens
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions
- **Custom Domain Support**: Configured for onmozaic.com

## 📁 Project Structure

```
onmozaic-landing/
├── public/
│   ├── CNAME              # Custom domain configuration
│   ├── logo.png           # Mozaic logo
│   └── favicon-32x32.png  # Favicon
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── styles/            # Global styles and design system
│   │   ├── index.css
│   │   └── design-system.css
│   ├── design-system/     # Design tokens
│   │   └── tokens.js
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
├── vite.config.js
└── package.json
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd onmozaic-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"

2. **Custom Domain Configuration**:
   - The `public/CNAME` file is already configured for `onmozaic.com`
   - In your domain registrar, add a CNAME record:
     - Name: `@` (or `www` if you want www.onmozaic.com)
     - Value: `your-username.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Automatic Deployment**:
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - The workflow is configured in `.github/workflows/deploy.yml`

4. **Enable HTTPS**:
   - After DNS propagates (can take up to 24 hours), enable "Enforce HTTPS" in GitHub Pages settings

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Colors**: Dark theme with blue accents
- **Typography**: Modern sans-serif font stack
- **Spacing**: Consistent 4px-based spacing scale
- **Components**: Reusable button and card styles

All design tokens are defined in:
- `src/design-system/tokens.js` (JavaScript constants)
- `src/styles/design-system.css` (CSS variables)

## 📝 Content

The landing page includes:

- **Header**: Navigation with logo and CTA
- **Hero**: Main headline, tagline, and call-to-action buttons
- **Features**: Three key differentiators (Trust Loop, Cost Manager, Org Memory)
- **About**: Product description and value propositions
- **Footer**: Links, newsletter signup, and copyright

## 🔧 Configuration

### Vite Configuration

The `vite.config.js` is configured for:
- React plugin
- Custom domain base path (`/`)
- Build output directory (`dist`)

### GitHub Actions

The deployment workflow:
- Builds on push to `main` branch
- Uses Node.js 18
- Builds the React app
- Deploys to GitHub Pages

## 📄 License

Copyright © 2025 Mozaic. All rights reserved.

## 🤝 Contributing

This is a landing page project. For contributions, please follow the existing code style and design system.
