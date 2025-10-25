# 🌟 Walid Adebayo - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations, dark mode support, and a clean, professional design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

- ⚡ **Next.js 16** - Latest version with App Router and Server Components
- 🎨 **Tailwind CSS 4** - Modern utility-first CSS framework
- 🌓 **Dark Mode** - Seamless theme switching with next-themes
- ✨ **Framer Motion** - Smooth animations and transitions
- 📱 **Fully Responsive** - Optimized for all devices
- 🎯 **TypeScript** - Type-safe code throughout
- 📧 **Contact Form** - Integrated with Formspree
- 🎭 **UI Components** - Built with Radix UI primitives
- 🎪 **Interactive Projects** - Filterable project showcase
- 📄 **Resume Section** - Detailed experience and education timeline
- 🛠️ **Skills Section** - Categorized technical skills
- 🎨 **Services Section** - Professional services offered

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4.1
- **Animations:** Framer Motion 12
- **Icons:** Lucide React, React Icons
- **UI Components:** Radix UI
- **Theme:** next-themes

### Backend & Services
- **Form Handling:** Formspree
- **Analytics:** Vercel Analytics

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Walidadebayo/Portfolio.git
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Base URL of your portfolio
NEXT_PUBLIC_BASE_URL=https://example.com
# Formspree Form ID for contact form
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings (already set in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 20

4. Add environment variables in Netlify dashboard
5. Deploy! 🚀

The `netlify.toml` file is already configured with optimal settings for Next.js deployment.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading UI
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── projects.tsx      # Projects showcase
│   ├── resume.tsx        # Experience & Education
│   ├── services.tsx      # Services offered
│   └── skills.tsx        # Technical skills
├── data/                 # Data files
│   ├── education.ts      # Education data
│   ├── experience.ts     # Work experience
│   ├── personal.ts       # Personal info
│   ├── projects.ts       # Projects data
│   ├── services.ts       # Services data
│   └── skills.ts         # Skills data
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── images/          # Images
├── netlify.toml          # Netlify configuration
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customisation

### Update Personal Information

Edit `data/personal.ts` to update your personal details:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

### Add Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    category: "fullstack",
    // ... more fields
  },
];
```

### Modify Skills

Edit `data/skills.ts` to update your technical skills.

### Update Experience

Edit `data/experience.ts` and `data/education.ts` for your resume section.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Walidadebayo/Portfolio/issues).

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 👨‍💻 Author

**Walid Adebayo**

- Website: [Your Portfolio URL]
- LinkedIn: [@walidadebayo](https://www.linkedin.com/in/walidadebayo/)
- GitHub: [@Walidadebayo](https://github.com/Walidadebayo)
- Dev.to: [@walidadebayo](https://dev.to/walidadebayo)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

<p align="center">Made with ❤️ and Next.js</p>