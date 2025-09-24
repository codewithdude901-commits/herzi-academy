"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonials = [
  {
    name: "Rose Thomas",
    university: "Nursing Candidate (Kerala, India)",
    text: "Herzi helped me not only learn German but also guided me through the entire nursing recruitment process. Today, I am working in Munich and couldn’t be happier.",
    image: "/testimonial/rose.png",
  },
  {
    name: "Arjun Raj",
    university: "Masters Student (Bangalore, India)",
    text: "From APS support to motivation letter guidance, Herzi made my Masters admission in Berlin smooth and stress-free. The online German classes were very flexible.",
    image: "/testimonial/arjun.png",
  },
  {
    name: "Sruthy Kumar",
    university: "A2–B2 Student (Kerala, India)",
    text: "The teachers at Herzi are so supportive. Their exam preparation classes gave me the confidence to pass my Goethe exam on the first attempt.",
    image: "/testimonial/sruthy.png",
  },
  {
    name: "Vishnu Govind",
    university: "Ausbildung Trainee (Kerala, India)",
    text: "I joined Herzi for German language training and later got placed in an Ausbildung program in Stuttgart. Their post-admission support with accommodation was a lifesaver.",
    image: "/testimonial/vishnu.png",
  },
  {
    name: "Anjana Krishnan",
    university: "Online Learner (UAE)",
    text: "Herzi’s online vocabulary book and German CV service were extremely useful. They go beyond teaching — they prepare you for life in Germany.",
    image: "/testimonial/anjana.png",
  },
  {
    name: "Tania Johnson",
    university: "Goethe Exam Candidate (Kerala, India)",
    text: "Herzi gave me the right guidance for my Goethe B2 exam. The mock tests and practice sessions were exactly what I needed. I cleared the exam on my first try and now I’m preparing for my Masters in Germany with their support.",
    image: "/testimonial/tania.png",
  },
];

export default function Testimonials() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [isInView, setIsInView] = React.useState(false);
  const carouselRef = React.useRef<HTMLDivElement | null>(null);

  // Observe visibility
  React.useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // trigger when at least 30% visible
    );

    observer.observe(carouselRef.current);

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  // Control autoplay
  React.useEffect(() => {
    if (isInView) {
      autoplay.current.play();
    } else {
      autoplay.current.stop();
    }
  }, [isInView]);
  return (
    <section
      className="py-12 lg:py-16  mx-auto max-w-7xl xl:rounded-3xl scroll-mt-30 select-none"
      aria-label="Student services slider"
      id="testimonials"
    >
      <div className="px-4 xl:px-10">
        <div className="space-y-4 mb-12">
          <div className="text-xl text-center">
            {" "}
            Trusted by Students Worldwide
          </div>
          <h2 className="text-4xl font-medium leading-tight text-center">
            Hear from Our Students & Professionals
          </h2>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Card key={i} className="rounded-2xl p-2 transition-transform ">
              <CardContent className="p-6 flex flex-col h-full bg-[#f7f7f7] rounded-xl sm:p-3 md:p-6">
                <div className="flex mb-4 gap-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star size={"16"} key={idx} fill="black" />
                  ))}
                </div>

                <p className="flex-grow leading-relaxed text-lg sm:text-base md:text-lg">
                  “{t.text}”
                </p>
                <hr className="mt-2 opacity-70" />

                <div className="flex items-center gap-3 mt-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover size-14 sm:size-12 md:size-14"
                  />
                  <div>
                    <p className="font-medium text-lg">{t.name}</p>
                    <p className="text-sm">{t.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Carousel
          className="w-full sm:hidden"
          plugins={[autoplay.current]}
          orientation="vertical"
          opts={{
            align: "start",
            dragFree: true,
          }}
        >
          <CarouselContent className="mb-1 max-h-[500px] max-w-[85vw] mx-auto">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} data-card role="listitem">
                <Card className="rounded-2xl p-2">
                  <CardContent className="p-6 flex flex-col bg-[#f7f7f7] rounded-xl h-full">
                    {/* Stars */}
                    <div className="flex mb-4 gap-2">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star size={"16"} key={idx} fill="black" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className=" flex-grow leading-relaxed text-base">
                      “{t.text}”
                    </p>
                    <hr className="mt-2 opacity-70" />
                    {/* User */}
                    <div className="flex items-center gap-3 mt-4">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-lg">{t.name}</p>
                        <p className="text-sm">{t.university}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="mx-4" />
          <CarouselNext className="mx-4" /> */}
        </Carousel>
      </div>
    </section>
  );
}
