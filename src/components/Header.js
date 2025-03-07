"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full py-3 text-white transition-all duration-200 z-50 ${
        isScrolled ? "bg-[#080808] bg-opacity-100" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            src="/Logo.svg"
            alt="Next.js logo"
            width={65}
            height={50}
            priority
          />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <a href="/about" className="hover:underline">
              About us
            </a>
          </li>
          <li>
            <a href="/offer" className="hover:underline">
              Our offer
            </a>
          </li>
          <li>
            <Link
              className="w-auto relative bg-gradient-to-r from-[#D466FF] to-[#9905FC] hover:bg-[#a94acf] text-white rounded-lg transition-colors flex items-center justify-center text-background text-base px-3 py-1 -top-1"
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
