# 🚀 Complete Setup Guide

## Step 1: Local Setup

1. **Create project folder**:
   ```bash
   mkdir bi-analyst-portfolio
   cd bi-analyst-portfolio
   ```

2. **Copy all files** from the package into this folder

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser** to `http://localhost:5173`

## Step 2: Customize Your Content

### Personal Information
- Update `src/components/Hero.tsx` - Your name, title, introduction
- Update `src/components/About.tsx` - Professional background
- Update `src/components/Contact.tsx` - Contact details

### Professional Content
- Update `src/components/Skills.tsx` - Your technical skills
- Update `src/components/Projects.tsx` - Your portfolio projects
- Update `src/components/Experience.tsx` - Work history and education

### Branding
- Update `src/components/Header.tsx` - Site title
- Update `index.html` - Page title and meta tags

## Step 3: GitHub Pages Deployment

1. **Create GitHub repository**:
   - Go to GitHub.com
   - Click "New repository"
   - Name it (e.g., "bi-analyst-portfolio")
   - Make it public
   - Don't initialize with README

2. **Update configuration**:
   - In `vite.config.ts`, change `base: '/your-repo-name/'` to your actual repo name

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO-NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Click "Save"

5. **Wait for deployment** (usually 2-5 minutes)

Your site will be live at: `https://USERNAME.github.io/REPO-NAME/`

## Step 4: Making Updates

After initial setup, to update your site:

1. **Make changes** to your code
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. **GitHub Actions** will automatically rebuild and deploy

## 🛠️ Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Manual deploy to GitHub Pages
- `npm run lint` - Check code quality

## 🎨 Customization Tips

### Colors
- Primary: `blue-600` to `blue-900`
- Accent: `cyan-400` to `cyan-600`
- Change in Tailwind classes throughout components

### Images
- Replace placeholder images with your own
- Use high-quality images (1200x800px recommended)
- Optimize images for web (use tools like TinyPNG)

### Animations
- Modify transition durations in component classes
- Add new animations using Tailwind's animation utilities

## 📞 Need Help?

Check the README.md file for detailed documentation and troubleshooting tips.

Happy coding! 🚀