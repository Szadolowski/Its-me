"use client";

import { motion } from "framer-motion";

// Definicja typów dla lepszej organizacji
type TimelineItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "freelance" | "education";
  tech?: string[]; // Opcjonalnie: technologie użyte w projekcie
};

const timelineData: TimelineItem[] = [
  {
    year: "02.2026 - Present",
    title: "IT Administrator",
    company: "Giewont HG",
    description:
      "Administracja i rozwój infrastruktury IT dla grupy spółek: Windows Server, Active Directory, Linux, Hyper-V i Proxmox, sieci oraz bezpieczeństwo endpointów. Automatyzacja zadań administracyjnych, zarządzanie Microsoft 365 / Entra ID, backupami i systemami biznesowymi. Projekt i pełne wdrożenie produkcyjne strony giewont-chemia.pl w Next.js zgodnie z wymaganiami biznesowymi zarządu.",
    type: "work",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Linux",
      "Windows Server",
      "Active Directory",
      "Proxmox",
      "Hyper-V",
      "MikroTik",
      "UniFi",
      "Microsoft 365",
      "Action1",
      "ESET PROTECT",
      "Veeam",
      "SQL Server",
    ],
  },

  {
    year: "10.2024 - 03.2026",
    title: "IT Specialist",
    company: "Laskopol Sp. z o.o.",
    description:
      "Administracja serwerami, siecią i środowiskiem użytkowników oraz wsparcie systemów ERP. Tworzenie wewnętrznych aplikacji i dashboardów webowych, integracji oraz raportów wykorzystujących dane z systemów biznesowych i baz SQL.",
    type: "work",
    tech: [
      "Windows Server",
      "Linux",
      "Active Directory",
      "SQL",
      "Microsoft SQL Server",
      "React",
      "Next.js",
      "JavaScript",
      "Networking",
      "Comarch Optima",
    ],
  },

  {
    year: "09.2024 - Present",
    title: "Bachelor's in Computer Science",
    company: "Akademia Nauk Stosowanych, Nowy Sącz",
    description:
      "Studia inżynierskie na kierunku Informatyka. Rozwijanie wiedzy z zakresu programowania, baz danych, systemów operacyjnych, sieci komputerowych oraz projektowania i tworzenia oprogramowania.",
    type: "education",
    tech: [
      "Software Engineering",
      "Databases",
      "Networking",
      "Operating Systems",
      "Programming",
    ],
  },

  {
    year: "07.2025",
    title: "Freelance IT Project",
    company: "Betside.pl",
    description:
      "Kompleksowa migracja platformy internetowej i usług na nową infrastrukturę serwerową, rekonfiguracja środowiska oraz optymalizacja działania usług po migracji.",
    type: "freelance",
    tech: [
      "Linux",
      "Server Migration",
      "Web Hosting",
      "DNS",
      "Networking",
      "Troubleshooting",
    ],
  },

  {
    year: "05.2024 - 10.2024",
    title: "IT Intern",
    company: "GM PROJEKT",
    description:
      "Rozwój interfejsów i aplikacji webowych oraz wsparcie techniczne środowiska IT. Praca z React.js, Tailwind CSS i JavaScript, analiza danych oraz diagnozowanie problemów sprzętowych i sieciowych.",
    type: "work",
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "SQL",
      "Networking",
    ],
  },

  {
    year: "09.2019 - 05.2024",
    title: "IT Technician",
    company: "ZSTiO im. Jana Pawła II, Limanowa",
    description:
      "Technikum informatyczne zakończone uzyskaniem tytułu Technik Informatyk oraz kwalifikacji INF.02 i INF.03. Nauka administracji systemami, sieci komputerowych, baz danych, programowania i tworzenia aplikacji webowych.",
    type: "education",
    tech: [
      "INF.02",
      "INF.03",
      "Cisco",
      "Networking",
      "Windows",
      "Linux",
      "Databases",
      "Web Development",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    /*Time Line*/
    <div className="relative max-w-3xl px-4 py-10 mx-auto">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-green-900/50 to-transparent md:left-1/2 md:-ml-px" />
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center justify-between ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/*DATA*/}
            <div className="w-full px-4 mb-2 ml-10 text-left lg:ml-0 md:w-5/12 md:text-right md:mb-0">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider 
                ${
                  item.type === "freelance"
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    : "bg-green-900/20 text-green-400 border border-green-900/30"
                }`}
              >
                {item.year}
              </span>
            </div>

            {/*PUNKT NA LINII*/}
            <div className="absolute flex items-center justify-center -translate-x-1/2 left-4.25 md:left-1/2">
              {item.type === "freelance" ? (
                // IKONA DLA FREELANCE
                <div className="w-6 h-6 rounded-full bg-custom main border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                </div>
              ) : item.type === "education" ? (
                // IKONA DLA EDUKACJI
                <div className="z-10 w-4 h-4 bg-gray-800 border-2 border-gray-600 rounded-full" />
              ) : (
                // STANDARDOWA PRACA
                <div className="w-5 h-5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] z-10 ring-4 ring-custom-main" />
              )}
            </div>

            {/*Karta*/}
            <div
              className={`w-full md:w-5/12 pl-16 md:pl-0 px-4 text-left ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}
            >
              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm border border-white/5 p-5 rounded-xl hover:border-green-500/30 transition-colors duration-300">
                {/* Badge dla Freelance */}
                {item.type === "freelance" && (
                  <span className="text-[10px] uppercase font-bold text-amber-400 mb-1 block tracking-widest">
                    Projekt Komercyjny
                  </span>
                )}

                <h3 className="mb-1 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mb-3 font-mono text-sm font-medium text-green-400/80">
                  {item.company}
                </p>
                <p className="mb-3 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>

                {/*Tagi Technologii*/}
                {item.tech && (
                  <div
                    className={`flex flex-wrap gap-2 mt-3 ${
                      index % 2 !== 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
