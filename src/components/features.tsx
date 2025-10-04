"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Headphones,
  HeartPulse,
  Cpu,
  BarChart3,
  Users2,
  Globe,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Inbound & Outbound Support",
      description:
        "Deliver smooth and reliable communication through professional inbound and outbound services.",
      icon: Headphones,
    },
    {
      title: "Medical Billing Expertise",
      description:
        "Simplify billing with accurate claims, faster reimbursements, and full-cycle revenue support.",
      icon: HeartPulse,
    },
    {
      title: "AI-Powered Communication",
      description:
        "Automate workflows and enhance call efficiency with smart AI-driven solutions.",
      icon: Cpu,
    },
    {
      title: "Performance Analytics",
      description:
        "Gain actionable insights with real-time analytics and performance tracking tools.",
      icon: BarChart3,
    },
    {
      title: "Customer Engagement",
      description:
        "Strengthen relationships through voice, chat, and email support built for responsiveness.",
      icon: Users2,
    },
    {
      title: "Global IT Infrastructure",
      description:
        "Empower your operations with scalable IT systems and secure, reliable networks.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Section Heading */}
        <div className="inline-block mb-12">
          <h2 className="relative inline-block text-4xl font-bold md:text-5xl pb-3">
            Excellence in Every Connection
            <span className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary/60"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Powering businesses with intelligent call center and medical billing
            solutions that combine technology, precision, and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border border-border bg-card p-6 text-left shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <CardHeader className="flex items-center gap-4 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
