import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function BlogPostsSection() {
    const blogPosts = [
        {
            title: "Next.js Project Setup: A Step-by-Step Configuration Guide",
            date: "Published on Oct 30, 2024",
            description:
                "This guide outlines the steps to set up a Next.js project with TypeScript, ESLint, Prettier, Husky, and lint-staged for linting and formatting.",
            link: "https://shivamani.hashnode.dev/nextjs-project-setup-a-step-by-step-configuration-guide",
        },
        {
            title: "Integrating Stripe Payments into Your SaaS with MERN Stack.",
            date: "Published on Jul 12, 2024",
            description:
                "In this post I am going to explain how you can integrate Stripe payments into your SaaS and update your database for payments using webhooks. ",
            link: "https://shivamani.hashnode.dev/integrating-stripe-payments-into-your-saas-with-mern-stack", // Example link
        },
        {
            title: "An Introduction to Typography",
            date: "Published on May 1, 2023",
            description:
                "In simple lame understanding, typography is the art of arranging things in a web browser to make them readable attractive, and beautiful.",
            link: "https://shivamani.hashnode.dev/an-introduction-to-typography", // Example link
        },
        {
            title: "How to Upload Images, Videos, and Files to AWS S3 Bucket and Update",
            date: "Published on Jun 1, 2024",
            description:
                "To create an Aws account, you must sign up using your credit or debit card.",
            link: "https://shivamani.hashnode.dev/how-to-upload-images-videos-and-files-to-aws-s3-bucket-and-update-mongodb-using-node-a-step-by-step-guide", // Example link
        },
    ];

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
