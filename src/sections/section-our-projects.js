"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function SectionOurProjects() {
  return (
    <section className="relative flex items-center justify-center w-full bg-[#080808] text-white z-10">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-12 text-center">
        <SectionHeading>Explore our projects</SectionHeading>
      </div>
    </section>
  );
}
