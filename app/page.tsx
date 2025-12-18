import Link from "next/link";
import { AboutTypeWriter } from "@/components/type-writer";

export default function Home() {
  // Zmieniłem nazwę na 'commands' dla porządku, ale treść została ta sama
  const commands = [
    "npm run build",
    "ping 8.8.8.8",
    'git commit -m "feat: infrastructure ready"',
    "sudo nano /etc/ssh/sshd_config",
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full p-4 lg:p-10 min-h-[80vh] overflow-hidden gap-10 lg:gap-0">
      {/* --- LEFT SIDE --- */}
      <div className="z-10 flex flex-col w-full gap-8 px-2 text-center lg:px-6 lg:text-left lg:w-1/2 xl:w-2/5">
        <h1 className="text-5xl font-black tracking-tight md:text-7xl text-custom-addition animate-fade-up">
          Get to know me
        </h1>

        <h3 className="text-2xl font-semibold leading-tight delay-100 md:text-3xl text-custom-addition-2 animate-fade-up">
          Frontend Developer with a <br className="hidden md:block" />
          <span className="text-white">Full Stack mindset</span>
        </h3>

        <p className="text-lg leading-relaxed text-gray-300 delay-200 md:text-xl animate-fade-up">
          My background isn't typical. With roots in{" "}
          <span className="text-custom-addition">networking & sysadmin</span>, I
          build interfaces that are not only beautiful but technically robust.
          I’m currently bridging the gap to Full Stack development.
        </p>

        <p className="text-sm text-gray-400 delay-300 md:text-base animate-fade-up">
          Scroll down to explore my code, my professional journey, and the
          hobbies that fuel my creativity. Let’s build something lasting
          together.
        </p>

        {/* Button */}
        <div className="flex justify-center w-full pt-2 delay-500 lg:justify-start animate-fade-up">
          <Link
            href={"./about_me"}
            type="button"
            className="relative px-6 py-3 overflow-hidden font-bold transition-all duration-300 border-2 rounded-lg cursor-pointer group border-custom-addition bg-custom-addition text-custom-main hover:bg-transparent hover:text-custom-addition hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">About Me</span>
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-custom-addition-2 group-hover:opacity-10"></div>
          </Link>
        </div>
      </div>

      {/* --- RIGHT SIDE --- */}
      <div className="relative flex items-center justify-center w-full delay-300 lg:w-1/2 animate-fade-up">
        <div className="w-full max-w-lg rounded-xl overflow-hidden bg-[#0c0c0c] border border-white/10 shadow-2xl shadow-custom-addition/10 animate-[float_6s_ease-in-out_infinite]">
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 transition-colors rounded-full bg-red-500/80 hover:bg-red-500"></div>
              <div className="w-3 h-3 transition-colors rounded-full bg-yellow-500/80 hover:bg-yellow-500"></div>
              <div className="w-3 h-3 transition-colors rounded-full bg-green-500/80 hover:bg-green-500"></div>
            </div>
            <div className="font-mono text-xs text-gray-500 select-none">
              rafal@dev-portfolio:~
            </div>
            <div className="w-10"></div>
          </div>

          {/* Obszar roboczy Terminala */}
          <div className="p-6 h-64 md:h-72 font-mono text-sm md:text-base bg-[#0c0c0c]/95 backdrop-blur-sm flex flex-col justify-center">
            <div className="hidden mb-4 opacity-50 select-none sm:block">
              <div className="flex gap-2">
                <span className="text-custom-addition">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-white">whoami</span>
              </div>
              <div className="ml-6 text-gray-400">
                Frontend_Dev_with_SysAdmin_Roots
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <div className="flex gap-2 shrink-0">
                <span className="font-bold text-custom-addition">➜</span>
                <span className="font-bold text-cyan-400">~</span>
              </div>
              <div className="font-medium text-white">
                <AboutTypeWriter texts={commands} speed={120} />
              </div>
            </div>
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-custom-addition/20 blur-[100px] rounded-full opacity-30"></div>
      </div>
    </div>
  );
}
