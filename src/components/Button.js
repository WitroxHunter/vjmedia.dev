"use client";
import Link from "next/link";

export default function Button(children) {
  return (
    <>
      <Link
        className="relative overflow-hidden bg-gradient-to-r from-[#D466FF] to-[#9905FC] text-white rounded-lg transition-colors flex items-center justify-center text-xl px-16 py-2 group border border-[#D466FF]"
        href={children.href}
        passHref
      >
        <span className="absolute inset-0 bg-[#9f24e1] w-0 group-hover:w-full transition-all duration-300"></span>
        <span className="relative">{children.text}</span>
      </Link>
    </>
  );
}
