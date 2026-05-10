export interface Project {
    title: string;
    description: string;
    techStack: string[];
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
}

function parseProjects(raw: string | undefined): Project[] {
    if (!raw) return defaultConfig.projects;
    try {
        return JSON.parse(raw) as Project[];
    } catch {
        return defaultConfig.projects;
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
        projects: parseProjects(process.env.NEXT_PUBLIC_PROJECTS),
    };
}
