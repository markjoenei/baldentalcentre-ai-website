export const teamMembers = [
  {
    name: "Dr. Harnek Bal",
    role: "Lead Dentist & Founder",
    bio: "With over 25 years of dentistry experience, Dr. Bal founded the practice on a single principle: treat every patient like family.",
    image: "/images-about/team-lead.jpg",
    credentials: ["DDS, University of Toronto", "RCDSO Member", "ODA Active Member"],
  },
  {
    name: "Dr. Priya Sharma",
    role: "Cosmetic & Restorative Dentist",
    bio: "A specialist in veneers, Invisalign and smile makeovers, Dr. Sharma trained at NYU's prestigious Aesthetic Continuum.",
    image: "/images-about/team-1.jpg",
    credentials: ["DMD, Harvard School of Dental Medicine", "Invisalign Platinum Provider"],
  },
  {
    name: "Dr. Michael Chen",
    role: "Implant & Surgical Dentist",
    bio: "Dr. Chen leads our implant and oral surgery program with a gentle, evidence-based approach and IV sedation expertise.",
    image: "/images-about/team-2.jpg",
    credentials: ["DDS, McGill University", "IV Sedation Certified", "ICOI Diplomate"],
  },
  {
    name: "Sarah Williams, RDH",
    role: "Lead Hygienist",
    bio: "Sarah brings 18 years of hygiene expertise and a calming chair-side manner that puts even the most nervous patients at ease.",
    image: "/images-about/team-3.jpg",
    credentials: ["RDH, George Brown College", "CDHO Active Member"],
  },
  {
    name: "Dr. James O'Connor",
    role: "Endodontist (Root Canals)",
    bio: "When tooth pain strikes, Dr. O'Connor's same-day pain-relief root canals save smiles every day of the week.",
    image: "/images-about/team-4.jpg",
    credentials: ["DDS, Western University", "Endodontic Specialist"],
  },
  {
    name: "Linda Park",
    role: "Patient Care Coordinator",
    bio: "Linda is the warm voice on the phone — coordinating insurance, financing, and your first comfortable visit.",
    image: "/images-about/team-5.jpg",
    credentials: ["Certified Dental Office Manager", "Multilingual: English, Korean, Mandarin"],
  },
];

export const teamLeadBio = {
  name: "Dr. Harnek Bal",
  role: "Founder & Lead Dentist",
  image: "/images-about/team-6.jpg",
  bio: [
    "Dr. Bal opened Bal Dental Centre with a simple mission: deliver world-class dentistry in a neighbourhood setting. Over two decades later, that mission still drives every cleaning, crown, and smile makeover.",
    "A graduate of the University of Toronto Faculty of Dentistry, Dr. Bal has trained extensively in implantology, cosmetic dentistry, and IV sedation. He is an active member of the Royal College of Dental Surgeons of Ontario and a Readers' Choice award winner five years running.",
    "Outside the clinic, you'll find him cheering at his kids' hockey games, volunteering with local community health drives, and hunting for the best samosa in Scarborough.",
  ],
  stats: [
    { value: "25+", label: "Years Experience" },
    { value: "10,000+", label: "Patients Treated" },
    { value: "5×", label: "Award Winner" },
  ],
};

export const whyUsFeatures = [
  {
    title: "Same-Day Emergencies, Always",
    body: "Tooth pain doesn't wait — and neither do we. Walk-in and same-day emergency appointments seven days a week, including evenings.",
    image: "/images-about/why-1.jpg",
    points: ["Same-day pain relief", "Open evenings & weekends", "Direct line for urgent care"],
  },
  {
    title: "Tech That Catches Issues Early",
    body: "Digital X-rays, intraoral cameras, and 3D scanning let us spot tiny issues before they become big bills.",
    image: "/images-about/why-2.jpg",
    points: ["90% lower radiation digital X-rays", "Intraoral cameras you can see", "3D scans — no impression goop"],
  },
  {
    title: "A Family Practice for Every Age",
    body: "From your toddler's first checkup to grandpa's implants, three generations of patients trust us with their smiles.",
    image: "/images-about/why-3.jpg",
    points: ["Pediatric specialists on staff", "Senior-friendly accessibility", "Three-generation discount"],
  },
  {
    title: "Transparent Pricing, No Surprises",
    body: "We quote you up-front, bill insurance directly, and offer in-house financing so cost never blocks care.",
    image: "/images-about/why-4.jpg",
    points: ["Direct insurance billing", "0% interest financing", "Free written treatment plans"],
  },
];

export const officeTour = [
  {
    image: "/images/office-tour-2.png",
    title: "Reception & Welcome Lounge",
    body: "Calm, contemporary, and stocked with refreshments — a far cry from the dental waiting room you remember.",
  },
  {
    image: "/images/office-tour-3.png",
    title: "Treatment Suites",
    body: "Six private operatories with massage chairs, noise-cancelling headphones, and ceiling-mounted Netflix.",
  },
  {
    image: "/images/office-tour-4.png",
    title: "Digital Imaging Suite",
    body: "Cone-beam CT, panoramic X-ray, and 3D scanning — diagnostics that used to take three appointments, done in one.",
  },
  {
    image: "/images/office-tour-5.png",
    title: "Sterilization Centre",
    body: "Hospital-grade sterilization in a glass-walled room you can watch. Because trust starts with seeing how the sausage is made.",
  },
];

export const selectionCriteria = [
  {
    num: "01",
    title: "Check Their Credentials",
    body: "Look for an RCDSO licence, ongoing continuing education, and specialty certifications relevant to the work you need (implants, ortho, sedation).",
  },
  {
    num: "02",
    title: "Visit Before You Commit",
    body: "Tour the office, meet the team, and trust your gut. The right dental home should feel calm, clean, and welcoming.",
  },
  {
    num: "03",
    title: "Look for Modern Technology",
    body: "Digital X-rays, intraoral cameras, and 3D scanning aren't gimmicks — they catch problems earlier and reduce treatment time.",
  },
  {
    num: "04",
    title: "Ask About Payment Options",
    body: "A good practice bills insurance directly, offers in-house financing, and quotes treatment plans in writing before any work begins.",
  },
  {
    num: "05",
    title: "Read Real Patient Reviews",
    body: "Beyond the star rating — read the long-form reviews. Watch for repeated mentions of comfort, communication, and follow-up.",
  },
  {
    num: "06",
    title: "Confirm Emergency Availability",
    body: "A dentist who closes at 5pm on Friday isn't there when you cracked a tooth on Saturday morning. Seven-day availability matters.",
  },
];

export const galleryCategories = [
  "All",
  "Veneers",
  "Whitening",
  "Invisalign",
  "Implants",
  "General",
] as const;

export const galleryItems = [
  { src: "/images-about/gallery-1.jpg", category: "Veneers", caption: "Porcelain Veneers — Full Smile" },
  { src: "/images-about/gallery-2.jpg", category: "Whitening", caption: "Professional Whitening" },
  { src: "/images-about/gallery-3.jpg", category: "Invisalign", caption: "Invisalign Clear Aligners" },
  { src: "/images-about/gallery-4.jpg", category: "Veneers", caption: "Single Veneer Restoration" },
  { src: "/images-about/gallery-5.jpg", category: "General", caption: "Pediatric Cleaning" },
  { src: "/images-about/gallery-6.jpg", category: "Implants", caption: "Full-Arch Implants" },
  { src: "/images-about/gallery-7.jpg", category: "Whitening", caption: "Zoom! Whitening" },
  { src: "/images-about/gallery-8.jpg", category: "General", caption: "Crown Restoration" },
  { src: "/images-about/gallery-9.jpg", category: "Implants", caption: "Senior Implant Bridge" },
  { src: "/images-about/gallery-10.jpg", category: "General", caption: "Family Smiles" },
  { src: "/images-about/gallery-11.png", category: "Invisalign", caption: "Teen Invisalign" },
  { src: "/images-about/gallery-12.jpg", category: "Veneers", caption: "Smile Makeover" },
];

export const blogPosts = [
  {
    slug: "5-signs-need-dental-cleaning",
    title: "5 Signs You Need a Dental Cleaning Sooner Than You Think",
    excerpt: "Bleeding gums, persistent bad breath, sensitivity — your mouth tells you when it's time. Here's how to listen.",
    category: "Preventive Care",
    readTime: "4 min read",
    date: "May 4, 2026",
    image: "/images-about/blog-1.jpg",
    featured: true,
  },
  {
    slug: "invisalign-vs-braces",
    title: "Invisalign vs. Traditional Braces: Which Is Right for You?",
    excerpt: "We break down cost, comfort, treatment time, and lifestyle so you can pick the path that fits.",
    category: "Orthodontics",
    readTime: "6 min read",
    date: "April 22, 2026",
    image: "/images-about/blog-2.jpg",
  },
  {
    slug: "dental-implants-explained",
    title: "Dental Implants Explained: What to Expect, Start to Finish",
    excerpt: "From consultation to crown placement — your full implant journey demystified in 8 simple steps.",
    category: "Implants",
    readTime: "8 min read",
    date: "April 10, 2026",
    image: "/images-about/blog-3.jpg",
  },
  {
    slug: "kids-first-dental-visit",
    title: "Your Child's First Dental Visit: A Parent's Calm-Confidence Guide",
    excerpt: "When to come, what we'll do, and how to make it a fun memory instead of a fearful one.",
    category: "Pediatric",
    readTime: "5 min read",
    date: "March 28, 2026",
    image: "/images-about/blog-4.jpg",
  },
  {
    slug: "whitening-myths",
    title: "5 Teeth-Whitening Myths That Are Quietly Damaging Your Enamel",
    excerpt: "Charcoal toothpaste, lemon rinses, OTC strips — what actually works (and what wrecks your smile).",
    category: "Cosmetic",
    readTime: "5 min read",
    date: "March 15, 2026",
    image: "/images-about/blog-5.png",
  },
  {
    slug: "dental-anxiety",
    title: "Beat Dental Anxiety: 7 Patient-Tested Calming Strategies",
    excerpt: "From IV sedation to noise-cancelling headphones to ceiling Netflix — your toolkit for stress-free care.",
    category: "Patient Comfort",
    readTime: "7 min read",
    date: "March 1, 2026",
    image: "/images-about/blog-6.jpg",
  },
];

export const nihbBenefits = [
  {
    icon: "shield",
    title: "Fully Covered Preventive Care",
    body: "Cleanings, exams, X-rays, fluoride and scaling — completely covered when you present a valid status card.",
  },
  {
    icon: "tooth",
    title: "Restorative Treatment",
    body: "Fillings, crowns, root canals, extractions and dentures — coordinated directly with your NIHB representative.",
  },
  {
    icon: "kids",
    title: "Pediatric Coverage",
    body: "Comprehensive care for children, including orthodontic consultations and pre-approval support for braces.",
  },
  {
    icon: "calendar",
    title: "No Up-Front Payment",
    body: "We bill NIHB directly. You walk in, get treated, walk out — no paperwork, no out-of-pocket surprises.",
  },
];

export const nihbSteps = [
  { num: "01", title: "Call or Book Online", body: "Tell us you're an NIHB patient when you book — we'll prep your file in advance." },
  { num: "02", title: "Bring Your Status Card", body: "Just your status card and a piece of photo ID. We handle the rest of the verification." },
  { num: "03", title: "Pre-Approval (If Needed)", body: "For major work, we submit pre-determination and walk you through your options in plain English." },
  { num: "04", title: "Treatment + Direct Billing", body: "Get the care you need. We bill NIHB directly — you never see a bill for covered services." },
];
