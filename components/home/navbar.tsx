"use client";

import { Button } from "../ui/button";
import logo from "../../public/assets/images/aero-icon.png";
import Image from "next/image";
import { toast } from "sonner";

export default function Navbar() {
  const handleGetStartedClick = () => {
    toast.success("Please joined waitlist!");
  };

  return (
    <div className="flex flex-row justify-between items-center font-sans sm:px-10 sm:py-5 px-5 py-8">
      <div className="flex flex-row justify-between items-center sm:gap-x-4 gap-x-3">
        <Image src={logo} alt="Logo" width={32} placeholder="blur" priority />
        <div className="logo-name text-xl text-white">Aero</div>
      </div>
      <Button
        onClick={handleGetStartedClick}
        className="text-sm sm:text-base px-3 sm:px-4 hover:cursor-pointer"
      >
        Get Started
      </Button>
    </div>
  );
}
