"use client";
import Link from "next/link";

export default function Button({ children }) {
  return (
    <>
      <h2 className="text-4xl sm:text-5xl font-semibold mb-8 leading-snug">
        {children}
      </h2>
    </>
  );
}
