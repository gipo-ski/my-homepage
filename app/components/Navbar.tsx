import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
      <nav className="bg-slate-600 w-full p-4 px-16 sticky top-0 right-0 left-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <div className="flex">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
              <Link
                href="/"
                className="text-white/90 no-underline hover:text-white"
              >
                <Image
                  src="/images/giposkilogoSMALL.png"
                  alt="giposki logo"
                  width={150}
                  height={51}
                />
              </Link>
            </h1>
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <Link
              href="/"
              className="text-white/90 no-underline hover:text-white p-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/90 no-underline hover:text-white p-4"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white/90 no-underline hover:text-white p-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
}

