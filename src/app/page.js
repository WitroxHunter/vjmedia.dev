import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('/Background.png')]">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <div className="flex flex-col w-1/2">
          <h1 className="text-5xl font-bold">
            Crafting websites
            <br /> that drive your success
          </h1>
          <h2 className="text-[#C8C8C8] text-lg">
            We create fast, custom websites tailored to your business needs. Let
            us handle your online presence.
          </h2>
          <div className="w-full flex flex-row gap-3">
            <Link
              className="w-auto bg-[#d466ff] hover:bg-[#a94acf] text-white rounded-lg transition-colors flex items-center justify-center text-background text-base px-16 py-3"
              href="/contact"
              passHref
            >
              Contact us
            </Link>
            <Link
              className="w-auto bg-[#f0f0f013] rounded-lg text-white transition-colors flex items-center justify-center text-background gap-2 hover:bg-[#383838] text-base px-4 py-3"
              href="/blog"
              passHref
            >
              See examples
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <Image
            className="w-1/2"
            src="/Logo.svg"
            alt="Next.js logo"
            width={100}
            height={38}
            priority
          />
        </div>
      </div>
    </div>
  );
}
