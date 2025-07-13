"use client";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import Link from "next/link";

function PricingCardNormal({ title, features = [], price, time }) {
  return (
    <div className="w-full bg-[#080808]/50 rounded-2xl p-6 text-white shadow-xl outline outline-1 outline-[#222222]">
      <h2 className="text-center text-3xl font-semibold mb-6">{title}</h2>

      <ul className="space-y-4 mb-6">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span>{item}</span>
            <Image
              src={`/icons/check-icon.svg`}
              alt="Check Icon"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </li>
        ))}
      </ul>

      <div className="border-t border-[#222222] pt-4 pb-4 text-sm flex justify-around text-gray-300">
        <div>
          <span className="text-white block mb-1">Price</span>
          <span className="bg-gradient-to-br from-[#222222] to-[#181818] border border-[#222222] text-gray-300 px-2 py-1 rounded-[4px] font-semibold tracking-wide">
            {price}
          </span>
        </div>
        <div>
          <span className="text-white block mb-1">Realization time</span>
          <span className="bg-gradient-to-br from-[#222222] to-[#181818] border border-[#222222] text-gray-300 px-2 py-1 rounded-[4px] font-semibold tracking-wide">
            {time}
          </span>
        </div>
      </div>

      <Button text="Get started" href="contact" />
    </div>
  );
}

function PricingCardSpecial({ title, features = [], price, time }) {
  return (
    <div className="relative w-full bg-[#080808]/50 rounded-2xl p-6 text-white shadow-xl outline outline-[3px] outline-[#D365FE]/30">
      <h2 className="relative text-center text-3xl font-semibold mb-6 z-10">
        {title}
      </h2>

      <ul className="relative z-10 space-y-4 mb-6">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span>{item}</span>
            <Image
              src={`/icons/check-icon.svg`}
              alt="Check Icon"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </li>
        ))}
      </ul>

      <div className="relative z-10 border-t border-[#222222] pt-4 pb-4 text-sm flex justify-around text-gray-300">
        <div>
          <span className="text-white block mb-1">Price</span>
          <span className="bg-gradient-to-br from-[#222222] to-[#181818] border border-[#222222] text-gray-300 px-2 py-1 rounded-[4px] font-semibold tracking-wide">
            {price}
          </span>
        </div>
        <div>
          <span className="text-white block mb-1">Realization time</span>
          <span className="bg-gradient-to-br from-[#222222] to-[#181818] border border-[#222222] text-gray-300 px-2 py-1 rounded-[4px] font-semibold tracking-wide">
            {time}
          </span>
        </div>
      </div>

      <div className="relative z-10">
        <Button text="Get started" href="contact" />
      </div>

      <div
        style={{
          background: "radial-gradient(circle at top, #BD4DFF 0%, #080808 50%)",
        }}
        className="absolute left-0 top-0 w-full h-full rounded-2xl opacity-20 pointer-events-none"
      ></div>
    </div>
  );
}

export default function SectionOffer() {
  return (
    <section className="relative w-full min-h-screen pt-60 bg-gradient-to-b from-[#9905FC] to-[#080808] text-white z-10">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <SectionHeading>
          <span className="drop-shadow-2xl">
            Turn visitors into customers with
            <br /> our sales-driven websites
          </span>
        </SectionHeading>

        {/* Pricing Cards */}
        <div className="w-[50%] flex-row flex justify-center gap-3">
          {/* Starter */}
          <PricingCardNormal
            title={"Starter"}
            features={["Design", "CMS", "Subpages", "Payment system"]}
            price={"200-400$"}
            time={"7-14 days"}
          />

          {/* Growth - with gradient border */}
          <PricingCardSpecial
            title={"Growth"}
            features={["Design", "CMS", "Subpages", "Payment system"]}
            price={"600-1000$"}
            time={"14-21 days"}
          />

          {/* ProCommerce */}
          <PricingCardNormal
            title={"ProCommerce"}
            features={["Design", "CMS", "Subpages", "Payment system"]}
            price={"1200-3000$"}
            time={"21-28 days"}
          />
        </div>
      </div>
    </section>
  );
}
