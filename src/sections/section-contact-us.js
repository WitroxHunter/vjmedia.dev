"use client";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export default function SectionContactUs() {
  return (
    <section className="relative flex items-center justify-center w-full bg-[#080808] text-white z-10">
      <div className="w-full relative z-10 flex flex-col items-center justify-center h-full px-6 py-12 text-center">
        <SectionHeading>Let's grow your business together.</SectionHeading>

        <div className="w-[40%] flex flex-col items-center space-y-4 mb-8">
          <div className="w-full">
            {/* sm:text-xl  ==  responsiveness*/}
            <p className="text-lg text-gray-300 text-left">
              Email adress<span className="text-gray-500">*</span>
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-300 bg-transparent rounded-lg border border-[#222222] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600"
            />
          </div>

          <div className="w-full">
            {/* sm:text-xl  ==  responsiveness*/}
            <p className="text-lg text-gray-300 text-left">
              What can we do for you?<span className="text-gray-500">*</span>
            </p>
            <textarea
              placeholder="We'd like to know how VJMedia can help me with…"
              className="w-full h-60 resize-none px-4 py-2 text-gray-300 bg-transparent rounded-lg border border-[#222222] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600"
            />
          </div>

          <Button text="Send" href="contact" />
        </div>
      </div>
    </section>
  );
}
