import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { LiaLinkedinIn } from "react-icons/lia";

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background py-24 px-4 overflow-hidden select-none">
      <div className="absolute bottom-[110px]  md:bottom-[55px] xl:bottom-[-60px] left-1/2 -translate-x-1/2 text-[5rem] md:text-[8rem] xl:text-[18rem] font-extrabold text-white/5 pointer-events-none">
        HERZi
      </div>
      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold">
              HERZi
            </Link>
            <p className="text-muted-foreground mt-2">
              Your Gateway to Study and Work in Germany.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Academy</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-background">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-background">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-1 text-muted-foreground">
              {/* <li>
                <Link href="#" className="hover:text-background">
                  Terms of Service
                </Link>
              </li> */}
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-background"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Social</h4>

            <div className="flex gap-4 items-center">
              <Link
                className=" text-white transition-colors duration-300 transform hover:text-blue-600"
                href="https://www.linkedin.com/in/herzi-german-academy-bb8507389/"
                target="_blank"
              >
                <LiaLinkedinIn size={24} />
              </Link>

              <Link
                className=" text-white transition-colors duration-300 transform hover:text-[#fd0a83]"
                href="https://www.instagram.com/herzigerman/"
                target="_blank"
              >
                <AiFillInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025. All rights reserved. HERZi</p>

          <div className="flex items-center gap-1">
            <p>Design by </p>
            <Link href={"https://www.adceleratex.com/"} target="_blank">
              <p>@adcelerateX</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
