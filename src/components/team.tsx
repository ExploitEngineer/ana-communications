"use client";

import Link from "next/link";

const members = [
  {
    name: "Omar Khan",
    role: "Chief Executive",
    avatar: "/assets/images/person-1.jpeg",
    link: "#",
  },
  {
    name: "Aftab",
    role: "Chief Executive Officer (CEO)",
    avatar: "/assets/images/person-2.jpeg",
    link: "#",
  },
  {
    name: "Ubaid Sohail",
    role: "Floor Manager",
    avatar: "/assets/images/person-3.jpeg",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-4xl font-bold md:text-5xl pb-3">
            Meet Our Team Members
            <span className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary/60"></span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            The dedicated professionals behind our success — leading with
            vision, expertise, and commitment to excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden transition-all"
              >
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt={member.name}
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      _0{index + 1}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      Linktree
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
