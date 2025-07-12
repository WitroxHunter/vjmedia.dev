"use client";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

function PricingCard() {
  return (
    <div className="w-full max-w-xs bg-gradient-to-b from-[#2c0156] to-[#14012c] rounded-2xl p-6 text-white shadow-xl border border-purple-800/50">
      <h2 className="text-center text-2xl font-bold mb-6">Growth</h2>

      <ul className="space-y-4 mb-6">
        {["Design", "CMS", "Subpages", "Payment system"].map((item, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span>{item}</span>
            <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-violet-700 rounded-md flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-purple-800/50 pt-4 text-sm flex justify-between text-gray-300">
        <div>
          <span className="text-white block mb-1">Price</span>
          <span className="bg-neutral-800 text-green-300 px-2 py-1 rounded-md font-medium tracking-wide">
            600-1000$
          </span>
        </div>
        <div>
          <span className="text-white block mb-1">Realization time</span>
          <span className="text-gray-300">7–14 days</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white py-2 rounded-xl font-semibold hover:brightness-110 transition">
        Get started
      </button>
    </div>
  );
}

export default function SectionOffer() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#9905FC] to-[#080808] text-white z-10">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12 text-center">
        <SectionHeading>
          Turn visitors into customers with
          <br /> our sales-driven websites
        </SectionHeading>

        {/* Pricing Cards */}
        <div className="flex-row flex justify-center gap-3 w-full max-w-6xl">
          {/* Starter */}
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 flex flex-col items-start w-80 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-8 text-center w-full">
              Starter
            </h3>

            <div className="space-y-4 w-full mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>CMS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Subpages</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✕</span>
                </div>
                <span className="text-gray-400">Payment system</span>
              </div>
            </div>

            <div className="mt-auto w-full">
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Price</div>
                <div className="text-lg font-semibold">200-400$</div>
              </div>
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-1">
                  Realization time
                </div>
                <div className="text-lg">7-14 days</div>
              </div>
              <Button text="Get started" href="contact" />
            </div>
          </div>

          {/* Growth - with gradient border */}
          <div className="relative w-80">
            {/* Gradient border background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-600 rounded-3xl p-[2px]">
              <div className="bg-black bg-opacity-40 rounded-3xl h-full w-full p-8 flex flex-col items-start">
                <h3 className="text-2xl font-semibold mb-8 text-center w-full">
                  Growth
                </h3>

                <div className="space-y-4 w-full mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>CMS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Subpages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Payment system</span>
                  </div>
                </div>

                <div className="mt-auto w-full">
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">Price</div>
                    <div className="text-lg font-semibold">600-1000$</div>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-1">
                      Realization time
                    </div>
                    <div className="text-lg">7-14 days</div>
                  </div>
                  <Button text="Get started" href="contact" />
                </div>
              </div>
            </div>
          </div>

          {/* ProCommerce */}
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 flex flex-col items-start w-80 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-8 text-center w-full">
              ProCommerce
            </h3>

            <div className="space-y-4 w-full mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>CMS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Subpages</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Payment system</span>
              </div>
            </div>

            <div className="mt-auto w-full">
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Price</div>
                <div className="text-lg font-semibold">1200-3000$</div>
              </div>
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-1">
                  Realization time
                </div>
                <div className="text-lg">7-14 days</div>
              </div>
              <Button text="Get started" href="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
