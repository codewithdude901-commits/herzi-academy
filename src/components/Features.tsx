"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AudioLines, Waves } from "lucide-react";
import { Button } from "./ui/button";

// Install: npm install gsap
// Usage: import HerziFeatures from './HerziFeatures-GSAP.jsx' and include <HerziFeatures /> in your page

const FEATURES = [
  {
    title: "Dreaming of Germany? Start your journey with Herzi!",
    emoji: "🇩🇪",
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
    title: "To all Indian nurses! Your dream job in Germany is within reach!",
    emoji: "🇮🇳",
    text: `Herzi offers specialized nurse migration services to help you make the move. We provide:\n\n1. German language training\n2. Accommodation & job placement assistance\n3. Visa & settlement support\n\nWe handle the details so you can focus on your future. Tag a nurse who needs to see this!`,
  },
  {
    title: "Documents ready for Germany?",
    emoji: "📄",
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
  const containerRef = useRef(null);
  // const panelsRef = useRef([]);
  const leftRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const panels = panelsRef.current;

    // Pin the left column while the right column scrolls through features
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 150",
      end: () =>
        // @ts-expect-error
        `+=${containerRef.current.offsetHeight - window.innerHeight + 280}`,
      pin: leftRef.current,
      pinSpacing: true,
    });

    // Animate each panel's inner content into view (ONLY animation left)
    // panels.forEach((panel) => {
    //   gsap.fromTo(
    //     panel.querySelector(".panel-inner"),
    //     { autoAlpha: 0, y: 40 },
    //     {
    //       autoAlpha: 1,
    //       y: 0,
    //       duration: 0.4,
    //       ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: panel,
    //         start: "top 70%",
    //         end: "bottom 40%",
    //         toggleActions: "play reverse play reverse",
    //       },
    //     }
    //   );
    // });

    // small entrance for left column
    gsap.from(leftRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section className="w-full select-none">
      {/* Container padding kept equal on both sides for consistent spacing */}
      <div
        ref={containerRef}
        className="max-w-7xl px-4 xl:px-0  mx-auto py-6 md:pt-12 md:pb-24 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left sticky column */}
          <div className="">
            {/* <div
              ref={leftRef}
              className=" h-screen flex flex-col justify-center"
              aria-hidden
            >
              <h3 className="text-sm uppercase tracking-wider text-gray-600">
                Core features
              </h3>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                How Herzi helps you
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                Scroll the right side to explore our 6 core services. Each card
                uses a static background color (no color animations). Spacing
                left and right is equal for a balanced layout.
              </p>

              <ul className="mt-6 space-y-2">
                {FEATURES.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md flex items-center justify-center bg-white shadow-sm">
                      {f.emoji}
                    </div>
                    <div className="text-sm text-gray-800">{f.title}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button className="px-4 py-2 rounded-md bg-black text-white text-sm">
                  Contact Herzi
                </button>
              </div>
            </div> */}

            <div className="space-y-6" ref={leftRef}>
              <div className="inline-flex items-center gap-2 text-xl">
                <AudioLines className="size-6" /> Core features
              </div>
              <h2 className="text-4xl font-medium">How Herzi helps you</h2>

              <ul className="space-y-4">
                {FEATURES.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="size-9 rounded-md flex items-center justify-center bg-white shadow-sm">
                      {f.emoji}
                    </div>
                    <div className="text-lg">{f.title}</div>
                  </li>
                ))}
              </ul>

              <Button
                className="rounded-xl w-52 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer"
                size="lg"
              >
                Talk to Our Experts
              </Button>
            </div>
          </div>

          {/* Right scrolling column: each card gets a STATIC bg color, equal side padding */}
          <div className="space-y-10">
            {FEATURES.map((feature, i) => (
              <article
                key={i}
                // ref={(el) => (panelsRef.current[i] = el)}
                className="panel rounded-3xl shadow-md justify-center flex flex-col text-white"
                style={{
                  minHeight: "55vh",
                  padding: "2rem",
                  backgroundColor: BG_COLORS[i],
                }}
              >
                <div className="panel-inner max-w-3xl space-y-8">
                  <div className="flex items-center gap-4">
                    {/* <div className="text-3xl">{feature.emoji}</div> */}
                    <h3 className="text-xl md:text-3xl font-medium">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-4 whitespace-pre-line leading-relaxed text-lg tracking-wide">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Small helpful hint for mobile: stack view */}
      <div className="block md:hidden mt-6 text-center text-sm text-gray-600">
        Tip: On mobile the layout stacks — swipe up to read each feature.
      </div>
    </section>
  );
}
