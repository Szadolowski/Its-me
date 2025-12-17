import Link from "next/link";
import TypeWriter from "@/components/type-writer";

export default function Home() {
  return (
    <>
      <div className="flex justify-between w-full p-4">
        <div className="flex flex-col w-full gap-6 px-6 text-center lg:w-3/5">
          <h1 className="text-5xl font-black text-custom-addition">
            Get to know me
          </h1>
          <h3 className="text-2xl font-semibold text-center text-wrap text-custom-addition">
            Frontend Developer with a Full Stack mindset
          </h3>
          <p className="text-xl text-center ">
            My background isn't typical. With roots in networking, system
            administration, and data analysis, I build interfaces that are not
            only beautiful but technically robust. I’m currently bridging the
            gap to Full Stack development.
          </p>
          <p className="text-center ">
            Scroll down to explore my code, my professional journey, and the
            hobbies that fuel my creativity. Let’s build something lasting
            together.
          </p>
          <div className="flex justify-center w-full pt-5">
            <Link
              href={"./about_me"}
              type="button"
              className="px-4 py-2 transition-all border-2 border-black rounded-lg cursor-pointer bg-custom-addition hover:bg-custom-addition-2 text-custom-main hover:text-white hover:scale-105 active:scale-95"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="relative items-center justify-center hidden mx-15 lg:flex">
          <div className="flex justify-start items-start w-[350] h-[240] p-2 border-8 rounded-lg border-black">
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
    </>
  );
}
