import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiLinkedin,
} from "react-icons/si";
import Link from "next/link";
import SplitText from "@/components/SplitText";

export default function Home() {
  const technologies = [
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-black dark:text-white" />,
    },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-auto">
      <main className="container mx-auto px-5 md:px-20 py-8 flex-1 flex flex-col justify-center">
        <div className="space-y-24">
          <section className="text-center">
            <div className="space-y-6">
              <div className="hidden md:block">
                <SplitText
                  text={`Hi, I'm Ben Walderman`}
                  className="text-4xl md:text-6xl font-bold tracking-tight"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight block md:hidden">
                Hi, I&apos;m{" "}
                <span className="whitespace-nowrap">Ben Walderman</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Software engineer building scalable backend systems and full-stack applications
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link href="/contact">
                  <Button size="lg" className="px-6 py-3 font-medium">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 py-3 font-medium"
                  >
                    View My Work
                  </Button>
                </Link>
              </div>

              {/* Contact Links */}
              <div className="flex justify-center gap-4 border-t border-muted/20">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-12 w-12 rounded-full hover:bg-primary/10 transition-colors duration-300"
                >
                  <Link
                    href="mailto:benlwalderman@gmail.com"
                    className="flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-12 w-12 rounded-full hover:bg-primary/10 transition-colors duration-300"
                >
                  <Link
                    href="https://linkedin.com/in/benwalderman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <SiLinkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-12 w-12 rounded-full hover:bg-primary/10 transition-colors duration-300"
                >
                  <Link
                    href="https://github.com/benwal737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center space-y-8">
              <p className="text-muted-foreground text-base md:text-lg">
                Here are some of the tools and technologies I enjoy working with
              </p>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 max-w-4xl mx-auto">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-default"
                  >
                    <div className="text-3xl md:text-4xl mb-2 md:mb-3 p-3 md:p-4 bg-card border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20">
                      {tech.icon}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
