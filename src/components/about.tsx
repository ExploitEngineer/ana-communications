"use client";

import { Cpu, Zap, Award, DollarSign } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-4xl font-bold md:text-5xl pb-3">
            Empowering Businesses with Human & Tech Excellence
            <span className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary/60"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Combining expert support, modern technology, and precision-driven
            billing to help you scale with confidence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Text */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-base leading-relaxed">
              At{" "}
              <span className="font-semibold text-primary">
                Ana Communications
              </span>
              , we bridge the gap between people and technology. From customer
              engagement to medical billing, our mission is to make every
              interaction efficient, empathetic, and impactful.
            </p>

            {/* Mini Features */}
            <div className="grid grid-cols-2 gap-6">
              <FeatureItem
                icon={<Zap className="h-4 w-4" />}
                title="Fast Support"
                description="Always-on assistance that keeps your business moving."
              />
              <FeatureItem
                icon={<Cpu className="h-4 w-4" />}
                title="Skilled Team"
                description="Experienced professionals delivering consistent results."
              />
              <FeatureItem
                icon={<Award className="h-4 w-4" />}
                title="Award-Winning Service"
                description="Recognized for reliability and service excellence."
              />
              <FeatureItem
                icon={<DollarSign className="h-4 w-4" />}
                title="Fair Pricing"
                description="Affordable, transparent, and value-driven solutions."
              />
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[520px] rounded-2xl border border-border overflow-hidden shadow-md">
              <Image
                src="/assets/images/agent.jpg"
                alt="Ana Communications Team"
                width={1206}
                height={612}
                className="hidden dark:block rounded-2xl object-cover"
              />
              <Image
                src="/exercice.png"
                alt="Ana Communications Team"
                width={1206}
                height={612}
                className="block dark:hidden rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Small Reusable Feature Item Component --- */
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
