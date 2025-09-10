"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
              We are a local business focusing on historic preservation, using
              traditional materials and techniques.
            </h2>

            <p className="text-white text-lg font-space leading-relaxed">
              Write a paragraph that talks about your company here. You can talk
              about your company's background, history, mission, vision, or
              philosophy. Anything that will introduce your brand's persona to
              your clients. This will help build a connection between you and
              them, that hopefully leads into a working relationship.
            </p>
          </div>

          
          <div ref={imageRef} className="relative">
            <Image
              src="/local/local.png"
              alt="Historic buildings with traditional architecture"
              width={600}
              height={400}
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
