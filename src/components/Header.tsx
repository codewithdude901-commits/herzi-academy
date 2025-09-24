import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm shadow select-none">
      <div className="max-w-7xl px-4 xl:px-0  mx-auto flex h-18 items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold">
          <Image src={"/logo.png"} width={160} height={100} alt="herzi-logo" draggable="false" className="pointer-events-none"/>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium ">
          <Link href="#home" className="hover:text-[#614932]">
            Home
          </Link>
          <Link href="#services" className="hover:text-[#614932]">
            Services
          </Link>
          <Link href="#testimonials" className="hover:text-[#614932]">
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-[#614932]">
            FAQ
          </Link>
          <Link href="#contact" className="hover:text-[#614932]">
            Contact
          </Link>
        </nav>
        <Button
          className="rounded-xl w-52 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer"
          size="lg"
        >
          Talk to Our Experts
        </Button>
      </div>
    </header>
  );
}
