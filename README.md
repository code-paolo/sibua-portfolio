# Paolo G. Sibua - Portfolio

A modern, professional portfolio website showcasing my skills, projects, and experience as a Full Stack Web Developer.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations and interactions
- **Dark/Light Mode**: Seamless theme toggle with system preference support
- **Bento Grid Layout**: Organized content using modern bento-style layouts
- **Smooth Scrolling**: Implemented with Lenis for buttery-smooth scroll experience
- **Scroll Animations**: AOS (Animate On Scroll) library with fade, zoom, and slide effects
- **Active Navigation**: Dynamic navigation with animated underlines indicating current section
- **Professional Hero**: Full-size professional image with elegant hover effects
- **Responsive**: Fully responsive design that looks great on all devices
- **Accessible**: Built with accessibility best practices and semantic HTML
- **Performance Optimized**: Fast load times and optimized images
- **ShadCN UI**: Leveraging beautiful, customizable UI components

## 🚀 Sections

1. **Hero Section** - Eye-catching introduction with full-size professional image
2. **About Me** - Bento grid layout showcasing skills, stats, and background
3. **Projects** - Featured projects with detailed descriptions and live demos
4. **Experience** - Professional experience with measurable achievements
5. **Contact** - Multiple ways to connect with interactive contact form

## 🛠️ Technologies

- **Framework**: Next.js 16.0 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.0
- **UI Components**: ShadCN UI
- **Theme Management**: next-themes for dark/light mode
- **Animations**: AOS (Animate On Scroll) + Custom CSS animations + Lenis smooth scrolling
- **Icons**: SVG icons (inline)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/paolo-sibua/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
sibua-portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Home page
├── components/
│   ├── layout/
│   │   ├── header.tsx        # Navigation header with active states
│   │   └── footer.tsx        # Footer with social links
│   ├── providers/
│   │   └── lenis-provider.tsx # Smooth scrolling provider
│   ├── sections/
│   │   ├── hero-section.tsx      # Hero section
│   │   ├── about-section.tsx     # About with bento layout
│   │   ├── projects-section.tsx  # Featured projects
│   │   ├── experience-section.tsx # Work experience
│   │   └── contact-section.tsx   # Contact information & form
│   └── ui/                   # ShadCN UI components
├── public/
│   └── hero-img.webp         # Profile image
└── package.json
```

## 🎨 Design Principles

- **Confident Language**: Professional presentation without "aspiring" terminology
- **Professional Photography**: Full-size hero image with proper aspect ratio and elegant effects
- **Dark Mode Support**: Thoughtful color schemes for both light and dark themes
- **Scroll Animations**: Engaging reveal animations as content enters viewport
- **Hover States**: Interactive elements with smooth hover animations
- **Active Indicators**: Visual feedback showing current section in navigation
- **Bento Layouts**: Modern, organized content presentation
- **Smooth Transitions**: All interactions feel polished and professional
- **Consistent Spacing**: Proper use of whitespace for readability
- **Performance First**: Optimized for speed and user experience

## 🔧 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/hero-section.tsx`
2. **About Section**: Modify `components/sections/about-section.tsx`
3. **Projects**: Update project data in `components/sections/projects-section.tsx`
4. **Experience**: Edit experience data in `components/sections/experience-section.tsx`
5. **Contact Info**: Update links in `components/sections/contact-section.tsx` and `components/layout/footer.tsx`

### Change Colors

Modify the color scheme in `app/globals.css` under the `:root` and `.dark` selectors.

### Replace Image

Replace `public/hero-img.webp` with your own professional photo.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Digital Ocean

## 📝 Best Practices Implemented

- ✅ Kebab-case for file names
- ✅ camelCase for variables
- ✅ Single Responsibility Principle
- ✅ Component abstraction and reusability
- ✅ TypeScript for type safety
- ✅ Semantic HTML
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Accessibility standards

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **Email**: paolo.sibua@example.com
- **LinkedIn**: [linkedin.com/in/paolo-sibua](https://linkedin.com/in/paolo-sibua)
- **GitHub**: [github.com/paolo-sibua](https://github.com/paolo-sibua)

---

Built with ❤️ by Paolo G. Sibua
