import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[#080808] text-white p-4 fixed w-full">
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
              Home
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
