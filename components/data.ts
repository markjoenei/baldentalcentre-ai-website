export const PHONE_DISPLAY = "416-267-6789";
export const PHONE_TEL = "+14162676789";
export const PHONE_2_DISPLAY = "647-490-0674";
export const PHONE_2_TEL = "+16474900674";
export const EMAIL = "info@baldentalcentre.com";
export const ADDRESS_LINE = "4 Greystone Walk Dr #4 Scarborough, ON M1K 5J2";
export const ADDRESS_MULTI = ["4 Greystone Walk Dr #4", "Scarborough, ON M1K 5J2"];
export const BOOK_URL = "/book-appointment";
export const REVIEW_URL =
  "https://chatrbee.com/recommend?Bal-Dental-Centre&name=aa&numb=00&uniquekey=Bal-Dental-Centre.108&code=T7aIVqEHY5kZxCy&useremail=email";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/place/Bal+Dental+Centre/@43.7247316,-79.2551198,785m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89d4ce365ec14963:0x3204a1154c78196a!8m2!3d43.7247278!4d-79.2525449!16s%2Fg%2F1hhksygg_?entry=tts";
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.7!2d-79.2525449!3d43.7247278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce365ec14963%3A0x3204a1154c78196a!2sBal%20Dental%20Centre!5e0!3m2!1sen!2sca!4v1234567890";

export const navServices: Array<{ label: string; href: string }> = [
  { label: "Preventive Dentistry", href: "/services/preventive-dentistry" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Dental Crowns & Bridges", href: "/services/dental-crowns-bridges" },
  { label: "Dentures & Partials", href: "/services/dentures-partials" },
  { label: "Tooth-Colored Fillings", href: "/services/tooth-colored-fillings" },
  { label: "Root Canal", href: "/services/root-canal" },
  { label: "Tooth Extractions", href: "/services/tooth-extractions" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Porcelain Veneers", href: "/services/porcelain-veneers" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Lumineers", href: "/services/lumineers" },
  { label: "Orthodontics", href: "/services/orthodontics" },
  { label: "Composite Bonding", href: "/services/composite-bonding" },
  { label: "Invisalign Clear Braces", href: "/services/invisalign" },
  { label: "Snap-On Smile", href: "/services/snap-on-smile" },
  { label: "TMJ Therapy", href: "/services/tmj-therapy" },
  { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
  { label: "Dental Emergency", href: "/services/dental-emergency" },
];

export const navAbout: Array<{ label: string; href: string }> = [
  { label: "Meet Our Team", href: "/about/meet-our-team" },
  { label: "Why Us", href: "/about/why-us" },
  { label: "Tour Our Office", href: "/about/tour-our-office" },
  { label: "How To Select The Best Dentist", href: "/about/how-to-select-the-best-dentist" },
  { label: "Smile Gallery", href: "/about/smile-gallery" },
  { label: "Blog", href: "/blog" },
  { label: "NIHB (First Nations)", href: "/about/nihb" },
];

export const whyChooseItems = [
  {
    title: "We Do It All",
    body:
      "Time for a checkup and cleaning? Need a tooth repaired or replaced? Want your smile to look fantastic at an upcoming special event? If so, you’ll find everything you need right here at the Bal Dental Centre. We’re able to perform just about any treatment you can imagine in-house, making it easier than ever to get the healthy, beautiful smile you deserve.",
  },
  {
    title: "Highly Trained Team",
    body:
      "Our dentists and hygienists undergo continuous education to bring you the latest techniques and technology in modern dentistry.",
  },
  {
    title: "IV Sedation Dentistry Available",
    body:
      "Anxious about dental visits? Our IV sedation option lets you sleep comfortably through complex procedures, waking up to a beautiful smile.",
  },
  {
    title: "State-Of-The-Art Dental Office",
    body:
      "We invest in the best equipment — digital X-rays, intraoral cameras, and comfortable treatment chairs — for precise, efficient care.",
  },
  {
    title: "Flexible Appointments",
    body:
      "Open 7 days a week including evenings and weekends. We work around your schedule so you never have to miss care.",
  },
  {
    title: "Dental Emergencies Welcome",
    body:
      "Tooth pain or injury? We accept same-day emergency appointments. Call us and we’ll see you as soon as possible.",
  },
];

export const faqItems = [
  {
    q: "How do I find the best place to get dental work done?",
    a: "Time for a checkup and cleaning? Need a tooth repaired or replaced? Want your smile to look fantastic at an upcoming special event? If so, you’ll find everything you need right here at the Bal Dental Centre. We’re able to perform just about any treatment you can imagine in-house, making it easier than ever to get the healthy, beautiful smile you deserve.",
  },
  {
    q: "How can I make a same-day appointment with a dentist?",
    a: "Yes, call us at 416-267-6789 and we will do our very best to fit you in for an emergency or same-day appointment.",
  },
  {
    q: "What do you do if you can’t afford a dentist?",
    a: "We offer flexible financing options and direct billing to most insurance providers. We will work with you to find a solution.",
  },
  {
    q: "What level of education is required to be a dentist?",
    a: "Dentists in Canada complete an undergraduate degree followed by 4 years of dental school to earn a DDS or DMD degree, along with provincial licensing.",
  },
];

type FeaturedService = {
  id: number;
  label: string;
  heading: string;
  body: string;
  image: string;
  imagePosition?: string;
  url: string;
};

export const featuredServices: FeaturedService[] = [
  {
    id: 0,
    label: "Preventive Dentistry",
    heading: "PREVENTIVE DENTISTRY — PROTECT YOUR SMILE FOR LIFE",
    body:
      "Regular cleanings, exams, and fluoride treatments keep your teeth healthy and catch problems early before they become costly issues.",
    image: "/images/service-preventive.jpg",
    url: "/services/preventive-dentistry",
  },
  {
    id: 1,
    label: "Dental Crowns & Bridges",
    heading: "DENTAL CROWNS & BRIDGES RESTORE TEETH & REGAIN CONFIDENCE",
    body:
      "Missing one or more teeth? Traditional dental crowns and bridges are a tried-and-true restorative dentistry solution. Crowns can reverse damage and decay by restoring the top.",
    image: "/images/service-crowns.jpg",
    url: "/services/dental-crowns-bridges",
  },
  {
    id: 2,
    label: "Root Canals & Emergencies",
    heading: "ROOT CANALS & EMERGENCIES — SAME-DAY PAIN RELIEF",
    body:
      "Severe toothache? We provide same-day emergency care and gentle root canal therapy to relieve pain and save your natural tooth.",
    image: "/images/service-emergency.jpg",
    url: "/services/dental-emergency",
  },
  {
    id: 3,
    label: "Cosmetic Dentistry",
    heading: "COSMETIC DENTISTRY — GET THE SMILE OF YOUR DREAMS",
    body:
      "Veneers, bonding, whitening, and smile makeovers — our cosmetic treatments are tailored to give you a radiant, confident smile.",
    image: "/images/service-cosmetic.jpg",
    imagePosition: "top",
    url: "/services/cosmetic-dentistry",
  },
  {
    id: 4,
    label: "Dental Implants",
    heading: "DENTAL IMPLANTS — PERMANENT NATURAL-FEELING TEETH",
    body:
      "Replace one or all your missing teeth with permanent implants that look and function exactly like your natural teeth. Starting at $3,000 all-inclusive.",
    image: "/images/service-implants.png",
    url: "/services/dental-implants",
  },
  {
    id: 5,
    label: "Invisalign Clear Braces",
    heading: "INVISALIGN CLEAR BRACES — DISCREETLY STRAIGHTEN TEETH",
    body:
      "Virtually invisible aligners gradually straighten your teeth without metal wires or brackets. Available from $5,000.",
    image: "/images/service-invisalign.jpg",
    url: "/services/invisalign",
  },
];

export const officeHours: Array<[string, string]> = [
  ["Monday", "9 a.m. – 7 p.m."],
  ["Tuesday", "9 a.m. – 7 p.m."],
  ["Wednesday", "9 a.m. – 7 p.m."],
  ["Thursday", "9 a.m. – 7 p.m."],
  ["Friday", "9 a.m. – 7 p.m."],
  ["Saturday", "9 a.m. – 6 p.m."],
  ["Sunday", "10 a.m. – 5 p.m."],
];

export const languages = ["English", "Punjabi", "Hindi", "Bangoli", "Telugu", "Tagalog", "Cantonese"];
