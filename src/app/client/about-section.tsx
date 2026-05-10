import type { PortfolioConfig } from "@/lib/portfolio-config";

export function AboutSection({ config }: { config: PortfolioConfig }) {
    return (
        <section id='about' className='py-4'>
            <p className='text-lg leading-relaxed text-muted-foreground'>
                {config.bio}
            </p>
        </section>
    );
}
