import Link from "next/link";
import Image from "next/image";
import TypeWriter from "@/components/type-writer";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="flex flex-col text-center gap-6 w-1/2">
          <h1 className="font-black text-4xl">Get to know me</h1>
          <h3 className="font-semibold text-2xl text-wrap text-center">
            Frontend Developer with a Full Stack mindset
          </h3>
          <p className=" text-center text-xl">
            My background isn't typical. With roots in networking, system
            administration, and data analysis, I build interfaces that are not
            only beautiful but technically robust. I’m currently bridging the
            gap to Full Stack development.
          </p>
          <p className=" text-center">
            Scroll down to explore my code, my professional journey, and the
            hobbies that fuel my creativity. Let’s build something lasting
            together.
          </p>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <Image src="/screen.svg" alt="alt" fill />
          <div className="flex justify-start items-start w-[350] h-[240]">
            <TypeWriter
              text='<span className="text-green-600">HELLO WORLD!</span>'
              speed={150}
              textEffect={
                <span className="text-green-600 font-semibold">
                  HELLO WORLD!
                </span>
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pt-5">
        <Link
          href={"./about_me"}
          type="button"
          className="border-2 rounded-lg px-4 py-2 hover:bg-neutral-500 hover:text-white cursor-pointer hover:scale-105 transition-all active:scale-95"
        >
          About Me
        </Link>
      </div>
    </>
  );
}
