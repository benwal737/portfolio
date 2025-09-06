import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import Link from "next/link";

export default function Home() {
  const technologies = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-black dark:text-white" />,
    },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    // { name: "Python", icon: <FaPython className="text-[#FFD43B]" /> },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
      <main className="container mx-auto px-5 md:px-20 py-8 flex-1 flex flex-col justify-center">
        <div className="space-y-24">
          <section className="text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="whitespace-nowrap">Ben Walderman</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Full-stack developer creating beautiful, functional web
                applications
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link href="/contact">
                  <Button size="lg" className="px-6 py-3 font-medium">
                    <Mail className="mr-1"/>
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 py-3 font-medium"
                  >
                    View Projects
                  </Button>
                </Link>
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
