"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-4">
      <div className="w-full text-center">Our offer...</div>

      <div className="w-full flex justify-center">
        <Link
          className="bg-[#f0f0f013] rounded-lg text-white transition-colors flex items-center justify-center gap-2 hover:bg-[#383838] text-xl px-6 py-3"
          href="/"
          passHref
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
