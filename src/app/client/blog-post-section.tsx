import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { PortfolioConfig } from "@/lib/portfolio-config";

export function BlogPostsSection({ config }: { config: PortfolioConfig }) {
    const { blogPosts } = config;

    if (blogPosts.length === 0) return null;

    return (
        <section id='blog' className='py-10 md:py-10'>
            <h2 className='text-2xl font-bold text-primary mb-6'>
                Recent Blog Posts
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {blogPosts.map((post, index) => (
                    <Card
                        key={index}
                        className='p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg'
                    >
                        <div>
                            <CardTitle className='text-xl text-primary'>
                                {post.title}
                            </CardTitle>
                            <CardDescription className='mt-1 text-sm text-muted-foreground'>
                                {post.date}
                            </CardDescription>
                            <p className='text-sm mt-3 text-muted-foreground'>
                                {post.description}
                            </p>
                        </div>
                        {post.link && (
                            <Link
                                href={post.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-500 hover:underline flex items-center gap-1 mt-4 self-start'
                            >
                                <span>Read More</span>
                            </Link>
                        )}
                    </Card>
                ))}
            </div>
        </section>
    );
}
