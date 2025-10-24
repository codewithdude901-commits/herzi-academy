"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const imageSrc = "/hero-image1.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // subtle stagger so items feel connected, not choppy
      staggerChildren: 0.04,
      when: "beforeChildren",
      ease: [0.16, 1, 0.3, 1],
      duration: 0,
    },
  },
};

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden scroll-mt-20 pt-10 md:pt-16  xl:pt-20 select-none"
      id="home"
    >
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#f4f3ea] rounded-2xl overflow-hidden ">
          {/* Left content: controlled by one container */}
          <motion.div
            className="z-10 px-4 lg:px-10 py-10 lg:py-16 justify-center flex flex-col items-center md:items-start"
            // @ts-expect-error lib typing issue
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-4">
              <Button
                className="rounded-xl bg-white hover:bg-white text-black text-base px-4 shadow-sm sm:shadow-x"
                size="lg"
              >
                Unlock Opportunities
              </Button>
            </div>

            <h1 className="text-4xl sm:text-[40px] xl:text-[50px] font-semibold tracking-tight leading-tight text-center md:text-left">
              Learn <span className="text-[#614932]">German & Start </span> Your
              Career in <span className="text-[#614932]">Germany </span>
            </h1>

            <p className="mt-4 max-w-lg text-lg tracking-wide text-center md:text-left">
              Trusted partner for students and professionals aiming to study,
              work, and settle in Germany.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
              <Link href={"/#services"}>
                <div>
                  <Button
                    className="rounded-xl w-48 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer"
                    size="lg"
                  >
                    Learn how it works
                  </Button>
                </div>
              </Link>

              <Link
                href="https://wa.me/918089808042?text=Hello%20Herzi%20Team%2C%20I%20would%20like%20to%20book%20a%20counselling%20session."
                target="_blank"
              >
                <div>
                  <Button
                    className="rounded-xl py-3 text-base w-48 cursor-pointer "
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
                    Book a session
                  </Button>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right: image card — subtle single animation (no heavy staggers) */}
          <motion.div
            className="pointer-events-none rounded-3xl overflow-hidden md:rounded-none h-full"
            initial={{ opacity: 0, scale: 1.03, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="relative w-full overflow-hidden h-full max-h-[600px]"
              aria-hidden
            >
              <Image
                src={imageSrc}
                alt="Smiling student holding books"
                width={3000}
                height={3000}
                draggable="false"
                className="h-full w-full object-cover object-top pointer-events-none select-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
