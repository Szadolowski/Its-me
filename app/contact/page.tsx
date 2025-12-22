import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact | Rafał Curzydło",
  description:
    "Get in touch for freelance projects or full-time opportunities.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen p-4 pb-32 text-white bg-custom-main md:p-10">
      {/* HEADER - Statyczny, renderowany na serwerze */}
      <header className="mx-auto mb-16 space-y-4 max-w-7xl animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          <span className="text-custom-addition">Initialize</span> Comms
        </h1>
        <p className="max-w-2xl text-lg text-gray-400">
          Ready to collaborate on high-impact projects.
          <br />
          Send a transmission directly to my inbox.
        </p>
      </header>

      {/* GRID - Layout dla komponentów klienckich */}
      <div className="grid grid-cols-1 gap-12 mx-auto lg:grid-cols-2 max-w-7xl">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
