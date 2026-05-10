import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { getPortfolioConfig } from "@/lib/portfolio-config";

export function SiteHeader() {
    const config = getPortfolioConfig();
    const firstName = config.name.split(" ")[0];

    return (
        <header className='sticky top-0 z-50 w-1/2 mx-auto border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 max-w-screen-2xl items-center justify-between px-4'>
                <Link href='/' className='flex items-center space-x-2'>
                    <span className='font-bold text-lg text-primary'>{firstName}</span>
                </Link>
                <nav className='flex items-center gap-4 text-sm font-medium'>
                    <ModeToggle />
                </nav>
            </div>
        </header>
    );
}
