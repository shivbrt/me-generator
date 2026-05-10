export interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: string;
}

export interface BlogPost {
    title: string;
    date: string;
    description: string;
    link: string;
}

export interface PortfolioConfig {
    name: string;
    role: string;
    company: string;
    companyUrl: string;
    location: string;
    bio: string;
    avatarUrl: string;
    github: string;
    linkedin: string;
    twitter: string;
    skills: string[];
    projects: Project[];
    blogPosts: BlogPost[];
}

function parseJSON<T>(raw: string | undefined, fallback: T): T {
    if (!raw) return fallback;
    try {
        return JSON.parse(raw) as T;
    } catch {
        return fallback;
    }
}

function parseSkills(raw: string | undefined): string[] {
    if (!raw) return defaultConfig.skills;
    return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

export const defaultConfig: PortfolioConfig = {
    name: "Your Name",
    role: "Your Role",
    company: "Your Company",
    companyUrl: "https://yourcompany.com",
    location: "Your City",
    bio: "Write a short bio about yourself here.",
    avatarUrl: "https://github.com/ghost.png",
    github: "",
    linkedin: "",
    twitter: "",
    skills: ["React", "Node.js", "TypeScript"],
    projects: [],
    blogPosts: [],
};

export function getPortfolioConfig(): PortfolioConfig {
    return {
        name: process.env.NEXT_PUBLIC_NAME ?? defaultConfig.name,
        role: process.env.NEXT_PUBLIC_ROLE ?? defaultConfig.role,
        company: process.env.NEXT_PUBLIC_COMPANY ?? defaultConfig.company,
        companyUrl: process.env.NEXT_PUBLIC_COMPANY_URL ?? defaultConfig.companyUrl,
        location: process.env.NEXT_PUBLIC_LOCATION ?? defaultConfig.location,
        bio: process.env.NEXT_PUBLIC_BIO ?? defaultConfig.bio,
        avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL ?? defaultConfig.avatarUrl,
        github: process.env.NEXT_PUBLIC_GITHUB ?? defaultConfig.github,
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? defaultConfig.linkedin,
        twitter: process.env.NEXT_PUBLIC_TWITTER ?? defaultConfig.twitter,
        skills: parseSkills(process.env.NEXT_PUBLIC_SKILLS),
        projects: parseJSON(process.env.NEXT_PUBLIC_PROJECTS, defaultConfig.projects),
        blogPosts: parseJSON(process.env.NEXT_PUBLIC_BLOG_POSTS, defaultConfig.blogPosts),
    };
}
