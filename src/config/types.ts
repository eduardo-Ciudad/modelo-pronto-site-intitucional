export type FaqItem = {
  question: string;
  answer: string;
};

export type Treatment = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string[];
  conditions: string[];
  howItWorks: string[];
  averageSessions: string;
  faq: FaqItem[];
  image: string;
  imageAlt: string;
};

export type Audience = {
  slug: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

export type Testimonial = {
  text: string;
  name: string;
  context: string;
  isExample: boolean;
};

export type CareValue = {
  title: string;
  text: string;
  icon: "ear" | "message" | "path";
};

export type GalleryImage = { src: string; alt: string };

export type ClinicConfig = {
  name: string;
  siteUrl: string;
  tagline: string;
  description: string;
  city: string;
  state: string;
  whatsapp: string;
  phone: string;
  phoneInternational: string;
  email: string;
  address: string;
  addressDetails: { streetAddress: string; addressLocality: string; addressRegion: string; addressCountry: string };
  hours: { weekdays: string; saturday: string };
  openingHours: { days: string[]; opens: string; closes: string }[];
  mapsEmbedUrl: string;
  professional: {
    name: string;
    registration: string;
    bio: string[];
    image: string;
    imageAlt: string;
    secondaryImage: string;
    secondaryImageAlt: string;
    specialties: string[];
  };
  stats: { label: string; value: string }[];
  treatments: Treatment[];
  audiences: Audience[];
  faq: FaqItem[];
  social: { instagram: string };
  navigation: {
    treatments: string;
    about: string;
    blog: string;
    contact: string;
    schedule: string;
    openMenu: string;
    closeMenu: string;
    treatmentsMenu: string;
    mainMenu: string;
  };
  footer: {
    treatmentsTitle: string;
    contactTitle: string;
    linksTitle: string;
    privacy: string;
    creditsPrefix: string;
    creditsName: string;
  };
  whatsappUi: { floatingLabel: string; defaultMessage: string; treatmentMessagePrefix: string };
  seo: {
    homeTitle: string;
    homeDescription: string;
    styleguideTitle: string;
    styleguideDescription: string;
  };
  analytics: {
    consentText: string;
    accept: string;
    decline: string;
    privacyLink: string;
  };
  home: {
    hero: {
      locationLabel: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      trustText: string;
      video: string;
      poster: string;
      mediaAlt: string;
    };
    treatments: { eyebrow: string; title: string; description: string; allLink: string };
    audiences: { eyebrow: string; title: string; description: string };
    process: { eyebrow: string; title: string; description: string; cta: string; steps: ProcessStep[] };
    professional: { eyebrow: string; aboutLink: string; specialtiesTitle: string };
    testimonials: { eyebrow: string; title: string; description: string; exampleNote: string; items: Testimonial[] };
    faq: { eyebrow: string; title: string; description: string; cta: string };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
      hoursLabel: string;
      directionsCta: string;
      mapTitle: string;
    };
    finalCta: { eyebrow: string; title: string; description: string; button: string };
  };
  pages: {
    treatments: { eyebrow: string; title: string; description: string; metadataTitle: string; metadataDescription: string };
    treatmentDetail: {
      conditionsTitle: string;
      howTitle: string;
      durationTitle: string;
      summaryTitle: string;
      professionalLabel: string;
      schedulePrefix: string;
      otherEyebrow: string;
      otherTitle: string;
      medicalTherapyType: string;
    };
    about: {
      metadataTitle: string;
      eyebrow: string;
      title: string;
      description: string;
      metadataDescription: string;
      headerImage: string;
      headerImageAlt: string;
      valuesEyebrow: string;
      valuesTitle: string;
      valuesDescription: string;
      values: CareValue[];
      galleryEyebrow: string;
      galleryTitle: string;
      gallery: GalleryImage[];
    };
    contact: { eyebrow: string; title: string; description: string; metadataTitle: string; metadataDescription: string };
    privacy: {
      metadataTitle: string;
      eyebrow: string;
      title: string;
      description: string;
      metadataDescription: string;
      notice: string;
      sections: { title: string; paragraphs: string[] }[];
    };
    notFound: { title: string; description: string; homeButton: string; treatmentsButton: string };
    breadcrumbs: { home: string; treatments: string; about: string; contact: string; privacy: string };
  };
};
