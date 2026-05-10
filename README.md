# Next.js Portfolio Template

A clean, minimal developer portfolio built with Next.js 15, Tailwind CSS v4, and shadcn/ui. Fully configurable via a single config file or environment variables — no database required.

## Features

- **Single-file configuration** — edit one file to update your entire portfolio
- **Environment variable support** — deploy to Vercel with zero code changes
- **Dark / light mode** — theme toggle built in
- **Sections** — Hero, About, Skills, Projects, Blog posts, Footer
- **Responsive** — mobile-first layout
- **Fast** — static generation with Next.js App Router

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) components
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [Lucide React](https://lucide.dev/) icons

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Configuration

### Option A — Edit the config file directly

Open `src/lib/portfolio-config.ts` and update the `defaultConfig` object:

```ts
export const defaultConfig: PortfolioConfig = {
    name: "Jane Doe",
    role: "Full Stack Engineer",
    company: "Corp",
    companyUrl: "https://Corp.com",
    location: "San Francisco",
    bio: "I build things for the web.",
    avatarUrl: "https://github.com/your-username.png",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://x.com/your-username",
    skills: ["React", "TypeScript", "Node.js"],
    projects: [
        {
            title: "My Project",
            description: "A short description of what it does.",
            techStack: ["Next.js", "Postgres"],
            link: "https://myproject.com",
        },
    ],
};
```

### Option B — Environment variables (recommended for Vercel)

Create a `.env.local` file (never commit this):

```env
NEXT_PUBLIC_NAME="Jane Doe"
NEXT_PUBLIC_ROLE="Full Stack Engineer"
NEXT_PUBLIC_COMPANY="Corp"
NEXT_PUBLIC_COMPANY_URL="https://corp.com"
NEXT_PUBLIC_LOCATION="San Francisco"
NEXT_PUBLIC_BIO="I build things for the web."
NEXT_PUBLIC_AVATAR_URL="https://github.com/your-username.png"
NEXT_PUBLIC_GITHUB="https://github.com/your-username"
NEXT_PUBLIC_LINKEDIN="https://linkedin.com/in/your-username"
NEXT_PUBLIC_TWITTER="https://x.com/your-username"
NEXT_PUBLIC_SKILLS="React,TypeScript,Node.js"
NEXT_PUBLIC_PROJECTS='[{"title":"My Project","description":"What it does.","techStack":["Next.js"],"link":"https://myproject.com"}]'
```

Environment variables take precedence over `defaultConfig` values.

## Deploying to Vercel

1. Push your repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Deploy — done

## Project Structure

```
src/
├── app/
│   ├── client/          # Page sections (Hero, About, Projects, …)
│   ├── layout.tsx        # Root layout & metadata
│   └── page.tsx          # Home page
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── mode-toggle.tsx
│   └── theme-provider.tsx
└── lib/
    ├── portfolio-config.ts  # ← main config file
    └── utils.ts
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

MIT
