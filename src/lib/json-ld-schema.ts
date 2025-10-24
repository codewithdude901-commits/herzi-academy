export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://herziacademy.com/#website",
      name: "Herzi Academy",
      url: "https://herziacademy.com",
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://herziacademy.com/#webpage",
      name: "Herzi – Best German Language Academy & Recruitment Consultant in Kerala for Study and Work in Germany",
      url: "https://herziacademy.com",
      description:
        "Herzi German Academy: Specialized training for Nursing/Medical careers in Germany, Exam prep, German language classes, Ausbildung/Masters recruitment, and more from Kerala, India.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": "https://herziacademy.com/#website",
      },
      headline: "Dreaming of Germany? Start Your Journey with Herzi!",
      mainEntity: {
        "@id": "https://herziacademy.com/#organization",
      },
      hasPart: [
        { "@id": "https://herziacademy.com/#faq" },
        { "@id": "https://herziacademy.com/#contact" },
      ],
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://herziacademy.com/#organization",
      name: "Herzi Academy",
      alternateName: "Herzi German Academy",
      url: "https://herziacademy.com",
      description:
        "One Academy, Endless Opportunities. At Herzi German Academy, we offer specialized Medical German language training and career guidance for students and healthcare professionals aspiring to work or study in Germany.",
      logo: "https://herziacademy.com/logo.webp",
      knowsLanguage: ["de", "en"],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Mathson Chambers - NH85, Kochi-Dhanushkodi Road, near Aann's Ladies Hostel",
        addressLocality: "Kothamangalam",
        addressRegion: "Kerala",
        postalCode: "686691",
        addressCountry: "IN",
      },
      telephone: "+91 8089808042",
      email: "info@herziacademy.com",
      sameAs: [
        "https://www.instagram.com/herzigerman",
        "https://www.linkedin.com/in/herzi-german-academy-bb8507389",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        ratingCount: 6,
        reviewCount: 6,
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sisira Sajeev" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "The classes are good, and the teachers are super helpful and friendly. The atmosphere is really nice, which makes learning German way more fun. The daily speaking sessions are especially helpful for improving my language skills. I've learned a lot and would definitely recommend it!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Muhammad Anas" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "I completed my B2 course at Herzi German Academy. The course gave me knowledge and confidence to use German every day. The teachers explained even difficult grammar clearly and supported us well. The atmosphere was motivating. I would recommend Herzi German Academy to anyone who wants to learn German.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Midhul Babu" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "I am a student at Herzi German Academy, and I am very happy with my choice. The teachers are very supportive, and we can ask any questions openly. Their way of teaching is clear and easy to understand. We also have daily vocabulary tests and speaking sessions, which have helped me greatly to improve my language skills.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mohammad Saheel" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Learning German here has been a wonderful experience. The teachers explain everything clearly and make classes very interactive. I feel more confident with my German every day. Highly recommend this institute!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Binil Sunny" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Herzi Academy has been such a nice place to learn German. The classes are engaging and never feel boring. I’ve noticed a big boost in my confidence while speaking, and it’s easier for me to use German in daily life now. The friendly vibe here really makes learning fun.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Muhammed V Anwar" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "The institute feels like a place where language comes alive, not just a classroom. I now see German not as a challenge but as a doorway to new possibilities.",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Services & Features",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "German Language Classes (A1–B2)",
                description:
                  "Our German Language Classes (A1–B2) prepare you for Goethe, telc, and ÖSD exams. Covers speaking, listening, reading, and writing.",
                provider: { "@id": "https://herziacademy.com/#organization" },
                inLanguage: ["en", "de"],
                educationalLevel: "A1-B2",
                hasCourseInstance: [
                  {
                    "@type": "CourseInstance",
                    name: "Online German Language Course",
                    courseMode: "online",
                  },
                  {
                    "@type": "CourseInstance",
                    name: "In-Person German Language Course",
                    courseMode: "in-person",
                  },
                ],
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Master's Admissions Guidance",
                description:
                  "Herzi helps you with admissions to Master's programs at top German public universities — no German required initially.",
                provider: { "@id": "https://herziacademy.com/#organization" },
                areaServed: "DE",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ausbildung Recruitment",
                description:
                  "Herzi guides you into Ausbildung programs in Germany — combining study and on-the-job training.",
                provider: { "@id": "https://herziacademy.com/#organization" },
                areaServed: "DE",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Nursing Recruitment & Support",
                description:
                  "Herzi provides nurse migration services: German training, job placement, visa, and settlement support.",
                provider: { "@id": "https://herziacademy.com/#organization" },
                areaServed: "DE",
                serviceType: "Nursing Recruitment",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "APS & Attestation Support",
                description:
                  "Professional translation and attestation for education and job-related documents for Germany.",
                provider: { "@id": "https://herziacademy.com/#organization" },
                areaServed: ["IN", "DE"],
                serviceType: "APS & Attestation Support",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Visa Guidance (Opportunity Card)",
                description:
                  "Guidance for Germany’s Opportunity Card – a 12-month job search visa for skilled professionals.",
                provider: { "@id": "https://herziacademy.com/#organization" },
                areaServed: "DE",
                serviceType: "Visa Guidance",
              },
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://herziacademy.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Herzi Academy provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Herzi offers German language courses (online & offline), exam preparation (Goethe, TELC, ÖSD), recruitment support for Ausbildung, Masters, and Nursing careers in Germany, as well as post-admission services like accommodation, courier, and pickup.",
          },
        },
        {
          "@type": "Question",
          name: "Can I learn German online with Herzi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Herzi provides both online and offline classes for all levels (A1 to C1), so you can learn at your convenience.",
          },
        },
        {
          "@type": "Question",
          name: "Does Herzi help with exam preparation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We partner with exam providers like Goethe, TELC, and ÖSD to prepare students with mock tests, strategies, and focused lessons.",
          },
        },
        {
          "@type": "Question",
          name: "What is Ausbildung, and how does Herzi support it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ausbildung is a vocational training program in Germany. Herzi helps students with language preparation, documentation, and recruitment placement for Ausbildung opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide support for Masters admissions in Germany?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We guide students through the entire process — from language courses to APS, documentation, motivation letters, and placement in top German universities.",
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://herziacademy.com/#contact",
      name: "Contact - Herzi Academy",
      description:
        "Contact Herzi Academy for admissions, course details, and counselling. Branch contact details included.",
      isPartOf: { "@id": "https://herziacademy.com/#webpage" },
      mainEntity: { "@id": "https://herziacademy.com/#organization" },
    },
  ],
};
