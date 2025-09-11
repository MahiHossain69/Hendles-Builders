"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);
  const iconsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      
      gsap.from(logoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      
      gsap.from(columnsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      
      gsap.from(iconsRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="relative min-h-[800px] flex items-center">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer/footer.png"
          alt="Construction cranes and modern buildings"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={logoRef} className="mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-8 w-8 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Hendles Builders Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-mono font-medium text-white">
              Hendles Builders
            </span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
         
          <div
            ref={(el) => {
              if (el) columnsRef.current[0] = el;
            }}
            className="text-white"
          >
            <h3 className="text-2xl font-space font-bold mb-4">Fort Leburg</h3>
            <div className="space-y-1 text-base text-white font-space leading-relaxed">
              <p>123 Anywhere St.</p>
              <p>Any City, ST 12345</p>
              <p>(PWD parking available)</p>
              <p className="mt-4">Tel. (123) 456-7890</p>
              <p>Email: hello@reallygreatsite.com</p>
            </div>
          </div>

         
          <div
            ref={(el) => {
              if (el) columnsRef.current[1] = el;
            }}
            className="text-white"
          >
            <h3 className="text-2xl font-space font-bold mb-4">Office hours</h3>
            <div className="space-y-1 text-base font-space text-white leading-relaxed">
              <p>Monday to Friday</p>
              <p>9:00 am to 5:00 pm</p>
              <p className="mt-4">Weekends by appointment</p>
            </div>
          </div>

          
          <div
            ref={(el) => {
              if (el) columnsRef.current[2] = el;
            }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold font-space mb-4">Stay connected</h3>
            <div ref={iconsRef} className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
