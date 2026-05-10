import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import type { PortfolioConfig } from "@/lib/portfolio-config";

export function SiteFooter({ config }: { config: PortfolioConfig }) {
    return (
        <footer className='w-1/2 mx-auto border-t border-border py-6 text-center text-sm text-muted-foreground'>
            <div className='container flex flex-col sm:flex-row justify-between items-center'>
                <p>&copy; {new Date().getFullYear()} {config.name}.</p>
                <div className='flex gap-4 mt-4 sm:mt-0'>
                    {config.github && (
                        <Link href={config.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                            <Github className='w-5 h-5 text-muted-foreground hover:text-primary transition-colors' />
                        </Link>
                    )}
                    {config.linkedin && (
                        <Link href={config.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                            <Linkedin className='w-5 h-5 text-muted-foreground hover:text-primary transition-colors' />
                        </Link>
                    )}
                    {config.twitter && (
                        <Link href={config.twitter} target='_blank' rel='noopener noreferrer' aria-label='Twitter / X'>
                            <svg
                                viewBox='0 0 1200 1227'
                                className='w-5 h-5 fill-muted-foreground hover:fill-primary transition-colors'
                                aria-hidden='true'
                            >
                                <path d='M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.163 519.284ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.828Z' />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    );
}
