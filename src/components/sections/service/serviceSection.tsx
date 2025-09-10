"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { service } from "@/app/data/service";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
     
      gsap.from(titleRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      
      gsap.from(textRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 overflow-x-hidden py-16 px-6">
      <div className="container mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:mb-36 mb-20">
          <div ref={titleRef}>
            <h2 className="text-5xl font-medium font-space text-black leading-tight">
              Services
            </h2>
          </div>
          <div ref={textRef} className="flex items-center">
            <p className="text-lg text-black font-space leading-relaxed">
              Write a paragraph that talks about your construction company here.
              Convince your prospective clients to choose you and your team for
              their construction needs by talking about your unique services, as
              well as your commitment to getting the job done.
            </p>
          </div>
        </div>

       
        <div className="grid md:grid-cols-3 gap-8">
          {service.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-space font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
