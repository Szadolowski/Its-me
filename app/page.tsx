import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-black text-4xl">Get to know me</h1>
      <h3 className="font-semibold text-2xl">
        Frontend Developer with a Full Stack mindset
      </h3>
      <p className="w-2/5 text-center text-xl">
        My background isn't typical. With roots in networking, system
        administration, and data analysis, I build interfaces that are not only
        beautiful but technically robust. I’m currently bridging the gap to Full
        Stack development.
      </p>
      <p className="w-2/5 text-center">
        Scroll down to explore my code, my professional journey, and the hobbies
        that fuel my creativity. Let’s build something lasting together.
      </p>
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
