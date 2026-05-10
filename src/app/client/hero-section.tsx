import Image from "next/image";
import Link from "next/link";
import { MapPin, Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PortfolioConfig } from "@/lib/portfolio-config";

export function HeroSection({ config }: { config: PortfolioConfig }) {
  return (
    <section id="hero" className="py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <Image
          src={config.avatarUrl}
          alt={config.name}
          width={200}
          height={200}
          className="rounded-full object-cover border-4 border-primary shadow-lg shrink-0"
          unoptimized={config.avatarUrl.startsWith("http")}
        />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-extrabold leading-tight text-primary">
            Hey 👋, I&apos;m {config.name.split(" ")[0]}.
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {config.role} at{" "}
            <a
              href={config.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              {config.company}
            </a>
          </p>
          <div className="flex items-center justify-center md:justify-start gap-1.5 mt-1.5 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{config.location}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
            {config.github && (
              <Link href={config.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {config.linkedin && (
              <Link href={config.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {config.twitter && (
              <Link href={config.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <svg viewBox="0 0 1200 1227" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.163 519.284ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.828Z" />
                  </svg>
                </Button>
              </Link>
            )}
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </p>
          <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-1.5">
            {config.skills.map(skill => (
              <Badge key={skill} variant="secondary" className="px-2 py-0.5 text-xs font-medium">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
