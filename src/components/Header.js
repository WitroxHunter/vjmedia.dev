import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-[#080808] via-[#080808] to-[#00000000] text-white px-4 py-3 fixed w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <Link className="" href="/" passHref>
          <Image
            src="/Logo.svg"
            alt="Next.js logo"
            width={50}
            height={38}
            priority
          />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              About us
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">
              Our offer
            </a>
          </li>
          <li>
            <Link
              className="w-auto bg-[#d466ff] hover:bg-[#a94acf] text-white rounded-lg transition-colors flex items-center justify-center text-background text-base px-1"
              href="/contact"
              passHref
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
