"use client";

import { useEffect, useState } from "react";
import { AnimatedNumber } from "../ui/animated-number";
import { ButtonColorful } from "../ui/button-colorful";
import { Input } from "../ui/input";
import Image from "next/image";
import HeroImg from "../../public/assets/images/hero-img-3.png";

export default function Hero() {
  const [signupCount, setSignupCount] = useState<number>(1000);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setSignupCount(500);
    const timer = setTimeout(() => {
      setSignupCount(1000);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSignupCount((prev) => prev + Math.floor(Math.random() * 10) + 1);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white font-sans sm:px-20">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-4xl sm:text-7xl text-center font-semibold tracking-tighter sm:mt-20 mt-16">
          The AI <span className="italic font-semibold ">Document</span> Editor
        </div>
        <p className="text-base sm:text-xl text-center font-normal text-neutral-400 pt-4 tracking-tight px-3">
          Aero turns your ideas into professional documents in seconds with AI.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center sm:gap-x-4 gap-x-2 pt-8 w-full max-w-md px-3"
      >
        <Input
          type="email"
          placeholder="you@example.com"
          className="py-3 sm:text-md text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ButtonColorful type="submit" className="hover:cursor-pointer" />
      </form>

      <div className="flex sm:mt-6 mt-4">
        <div className="flex flex-wrap justify-center items-center gap-x-1 text-neutral-400 font-medium text-sm sm:text-base text-center max-w-xs sm:max-w-none mx-auto leading-tight">
          <span className="font-semibold text-neutral-100 text-sm sm:text-base">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2000,
              }}
              value={signupCount}
            />
          </span>
          <span>people have already joined the waitlist</span>
        </div>
      </div>

      <div className="w-full max-w-8xl sm:mt-0 mt-3">
        <Image
          src={HeroImg}
          alt="hero image"
          placeholder="blur"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
