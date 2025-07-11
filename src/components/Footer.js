"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative">
      <div className="h-full bg-[#111111]">
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
          <div className="flex space-y-2 justify-center items-center flex-col">
            <Link
              href="http://wrzutnia.ovh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                height={28}
                width={28}
                className="w-[28px] h-auto"
              />
            </Link>

            <Link
              href="http://wrzutnia.ovh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                height={28}
                width={28}
                className="w-[28px] h-auto"
              />
            </Link>

            <Link
              href="http://wrzutnia.ovh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                height={28}
                width={28}
                className="w-[28px] h-auto"
              />
            </Link>

            <Link
              href="http://wrzutnia.ovh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                height={28}
                width={28}
                className="w-[28px] h-auto"
              />
            </Link>
          </div>
          {/* Footer Links VJMedia*/}
          <div className="flex flex-col space-y-0 text-white self-start">
            <p className="font-semibold text-2xl">VJMedia</p>
            <span className="text-base text-gray-400 text-left">About us</span>
            <span className="text-base text-gray-400 text-left">Our offer</span>
            <span className="text-base text-gray-400 text-left">
              Testimonials
            </span>
            <span className="text-base text-gray-400 text-left">Contact</span>
          </div>
          {/* Footer Links Our services*/}
          <div className="flex flex-col space-y-0 text-white self-start">
            <p className="font-semibold text-2xl">Our services</p>
            <span className="text-base text-gray-400 text-left">
              Business cards
            </span>
            <span className="text-base text-gray-400 text-left">Websites</span>
            <span className="text-base text-gray-400 text-left">Graphics</span>
            <span className="text-base text-gray-400 text-left">Videos</span>
          </div>
          {/* Footer Links Social Media*/}
          <div className="flex flex-col space-y-0 text-white self-start">
            <p className="font-semibold text-2xl">Social Media</p>
            <span className="text-base text-gray-400 text-left">Instagram</span>
            <span className="text-base text-gray-400 text-left">Youtube</span>
            <span className="text-base text-gray-400 text-left">LinkedIn</span>
          </div>
        </div>
        <div className="text-gray-500 text-sm align-center mt-8">
          &copy; VJMedia 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
