# Portfolio Site - Quick Update Guide

Your React portfolio is now **live and working**! 🎉

This guide shows how to easily add or update projects as you organize them.

---

## 📝 Adding/Updating Projects

### The Easy Way (5 minutes)

1. Open `portfolio_site.jsx`
2. Find the `projects` array (around line 30-40)
3. Add or modify a project object

### Example: Update Pneumonia Project

Find this (around line 105):
```jsx
{
  id: 5,
  title: 'Pneumonia Detection from Chest X-Rays',
  category: 'cv',
  description: 'Deep learning CNN model for automated pneumonia classification from chest radiographs. Transfer learning with medical imaging.',
  metrics: {
    accuracy: '95%+',
    model: 'CNN/ResNet',
    dataset: '5000+ Images'
  },
  tags: ['Computer Vision', 'Deep Learning', 'Medical Imaging', 'TensorFlow'],
  github: 'https://github.com/omarja12/Pneumonia-Detection',
  featured: true,
  color: 'from-red-600 to-pink-600'
}
```

Update to your actual project:
```jsx
{
  id: 5,
  title: 'Your Pneumonia Project Title',
  category: 'cv',
  description: 'Your description of what you did',
  metrics: {
    accuracy: '96%',  // Your actual metric
    model: 'ResNet50',  // Your actual model
    dataset: '12000+ Images'  // Your actual dataset size
  },
  tags: ['Your', 'Tags', 'Here'],
  github: 'https://github.com/omarja12/YOUR-ACTUAL-REPO-NAME',
  featured: true,
  color: 'from-red-600 to-pink-600'  // Keep or change color
}
```

---

## 🏷️ Project Categories

Use these values for `category`:

| Category | Display Name | Use When |
|----------|-------------|----------|
| `'quant'` | Quant Finance | Financial strategies, backtesting, trading |
| `'ml'` | Machine Learning | Clustering, regression, general ML |
| `'nlp'` | NLP | Text classification, sentiment, transformers |
| `'cv'` | Computer Vision | Images, CNN, object detection, medical imaging |
| `'optimization'` | Optimization | Algorithms, TSP, genetic algorithms |
| `'blockchain'` | Blockchain | Smart contracts, Solidity, Web3 |

---

## 🎨 Colors (Gradients)

Pick a color gradient for your project card. Options:

```
'from-blue-600 to-cyan-600'        # Blue/Cyan (default)
'from-emerald-600 to-teal-600'     # Green/Teal
'from-purple-600 to-pink-600'      # Purple/Pink
'from-orange-600 to-red-600'       # Orange/Red
'from-yellow-600 to-orange-600'    # Yellow/Orange
'from-indigo-600 to-blue-600'      # Indigo/Blue
'from-red-600 to-pink-600'         # Red/Pink (for medical)
'from-green-600 to-emerald-600'    # Green/Emerald (for NLP)
```

---

## ✅ Template for Adding a New Project

Copy this template and fill in your details:

```jsx
{
  id: 9,                           // Use next available number
  title: 'Your Project Title',
  category: 'ml',                  // quant, ml, nlp, cv, optimization, blockchain
  description: 'One sentence describing what it does and the impact.',
  metrics: {
    metric1: 'value1',            // e.g., accuracy: '92%'
    metric2: 'value2',            // e.g., dataset: '50000 samples'
    metric3: 'value3'             // e.g., model: 'BERT-base'
  },
  tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],  // 3-5 relevant tags
  github: 'https://github.com/omarja12/YOUR-REPO-NAME',
  featured: true,                 // true for showcase, false for secondary
  color: 'from-blue-600 to-cyan-600'  // Pick a gradient
}
```

---

## 📍 Current Projects (8 Total)

Your portfolio already has these projects with placeholders:

1. **Equity Momentum Strategy** (Quant) ✅ Complete
2. **Bootstrap Yield Curve** (Quant) ✅ Complete
3. **Nelson-Siegel-Svensson** (Quant) ✅ Complete
4. **Insurance Clustering** (ML) ✅ Complete
5. **Pneumonia Detection** (CV) ⚠️ Needs GitHub link update
6. **Genetic Algorithm TSP** (Optimization) ✅ Complete
7. **NLP Sentiment Analysis** (NLP) ⚠️ Needs details
8. **Fintech Smart Contracts** (Blockchain) ✅ Complete

**Action:** Update the links and descriptions for projects 5 & 7 with your actual repo info.

---

## 🔗 Your NLP Projects

When you're ready, update project ID 7 with your actual NLP repo:

```jsx
{
  id: 7,
  title: 'Your NLP Project Title',  // e.g., 'Text Classification with BERT'
  category: 'nlp',
  description: 'Your description',   // e.g., 'Fine-tuned BERT for article classification'
  metrics: {
    accuracy: 'XX%',                 // Your actual accuracy
    model: 'BERT/RoBERTa/etc',      // Your model
    dataset: 'XXXX samples'          // Dataset size
  },
  tags: ['NLP', 'BERT', 'Classification', 'Python'],
  github: 'https://github.com/omarja12/YOUR-NLP-REPO',
  featured: true,
  color: 'from-green-600 to-emerald-600'
}
```

---

## 🩺 Your Pneumonia Project

Update project ID 5 with your actual pneumonia detection repo:

```jsx
{
  id: 5,
  title: 'Pneumonia Detection using CNN',  // Or your title
  category: 'cv',
  description: 'Your description',  // e.g., 'Chest X-ray classification using transfer learning'
  metrics: {
    accuracy: 'XX%',               // Your actual accuracy
    model: 'ResNet50/EfficientNet', // Your model
    dataset: 'XXXX images'         // Dataset size
  },
  tags: ['Computer Vision', 'Medical Imaging', 'Deep Learning', 'TensorFlow'],
  github: 'https://github.com/omarja12/YOUR-PNEUMONIA-REPO',
  featured: true,
  color: 'from-red-600 to-pink-600'
}
```

---

## 🚀 Deploy After Updates

After editing `portfolio_site.jsx`:

```bash
git add src/components/Portfolio.jsx
git commit -m "Update projects: add NLP and pneumonia details"
npm run deploy
```

Site updates in 1-2 minutes! ✅

---

## 📊 Project Metrics Examples

### For Quant Finance
```
CAGR: '12.8%'
Sharpe Ratio: '1.42'
Max Drawdown: '-18.3%'
Win Rate: '58%'
```

### For Machine Learning
```
Accuracy: '94.2%'
F1-Score: '0.91'
Precision: '0.93'
Recall: '0.89'
```

### For NLP
```
Accuracy: '88%'
Model: 'BERT-base'
Dataset: '50k samples'
F1: '0.87'
```

### For Computer Vision
```
Accuracy: '96%'
Model: 'ResNet50'
Dataset: '10k images'
Precision: '0.97'
```

---

## 💡 Pro Tips

1. **Keep metrics consistent** — Use the same format across all projects (e.g., always show accuracy as 'X%')
2. **Use 3-4 metrics** — Too many looks cluttered; too few seems incomplete
3. **Write descriptions tight** — 1-2 sentences max
4. **Link to GitHub** — Always provide the actual repo
5. **Use featured=true** for your 5-8 best projects, false for others
6. **Order by importance** — Momentum backtest is first because it's your flagship

---

## ❓ Common Questions

**Q: Can I add more than 8 projects?**
Yes! Just increment the ID and add to the array. The site will show all.

**Q: How do I hide a project?**
Change `featured: false` to hide it from the default view (still accessible via category filter).

**Q: Can I reorder projects?**
Yes! Reorder the objects in the array. They display in array order.

**Q: Can I change colors?**
Yes! Pick any Tailwind gradient from the color list above.

**Q: Will changes break the site?**
No — as long as you keep the JSON structure correct. Just make sure:
- Object braces `{}` are balanced
- Strings use quotes `'text'`
- Arrays use brackets `[]`
- Commas separate fields properly

---

## 🔍 Verify Changes

After updating, check:

1. **Syntax** — No red squiggles in your editor
2. **GitHub links** — Click them, they should work
3. **Metrics** — Match your actual project results
4. **Category** — Shows in correct filter tab

---

## 📱 Testing Locally

Before deploying:

```bash
npm run dev
```

Visit `http://localhost:5173` (or 3000), click around, verify everything looks right.

---

**You're all set!** Your portfolio is now **flexible and easy to update**. Add your NLP and pneumonia projects whenever you're ready, and keep adding more as you ship new work. 🚀

---

Last updated: September 2024
