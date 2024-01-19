import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-16 mx-auto">
      <h1 className="font-bold text-3xl w-full mt-12 mb-12 text-center dark:text-white">
        Homepage
      </h1>
      <Link href="/">
        <Image
          src="/images/giposkilogo.png"
          alt="logo"
          width={100}
          height={100}
          className="mx-auto mb-10"
        />
      </Link>
      <section className="grid grid-cols-4 gap-12 text-justify">
        <article>
          <h2 className="font-bold text-xl w-full mt-12 mb-12 text-left dark:text-white">
            Some Topic 1
          </h2>
          <Link href="/">
            <Image
              src="/images/mywebman.png"
              alt="logo"
              width={100}
              height={100}
              className="mx-auto mb-10"
            />
          </Link>
          <p className="dark:text-gray-400">
            Some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nesciunt mollitia unde sequi magnam, cum odit, provident nihil et
            blanditiis sed facere natus quam doloremque dignissimos aperiam rem
            necessitatibus iure.
          </p>
        </article>
        <article>
          <h2 className="font-bold text-xl w-full mt-12 mb-12 text-left dark:text-white">
            Some Topic 2
          </h2>
          <Link href="/">
            <Image
              src="/images/mywebwoman.png"
              alt="logo"
              width={100}
              height={100}
              className="mx-auto mb-10"
            />
          </Link>
          <p className="dark:text-gray-400">
            Some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nesciunt mollitia unde sequi magnam, cum odit, provident nihil et
            blanditiis sed facere natus quam doloremque dignissimos aperiam rem
            necessitatibus iure.
          </p>
        </article>
        <article>
          <h2 className="font-bold text-xl w-full mt-12 mb-12 text-left dark:text-white">
            Some Topic 3
          </h2>
          <Link href="/">
            <Image
              src="/images/mywebboy.png"
              alt="logo"
              width={100}
              height={100}
              className="mx-auto mb-10"
            />
          </Link>
          <p className="dark:text-gray-400 mb-40">
            Some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nesciunt mollitia unde sequi magnam, cum odit, provident nihil et
            blanditiis sed facere natus quam doloremque dignissimos aperiam rem
            necessitatibus iure.
          </p>
        </article>
        <article>
          <h2 className="font-bold text-xl w-full mt-12 mb-12 text-left dark:text-white">
            Some Topic 4
          </h2>
          <Link href="/">
            <Image
              src="/images/mywebgirl.png"
              alt="logo"
              width={100}
              height={100}
              className="mx-auto mb-10"
            />
          </Link>
          <p className="dark:text-gray-400 mb-40">
            Some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nesciunt mollitia unde sequi magnam, cum odit, provident nihil et
            blanditiis sed facere natus quam doloremque dignissimos aperiam rem
            necessitatibus iure.
          </p>
        </article>
      </section>
    </main>
  );
}
