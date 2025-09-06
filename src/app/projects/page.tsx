import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import FadeContent from "@/components/FadeContent";

export default function Projects() {
  const projects = [
    {
      title: "SlugTrail",
      subtitle: "Parking Solutions Platform",
      description:
        "A comprehensive campus parking system with three role-specific applications (Driver, Enforcement, Admin) featuring secure authentication, payment processing, and automated license plate recognition.",
      images: [
        { src: "/landing.png", alt: "Landing", id: 1 },
        { src: "/admin.png", alt: "Admin", id: 2 },
        { src: "/action.png", alt: "Action", id: 3 },
        { src: "/assistant.png", alt: "Assistant", id: 4 },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "GraphQL",
        "Stripe",
        "Docker",
        "Oracle Cloud",
      ],
      demo: "https://slugtrail.link",
      category: "Full Stack",
      period: "April - June 2025",
      openSource: false,
    },
    {
      title: "Werewolf",
      subtitle: "Multiplayer Web Game",
      description:
        "A browser-based social deduction game with real-time multiplayer gameplay, dynamic role-driven UI, and synchronized game state management across multiple players.",
      images: [
        { src: "/werewolf-home.png", alt: "Home", id: 1 },
        { src: "/lobby.png", alt: "Lobby", id: 2 },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Socket.IO",
        "Tailwind CSS",
      ],
      github: "https://github.com/benwal737/werewolf",
      demo: "https://playwerewolf.online",
      category: "Web App",
      period: "June - August 2025",
      openSource: true,
    },
    {
      title: "Apokatastasis",
      subtitle: "Multi-POV Streaming Platform",
      description:
        "A cutting-edge streaming platform enabling multiple perspective viewing with real-time video streaming, interactive chat, and synchronized multi-user experiences.",
      images: [
        {
          src: "/api/placeholder/400/240",
          alt: "Multi-Stream Interface",
          id: 1,
        },
        { src: "/api/placeholder/400/240", alt: "Chat Integration", id: 2 },
        { src: "/api/placeholder/400/240", alt: "Stream Controls", id: 3 },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "LiveKit",
        "WebRTC",
        "Socket.IO",
        "Tailwind CSS",
      ],
      github: "https://github.com/benwal737/apokatastasis",
      demo: "https://apokatastasislive.netlify.app",
      category: "Full Stack",
      period: "In Progress",
      openSource: true,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 md:py-12">
      <main className="container mx-auto px-4 md:px-5 lg:px-20">
        {/* Header Section */}
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            My Projects
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mx-auto px-4 md:px-0 max-w-2xl">
            Here are some of the projects I've built using various technologies
            and frameworks
          </p>
        </section>

        {/* Projects List */}
        <section className="space-y-12 md:space-y-16 mx-auto max-w-6xl">
          {projects.map((project, index) => (
            <div key={index}>
              {/* Mobile Layout */}
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                threshold={0.1}
              >
                <div className="block lg:hidden space-y-4 md:space-y-6">
                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold leading-tight px-2">
                    {project.title}
                  </h2>
                  <h3 className="text-md font-semibold leading-tight px-2">
                    {project.subtitle}
                  </h3>

                  {/* Carousel */}
                  <div className="w-full">
                    <Carousel
                      items={project.images}
                      baseWidth={500}
                      autoplay={false}
                      autoplayDelay={5000}
                      pauseOnHover={true}
                      loop={true}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4 px-2">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3 pt-2">
                      {project.demo && (
                        <Button asChild className="px-4 w-full">
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.openSource && (
                        <Button
                          asChild
                          variant="outline"
                          className="px-4 w-full"
                        >
                          <Link
                            href={project.github || ""}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeContent>

              {/* Desktop Layout */}
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                threshold={0.1}
              >
                <div
                  className={`hidden lg:flex ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-12 items-start`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <Carousel
                      items={project.images}
                      baseWidth={500}
                      autoplay={false}
                      autoplayDelay={5000}
                      pauseOnHover={true}
                      loop={true}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                      <h2 className="text-3xl font-bold leading-tight">
                        {project.title}
                      </h2>
                      <h3 className="text-xl font-semibold leading-tight">
                        {project.subtitle}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      {project.demo && (
                        <Button asChild className="px-6">
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.openSource && (
                        <Button asChild variant="outline" className="px-6">
                          <Link
                            href={project.github || ""}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeContent>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
