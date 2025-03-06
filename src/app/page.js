"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      scale={0.25}
      position={[0, 0, 0]}
      rotation={rotation}
    />
  );
}

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-[url('/Background.png')] bg-cover bg-center">
      <div className="flex gap-10 items-center flex-col sm:flex-row w-4/5 max-w-6xl min-h-[80vh]">
        <div className="flex flex-col w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Crafting websites
            <br /> that drive your success
          </h1>
          <h2 className="text-[#C8C8C8] text-xl mt-4">
            We create fast, custom websites tailored to your business needs. Let
            us handle your online presence.
          </h2>
          <div className="w-full flex flex-row gap-3 mt-6 justify-center sm:justify-start">
            <Link
              className="bg-[#d466ff] hover:bg-[#a94acf] text-white rounded-lg transition-colors flex items-center justify-center text-base px-20 py-3"
              href="/contact"
              passHref
            >
              Contact us
            </Link>
            <Link
              className="bg-[#f0f0f013] rounded-lg text-white transition-colors flex items-center justify-center gap-2 hover:bg-[#383838] text-base px-6 py-3"
              href="/blog"
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] sm:max-w-[450px] min-h-[90vh] h-[600px] z-10 flex items-center justify-center">
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
    </div>
  );
}
