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
      <div className="flex flex-row items-center space-x-5 overflow-hidden border border-black rounded-lg bg-custom-secend">
        <Image
          src={img}
          alt="alt"
          width={50}
          height={10}
          className="p-2 border-r border-black bg-custom-addition"
        />
        <p className="w-full text-lg font-bold text-black">{children}</p>
      </div>
    </Link>
  );
}
