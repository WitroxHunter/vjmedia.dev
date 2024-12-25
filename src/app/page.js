import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <div className="flex flex-col w-1/2">
          <h1 className="text-5xl font-bold">
            Crafting websites
            <br /> that drive your success
          </h1>
          <h2 className="text-[#C8C8C8]">
            We’re here to elevate your online business. Websites, animations,
            videos – everything you need, all in one place.
          </h2>
          <div className="w-full flex flex-row">
            <Link
              className="w-1/3 bg-[#D466FF] hover:bg-[#a94acf] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/contact"
              passHref
            >
              Contact us
            </Link>
            <Link
              className="w-1/4 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/blog"
              passHref
            >
              About
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
