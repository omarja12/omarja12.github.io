# Portfolio Site Deployment Guide

Deploy your React portfolio to **https://omarja12.github.io/** in 15 minutes.

---

## Prerequisites

- Node.js 16+ installed
- Git installed and configured
- GitHub account with `omarja12.github.io` repo

---

## Step 1: Create GitHub Pages Repository

If you haven't already:

```bash
# On GitHub, create a new public repo named: omarja12.github.io
# Clone it locally
git clone https://github.com/omarja12/omarja12.github.io.git
cd omarja12.github.io
```

---

## Step 2: Set Up React Project

### Option A: Using Create React App (Recommended)

```bash
npx create-react-app .
# or if directory not empty:
npx create-react-app portfolio --template cra-template
cd portfolio
```

### Option B: Using Vite (Faster)

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

---

## Step 3: Add Portfolio Component

Copy the provided `portfolio_site.jsx` to your project:

```bash
# In your React project root:
cp ../portfolio_site.jsx src/components/Portfolio.jsx
```

Update `src/App.jsx`:

```jsx
import Portfolio from './components/Portfolio';

function App() {
  return <Portfolio />;
}

export default App;
```

Make sure Tailwind CSS is installed:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Step 4: Install Dependencies

```bash
npm install lucide-react  # For icons
npm install -D gh-pages   # For easy GitHub Pages deployment
```

---

## Step 5: Update package.json

Add these lines to your `package.json`:

```json
{
  "name": "portfolio",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://omarja12.github.io",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^latest"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0",
    "tailwindcss": "^3.0.0",
    "postcss": "^latest",
    "autoprefixer": "^latest"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

If using Create React App:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

---

## Step 6: Test Locally

```bash
npm run dev    # For Vite
# or
npm start      # For Create React App
```

Visit `http://localhost:3000` (or 5173 for Vite) and verify the site looks correct.

---

## Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Push it to the `gh-pages` branch
3. Publish at `https://omarja12.github.io`

**Wait 1-2 minutes** for GitHub to deploy.

---

## Step 8: Enable GitHub Pages (if needed)

1. Go to `https://github.com/omarja12/omarja12.github.io/settings/pages`
2. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Save

---

## Customization

### Update Your Information

Edit `portfolio_site.jsx`:

```jsx
// Update hero section
<h1>Your Name</h1>
<p>Your tagline</p>

// Add your projects (edit projects array)
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: '...',
    github: 'https://github.com/yourusername/project'
  }
]

// Update contact email
<a href="mailto:your@email.com">
```

### Update Links

In the navigation and footer, change:
- `https://github.com/omarja12` → your GitHub
- `https://linkedin.com/in/omarja12` → your LinkedIn
- Email links

### Add Your Projects

Modify the `projects` array to include your repos:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'quant',  // or 'ml', 'optimization', etc.
    description: 'What does it do?',
    metrics: {
      metric1: 'value1',
      metric2: 'value2'
    },
    tags: ['Tag1', 'Tag2', 'Tag3'],
    github: 'https://github.com/yourusername/repo',
    featured: true,
    color: 'from-blue-600 to-cyan-600'
  }
]
```

### Change Colors

All Tailwind colors are customizable. Key accent colors:
- `from-blue-600 to-cyan-600` → Change to your preferred gradient
- Update the main blue accent (`text-blue-400`, `bg-blue-600`) throughout

---

## Troubleshooting

### Site not updating after deploy?

```bash
# Clear cache and rebuild
rm -rf build node_modules
npm install
npm run deploy
```

### Custom domain?

Add a `CNAME` file to `public/`:

```
yourdomain.com
```

Then configure your domain registrar DNS to point to GitHub Pages IPs.

### HTTPS not working?

GitHub Pages automatically handles HTTPS. If it's not enabled:

1. Go to repo settings → Pages
2. Scroll to HTTPS
3. Enable "Enforce HTTPS"

### Favicon not showing?

Add to `public/index.html` `<head>`:

```html
<link rel="icon" type="image/x-icon" href="%PUBLIC_URL%/favicon.ico" />
```

---

## Making Updates

After initial deployment, updating is easy:

```bash
# Make changes to src/
# Then:
git add .
git commit -m "Update portfolio"
npm run deploy
```

The updated site will be live in 1-2 minutes.

---

## Analytics (Optional)

Add Google Analytics or Vercel Analytics:

```jsx
// In App.jsx or Portfolio component
useEffect(() => {
  window.gtag?.('config', 'G-YOUR_ID');
}, []);
```

Or use Vercel Web Analytics (simpler).

---

## Performance Tips

### Build optimization already included:
- ✅ Code splitting (React automatic)
- ✅ Tree shaking (Vite/CRA default)
- ✅ Minification (production build)
- ✅ CSS optimization (Tailwind PurgeCSS)

### To verify performance:

```bash
npm run build
# Check the build/ or dist/ folder size
# Aim for <100KB gzipped
```

---

## Next Steps

1. **Add more projects** — Update the projects array with all your repos
2. **Write project READMEs** — Use the template provided (`README_TEMPLATE.md`)
3. **Customize colors & text** — Make it uniquely yours
4. **Add social links** — LinkedIn, Twitter, email
5. **Monitor engagement** — Track clicks to your GitHub/LinkedIn

---

## Support & Resources

- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com/docs
- **GitHub Pages Docs:** https://pages.github.com
- **Vite Docs:** https://vitejs.dev

---

## Checklists

### Before First Deploy
- [ ] Component added and imported correctly
- [ ] Tailwind CSS configured
- [ ] `package.json` has homepage and deploy scripts
- [ ] `gh-pages` package installed
- [ ] Tested locally (`npm run dev`)
- [ ] GitHub Pages settings configured

### Before Going Live
- [ ] All links updated (GitHub, LinkedIn, email)
- [ ] Projects list complete and accurate
- [ ] Colors and branding match your preference
- [ ] Mobile responsive (test on phone)
- [ ] No broken links
- [ ] Favicon added (if desired)

### After Deployment
- [ ] Site accessible at https://omarja12.github.io
- [ ] All links working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Images loading correctly
- [ ] No console errors

---

**That's it!** Your portfolio is now live and ready to impress potential clients and employers. 🚀
