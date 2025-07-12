"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

function FAQuestion({ question, answer }) {
  return (
    <div className="w-full pl-20 pr-20 mb-8 cursor-pointer">
      <div className="flex flex-row items-center justify-between mb-2">
        <h3 className="text-lg text-gray-300">{question}</h3>
        <Image
          src="/icons/arrow-down.svg"
          alt="Arrow Down Icon"
          width={24}
          height={24}
          className="h-[12px] w-auto m-0"
        />
        {/*<p className="text-gray-300">{answer}</p>*/}
      </div>

      <div className="w-full h-px bg-gray-300" />
    </div>
  );
}

export default function SectionFAQ() {
  return (
    <section className="relative flex items-center justify-center w-full bg-[#080808] text-white z-10">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-12 text-center">
        <SectionHeading>Frequently Asked Questions</SectionHeading>

        <div className="max-w-[50%] w-full">
          <FAQuestion
            question="What services do you offer?"
            answer="We offer a range of services including business cards, websites, graphics, and videos."
          />
          <FAQuestion
            question="How can I contact you?"
            answer="You can contact us through our website or social media channels."
          />
          <FAQuestion
            question="Do you have a portfolio?"
            answer="Yes, we have a portfolio showcasing our previous work available on our website."
          />
        </div>
      </div>
    </section>
  );
}
