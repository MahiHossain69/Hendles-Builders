"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { localData } from "@/app/data/localData"; // 👈 import data

gsap.registerPlugin(ScrollTrigger);

const LocalSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black overflow-x-hidden text-white py-16 px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
         
          <div ref={textRef} className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-space font-normal leading-tight">
              {localData.heading}
            </h2>

            <p className="text-white text-lg font-space leading-relaxed">
              {localData.description}
            </p>
          </div>

         
          <div ref={imageRef} className="relative">
            <Image
              src={localData.image.src}
              alt={localData.image.alt}
              width={localData.image.width}
              height={localData.image.height}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSection;
