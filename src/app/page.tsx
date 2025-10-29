// src/app/page.tsx
import { FAQ } from "@/components/FAQ";
import HerziFeatures from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckSquare, Globe, MessageCircle, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// The full page component
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />

        {/* Feature Section */}

        <HerziFeatures />

        <section className="py-16 xl:pt-24 select-none px-4 xl:px-0">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
                Herzi German - One Academy, Endless Opportunities.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed tracking-wide">
                At Herzi German Academy, we understand the unique needs of
                students from Kerala and other parts of India, especially those
                aiming to pursue nursing or medical careers in Germany. That’s
                why we offer specialized Medical German language training, from
                basic to advanced levels, tailored specifically for healthcare
                professionals
              </p>
              <p className="text-base sm:text-lg leading-relaxed tracking-wide">
                We offer tips, strategies, and mock sessions for German
                interviews, starting from basic levels, helping students feel
                confident and well-prepared.
              </p>
            </div>
            <Image
              src="/feature.jpg"
              alt="Speaker in room"
              width={700}
              height={600}
              draggable="false"
              className="rounded-2xl max-h-[600px] object-cover "
            />
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="max-w-7xl mx-auto xl:rounded-2xl py-10 select-none px-4">
          <div className="">
            <div className="mb-12">
              <div className="space-y-4 ">
                <div className=" text-lg sm:text-xl text-center">
                  Best German Language Academy in Kerala, India.
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-center">
                  Why Choose Herzi German Academy?
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="gap-4 pb-0 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Minus
                    className="size-10 p-2 border rounded-lg"
                    color="#664343"
                  />
                  <h3 className="text-xl font-medium">
                    Reduced Termination Risk
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4  h-full py-4 border-t">
                  <p className="text-base sm:text-lg  leading-relaxed tracking-wide">
                    Our focused training greatly reduces the chances of dropouts
                    or termination during Ausbildung or employment due to
                    language barriers.
                  </p>
                </CardContent>
              </Card>
              <Card className="gap-4 pb-0 overflow-hidden  transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Globe
                    className="size-10 p-2 border rounded-lg"
                    color="#664343"
                  />
                  <h3 className="text-xl font-medium">
                    Experienced Leadership
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4  h-full py-4 border-t">
                  <p className="text-base sm:text-lg  leading-relaxed tracking-wide">
                    Our founder brings over 7 years of industry experience,
                    which forms the strong foundation of our academy.
                  </p>
                </CardContent>
              </Card>
              <Card className="gap-4 pb-0 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CheckSquare
                    className="size-10 p-2 border rounded-lg"
                    color="#664343"
                  />
                  <h3 className="text-xl font-medium">Interactive Sessions</h3>
                </CardHeader>
                <CardContent className="space-y-4  h-full py-4 border-t">
                  <p className="text-base sm:text-lg  leading-relaxed tracking-wide">
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

        <section
          className="py-16 xl:py-24  px-4 xl:px-0 scroll-mt-16"
          id="contact"
        >
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Text & CTA */}
            <div className="space-y-6 select-none">
              <div className="space-y-4">
                <div className="text-lg sm:text-xl text-center">
                  Bring everything together!
                </div>
                <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-center">
                  Your journey to Germany starts with a conversation
                </h2>
              </div>

              <p className="text-lg leading-relaxed tracking-wide text-center max-w-4xl mx-auto">
                Have questions about our German courses, exam prep, or
                recruitment programs? Our team is here to guide you every step
                of the way — from learning German to building your career in
                Germany.
              </p>
            </div>

            {/* Branches Section */}
            <div className="">
              <h3 className="text-2xl font-medium text-center mb-8">
                Our Branches & Locations
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Branch Card */}
                {[
                  {
                    mode: "online & Offline",
                    city: "Perumbavoor",
                    address:
                      "Herzi German Academy ,1 st Floor, Jaya Hardwares, AM Road Perumbavoor Main Signal Junction, Perumbavoor, Kerala 683542",
                    phone: "+91 80 89 80 80 42",
                    map: "",
                  },
                  {
                    mode: "online & Offline",
                    city: "Kothamangalam",
                    address:
                      "Herzi German Academy , Mathson Chambers, NH85, Kochi-Dhanushkodi Road, near Aann's Ladies Hostel, Kothamangalam, Kerala 686691",
                    phone: "+91 80 89 80 80 42",
                    map: "https://share.google/ZGwkmz0vXmXuv9jQ8",
                  },
                  {
                    mode: "online & Offline",
                    city: "Calicut",
                    address:
                      "Herzi German Academy Kozhikode 2nd Floor, Amal Arcade, near St.Michael's School, West Hill, Kozhikode, Kerala 673005",
                    phone: "+91 80 89 80 80 42",
                    map: "",
                  },
                ].map((branch) => (
                  <div
                    key={branch.city}
                    className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-medium mb-2">{branch.city}</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {branch.address}
                    </p>
                    <p className="text-sm font-medium mb-3">{branch.mode}</p>

                    <a
                      className="text-sm font-medium mb-3"
                      href="tel:+918089808042"
                    >
                      +91 80 89 80 80 42
                    </a>

                    {/* {branch.map && (
                      <Link
                        href={branch.map}
                        target="_blank"
                        className="text-sm font-medium text-[#614932] hover:underline"
                      >
                        View on Google Maps →
                      </Link>
                    )} */}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="https://wa.me/918089808042?text=Hello%20Herzi%20Team%2C%20I%20would%20like%20to%20book%20a%20counselling%20session."
              target="_blank"
              className="block w-fit mx-auto"
            >
              <Button
                className="rounded-xl w-60 py-3 shadow-lg bg-[#614932] hover:bg-[#7e5f42] text-white text-base cursor-pointer transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
                Book Counselling Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
