import { ProjectCard } from "@/components/projects/project-card";
import { Briefcase, FlaskConical, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import Link from "next/link";

const projectsData = {
  featured: [
    {
      id: "portfolio-v1",
      title: "Personal Brand Portfolio",
      category: "Production Deployment",
      description:
        "A high-performance personal portfolio engineered with the latest Next.js 16 features. Designed to showcase technical skills through a custom Design System and interactive UI.",
      fullDescription: `
        This is not just a template. This project represents a deep dive into modern frontend architecture.
        
        **Key Engineering Challenges:**
        - Implementing a custom "Bento Grid" layout that responds fluidly to viewport changes.
        - Utilizing Framer Motion for complex, physics-based micro-interactions without performance penalties.
        - Building a reusable component system (SkillCard, ProjectCard) using React Portals for seamless modal experiences.
        - Configuring Tailwind CSS 4 (Alpha/Beta) to test the latest styling capabilities.
        
        The goal was to create a digital identity that feels like a native application rather than a static website.
      `,
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/Szadolowski/Its-me",
      liveUrl: "https://itsmerafal.netlify.app/",
    },
  ],
  labs: [],
};

export const metadata = {
  title: "Projects | Rafał Curzydło",
  description: "Commercial projects and R&D experiments.",
};

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen p-4 pb-32 text-white bg-custom-main md:p-10">
      <header className="mx-auto mb-16 space-y-4 max-w-7xl animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          <span className="text-custom-addition">Mission</span> Log
        </h1>
        <p className="max-w-2xl text-lg text-gray-400">
          A registry of deployed systems and experimental builds.
          <br />
          Bridging the gap between code and business value.
        </p>
      </header>

      <div className="mx-auto space-y-20 max-w-7xl">
        <section className="delay-100 animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 rounded bg-custom-addition/10 text-custom-addition">
              <Briefcase size={24} />
            </div>
            <h2 className="font-mono text-2xl font-bold tracking-wide uppercase">
              Commercial & Featured
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projectsData.featured.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                isFeatured={true}
                className="h-full lg:col-span-2"
              />
            ))}

            <div className="relative flex flex-col items-center justify-center p-8 space-y-4 text-center transition-colors border border-dashed cursor-default rounded-xl border-white/20 bg-white/5 hover:bg-white/10 group">
              <div className="flex items-center justify-center w-16 h-16 mb-2 text-green-500 rounded-full bg-green-500/20 animate-pulse">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Ready for Deployment
              </h3>
              <p className="max-w-md text-gray-400">
                I am currently open for commercial commissions and freelance
                opportunities. Need a custom system or high-performance website?
              </p>
              <Link
                href="/contact"
                className="px-6 py-2 mt-4 font-bold text-black transition-transform rounded bg-custom-addition hover:scale-105"
              >
                Initiate Collaboration
              </Link>
            </div>
          </div>
        </section>

        <section className="delay-200 animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 text-purple-500 rounded bg-purple-500/10">
              <FlaskConical size={24} />
            </div>
            <h2 className="font-mono text-2xl font-bold tracking-wide uppercase">
              R&D / Experiments
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.labs.length > 0 ? (
              projectsData.labs.map((project: any) => (
                <ProjectCard key={project.id} {...project} />
              ))
            ) : (
              <div className="grid grid-cols-1 gap-4 col-span-full md:grid-cols-2">
                <div className="flex flex-col items-center justify-center p-12 text-center border border-white/5 rounded-xl bg-black/20">
                  <Terminal size={32} className="mb-4 text-gray-600" />
                  <p className="font-mono text-gray-500">
                    // More experimental builds compiling... <br />
                    Check back soon.
                  </p>
                </div>

                <Link
                  href="https://github.com/Szadolowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center p-8 space-y-4 text-center transition-all duration-300 border group border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-custom-addition/30 hover:-translate-y-1"
                >
                  <div className="p-4 text-white transition-all rounded-full bg-white/5 group-hover:text-white group-hover:bg-black group-hover:scale-110">
                    <GithubIcon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-custom-addition">
                      Source Code Archives
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Explore my repositories, configurations, and open-source
                      contributions directly on GitHub.
                    </p>
                  </div>
                  <span className="font-mono text-xs transition-opacity opacity-0 text-custom-addition group-hover:opacity-100">
                    access_remote_repo_
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
