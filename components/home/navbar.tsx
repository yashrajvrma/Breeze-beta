import { Button } from "../ui/button";
import logo from "../../public/assets/images/aero-icon.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center font-sans px-10 py-5">
      <div className="flex flex-row justify-between items-center gap-4">
        <Image src={logo} alt="Logo" width={32} placeholder="blur" />
        <div className="logo-name text-xl text-white">Aero</div>
      </div>
      <Button variant="outline">Get Started</Button>
    </div>
  );
}
