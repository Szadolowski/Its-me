import Image from "next/image";
import Link from "next/link";

export default function NavInformation({
  img,
  children,
}: {
  img: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={"https://github.com/Szadolowski"} target="_blank">
      <div className="border-2 border-neutral-700 space-x-5 flex flex-row  rounded-lg items-center">
        <Image
          src={img}
          alt="alt"
          width={50}
          height={10}
          className="bg-neutral-700 p-2"
        />
        <p className="w-full text-lg font-semibold">{children}</p>
      </div>
    </Link>
  );
}
