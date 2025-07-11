"use client";
import Button from "@/components/Button";

export default function SectionOffer() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#9905FC] to-[#080808] text-white z-10">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 leading-snug">
          Turn visitors into customers with <br />
          our sales-driven websites
        </h2>

        {/* Pricing Cards */}
        <div className="flex-row flex justify-center gap-3 w-full max-w-6xl">
          {/* Starter */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 flex flex-col items-start w-80 border border-gray-700">
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
              <div className="bg-[#1a1a1a] rounded-3xl h-full w-full p-8 flex flex-col items-start">
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
          <div className="bg-[#1a1a1a] rounded-3xl p-8 flex flex-col items-start w-80 border border-gray-700">
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
