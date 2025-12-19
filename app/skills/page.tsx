import { SkillCard } from "@/components/skills/skill-card";
import {
  Layers,
  Layout,
  Cpu,
  FileCode,
  Terminal,
  Server,
  Database,
  Wrench,
  Globe,
  MessageSquare,
} from "lucide-react";

const skillsData = {
  frontend: [
    {
      id: "react",
      title: "React 19",
      category: "Core Engine",
      description:
        "The library I know inside out. My main project driver. I focus on component architecture, custom hooks, and efficient state management.",
      evidence:
        "Built complex, interactive data-driven report panels handling large datasets. Designed reusable component architecture that accelerated new module deployment. Mastered component lifecycle and Context API for global state management without unnecessary re-renders.",
      techDetails: "Hooks, Context API, Virtual DOM, JSX, Optimization",
      icon: <Layout size={24} />,
      className:
        "md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-transparent rounded-2xl",
    },
    {
      id: "next",
      title: "Next.js 16 (App Router)",
      category: "Fullstack Framework",
      description:
        "My framework of choice for production apps. Utilizing Server Components for performance and Server Actions for secure data mutations.",
      evidence:
        "Architected and developed a complete internal dashboard system using the App Router. Implemented secure Server Actions for data mutations, eliminating the need for a separate public API layer. Utilized hybrid rendering strategies (SSR/CSR) for optimal performance.",
      techDetails: "App Router, Server Actions, SSR/CSR, Middleware",
      icon: <Layers size={24} />,
      className: "md:row-span-2 h-full rounded-xl",
    },
    {
      id: "style",
      title: "Styling & Motion",
      category: "Visuals",
      description:
        "Creating responsive, modern designs using Tailwind CSS 4. Adding life to UI with Motion (Framer).",
      evidence:
        "Designed and engineered the fully responsive UI for this portfolio and internal company dashboards, ensuring a consistent Design System. Implemented micro-interactions and complex page transitions using Framer Motion to enhance User Experience.",
      techDetails: "Tailwind CSS 4, CSS3, Framer Motion, RWD",
      icon: <Cpu size={24} />,
      className: "rounded-xl",
    },
    {
      id: "ts",
      title: "TypeScript",
      category: "Code Reliability",
      description:
        "Used where necessary to enforce data structures and avoid runtime errors. Practical usage for interfaces and props typing.",
      evidence:
        "Enforced strict typing for critical API responses and component props, drastically reducing runtime errors in production. Integrated Zod schemas for validation to ensure end-to-end type safety between backend and frontend.",
      techDetails: "Interfaces, Types, Zod, Props Validation",
      icon: <FileCode size={24} />,
      className: "rounded-xl",
    },
  ],
  infrastructure: [
    {
      id: "os-scripting",
      title: "Systems & Automation",
      category: "SysAdmin Operations",
      description:
        "Fluent navigation across the entire OS spectrum: Linux, Windows, and macOS. I treat the Operating System not just as a GUI, but as a programmable environment.",
      evidence:
        "Managed mixed-environment infrastructure ensuring seamless interoperability between Linux servers and Windows workstations. Automated critical maintenance tasks—including backups, log rotation, and bulk data processing—by writing custom scripts in Bash and PowerShell.",
      techDetails:
        "Linux (CLI/Admin), Windows (PowerShell/AD), Bash Scripting, Cron Jobs, WSL",
      icon: <Terminal size={24} className="text-green-500" />,
    },
    {
      id: "network-hardware",
      title: "Network & Hardware Eng.",
      category: "Physical Infrastructure",
      description:
        "Full stack capabilities extending to the physical layer. I understand how data moves through cables and how hardware executes software.",
      evidence:
        "Designed and configured local networks (LAN/WLAN) utilizing MikroTik and Cisco devices (VLANs, VPNs). Expert in diagnosing hardware bottlenecks and failures—capable of performing component replacements and basic soldering when necessary to restore system continuity.",
      techDetails:
        "TCP/IP Stack, MikroTik RouterOS, Hardware Diagnostics, Component Replacement, Basic Soldering",
      icon: <Server size={24} className="text-green-500" />,
    },
  ],
  backend: {
    title: "Backend & Data Integration",
    category: "Full Stack Development",
    description:
      "I bridge the gap between User Interface and Data. While my focus is Frontend, I possess a solid grasp of server-side logic and database architecture.",
    evidence:
      "Experienced in consuming complex RESTful APIs and designing efficient data structures for frontend applications. Capable of writing raw SQL queries for advanced report generation. Currently expanding backend expertise by building full-scale APIs with Node.js and Express.",
    techDetails:
      "Node.js (Active Learning), SQL (PostgreSQL/MySQL), REST API Architecture, JSON",
    icon: <Database size={24} />,
    className: "md:col-span-2 border-dashed rounded-xl border-white/20",
  },
  languages: [
    {
      id: "pl",
      title: "Polish (Native)",
      category: "Communication",
      description:
        "My native language. Essential for seamless collaboration with local teams and precise technical explanations.",
      evidence:
        "Eliminates language barriers in local projects. Allows for deep, nuanced technical discussions and mentoring of junior team members.",
      techDetails: "Native Speaker",
      icon: <MessageSquare size={24} />,
      className: "rounded-xl bg-[#1a1a1a]/50",
    },
    {
      id: "en",
      title: "English (B2)",
      category: "International",
      description:
        "Professional working proficiency. Used daily for documentation, code comments, and international problem solving.",
      evidence:
        "Fluent reading of technical documentation (React/Next.js docs). Capable of effectively communicating issues on GitHub and StackOverflow.",
      techDetails: "Reading, Writing, Technical Comm.",
      icon: <Globe size={24} />,
      className: "rounded-xl bg-[#1a1a1a]/50",
    },
  ],
  tools: {
    title: "Workflow Tools",
    category: "Essentials",
    description:
      "My daily drivers for version control, coding, and efficient project management.",
    evidence:
      "Effective Git flow usage for version control. Proficient in VSCode environment setup and extensions.",
    techDetails: "Git, GitHub, VSCode",
    icon: <Wrench size={24} />,
    className: "md:col-span-2 rounded-xl bg-[#1a1a1a]/50",
  },
};

export const metadata = {
  title: "Skills & Toolbox | Rafał Curzydło",
  description:
    "Technical skills overview: React, Next.js, and Systems Administration.",
};

export default function SkillsPage() {
  return (
    <main className="w-full min-h-screen p-4 pb-32 text-white bg-custom-main md:p-10">
      {/* HEADER */}
      <header className="mx-auto mb-16 space-y-4 max-w-7xl">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          <span className="text-custom-addition">Technical</span> Arsenal
        </h1>
        <p className="max-w-2xl text-lg text-gray-400">
          I don't just paste code from StackOverflow. I build systems based on
          solid engineering principles. My stack bridges the gap between sleek
          User Interfaces and heavy-duty Infrastructure.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-3">
        {/* SECTION 1*/}
        <div className="space-y-8 lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <h2 className="font-mono text-xl tracking-widest uppercase text-custom-addition">
              The Interface
            </h2>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <p className="mb-4 font-semibold text-white/50">Frontend</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 auto-rows-fr">
            {skillsData.frontend.map((skill) => (
              <SkillCard key={skill.id} {...skill}>
                {skill.icon}
              </SkillCard>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-12 mb-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <h2 className="font-mono text-xl tracking-widest uppercase text-custom-addition">
              Backend & Core
            </h2>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <p className="mb-4 font-semibold text-white/50">Data & Workflow</p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SkillCard {...skillsData.backend}>
              {skillsData.backend.icon}
            </SkillCard>

            {skillsData.languages.map((lang) => (
              <SkillCard {...lang} key={lang.id}>
                {lang.icon}
              </SkillCard>
            ))}

            <SkillCard {...skillsData.tools}>{skillsData.tools.icon}</SkillCard>
          </div>
        </div>

        {/* SECTION 2*/}
        <div className="flex flex-col h-full lg:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-mono text-xl tracking-widest text-gray-500 uppercase">
              The Root (Sudo)
            </h2>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Server Rack Container */}
          <div>
            <div className="flex-1 bg-[#0c0c0c] border border-white/10 rounded-sm p-2 flex flex-col gap-2 shadow-inner shadow-black">
              <div className="bg-[#1a1a1a] px-3 py-2 text-xs font-mono text-wrap text-green-500 border-b border-white/5 mb-2">
                root@system: ~/infrastructure#
              </div>

              {skillsData.infrastructure.map((skill) => (
                <SkillCard
                  key={skill.id}
                  {...skill}
                  className={
                    "font-mono border-l-4 border-r-0 rounded-none border-l-green-600 border-y-0 bg-black/40 hover:bg-white/5"
                  }
                >
                  {skill.icon}
                </SkillCard>
              ))}
              <div className="p-4 mt-auto space-y-1 font-mono text-xs text-gray-600 opacity-50">
                <p>Uptime: 99.9%</p>
                <p>Mem: 64GB / 64GB</p>
                <p>
                  Status: <span className="text-green-600">OPERATIONAL</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
