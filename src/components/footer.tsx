"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";
import { MapPin, Phone, Twitter, Linkedin, Instagram } from "lucide-react";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Clients", href: "#clients" },
  { title: "Team", href: "#team" },
];

export default function FooterSection() {
  return (
    <footer className="relative border-t border-border bg-background py-16 text-center">
      {/* Subtle top divider */}
      <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Logo */}
        <div className="mx-auto mb-6 w-fit">
          <Logo />
        </div>

        {/* Navigation Links */}
        <nav className="mb-8 flex flex-wrap justify-center gap-6 text-sm font-medium">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="mb-10 space-y-3 text-sm text-muted-foreground">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <MapPin className="size-4 text-primary shrink-0" />
            <p>
              <span className="font-medium text-foreground">Location:</span> 40
              Murree Rd, Shamsabad, Rawalpindi, 46000, Pakistan — 1st Floor,
              Office #19
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <Phone className="size-4 text-primary shrink-0" />
            <p>
              <span className="font-medium text-foreground">Phone:</span>{" "}
              <Link
                href="https://wa.me/923377777666"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                +92 337 7776666
              </Link>{" "}
              (WhatsApp)
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mb-8 flex justify-center gap-6">
          <Link
            href="#"
            aria-label="Twitter / X"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            <Twitter className="size-5 md:size-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ana-communication-b97a89385"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            <Linkedin className="size-5 md:size-6" />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            <Instagram className="size-5 md:size-6" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">
            Ana Communications
          </span>
          . All rights reserved.
        </p>
      </div>

      {/* Elegant gradient underline (optional visual detail) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></div>
    </footer>
  );
}
