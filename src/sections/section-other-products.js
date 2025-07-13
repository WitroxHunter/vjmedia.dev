"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

function ProductCard({ title, desc, iconSrc, bgSrc }) {
  return (
    <div className="relative w-full rounded-xl bg-[radial-gradient(ellipse_at_top,_#222222,_rgba(8,8,8,0))] p-4 pb-6 pl-6 pr-6 border border-[#222222] overflow-hidden">
      <div className="flex flex-row items-center space-x-2">
        <Image
          src={iconSrc}
          alt={`${title} Icon`}
          width={20}
          height={20}
          className="h-[22px] w-[22px] m-0"
        />

        <h3 className="text-[28px] font-semibold text-left text-gray-200">
          {title}
        </h3>
      </div>

      <p className="text-[#BCBCBC] text-left">{desc}</p>

      <Image
        src={bgSrc}
        alt={`${title} Background`}
        width={100}
        height={100}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
      />
    </div>
  );
}

export default function SectionOtherProducts() {
  return (
    <section className="relative flex items-center justify-center w-full bg-[#080808] text-white z-10">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-12 text-center">
        <SectionHeading>Our other products</SectionHeading>

        <div className="max-w-[60%] w-full grid grid-cols-3 gap-4 mb-4">
          <ProductCard
            title="Branding"
            desc="Complete brand identities tailored to your vision and audience."
            iconSrc={"/icons/branding-icon.svg"}
            bgSrc={"/graphics/cards/branding.webp"}
          />
          <ProductCard
            title="UX & UI design"
            desc="User-first layouts designed for clarity, beauty, and conversion."
            iconSrc={"/icons/ux-ui-icon.svg"}
            bgSrc={"/graphics/cards/ux-ui.webp"}
          />
          <ProductCard
            title="Custom graphics"
            desc="Tailored visuals for websites, social media, and print."
            iconSrc={"/icons/custom-graphics-icon.svg"}
            bgSrc={"/graphics/cards/custom-graphics.webp"}
          />

          <ProductCard
            title="Logos"
            desc="Unique and memorable logo designs that define your business."
            iconSrc={"/icons/logos-icon.svg"}
            bgSrc={"/graphics/cards/logos.webp"}
          />
          <ProductCard
            title="Website hosting"
            desc="Reliable, fast and secure hosting for all our websites."
            iconSrc={"/icons/website-hosting-icon.svg"}
            bgSrc={"/graphics/cards/website-hosting.webp"}
          />
          <ProductCard
            title="Motion graphics"
            desc="Smooth, animated elements that bring your content to life."
            iconSrc={"/icons/motion-graphics-icon.svg"}
            bgSrc={"/graphics/cards/motion-graphics.webp"}
          />

          <ProductCard
            title="Business cards"
            desc="Modern, print-ready cards that leave a lasting impression."
            iconSrc={"/icons/business-card-icon.svg"}
            bgSrc={"/graphics/cards/business-cards.webp"}
          />
          <ProductCard
            title="Video editing"
            desc="Clean, dynamic edits for reels, ads, promos and more."
            iconSrc={"/icons/video-editing-icon.svg"}
            bgSrc={"/graphics/cards/video-editing.webp"}
          />
          <ProductCard
            title="3D modeling"
            desc="Simple, clean 3D assets to elevate your brand visuals."
            iconSrc={"/icons/3d-modeling-icon.svg"}
            bgSrc={"/graphics/cards/3d-modeling.webp"}
          />
        </div>

        <Button text="Let's work together!" href="contact" />
      </div>
    </section>
  );
}
