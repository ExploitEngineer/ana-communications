"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mary Wilson",
    role: "Healthcare Client",
    avatar: "/assets/images/client-3.jpg",
    text: "Ana Communications transformed our patient support process. Their medical billing and communication solutions made our workflow seamless and reliable.",
  },
  {
    name: "Daniel Lee",
    role: "IT Partner",
    avatar: "/assets/images/client-1.jpg",
    text: "The team is exceptionally professional — from setup to support, everything runs smoothly. A trusted partner for technical excellence.",
  },
  {
    name: "Ayesha Khan",
    role: "Customer Success Lead",
    avatar: "/assets/images/client-ayesha.jpg",
    text: "Their 24/7 call center support helped us elevate our customer satisfaction rates dramatically. Highly recommended for growing businesses.",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="clients"
      className="py-24 md:py-32 bg-background text-foreground overflow-hidden relative"
    >
      <div className="mx-auto max-w-6xl px-6 text-center relative">
        <div className="mb-12 relative z-10">
          <h2 className="relative inline-block text-4xl font-bold md:text-5xl pb-3">
            What Our Clients Say
            <span className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary/60"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Trusted by businesses and professionals who rely on our
            communication and billing expertise every day.
          </p>
        </div>

        {/* Subtle inner shadow fade on edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

        {/* Slider */}
        <div ref={emblaRef} className="overflow-hidden relative z-0">
          <div className="flex touch-pan-y select-none will-change-transform">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_85%] sm:flex-[0_0_70%] lg:flex-[0_0_55%] 
                  px-4
                "
              >
                <div
                  className="
                    border border-border bg-card rounded-2xl p-8
                    shadow-[0_6px_20px_rgba(0,0,0,0.08)] 
                    dark:shadow-[0_6px_20px_rgba(255,255,255,0.08)]
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] 
                    dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)]
                    transition-shadow duration-300 
                    h-full flex flex-col justify-between
                  "
                >
                  <Quote className="mx-auto h-8 w-8 text-primary opacity-70" />
                  <p className="mt-6 text-base text-muted-foreground italic leading-relaxed">
                    “{item.text}”
                  </p>
                  <div className="mt-8 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
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

        <div className="mt-10 flex justify-center gap-4 relative z-10">
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
