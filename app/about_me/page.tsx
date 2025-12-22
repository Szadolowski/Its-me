import Image from "next/image";
import ExperienceTimeline from "../../components/experience-timeline";
import react from "@/public/stack/react.svg";
import tailwind from "@/public/stack/tailwind.svg";
import next from "@/public/stack/next.svg";
import Link from "next/link";

export default function AboutMePage() {
  const commands = [
    { cmd: "npm run build", out: "Building production bundle..." },
    {
      cmd: "ping 8.8.8.8",
      out: "64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=14.2 ms",
    },
    {
      cmd: 'git commit -m "feat: infrastructure ready"',
      out: "[main 8a2b1c] feat: infrastructure ready",
    },
  ];

  const techStack = [
    { icon: react, name: "React 19" },
    { icon: tailwind, name: "Tailwind 4" },
    { icon: next, name: "Next.js 16" },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-16 p-6 overflow-hidden animate-fade-up">
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col items-center w-full gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-center md:text-6xl text-custom-addition">
          More than just code. <br className="hidden md:block" />
          <span className="text-white">I build systems.</span>
        </h1>

        <h2 className="max-w-2xl mx-auto text-xl font-light leading-relaxed text-center md:text-2xl text-custom-secend/80">
          Frontend Developer with a{" "}
          <span className="font-medium text-custom-addition-2">
            sysadmin background
          </span>
          . I understand the full journey of a byte – from the server rack to
          the pixel on your screen.
        </h2>
      </div>

      {/* --- TERMINAL VISUAL --- */}
      <div className="w-full max-w-3xl bg-[#0f0f0f] rounded-lg border border-white/10 shadow-2xl overflow-hidden font-mono text-sm hidden md:block">
        <div className="bg-[#1a1a1a] px-4 py-2 flex gap-2 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-xs text-gray-500">
            rafal@dev-machine:~
          </span>
        </div>
        <div className="p-6 space-y-4 text-gray-300">
          {commands.map((item, index) => (
            <div key={index}>
              <div className="flex gap-2">
                <span className="text-custom-addition">➜</span>
                <span className="text-white">~ {item.cmd}</span>
              </div>
              <div className="ml-5 text-xs text-gray-500">{item.out}</div>
            </div>
          ))}
          <div className="flex gap-2 animate-pulse">
            <span className="text-custom-addition">➜</span>
            <span className="text-white">~ _</span>
          </div>
        </div>
      </div>

      {/* --- BIO SECTION --- */}
      <div className="w-full max-w-3xl space-y-6 text-lg leading-relaxed text-center text-gray-300 md:text-left">
        <p>
          My journey into tech wasn't linear. It started with configuring
          <span className="text-custom-addition"> MikroTik routers</span> and
          troubleshooting Linux servers. While working as an IT Specialist at
          Laskopol, I realized that a robust infrastructure needs an equally
          powerful interface.
        </p>
        <p>
          That's when I pivoted to{" "}
          <span className="font-semibold text-white">Frontend Development</span>
          . I started building internal tools to automate workflows – from
          report generation panels to equipment management systems. Today, I
          combine my problem-solving roots with modern tech stacks to create
          applications that are technically resilient.
        </p>
      </div>

      <div className="w-full h-px max-w-4xl bg-linear-to-r from-transparent via-custom-addition/30 to-transparent" />

      {/* --- TIMELINE --- */}
      <div className="w-full">
        <ExperienceTimeline />
      </div>

      <div className="w-full h-px max-w-4xl bg-linear-to-r from-transparent via-custom-addition/30 to-transparent" />

      {/* --- TECH STACK SECTION --- */}
      <div className="w-full max-w-3xl space-y-8 text-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-custom-addition">
            Tech Stack
          </h2>
          <p className="text-gray-400">
            I don't chase trends blindly. I choose tools that deliver results.
            Currently specialized in React 19 and Tailwind CSS 4 for speed.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center w-24 h-24 p-4 transition-all duration-300 border group rounded-xl bg-white/5 border-white/5 hover:border-custom-addition/50 hover:bg-white/10 backdrop-blur-sm"
            >
              <Image
                src={tech.icon}
                alt={`${tech.name} Logo`}
                width={48}
                height={48}
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="mt-2 text-xs text-gray-400 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/skills"
          className="inline-block px-8 py-3 mt-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 border rounded border-custom-addition text-custom-addition hover:bg-custom-addition hover:text-custom-main"
        >
          Explore All Skills
        </Link>
      </div>

      {/* --- AFTER HOURS (HOBBY) --- */}
      <div className="w-full max-w-4xl mt-10">
        <h3 className="mb-8 text-2xl font-semibold text-center text-white">
          After Hours
        </h3>
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          {/* Hobby 1 */}
          <div className="p-6 rounded-lg bg-[#0f0f0f] border border-white/5">
            <div className="mb-2 text-xl text-custom-addition">HomeLab 🏠</div>
            <p className="text-sm text-gray-400">
              Running my own local server environment for testing and safe
              breaking of things.
            </p>
          </div>
          {/* Hobby 2 */}
          <div className="p-6 rounded-lg bg-[#0f0f0f] border border-white/5">
            <div className="mb-2 text-xl text-custom-addition">Learning 📚</div>
            <p className="text-sm text-gray-400">
              Always upskilling. Currently diving deep into Next.js 16 server
              actions.
            </p>
          </div>
          {/* Hobby 3 */}
          <div className="p-6 rounded-lg bg-[#0f0f0f] border border-white/5">
            <div className="mb-2 text-xl text-custom-addition">Gaming 🎮</div>
            <p className="text-sm text-gray-400">
              Team-based competitive games that require strategy and quick
              communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
