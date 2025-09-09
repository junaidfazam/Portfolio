# BI Analyst Personal Portfolio

A modern, responsive portfolio website for Business Intelligence and Reporting Analysts, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Professional Design**: Clean, modern interface with data-focused aesthetics
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects
- **Skills Showcase**: Comprehensive display of BI tools and technologies
- **Project Portfolio**: Detailed case studies with measurable business impact
- **Experience Timeline**: Professional journey with achievements
- **Contact Form**: Functional contact section for inquiries

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/your-repo-name/`

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

## ⚙️ Configuration

### Setting up for your repository

1. **Update the base URL** in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-actual-repo-name/',
     // ... rest of config
   });
   ```

2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

### Customization

- **Personal Information**: Update content in component files
- **Styling**: Modify Tailwind classes or add custom CSS
- **Images**: Replace placeholder images with your own
- **Contact Info**: Update contact details in the Contact component

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Project portfolio
│   ├── Experience.tsx  # Experience timeline
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization Guide

### Colors
The project uses a professional blue/cyan color scheme. To customize:
- Primary: `blue-600` to `blue-900`
- Accent: `cyan-400` to `cyan-600`
- Neutral: `gray-50` to `gray-900`

### Content
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Professional background
- `src/components/Skills.tsx` - Technical skills and certifications
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Experience.tsx` - Work experience and education
- `src/components/Contact.tsx` - Contact information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/your-repo-name/issues).

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Built with ❤️ for BI professionals**