"use client";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

export default function SectionProcess() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-[#080808] text-white z-10">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-12">
        <SectionHeading>How we take on the development</SectionHeading>

        <div className="relative z-10 flex flex-row items-center justify-center gap-3 h-full w-[60%]">
          <div className="relative z-10 flex flex-col items-center justify-center gap-1 h-fit bg-[#111] p-2 text-4xl font-bold rounded-full border border-[#222]">
            <div className="flex items-center justify-center bg-gradient-to-br from-[#D466FF] to-[#9905FC] w-14 h-14 rounded-full">
              1
            </div>
            <div className="flex items-center justify-center text-[#888] w-14 h-14">
              2
            </div>
            <div className="flex items-center justify-center text-[#888] w-14 h-14">
              3
            </div>
            <div className="flex items-center justify-center text-[#888] w-14 h-14">
              4
            </div>
          </div>

          <div className="min-h-96 w-full relative flex flex-col gap-3 p-6 rounded-3xl bg-[#111] border border-[#222] overflow-hidden">
            <div className="relative flex items-center flex-row gap-2 z-20">
              <div className="text-4xl font-bold flex items-center justify-center bg-gradient-to-br from-[#D466FF] to-[#9905FC] w-14 h-14 rounded-full shrink-0">
                1
              </div>
              <div className="w-full">
                <div className="font-semibold text-3xl w-full">
                  Discovery stage
                </div>
                <div className="text-[#c8c8c8] w-full">
                  Understanding Your Needs & Goal
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 text-[#bcbcbc] z-20">
              <p className="flex flex-row gap-1">
                <Image
                  src={"icons/point-icon.svg"}
                  alt={`Point icon`}
                  width={20}
                  height={20}
                />
                We discuss your vision, requirements, and business goals.
              </p>
              <p className="flex flex-row gap-1">
                <Image
                  src={"icons/point-icon.svg"}
                  alt={`Point icon`}
                  width={20}
                  height={20}
                />
                We analyze your competition and target audience.
              </p>
              <p className="flex flex-row gap-1">
                <Image
                  src={"icons/point-icon.svg"}
                  alt={`Point icon`}
                  width={20}
                  height={20}
                />
                We define the project's scope and key features.
              </p>
            </div>

            <div className="relative w-fit flex flex-row mt-auto gap-2 text-[#c8c8c8] bg-[#181818] rounded-full p-2 pl-6 z-20">
              <div className="text-right text-sm">
                Technologies
                <br />
                used:
              </div>

              <div className="flex items-center flex-row gap-2 bg-[#111] rounded-full p-2 pl-4 pr-4">
                <Image
                  src={"/icons/react-icon.png"}
                  alt={`React icon`}
                  width={20}
                  height={20}
                  className="h-[20px] w-auto"
                />
                React
              </div>

              <div className="flex items-center flex-row gap-2 bg-[#111] rounded-full p-2 pl-4 pr-4">
                <Image
                  src={"/icons/tailwind-icon.png"}
                  alt={`Tailwind icon`}
                  width={20}
                  height={20}
                  className="h-[20px] w-auto"
                />
                Tailwind
              </div>

              <div className="flex items-center flex-row gap-2 bg-[#111] rounded-full p-2 pl-4 pr-4">
                <Image
                  src={"/icons/nextjs-icon.png"}
                  alt={`Next.js icon`}
                  width={20}
                  height={20}
                  className="h-[20px] w-auto"
                />
                Next.js
              </div>
            </div>

            <Image
              src={"/graphics/process/process-stage-2.png"}
              alt="Process Stage 2"
              width={100}
              height={100}
              className="absolute right-0 top-0 h-full w-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
