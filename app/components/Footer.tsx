import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-600 p-4 mt-5 relative bottom-0 right-0 left-0 drop-shadow-xl z-10">
      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-2 text-white text-2xl lg:text-4xl">
        <Link
          className="text-white/90 hover:text-white"
          href="https://www.youtube.com/@DaveGrayTeachesCode"
        >
          <FaYoutube />
        </Link>
        <Link
          className="text-white/90 hover:text-white"
          href="https://courses.davegray.codes/"
        >
          <FaLaptop />
        </Link>
        <Link
          className="text-white/90 hover:text-white"
          href="https://github.com/gitdagray"
        >
          <FaGithub />
        </Link>
        <Link
          className="text-white/90 hover:text-white"
          href="https://twitter.com/yesdavidgray"
        >
          <FaTwitter />
        </Link>
      </div>
      <Image
        src="/images/linefamily.png"
        alt="giposki logo"
        width={2000}
        height={50}
        className="mx-auto mt-10 mb-0"
      />
    </footer>
  );
}
