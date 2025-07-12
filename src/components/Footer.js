"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    href: "http://wrzutnia.ovh/",
    icon: "/icons/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "http://wrzutnia.ovh/",
    icon: "/icons/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "http://wrzutnia.ovh/",
    icon: "/icons/youtube.svg",
    alt: "YouTube",
  },
  {
    href: "http://wrzutnia.ovh/",
    icon: "/icons/github.svg",
    alt: "GitHub",
  },
];

function SocialLinks() {
  return (
    <div className="flex space-y-2 justify-center items-center flex-col">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={link.icon}
            alt={link.alt}
            width={28}
            height={28}
            className="w-[28px] h-auto"
          />
        </Link>
      ))}
    </div>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div className="flex flex-col space-y-0 text-white self-start">
      <p className="font-semibold text-2xl">{title}</p>
      {items.map((item, i) => (
        <span key={i} className="text-base text-gray-400 text-left">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative">
      <div className="h-full bg-[#080808]">
        <Image
          src="/graphics/black-waves.svg"
          alt="VJMedia Logo"
          width={1920}
          height={100}
          className="h-[169px] w-full object-cover"
        />
      </div>
      <footer className="bg-black flex items-center justify-center flex-col text-white pt-14 pb-4">
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <div>
            <Link
              href="http://wrzutnia.ovh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Logo.svg"
                alt="VJMedia Logo"
                height={64}
                width={160}
                className="h-[64px] w-auto"
              />
            </Link>
          </div>

          {/* Social Media Icons */}
          <SocialLinks />

          {/* Footer Links VJMedia*/}
          <FooterLinks
            title="VJMedia"
            items={["About us", "Our offer", "Testimonials", "Contact"]}
          />

          {/* Footer Links Our services*/}
          <FooterLinks
            title="Our Services"
            items={["Business cards", "Websites", "Graphics", "Videos"]}
          />

          {/* Footer Links Social Media*/}
          <FooterLinks
            title="Social Media"
            items={["Instagram", "Youtube", "LinkedIn"]}
          />
        </div>
        <div className="text-gray-600 text-sm align-center mt-8">
          &copy; VJMedia 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
