import type { Metadata } from "next";
import { Geist } from "next/font/google";
// @ts-ignore: side-effect CSS import for global styles (Next.js)
import "./globals.css";
import NavInformation from "@/components/nav-information";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import Image from "next/image";
import MobileMenu from "@/components/mobile-menu";
import MenuLinks from "@/components/menu-links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafał Curzydło",
  description: "FrontEnd Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-main text-white`}
      >
        <div className="sticky top-0 z-50 border-b lg:hidden border-white/10 bg-custom-main/80 backdrop-blur-md">
          <MobileMenu />
        </div>

        <div className="flex min-h-screen mx-auto max-w-480">
          {/* SIDEBAR - Sticky & Tech Style */}
          <aside className="fixed z-20 flex-col hidden h-screen p-8 border-r lg:flex w-80 border-white/10 bg-custom-main/50 backdrop-blur-sm">
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-48 h-48 mb-6 overflow-hidden border rounded-full shadow-2xl border-white/10 bg-linear-to-b from-white/5 to-black group">
                <div className="absolute inset-0 transition-opacity duration-500 rounded-full opacity-0 bg-custom-addition/20 blur-2xl group-hover:opacity-50" />
                {/* 2. Zdjęcie */}
                <Image
                  src="/face-no-bg.png"
                  alt="Rafał Curzydło"
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-contain object-bottom transition-transform duration-500 scale-120 opacity-90 group-hover:opacity-100 group-hover:scale-140"
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <h1 className="text-2xl font-bold tracking-tight">
                Rafał Curzydło
              </h1>
              <h2 className="mt-1 font-mono text-sm tracking-widest uppercase text-custom-addition">
                FrontEnd Developer
              </h2>
            </div>

            <div className="flex flex-col w-full gap-4 mt-auto mb-8">
              <NavInformation
                href="https://github.com/Szadolowski"
                svg={<GithubIcon size={24} className="text-white" />}
              >
                GitHub
              </NavInformation>
              <NavInformation
                href="https://www.linkedin.com/in/rafalcurzydlo/"
                svg={<LinkedinIcon size={24} className="text-white" />}
              >
                LinkedIn
              </NavInformation>
            </div>
          </aside>

          {/* MAIN CONTENT - Scrollable */}
          <div className="flex flex-col flex-1 min-h-screen lg:pl-80">
            {/* TOP NAVIGATION */}
            <header className="sticky top-0 z-10 items-center justify-end hidden h-20 px-10 border-b lg:flex border-white/10 bg-custom-main/80 backdrop-blur-md">
              <MenuLinks />
            </header>

            {/* PAGE CONTENT */}
            <main className="w-full p-6 mx-auto md:p-10 max-w-7xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
