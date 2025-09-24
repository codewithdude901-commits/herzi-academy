// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import {
  CheckSquare,
  Globe,
  MessageCircle,
  Minus,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";
import HerziFeatures from "@/components/Features";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

// The full page component
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />

        {/* Feature Section */}

        <HerziFeatures />

        <section className="py-24 select-none">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 border rounded-2xl px-3 py-2 text-lg">
                <Sparkles className="size-5" strokeWidth={1.5} /> Your Bridge to
                Study and Work Abroad
              </div>
              <h2 className="text-4xl font-medium leading-tight">
                Herzi German - One Academy, Endless Opportunities.
              </h2>
              <p className="text-lg leading-relaxed tracking-wide">
                At Herzi German Academy, we understand the unique needs of
                students from Kerala and other parts of India, especially those
                aiming to pursue nursing or medical careers in Germany. That’s
                why we offer specialized Medical German language training, from
                basic to advanced levels, tailored specifically for healthcare
                professionals
              </p>
              <p className="text-lg leading-relaxed tracking-wide">
                We offer tips, strategies, and mock sessions for German
                interviews, starting from basic levels, helping students feel
                confident and well-prepared.
              </p>

              <Button
                className="rounded-xl w-52 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer"
                size="lg"
              >
                Explore Courses
              </Button>
            </div>
            <Image
              src="/feature.png"
              alt="Speaker in room"
              width={700}
              height={600}
              draggable="false"
              className="rounded-2xl max-h-[600px] object-cover "
            />
          </div>
        </section>

        {/* Social Proof Section */}
        <section className=" py-24 select-none">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 ">
              <div className="space-y-4 ">
                <div className="text-xl text-center">
                  {" "}
                  Where Learning Meets Opportunity!
                </div>
                <h2 className="text-4xl font-medium leading-tight text-center">
                  Why Choose Herzi German Academy?
                </h2>
              </div>

              {/* <div className="flex items-end">
                <p className="text-lg leading-relaxed tracking-wide text-end">
                  Our commitment to innovation and quality has earned the trust
                  of customers worldwide. Sleek design, our products are built
                  to impress.
                </p>
              </div> */}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Minus
                    className="size-10 p-2 border rounded-lg"
                    color="#614932"
                  />
                  {/* <Star className="size-10 p-2 border rounded-lg" /> */}
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-medium">
                    Reduced Termination Risk
                  </h3>
                  <p className="text-lg leading-relaxed tracking-wide">
                    Our focused training greatly reduces the chances of dropouts
                    or termination during Ausbildung or employment due to
                    language barriers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe
                    className="size-10 p-2 border rounded-lg"
                    color="#614932"
                  />
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-medium">
                    Experienced Leadership
                  </h3>
                  <p className="text-lg leading-relaxed tracking-wide ">
                    Our founder brings over 7 years of industry experience,
                    which forms the strong foundation of our academy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckSquare
                    className="size-10 p-2 border rounded-lg"
                    color="#614932"
                  />
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-medium">
                    Interactive Sessions & Exposure
                  </h3>
                  <p className="text-lg leading-relaxed tracking-wide">
                    We regularly conduct workshops, seminars, and live
                    interactive sessions with Keralite students and
                    professionals currently living and working in Germany.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <FAQ />

        <Testimonials />
        {/* CTA Section */}
        <section className=" py-24 select-none">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="space-y-4 ">
              <div className="text-xl text-center">
                {" "}
                Bring everything together!
              </div>
              <h2 className="text-4xl font-medium leading-tight text-center">
                Your journey to Germany starts with a conversation
              </h2>
            </div>

            <p className="text-lg leading-relaxed tracking-wide text-center max-w-4xl mx-auto">
              Have questions about our German courses, exam prep, or recruitment
              programs? Our team is here to guide you every step of the way —
              from learning German to building your career in Germany.
            </p>

            <Link
              href="https://wa.me/918089808042?text=Hello%20Herzi%20Team%2C%20I%20would%20like%20to%20book%20a%20counselling%20session."
              target="_blank"
              className="block w-fit mx-auto"
            >
              <div>
                <Button
                  className="rounded-xl w-60 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
                  Book Counselling Now
                </Button>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
