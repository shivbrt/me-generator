import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import type { PortfolioConfig } from "@/lib/portfolio-config";

export function ProjectsSection({ config }: { config: PortfolioConfig }) {
    return (
        <section id='projects' className='py-6'>
            <h2 className='text-2xl font-bold text-primary mb-6'>
                Featured Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {config.projects.map((project, index) => (
                    <Card
                        key={index}
                        className='p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg'
                    >
                        <div>
                            <CardTitle className='text-xl text-primary'>
                                {project.title}
                            </CardTitle>
                            <CardDescription className='mt-2 text-muted-foreground'>
                                {project.description}
                            </CardDescription>
                            <div className='mt-4 flex flex-wrap gap-2'>
                                {project.techStack.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant='outline'>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        {project.link && (
                            <Link
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-500 hover:underline flex items-center gap-1 self-start mt-4'
                            >
                                <Globe className='w-4 h-4' />
                                <span>Visit Site</span>
                            </Link>
                        )}
                    </Card>
                ))}
            </div>
        </section>
    );
}
