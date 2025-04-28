"use client";

import { Twitter, Linkedin, GitHub } from "@/components/icons/icons";
// import { Github } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yashrajvrma",
    icon: GitHub,
    ariaLabel: "GitHub",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/theyashrajverma/",
    icon: Linkedin,
    ariaLabel: "Linkedin",
  },
  {
    name: "Twitter",
    href: "https://x.com/yashrajvrma",
    icon: Twitter,
    ariaLabel: "X (Twitter)",
  },
];

export default function Footer() {
  return (
    <div className="flex justify-center pt-16 pb-10 text-white font-sans">
      <div className="flex flex-row justify-between items-center w-[400]">
        <div className="flex justify-center items-center gap-5">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              aria-label={social.ariaLabel}
              className="text-white transition-colors duration-200 hover:text-white"
            >
              <social.icon className="h-5 w-5 transition-transform hover:scale-110" />
              <span className="sr-only">{social.ariaLabel}</span>
            </Link>
          ))}
        </div>
        <div className="text-neutral-400 sm:text-md text-sm">
          Made by Yashraj Verma
        </div>
      </div>
    </div>
  );
}
