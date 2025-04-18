# Modern Portfolio Website

![Portfolio Preview](screenshot.png)

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio features smooth animations, interactive elements, and a clean design to showcase your skills and projects effectively.

## 🌟 Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Clean, modern design with animations and effects
- **Interactive Elements**:
  - Auto-typing animation for skills
  - Tabbed content in About section
  - Animated skill bars with progress
  - Project filtering with smooth transitions
  - Smooth scrolling navigation
- **Performance Optimized**: Fast loading and smooth animations
- **Easy to Customize**: Well-organized code structure for easy customization

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/portfolio-website)

## 🛠️ Technologies Used

- **React**: For building the user interface
- **Tailwind CSS**: For styling
- **Vite**: For fast development and building
- **React Hooks**: For state management
- **CSS Animations**: For smooth transitions and effects

## 📋 Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

## 🔧 Installation & Setup

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Start the development server**

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. **Build for production**

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

## 📂 Project Structure

\`\`\`
portfolio-website/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
\`\`\`

## 🎨 Customization

### Personal Information

Edit the content in each component to add your personal information:

- Update your name, title, and description in `HeroSection.jsx`
- Add your skills and their percentages in `SkillsSection.jsx`
- Update your projects in `ProjectsSection.jsx`
- Add your contact information in `ContactSection.jsx`

### Styling

The project uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements by editing:

- `tailwind.config.js` for theme customization
- `src/index.css` for global styles and animations

## 📱 Deployment

### GitHub Pages

1. **Install gh-pages package**

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

2. **Add these scripts to your package.json**

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`

3. **Add homepage to package.json**

\`\`\`json
"homepage": "https://your-username.github.io/portfolio-website"
\`\`\`

4. **Deploy to GitHub Pages**

\`\`\`bash
npm run deploy
\`\`\`

### Vercel or Netlify

Both platforms offer easy deployment from GitHub repositories:

1. Connect your GitHub repository to Vercel or Netlify
2. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons from [Lucide Icons](https://lucide.dev/)
- Inspiration from various portfolio designs on Dribbble and Behance

## 📧 Contact

Your Name - [ahshakib572@gmail.com](mailto:ahshakib572@gmail.com)

Project Link: [https://github.com/your-username/portfolio-website](https://github.com/ahsakib/portfolio-website)
