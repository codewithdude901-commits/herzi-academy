"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Star } from "lucide-react"; // ⭐ optional — can use emoji fallback

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sisira Sajeev",
    university: "Student",
    text: "The classes are good, and the teachers are super helpful and friendly. The atmosphere is really nice, which makes learning German way more fun and makes Herzi the Top-rated German language institute in Kerala. The daily speaking sessions are especially helpful for improving my language skills. I've learned a lot and would definitely recommend it!",
    image: "/testimonial/sisira.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Muhammad Anas",
    university: "Student",
    text: "I completed my B2 course at Herzi German Academy. The course gave me knowledge and confidence to use German every day. The teachers explained even difficult grammar clearly and supported us well. The atmosphere was motivating. I would recommend Herzi German Academy which is the Most recommended German academy in Kerala to anyone who wants to learn German.",
    image: "/testimonial/muhammad-anas.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Midhul Babu",
    university: "Student",
    text: "I am a student at Herzi German Academy, and I am very happy with my choice as I have selected the Leading German language center in Kerala. The teachers are very supportive, and we can ask any questions openly. Their way of teaching is clear and easy to understand. We also have daily vocabulary tests and speaking sessions, which have helped me greatly to improve my language skills.",
    image: "/testimonial/midhul-babu.jpeg",
    rating: 5,
  },
  {
    id: 4,
    name: "Mohammad Saheel",
    university: "Student",
    text: "Learning German here has been a wonderful experience. The teachers explain everything clearly and make classes very interactive. I feel more confident with my German every day. I felt this academy to be the Top German language school in Kerala and I Highly recommend this institute!",
    image: "/testimonial/mohammad-saheel.jpeg",
    rating: 5,
  },
  {
    id: 5,
    name: "Binil Sunny",
    university: "Student",
    text: "Herzi Academy has been such a nice place to learn German. The classes are engaging and never feel boring. I’ve noticed a big boost in my confidence while speaking, and it’s easier for me to use German in daily life now. The friendly vibe here really makes learning fun.",
    image: "/testimonial/binil.jpeg",
    rating: 5,
  },
  {
    id: 6,
    name: "Muhammed V Anwar",
    university: "Student",
    text: "The institute feels like a place where language comes alive, not just a classroom. I now see German not as a challenge but as a doorway to new possibilities as they provide the Highest-ranked German courses in Kerala.",
    image: "/testimonial/v-anwar.jpeg",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="max-w-7xl mx-auto bg-muted xl:rounded-2xl pt-16 xl:pt-24 pb-12 select-none px-4 scroll-mt-20 md:scroll-mt-30"
      id="testimonials"
    >
      <div className="space-y-4 mb-6">
        <div className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
          Real stories from students who learned German, passed exams, and
          started careers in Germany with Herzi’s support.
        </div>
        <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-center">
          Hear from Our Students & Professionals
        </h2>
      </div>

      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent>
          {TESTIMONIALS.map((t) => (
            <CarouselItem key={t.id} className="p-4 ml-1.5">
              <Card className="rounded-2xl shadow-md border border-gray-100 bg-white">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src={t.image}
                        width={100}
                        height={100}
                        alt={`${t.name} testimonial`}
                        className="rounded-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-sm text-gray-600">
                        {t.university}
                      </div>
                      {/* ⭐ Rating row */}
                      <div className="flex mt-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 leading-relaxed text-base sm:text-lg tracking-wide text-gray-700">
                    “{t.text}”
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-3 mt-4 xl:mt-6">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </section>
  );
}
