import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-16  select-none px-4 xl:px-0 scroll-mt-10" id="faq">
      <div className="max-w-7xl mx-auto flex-col flex  gap-14">
        <div className="space-y-4 ">
          <div className="text-lg sm:text-xl text-center">
            Welcome to Beyond FAQ!
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-center">
            Everything You Need to Know
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-10">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              What services does Herzi Academy provide?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              Herzi offers German language courses (online & offline), exam
              preparation (Goethe, TELC, ÖSD), recruitment support for
              Ausbildung, Masters, and Nursing careers in Germany, as well as
              post-admission services like accommodation, courier, and pickup.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              Can I learn German online with Herzi?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              Yes. Herzi provides both online and offline classes for all levels
              (A1 to C1), so you can learn at your convenience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              Does Herzi help with exam preparation?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              Absolutely. We partner with exam providers like Goethe, TELC, and
              ÖSD to prepare students with mock tests, strategies, and focused
              lessons.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              What is Ausbildung, and how does Herzi support it?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              Ausbildung is a vocational training program in Germany. Herzi
              helps students with language preparation, documentation, and
              recruitment placement for Ausbildung opportunities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              Do you provide support for Masters admissions in Germany?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              Yes. We guide students through the entire process — from language
              courses to APS, documentation, motivation letters, and placement
              in top German universities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              Is recruitment available for nurses?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              Yes. Herzi supports nurses who want to work in Germany by offering
              German training, exam prep, and direct placement opportunities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              What other services does Herzi offer?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              Along with education and recruitment, Herzi also provides
              certificate attestation, German CV preparation, APS support,
              vocabulary books, German notes, and post-admission services like
              courier and accommodation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
              How can I get started with Herzi?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg leading-relaxed tracking-wide">
              You can book a counselling session with our experts, explore
              available courses, or apply directly for Ausbildung/Masters
              recruitment programs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
