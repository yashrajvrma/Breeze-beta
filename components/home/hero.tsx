"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatedNumber } from "../ui/animated-number";
import { ButtonColorful } from "../ui/button-colorful";
import { Input } from "../ui/input";
import Image from "next/image";
import HeroImg from "../../public/assets/images/hero-img-3.png";
import axios from "axios";
import { toast } from "sonner";
import confetti from "canvas-confetti";

type FormData = {
  email: string;
};

export default function Hero() {
  const [signupCount, setSignupCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const fetchSignupCount = async () => {
    try {
      const response = await axios.get("/api/auth/early-access/count");
      setSignupCount(response.data.data);
    } catch (error) {
      console.error(`Failed to fetch registered people: ${error}`);
    }
  };

  useEffect(() => {
    fetchSignupCount();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/auth/early-access", {
        email: data.email,
      });

      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: -0.2, x: 0.5 },
        angle: 270,
      });

      if (response.data.message === "success") {
        toast.success(`You&apos;ve successfully joined the waitlist.`);
      }

      setIsRegistered(true);
      reset();
      await fetchSignupCount();
    } catch (error) {
      console.error(`Error while joining waitlist ${error}`);
      toast.error(`Something went wrong, Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white font-sans sm:px-20">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-4xl sm:text-7xl text-center font-semibold tracking-tighter sm:mt-20 mt-16">
          The AI <span className="italic font-semibold">Document</span> Editor
        </div>
        <p className="text-base sm:text-xl text-center font-normal text-neutral-400 pt-4 tracking-tight px-3">
          Aero turns your ideas into professional documents in seconds with AI.
        </p>
      </div>

      {!isRegistered ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center sm:gap-x-4 gap-x-2 sm:pt-8 pt-5 w-full max-w-md px-3"
        >
          <Input
            type="email"
            placeholder="you@example.com"
            className="py-3 sm:text-md text-sm"
            {...register("email", { required: "Email is required" })}
          />
          <ButtonColorful
            type="submit"
            className="sm:text-base text-sm hover:cursor-pointer"
            disabled={isSubmitting}
          >
            Join waitlist
          </ButtonColorful>
        </form>
      ) : (
        <div className="text-center sm:pt-8 pt-5 max-w-md px-3">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            You&apos;re on the list! 🎉
          </h3>
          <p className="text-sm sm:text-base text-neutral-400">
            We&apos;ll let you know when we&apos;re ready to ship the product.
          </p>
        </div>
      )}

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
