"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",   
          toggleActions: "play none none reset", 
          
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(logoRef.current, { opacity: 0, y: -30, duration: 0.8 })
        .from(titleRef.current, { opacity: 0, y: 40, duration: 1 }, "-=0.4")
        .from(buttonRef.current, { opacity: 1, scale: 0.9, duration: 0.6 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] sm:h-[550px] lg:h-[800px] overflow-hidden"
    >
      
      <div className="absolute inset-0">
        <Image
          src="/home/homebg.png"
          alt="Construction workers restoring historic stone building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      
      <div className="relative z-10 flex h-full flex-col">
        
        <header className="p-4 sm:p-6 md:p-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 sm:gap-3" ref={logoRef}>
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
        </header>

        
        <div className="flex flex-1 items-center">
          <div className="container mx-auto px-4 sm:px-0 lg:px-8 2xl:px-0">
            <div className="max-w-xl md:max-w-2xl">
              <h1
                ref={titleRef}
                className="mb-6 sm:mb-8 text-5xl lg:text-6xl font-light leading-snug sm:leading-tight text-white"
              >
                Revitalize your
                <br />
                historic structure
              </h1>

              <Button
                ref={buttonRef}
                onClick={() => setOpen(true)}
                className="bg-white cursor-pointer font-mono font-medium text-black hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base tracking-wide uppercase"
                size="lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-mono">Get in Touch</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm font-space text-black">
              Fill in your details and we’ll get back to you shortly.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg font-mono border border-gray-300 px-3 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg font-mono border border-gray-300 px-3 py-2 text-sm"
              />
              <textarea
                placeholder="Your Message"
                className="w-full rounded-lg font-mono resize-none border border-gray-300 px-3 py-2 text-sm"
                rows={3}
              />
              <Button type="submit" className="w-full cursor-pointer font-mono">
                Submit
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
