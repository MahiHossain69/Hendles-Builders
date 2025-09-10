"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface StatItemProps {
  label: string
  value: number
  suffix?: string
  duration?: number
}

function StatItem({ label, value, suffix = "", duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-3xl font-medium text-black mb-4">{label}</h3>
      <div className="text-5xl font-normal text-white">
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
  <div className="">
      <section className="bg-[#9b9b9b] lg:h-[341px] py-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem label="Year Established" value={1902} />
          <StatItem label="Skilled Artisans" value={56} />
          <StatItem label="Completed Projects" value={1000} suffix="+" />
        </div>
      </div>
    </section>
    <div className="bg-[#f6f6f6] w-full">
        <div className="container mx-auto">
        <Image  src="/stats/statsdown.png"
    alt="Decorative divider"
    width={1920}
    height={100}
    className="w-full "
    />
    </div>
    </div>
  </div>
  )
}
