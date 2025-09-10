"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const testimonials = [
    {
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      client: "Bass Co.",
    },
    {
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      client: "Mitcheur Law",
    },
    {
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable. Add them here!",
      client: "Studio Rallia",
    },
  ];

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
    <section ref={sectionRef} className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
       
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-medium font-space text-black mb-12 lg:mb-40"
        >
          From Our Satisfied Clients
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-transparent"
            >
              <p className="text-gray-600 font-pt text-base leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <p className="text-black font-mono font-medium">- {testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
