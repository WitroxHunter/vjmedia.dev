"use client";
import Link from "next/link";
import Button from "@/components/Button";

export default function SectionOffer() {
  return (
    <>
      <div className="relative w-full">
        <img
          className="absolute left-0 w-full"
          alt="pink wave image"
          src="/pink_wave.svg"
        />
        <div className="w-full h-full min-h-[60vh] bg-gradient-to-b from-[#9905FC] to-[#111111] flex flex-col items-center justify-center text-white text-center px-6 py-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Turn visitors into customers with <br />
            our sales-driven websites
          </h2>
          <div className="flex flex-row gap-3">
            <div className="w-full bg-black rounded-lg">
              Offer 1 <Button text="Get started" href="contact" />
            </div>
            <div className="w-full bg-black rounded-lg">
              Offer 2 <Button text="Get started" href="contact" />
            </div>
            <div className="w-full bg-black rounded-lg">
              Offer 3 <Button text="Get started" href="contact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
