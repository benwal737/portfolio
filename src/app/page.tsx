import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Code, Database, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend",
      icon: Database,
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Development",
      icon: Code,
      technologies: [
        "Git",
        "Docker",
        "AWS",
        "Vercel",
        "Vitest",
        "MSW",
        "React Testing Library",
        "Puppeteer",
      ],
    },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col md:overflow-hidden">
      <main className="container mx-auto px-6 lg:px-20 py-5 flex-1 flex flex-col justify-center">
        <div className="space-y-8">
          <section className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="whitespace-nowrap">Ben Walderman</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              full-stack developer creating beautiful, functional web applications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View Projects
                </Button>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-3">
              Technologies I Use
            </h2>
            <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
              Here are some of the tools and technologies that I enjoy working with
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <skill.icon className="h-5 w-5" />
                      <h3 className="text-lg font-semibold">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
