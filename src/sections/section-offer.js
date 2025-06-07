"use client";
import Button from "@/components/Button";

export default function SectionOffer() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#9905FC] to-[#111111] text-white z-10">
      {/* Zawartość */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 leading-snug">
          Turn visitors into customers with <br />
          our sales-driven websites
        </h2>

        {/* Oferty */}
        <div className="flex-row flex justify-center gap-6 w-full max-w-6xl">
          {/* Starter */}
          <div className="bg-[#080808b4] rounded-3xl p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">Starter</h3>
            <ul className="space-y-2 text-left w-full mb-6">
              <li>✅ Design</li>
              <li>✅ CMS</li>
              <li>✅ Subpages</li>
              <li>❌ Payment system</li>
            </ul>
            <div className="mb-2">
              💰 <span className="font-semibold">200-400$</span>
            </div>
            <div className="mb-6">⏱️ 7–14 days</div>
            <Button text="Get started" href="contact" />
          </div>

          {/* Growth */}
          <div className="bg-[#080808b4] rounded-3xl p-8 flex flex-col items-center border-2 border-purple-500 border-4 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Growth</h3>
            <ul className="space-y-2 text-left w-full mb-6">
              <li>✅ Design</li>
              <li>✅ CMS</li>
              <li>✅ Subpages</li>
              <li>✅ Payment system</li>
            </ul>
            <div className="mb-2">
              💰 <span className="font-semibold">600-1000$</span>
            </div>
            <div className="mb-6">⏱️ 7–14 days</div>
            <Button text="Get started" href="contact" />
          </div>

          {/* ProCommerce */}
          <div className="bg-[#080808b4] rounded-3xl p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">ProCommerce</h3>
            <ul className="space-y-2 text-left w-full mb-6">
              <li>✅ Design</li>
              <li>✅ CMS</li>
              <li>✅ Subpages</li>
              <li>✅ Payment system</li>
            </ul>
            <div className="mb-2">
              💰 <span className="font-semibold">1200-3000$</span>
            </div>
            <div className="mb-6">⏱️ 7–14 days</div>
            <Button text="Get started" href="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
