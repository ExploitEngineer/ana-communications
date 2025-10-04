"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Malik",
    role: "Healthcare Client",
    avatar: "/assets/images/person-1.jpeg",
    text: "Ana Communications transformed our patient support process. Their medical billing and communication solutions made our workflow seamless and reliable.",
  },
  {
    name: "Daniel Lee",
    role: "IT Partner",
    avatar: "/assets/images/person-2.jpeg",
    text: "The team is exceptionally professional — from setup to support, everything runs smoothly. A trusted partner for technical excellence.",
  },
  {
    name: "Ayesha Khan",
    role: "Customer Success Lead",
    avatar: "/assets/images/person-3.jpeg",
    text: "Their 24/7 call center support helped us elevate our customer satisfaction rates dramatically. Highly recommended for growing businesses.",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="relative inline-block text-4xl font-bold md:text-5xl pb-3">
            What Our Clients Say
            <span className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary/60"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Trusted by businesses and professionals who rely on our
            communication and billing expertise every day.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_60%] px-4"
              >
                <div className="border border-border bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                  <Quote className="mx-auto h-8 w-8 text-primary opacity-70" />
                  <p className="mt-6 text-base text-muted-foreground italic leading-relaxed">
                    “{item.text}”
                  </p>
                  <div className="mt-8 flex flex-col items-center">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <h3 className="mt-4 font-medium">{item.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="rounded-full border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Prev
          </button>
          <button
            onClick={scrollNext}
            className="rounded-full border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
