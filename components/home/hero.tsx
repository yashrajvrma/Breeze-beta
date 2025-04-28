"use client";

import { useEffect, useState } from "react";
import { AnimatedNumber } from "../ui/animated-number";
import { Button } from "../ui/button";
import { ButtonColorful } from "../ui/button-colorful";
import { Input } from "../ui/input";

export default function Hero() {
  const [signupCount, setSignupCount] = useState<number>(1000);
  const [email, setEmail] = useState<string>("");

  // This useEffect simulates the animation on component mount
  // by starting from a lower number and animating to 1000
  useEffect(() => {
    // Start with a lower number to see the animation when the component mounts
    setSignupCount(500);

    // Then after a small delay, update to the actual count
    const timer = setTimeout(() => {
      setSignupCount(1000);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email here if needed
    if (email) {
      // Simulate successful signup by increasing the counter
      setSignupCount((prev) => prev + Math.floor(Math.random() * 10) + 1);
      setEmail("");
      // Here you would normally send the email to your backend
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white font-sans mx-20">
      <div className="text-8xl text-center font-medium tracking-tighter mt-20">
        The AI <span className="font-medium italic">Document</span> Editor
      </div>
      <div className="text-2xl text-center font-normal text-neutral-400 pt-4 tracking-tight">
        Aero turns your ideas into professional document in seconds with AI.
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-center gap-x-5 pt-10 w-full"
      >
        <div className="flex w-full max-w-md justify-center items-center space-x-2">
          <Input
            type="email"
            placeholder="you@example.com"
            className="w-xl py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <ButtonColorful type="submit" className="hover:cursor-pointer" />
        </div>
      </form>

      {/* animated signup count */}
      <div className="flex flex-row gap-x-1 items-end mt-5">
        <span className="font-semibold text-neutral-100 text-md">
          <AnimatedNumber
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={signupCount}
          />
        </span>
        <span className="text-neutral-400 font-medium text-md">
          people have already joined the waitlist
        </span>
      </div>
    </div>
  );
}
