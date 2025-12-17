import Link from "next/link";
import TypeWriter from "@/components/type-writer";

export default function Home() {
  return (
    <div className="flex justify-between w-full p-4 overflow-hidden">
      <div className="flex flex-col w-full gap-6 px-6 text-center lg:w-3/5">
        {/* Main Heading */}
        <h1 className="text-5xl font-black text-custom-addition animate-fade-up">
          Get to know me
        </h1>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-center delay-100 text-wrap text-custom-addition animate-fade-up">
          Frontend Developer with a Full Stack mindset
        </h3>

        {/* Intro Paragraph */}
        <p className="text-xl text-center delay-200 animate-fade-up">
          My background isn't typical. With roots in networking, system
          administration, and data analysis, I build interfaces that are not
          only beautiful but technically robust. I’m currently bridging the gap
          to Full Stack development.
        </p>

        {/* CTA Paragraph */}
        <p className="text-center delay-300 animate-fade-up">
          Scroll down to explore my code, my professional journey, and the
          hobbies that fuel my creativity. Let’s build something lasting
          together.
        </p>

        {/* Button */}
        <div className="flex justify-center w-full pt-5 delay-500 animate-fade-up">
          <Link
            href={"./about_me"}
            type="button"
            className="px-4 py-2 transition-all duration-300 border-2 border-black rounded-lg cursor-pointer bg-custom-addition hover:bg-custom-addition-2 text-custom-main hover:text-white hover:scale-105 active:scale-95"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Right Side - TypeWriter */}
      <div className="relative items-center justify-center hidden delay-300 mx-15 lg:flex animate-fade-up">
        <div className="flex justify-start items-start w-87.5 h-60 p-2 border-8 rounded-lg border-black bg-black/5 animate-[float_6s_ease-in-out_infinite]">
          <TypeWriter
            text='<span className="text-green-600">HELLO WORLD!</span>'
            speed={150}
            textEffect={
              <span className="font-semibold text-custom-addition-2">
                HELLO WORLD!
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}
