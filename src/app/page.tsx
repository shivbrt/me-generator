import { getPortfolioConfig } from "@/lib/portfolio-config";
import { SiteHeader } from "./client/site-header";
import { HeroSection } from "./client/hero-section";
import { AboutSection } from "./client/about-section";
import { ProjectsSection } from "./client/project-section";
import { BlogPostsSection } from "./client/blog-post-section";
import { SiteFooter } from "./client/footer";

export default function Portfolio() {
    const config = getPortfolioConfig();

    return (
        <div className='min-h-screen bg-background text-foreground'>
            <SiteHeader />
            <main className='container mx-auto px-4 py-8 max-w-4xl'>
                <HeroSection config={config} />
                <AboutSection config={config} />
                <ProjectsSection config={config} />
                <BlogPostsSection config={config} />
            </main>
            <SiteFooter config={config} />
        </div>
    );
}
