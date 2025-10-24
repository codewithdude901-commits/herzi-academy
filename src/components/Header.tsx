import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm shadow select-none">
      <div className="max-w-7xl px-4 xl:px-0  mx-auto flex h-18 items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold">
          <Image
            src={"/logo.webp"}
            width={160}
            height={100}
            alt="herzi-logo"
            draggable="false"
            className="pointer-events-none"
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-6 text-base font-medium ">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#614932]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://wa.me/918089808042?text=Hello%20Herzi%20Team%2C%20I%20would%20like%20to%20book%20a%20counselling%20session."
          target="_blank"
        >
          <Button
            className="rounded-xl hidden lg:flex sm:w-52 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer"
            size="lg"
          >
            Talk to Our Experts
          </Button>
        </Link>

        <div className="flex items-center gap-4 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm ring-1 ring-slate-100 shadow-sm"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>

            <SheetContent side="top" className="bg-muted">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
                <div className="flex w-full items-center justify-between h-10">
                  <Image
                    alt="logo"
                    src={"/logo.webp"}
                    width={140}
                    height={34}
                    className="w-36"
                  />
                  {/* Custom close button */}
                  <SheetClose asChild>
                    <button
                      aria-label="Close menu"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-200 hover:bg-slate-300"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </SheetClose>
                </div>
              </SheetHeader>

              <nav className="px-5 pb-6">
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-3 text-base font-medium"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
