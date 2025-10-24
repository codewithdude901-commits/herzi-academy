"use client"

import React from "react";
import { motion } from "framer-motion";
import { Minus, Globe, CheckSquare } from "lucide-react";
// If you use shadcn/ui or a custom Card component, keep the imports. Otherwise
// replace Card/CardHeader/CardContent with your own wrapper elements.
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const cardItems = [
  {
    Icon: Minus,
    title: "Reduced Termination Risk",
    text: "Our focused training greatly reduces the chances of dropouts or termination during Ausbildung or employment due to language barriers.",
  },
  {
    Icon: Globe,
    title: "Experienced Leadership",
    text: "Our founder brings over 7 years of industry experience, which forms the strong foundation of our academy.",
  },
  {
    Icon: CheckSquare,
    title: "Interactive Sessions & Exposure",
    text: "We regularly conduct workshops, seminars, and live interactive sessions with Keralite students and professionals currently living and working in Germany.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyChooseHerzi() {
  return (
    <section className="max-w-7xl mx-auto bg-muted from-rose-50 via-white to-slate-50 xl:rounded-2xl py-16 xl:py-24 select-none px-4">
      <div className="">
        <div className="mb-12">
          <div className="space-y-4">
            <div className="text-lg sm:text-xl text-center text-slate-700">
              Where Learning Meets Opportunity!
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-center">
              Why Choose Herzi German Academy?
            </h2>
          </div>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {cardItems.map((c, idx) => (
            <motion.div
              key={c.title}
              className="rounded-lg"
              //@ts-expect-error
              variants={cardVariants}
              whileHover={{
                translateY: 10,
                boxShadow: "0 20px 40px rgba(2,6,23,0.08)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card className="h-full border-0 bg-white/80 backdrop-blur-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex items-center gap-4 p-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-rose-100 to-amber-50 border border-rose-100 shadow-sm">
                    <c.Icon className="w-6 h-6 text-rose-700" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  {/* kept the original text styles as requested */}
                  <h3 className="text-xl sm:text-2xl font-medium">{c.title}</h3>
                  <p className="text-base sm:text-lg leading-relaxed tracking-wide text-slate-600">
                    {c.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
