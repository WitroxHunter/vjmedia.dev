"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

function ProductCard({ title, desc, iconSrc, bgSrc }) {
  return (
    <div className="w-full mb-8 ">
      <div className="flex flex-row items-center justify-between space-x-2 mb-2">
        <Image
          src={iconSrc}
          alt={`${title} Icon`}
          width={20}
          height={20}
          className="h-[24px] w-auto m-0"
        />

        <h3 className="text-3xl font-semibold text-left text-gray-300">
          {title}
        </h3>
      </div>

      <p className="text-gray-400 text-left mb-4">{desc}</p>
    </div>
  );
}

export default function SectionOtherProducts() {
  return (
    <section className="relative flex items-center justify-center w-full bg-[#080808] text-white z-10">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-12 text-center">
        <SectionHeading>Our other products</SectionHeading>
        <div className="max-w-[40%] w-full grid grid-cols-3 gap-8">
          <ProductCard
            title="Branding"
            desc="Complete brand identities tailored to your vision and audience."
            iconSrc={"/icons/branding-icon.svg"}
          />
        </div>
      </div>
    </section>
  );
}
