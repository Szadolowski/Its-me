"use client";

import { useState } from "react";
import { Send, Check, MessageSquare, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mvzpwwvw", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  }

  return (
    <section className="relative p-6 border rounded-xl border-white/10 bg-black/20 animate-fade-up animate-delay-200">
      <div className="absolute top-0 left-0 px-4 py-1 text-xs font-bold text-black rounded-br-lg bg-custom-addition">
        SECURE FORM v2.0
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-mono text-xs font-bold text-gray-500 uppercase"
            >
              /User_Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 text-white transition-all border rounded-lg bg-black/50 border-white/10 focus:border-custom-addition focus:outline-none focus:ring-1 focus:ring-custom-addition/50 placeholder:text-gray-700"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-mono text-xs font-bold text-gray-500 uppercase"
            >
              /Contact_Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 text-white transition-all border rounded-lg bg-black/50 border-white/10 focus:border-custom-addition focus:outline-none focus:ring-1 focus:ring-custom-addition/50 placeholder:text-gray-700"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="font-mono text-xs font-bold text-gray-500 uppercase"
          >
            /Subject_Line
          </label>
          <div className="relative">
            <MessageSquare
              size={16}
              className="absolute text-gray-600 left-4 top-4"
            />
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="w-full py-3 pl-10 pr-4 text-white transition-all border rounded-lg bg-black/50 border-white/10 focus:border-custom-addition focus:outline-none focus:ring-1 focus:ring-custom-addition/50 placeholder:text-gray-700"
              placeholder="Project Inquiry"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="font-mono text-xs font-bold text-gray-500 uppercase"
          >
            /Transmission_Content
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 text-white transition-all border rounded-lg resize-none bg-black/50 border-white/10 focus:border-custom-addition focus:outline-none focus:ring-1 focus:ring-custom-addition/50 placeholder:text-gray-700 custom-scrollbar"
            placeholder="Describe your project requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={formStatus === "sending" || formStatus === "success"}
          className={`relative flex items-center justify-center w-full gap-2 px-6 py-4 font-bold transition-all rounded-lg group ${
            formStatus === "success"
              ? "bg-green-500 text-black cursor-default"
              : formStatus === "error"
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-custom-addition text-black hover:bg-white hover:scale-[1.02]"
          }`}
        >
          {formStatus === "idle" && (
            <>
              <Send
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span>Transmit Message</span>
            </>
          )}

          {formStatus === "sending" && (
            <>
              <span className="w-5 h-5 border-2 border-black rounded-full border-t-transparent animate-spin"></span>
              <span>Transmitting...</span>
            </>
          )}

          {formStatus === "success" && (
            <>
              <Check size={20} />
              <span>Transmission Received</span>
            </>
          )}

          {formStatus === "error" && (
            <>
              <AlertCircle size={20} />
              <span>Error. Try Again.</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
}
