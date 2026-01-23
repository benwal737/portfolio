import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import FadeContent from "@/components/FadeContent";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "SlugTrail",
      subtitle: "Parking Solutions Platform",
      description: (
        <>
          <p className="mb-3">
            First place winner in UCSC&apos;s capstone competition. Full-stack parking ecosystem with role-specific apps for drivers, enforcement, and admins.
          </p>

          <p className="font-semibold text-sm mb-1.5">Key Features:</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Permit management and vehicle registration</li>
            <li>Automated license plate recognition (OCR)</li>
            <li>Ticket processing and Stripe payments</li>
            <li>Zone-based pricing management</li>
          </ul>

          <p className="font-semibold text-sm mb-1.5">Architecture:</p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm">
            <li>9 GraphQL microservices</li>
            <li>Dedicated PostgreSQL databases per service</li>
          </ul>
        </>
      ),
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
      title: "Rep Radar",
      subtitle: "Workout Tracking Platform",
      description: (
        <>
          <p className="mb-3">
            Real-time fitness app for tracking workouts with customizable templates, live set logging, and progress analytics.
          </p>

          <p className="font-semibold text-sm mb-1.5">Key Features:</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Live workout sessions with on-the-fly weight/rep adjustments</li>
            <li>Smart rest timer with haptic feedback and quick presets</li>
            <li>Reusable workout templates with exercise blocks</li>
            <li>Progress dashboard with streaks and workout history</li>
          </ul>

          <p className="font-semibold text-sm mb-1.5">Architecture:</p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm">
            <li>Clerk authentication with automated user onboarding via webhooks</li>
            <li>PostgreSQL database for workout data and user profiles</li>
            <li>Real-time state management for live workout sessions</li>
          </ul>
        </>
      ),
      images: [
        { src: "/rep-radar-landing.png", alt: "Landing", id: 1 },
        { src: "/rep-radar-workout.png", alt: "Workout", id: 2 },
        { src: "/rep-radar-progress.png", alt: "Progress", id: 3 },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Clerk",
        "Tailwind CSS",
      ],
      github: "https://github.com/benwal737/rep-radar",
      demo: "https://rep-radar-jet.vercel.app/",
      category: "Web App",
      period: "",
      openSource: true,
    },
    {
      title: "Werewolf",
      subtitle: "Multiplayer Web Game",
      description: (
        <>
          <p className="mb-3">
            Browser-based social deduction game with real-time multiplayer gameplay and role-driven mechanics.
          </p>

          <p className="font-semibold text-sm mb-1.5">Key Features:</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Real-time multiplayer with synchronized game state</li>
            <li>Dynamic UI that adapts to player roles and game phases</li>
            <li>Live game chat and player actions</li>
            <li>Responsive design with conditional rendering</li>
          </ul>

          <p className="font-semibold text-sm mb-1.5">Technical Stack:</p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm">
            <li>Socket.IO WebSocket backend for real-time sync</li>
            <li>shadcn UI components with Tailwind CSS</li>
          </ul>
        </>
      ),
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
            Here are some of the projects I&apos;ve built using various technologies
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
                    <div className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </div>

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
                            <ExternalLink className="w-4 h-4" />
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
                            <FaGithub className="w-4 h-4 " />
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
                      <div className="text-muted-foreground text-base leading-relaxed">
                        {project.description}
                      </div>
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
                            <ExternalLink className="w-4 h-4" />
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
                            <FaGithub className="w-4 h-4 " />
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
