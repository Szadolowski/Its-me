export default function AboutMePage() {
  const calculateYearsSince = (date: string) => {
    const startDate = new Date(date);
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const m = today.getMonth() - startDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
      years--;
    }
    return years;
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-left">Hi, I'm Rafał Curzydło.</h2>
      <ul className="flex flex-col gap-6 list-disc border-l-2 pl-[14]">
        <li>
          <h3 className="text-2xl font-semibold">
            I am a {calculateYearsSince("2004-03-16")}-year-old Front-end
            Developer and IT Specialist based in Poland. Currently, I combine my
            Computer Science studies with professional work, focusing on
            building practical, efficient, and well-structured web applications.
          </h3>
        </li>
        <li>
          <p>
            What I do My primary expertise lies in the React ecosystem. I
            specialize in building responsive interfaces using React, Next.js,
            and TailwindCSS. At my current position at Laskopol Sp. z o.o., I
            design and implement internal dashboards that help the company
            manage data, generate reports, and handle logistics.
          </p>
        </li>
        <li>
          <p>
            However, I am not limited to the front-end. My background includes
            solid experience in IT administration and networking. I work with
            SQL databases, configure LAN/WAN networks (MikroTik, Cisco), and
            manage server environments. This allows me to look at web
            development broadly—I understand not just the code running in the
            browser, but the infrastructure that supports it.
          </p>
        </li>
        <li>
          <p>
            My Approach I believe in writing clean, maintainable code and
            constantly learning. I am actively bridging the gap between
            front-end and back-end, aiming to become a complete Full Stack
            Developer.
          </p>
        </li>
        <li>
          <p>
            Beyond the Code Technology is more than just a job for me; it is a
            genuine passion. Even in my free time, I enjoy building computers
            and experimenting with network management.
          </p>
        </li>
        <li>
          <p>
            Outside of IT, I am a huge automotive enthusiast. Whether it's
            following the engineering battles in Formula 1, competing in
            simracing, or doing basic mechanics on my own car, I appreciate
            precision and performance. I also find balance in playing and
            listening to music, and whenever time and resources allow, I enjoy
            traveling to discover new places.
          </p>
        </li>
        <li>
          <p>
            Get the Full Picture While this page tells you who I am, the rest of
            this portfolio shows exactly what I can do. I invite you to browse
            the Skills section to see my technical toolkit in detail, or visit
            the Projects page to see how I apply this knowledge in real-world
            scenarios.
          </p>
        </li>
      </ul>
    </>
  );
}
