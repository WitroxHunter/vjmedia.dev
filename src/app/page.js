"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionOffer from "@/sections/section-offer";
import SectionProcess from "@/sections/section-process";
import SectionOtherProducts from "@/sections/section-other-products";
import SectionContactUs from "@/sections/section-contact-us";
import SectionFAQ from "@/sections/section-faq";

function MobilePhone() {
  const phone = useFBX("/MobilePhone_01.fbx");
  const [rotation, setRotation] = useState([0, -0.3, -0.03]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX / window.innerWidth - 0.5;
      setRotation([0, mouseX * 0.5 - 0.3, -0.03]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <primitive
      object={phone}
      scale={window.innerWidth < 640 ? 0.17 : 0.25}
      position={[0, 0, 0]}
      rotation={rotation}
    />
  );
}

export default function Home() {
  return (
    <>
      <section className="relative w-screen min-h-screen flex flex-col justify-center items-center bg-[url('/bg_hero.png')] bg-cover bg-center pt-16 z-0">
        <div className="flex gap-10 items-center flex-col sm:flex-row w-5/6 max-w-7xl min-h-[80vh]">
          <div className="flex flex-col w-full sm:w-1/2 text-center sm:text-left sm:mt-0 mt-48">
            <h1 className="sm:text-6xl text-4xl font-bold leading-tight">
              Crafting <span className="text-[#B533FD]">websites</span>
              <br />
              that drive your <span className="text-[#B533FD]">success</span>
            </h1>
            <h2 className="text-[#C8C8C8] sm:text-2xl text-xl mt-4">
              We create fast, custom websites tailored to your business needs.
              Let us handle your online presence.
            </h2>
            <div className="w-full flex flex-col sm:flex-row gap-3 mt-6 justify-center sm:justify-start">
              <Link
                className="relative overflow-hidden bg-gradient-to-r from-[#D466FF] to-[#9905FC] text-white rounded-lg transition-colors flex items-center justify-center text-2xl px-20 py-3 group"
                href="/contact"
                passHref
              >
                <span className="absolute inset-0 bg-[#9f24e1] w-0 group-hover:w-full transition-all duration-300"></span>
                <span className="relative">Contact us</span>
              </Link>
              <Link
                className="bg-[#f0f0f013] rounded-lg text-white transition-colors flex items-center justify-center gap-2 hover:bg-[#383838] text-2xl px-6 py-3"
                href="/portfolio"
                passHref
              >
                See examples
              </Link>
            </div>
          </div>
          <div className="relative w-full sm:w-1/2 flex justify-center">
            <Image
              className="relative z-0 w-5/6 max-w-xs sm:max-w-md"
              src="/hero.png"
              alt="Hero Image"
              width={400}
              height={216}
              priority
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] sm:max-w-[450px] min-h-[50vh] sm:min-h-[90vh] h-[500px] sm:h-[600px] z-10 flex items-center justify-center">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[-20, 0, 20]} intensity={0.3} />
                <Suspense fallback={null}>
                  <MobilePhone />
                </Suspense>
                <OrbitControls
                  enableRotate={false}
                  enableZoom={false}
                  enablePan={false}
                />
              </Canvas>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-[3]">
          <Image
            src="/icons/scroll-down-icon.svg"
            alt="VJMedia Logo"
            width={20}
            height={20}
            className="h-[36px] w-auto "
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/0 from-50% to-[#9905FC] z-[2]">
          <Image
            src="/graphics/purple-waves.svg"
            alt="VJMedia Logo"
            width={1920}
            height={100}
            className="h-[169px] w-full object-cover"
          />
        </div>
      </section>
      <SectionOffer />
      <SectionProcess />
      <SectionOtherProducts />
      <SectionContactUs />
      <SectionFAQ />
    </>
  );
}
