"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AudioLines } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "German Language Classes (A1–B2)",
    emoji: "🧑‍🏫",
    text: `Whether you want to learn the language or prepare for a new life, our services are designed to make your transition smooth.\n\nOur German Language Classes (A1–B2) will get you ready for proficiency exams like Goethe, telc, and ÖSD. Our curriculum covers all four essential skills: speaking, listening, reading, and writing.\n\nReady to speak German? Let's get started!`,
  },
  {
    title: "Your Master's degree in Germany is closer than you think!",
    emoji: "🎓",
    text: `Herzi helps you with admissions to Master's programs at top German public universities. The best part? An IELTS score is all you need.\n\nThis is your chance to pursue higher education in a country known for academic excellence, without the immediate pressure of learning German.\n\nReady to apply? Contact Herzi today!`,
  },
  {
    title: "Unlock your career potential with an Ausbildung!",
    emoji: "🛠️",
    text: `Ausbildung, or vocational training, is a unique way to gain a qualification in Germany. Herzi helps you get into a program that combines theoretical knowledge with practical, on-the-job training.\n\nFrom nursing to other in-demand fields, Ausbildung can be your path to a stable and rewarding career.\n\nFind out how you can start your Ausbildung journey with Herzi.`,
  },
  {
    title:
      "To all Indian nurses! Your dream job in Germany is within reach!",
    emoji: "🩺",
    text: `Herzi offers specialized nurse migration services to help you make the move. We provide:\n\n1. German language training\n2. Accommodation & job placement assistance\n3. Visa & settlement support\n\nWe handle the details so you can focus on your future. Tag a nurse who needs to see this!`,
  },
  {
    title: "Documents ready for Germany?",
    emoji: "📁",
    text: `Don't let document requirements hold you back. Herzi offers professional translation and attestation services to ensure your educational and professional documents are perfectly prepared for use in Germany.\n\nWe make sure your paperwork is accurate and meets all the necessary standards.\n\nGet your documents in order with Herzi.`,
  },
  {
    title: "The German Opportunity Card is here!",
    emoji: "📣",
    text: `New in 2024, the Opportunity Card is a points-based visa for skilled professionals from non-EU countries. It allows you to come to Germany and look for a job for up to 12 months, without a job offer beforehand!\n\nHerzi can guide you through the process of applying for this game-changing visa.\n\nReady for a new adventure? Let's talk about the Opportunity Card!`,
  },
];

// Pleasant palette for backgrounds for each panel (static colors)
const BG_COLORS = [
  "#7A3E3E", // cream yellow
  "#003161", // mint
  "#116D6E", // light blue
  "#643843", // soft pink
  "#2E5077", // light peach
  "#006A67", // pale sky
];

export default function HerziFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const container = containerRef.current;
      const left = leftRef.current;
      const right = rightRef.current;
      if (!container || !left || !right) return () => {};

      const extra = right.offsetHeight - left.offsetHeight;
      // Create a pin that ends when the right column bottom meets the viewport bottom
      const pinTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        endTrigger: right,
        end: () => `+=${extra}`,
        pin: left,
        pinSpacing: true,
        anticipatePin: 1, // ADDED: This pre-adds the pin spacer slightly early to prevent jump/spring on activation
        // toggle a class so we only center while pinned
        // onToggle: (self) => {
        //   if (self.isActive) left.classList.add("herzi-pinned");
        //   else left.classList.remove("herzi-pinned");
        // },
      });

      // panel animation for desktop
      panelsRef.current.forEach((panel) => {
        if (!panel) return;
        const inner = panel.querySelector(".panel-inner") as HTMLElement | null;
        if (!inner) return;

        const tl = gsap.fromTo(
          inner,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // optionally return a cleanup for each item
        return () => tl.kill();
      });

      // cleanup for this media query
      return () => {
        pinTrigger.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    // Mobile/tablet behavior: no pin, simple reveal triggers
    mm.add("(max-width: 1023px)", () => {
      panelsRef.current.forEach((panel) => {
        if (!panel) return;
        const inner = panel.querySelector(".panel-inner") as HTMLElement | null;
        if (!inner) return;

        const tl = gsap.fromTo(
          inner,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

        return () => tl.kill();
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    // small entrance for left section
    if (leftRef.current) {
      gsap.to(leftRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
      });
    }

    const refreshTimeout = window.setTimeout(
      () => ScrollTrigger.refresh(),
      300 // INCREASED: From 200ms to 300ms for better layout settling (fonts/images)
    );

    return () => {
      mm.revert();
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section className="w-full select-none scroll-mt-10" id="services">
      <div
        ref={containerRef}
        className="max-w-7xl px-4 xl:px-0 mx-auto pt-16  lg:pt-24 rounded-2xl "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: normal flow (NO sticky/top-1/2) — GSAP will pin and add .herzi-pinned while pinned */}
          <div>
            <div
              className="space-y-5 sm:space-y-6 opacity-0 -translate-y-2"
              ref={leftRef}
            >
              <div className="inline-flex items-center gap-2 text-lg sm:text-xl">
                <AudioLines className="size-5 sm:size-6" /> Core features
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium">
                How Herzi helps you
              </h2>

              <ul className="space-y-4">
                {FEATURES.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="min-w-9 size-9 rounded-md flex items-center justify-center bg-white shadow-sm">
                      {f.emoji}
                    </div>
                    <div className="text-base sm:text-lg">{f.title}</div>
                  </li>
                ))}
              </ul>

              <Link
                href="https://wa.me/918089808042?text=Hello%20Herzi%20Team%2C%20I%20would%20like%20to%20book%20a%20counselling%20session."
                target="_blank"
              >
                <Button
                  className="rounded-xl sm:w-52 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer"
                  size="lg"
                >
                  Make an Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: pass ref so pin end is tied to its bottom */}
          <div className="space-y-10" ref={rightRef}>
            {FEATURES.map((feature, i) => (
              <article
                key={i}
                // @ts-expect-error error is expected here
                ref={(el) => (panelsRef.current[i] = el)}
                className="panel rounded-2xl shadow-md justify-center flex flex-col text-white py-5 sm:py-6 px-4 sm:px-6"
                style={{
                  minHeight: "55vh",
                  backgroundColor: BG_COLORS[i],
                }}
              >
                <div className="panel-inner max-w-3xl space-y-8">
                  <div className="flex gap-4 items-center">
                    <p className="text-2xl xl:text-3xl font-medium bg-white h-fit p-2 rounded-md">
                      {feature.emoji}
                    </p>
                    <h3 className="text-2xl xl:text-3xl font-medium">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-4 whitespace-pre-line leading-relaxed text-base sm:text-lg tracking-wide">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
