import { Header } from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Herzi German Academy",
  description:
    "Herzi German Academy values your privacy. Learn how we collect, use, and protect your personal data in compliance with GDPR standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <section className="max-w-4xl mx-auto py-10 px-4 xl:px-0 select-none  leading-relaxed">
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-semibold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-sm">Last updated: October 10, 2025</p>
          </div>

          <p>
            Welcome to{" "}
            <span className="font-semibold">Herzi German Academy</span>. Your
            privacy is important to us. This Privacy Policy explains how we
            collect, use, and safeguard your personal information when you visit
            our website, enroll in our courses, or interact with our team.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              1. Information We Collect
            </h2>
            <p>
              We collect personal and non-personal information to provide our
              services effectively:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Personal details</span> — such
                as your name, email address, phone number, and communication
                preferences.
              </li>
              <li>
                <span className="font-semibold">
                  Academic and professional data
                </span>
                — details shared when enrolling in our courses or recruitment
                programs.
              </li>
              <li>
                <span className="font-semibold">Usage data</span> — analytics
                information like IP address, browser type, and pages visited to
                improve our website performance.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and personalize our courses and services.</li>
              <li>
                To communicate with you — including counselling, enrolment, or
                placement updates.
              </li>
              <li>
                To send relevant updates, newsletters, or offers (you can opt
                out anytime).
              </li>
              <li>To comply with legal obligations and prevent misuse.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              3. Data Protection & Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              safeguard your personal data from unauthorized access, alteration,
              disclosure, or destruction. All data is stored securely, and
              access is restricted to authorized personnel only.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              4. Sharing Your Information
            </h2>
            <p>
              We do <span className="font-semibold">not sell or rent</span> your
              personal data. We may share limited information only with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Service providers assisting with course delivery or marketing.
              </li>
              <li>
                Partner institutions or recruiters — with your consent, for
                career placement programs.
              </li>
              <li>Authorities, when legally required under applicable laws.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              5. Cookies & Analytics
            </h2>
            <p>
              Our website uses cookies and similar technologies to enhance user
              experience and collect usage statistics. You can disable cookies
              in your browser settings, though some features may not function
              properly as a result.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              6. Your Rights (GDPR Compliance)
            </h2>
            <p>
              If you are located in the European Union or EEA, you have the
              following rights under the GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access and request a copy of your data.</li>
              <li>Right to request correction or deletion of your data.</li>
              <li>Right to withdraw consent at any time.</li>
              <li>
                Right to object to data processing or request data portability.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <Link
                href="mailto:privacy@herziacademy.com"
                className="text-[#614932] hover:underline font-medium"
              >
                privacy@herziacademy.com
              </Link>
              .
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites (such as
              partner institutions or recruitment platforms). We are not
              responsible for their privacy practices or content. Please review
              their policies when visiting those sites.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with an updated date. Please review this
              page regularly for updates.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact:
            </p>
            <ul className="list-none space-y-1 select-text">
              <li>
                <span className="font-semibold">Herzi German Academy </span>
              </li>
              <li>1st Floor, Jaya Hardwares Building</li>
              <li>AM Road Perumbavoor</li>
              <li>Kerala, India — 683546</li>
              <li>
                Email:{" "}
                <Link
                  href="mailto:info@herziacademy.com"
                  className="text-[#1942c7] hover:underline font-medium"
                >
                  info@herziacademy.com
                </Link>
              </li>
              <li>
                Phone:{" "}
                <a
                  className="text-[#1942c7] hover:underline font-medium"
                  href="tel:+918089808042"
                >
                  +91 80 89 80 80 42
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
