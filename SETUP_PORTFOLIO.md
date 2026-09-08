# Portfolio Site - Complete Setup Guide

This is the **production-ready React portfolio** that properly displays all 8 of your projects.

## 🚀 Setup (15 minutes)

### Step 1: Clone Your Portfolio Repo
```bash
cd ~/projects
git clone https://github.com/omarja12/omarja12.github.io.git
cd omarja12.github.io
```

### Step 2: Create React App with Vite (Fastest)
```bash
npm create vite@latest . -- --template react
```

When prompted: press 'y' to remove existing files.

### Step 3: Install Dependencies
```bash
npm install
npm install lucide-react tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 4: Setup Tailwind CSS

Create `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
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

### Step 5: Add Portfolio Component

Copy the new portfolio component to your project:
```bash
# Download portfolio_site_v2.jsx and copy it:
cp portfolio_site_v2.jsx src/components/Portfolio.jsx
mkdir -p src/components
```

### Step 6: Update App.jsx

Replace your `src/App.jsx` with:
```jsx
import Portfolio from './components/Portfolio'

export default function App() {
  return <Portfolio />
}
```

### Step 7: Update package.json

Add this to your `package.json`:
```json
{
  "homepage": "https://omarja12.github.io",
  "devDependencies": {
    "gh-pages": "^6.1.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Install gh-pages:
```bash
npm install -D gh-pages
```

---

## 🧪 Test Locally

Run the development server:
```bash
npm run dev
```

Visit: `http://localhost:5173`

You should see:
- ✅ All 8 projects displayed
- ✅ Category filters working
- ✅ GitHub links clickable
- ✅ Email contact link working
- ✅ Mobile responsive

---

## 🚀 Deploy to GitHub Pages

When everything looks good:
```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Push to `gh-pages` branch
3. Deploy to https://omarja12.github.io

**Wait 1-2 minutes** for GitHub to process.

---

## ✅ Verify Deployment

Check that your site is live:
1. Visit: https://omarja12.github.io
2. Click each GitHub link (should open repos)
3. Click "Email Me" (should open your email)
4. Test category filters
5. Check mobile view (responsive)

---

## 📝 Update Projects

To add or change projects, edit `src/components/Portfolio.jsx`:

Find the `projects` array and update project details:
```jsx
{
  id: 1,
  title: 'Your Project Title',
  category: 'quant',  // or ml, nlp, cv, optimization, blockchain
  description: 'What it does',
  highlights: [
    'Key result 1',
    'Key result 2',
    'Key result 3'
  ],
  tech: ['Tech1', 'Tech2', 'Tech3'],
  link: 'https://github.com/omarja12/your-repo',
  image: '📊'  // Choose emoji
}
```

After updating:
```bash
npm run deploy
```

Site updates in 1-2 minutes!

---

## 🎨 Customization

### Change Email
Find this line and update:
```jsx
<a href="mailto:jarir.omar@hotmail.fr">
```

### Change Colors
Replace `blue-600` with any Tailwind color:
- `blue-600`, `green-600`, `purple-600`, `red-600`, etc.

### Change Emojis
In each project, change the `image` field:
```jsx
image: '📈'  // Change to any emoji
```

---

## 🔧 Troubleshooting

### Build error after changes?
```bash
npm run build
```

### Site not updating?
```bash
git pull origin main
npm install
npm run deploy
```

### Want to test changes before deploying?
```bash
npm run dev
# Test at http://localhost:5173
# Then when ready:
npm run deploy
```

### Delete gh-pages branch and start fresh?
```bash
git branch -D gh-pages
npm run deploy
```

---

## 📋 File Structure

```
omarja12.github.io/
├── src/
│   ├── components/
│   │   └── Portfolio.jsx      (Your main site - update projects here)
│   ├── App.jsx                (Keep as-is)
│   ├── index.css              (Tailwind - keep as-is)
│   └── main.jsx               (Keep as-is)
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json               (Already configured)
└── README.md
```

---

## ✨ What's Included

✅ **8 Projects** - All your repos with descriptions, highlights, and links  
✅ **Category Filters** - Quant, ML, NLP, CV, Optimization, Blockchain  
✅ **Skills Section** - Shows your competencies  
✅ **Contact Section** - Email link ready to go  
✅ **Stats Display** - 12.8% CAGR, Sharpe ratio, etc.  
✅ **Mobile Responsive** - Works on phone/tablet/desktop  
✅ **Fast Load** - Optimized Vite + Tailwind  

---

## 🎯 Next Steps

1. **Follow this guide** (15 mins)
2. **Test locally** (5 mins)
3. **Deploy** (1 command)
4. **You're live** at https://omarja12.github.io ✅

---

## 💡 Pro Tips

- Test on mobile: Use your phone or DevTools (F12 → Toggle device toolbar)
- Keep projects updated: Remove old projects, add new ones
- Update GitHub repo descriptions to match portfolio text
- Pin the Momentum-Backtest repo for visibility
- Share the portfolio link in all your communications

---

**That's it! You now have a professional portfolio site.** 🚀

Questions? Check the package.json scripts or rerun `npm install` if anything breaks.
