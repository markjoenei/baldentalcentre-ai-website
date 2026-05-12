export type Service = {
  slug: string;
  category: "Preventive" | "Restorative" | "Cosmetic" | "Orthodontics" | "Specialty";
  label: string;
  shortDescription: string;
  hubImage: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    image: string;
    imageAlt: string;
    stats: Array<{ value: string; label: string }>;
  };
  intro: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
    image: string;
    bullets: string[];
  };
  benefits: Array<{ icon: BenefitIcon; title: string; body: string }>;
  process: Array<{ num: string; title: string; body: string }>;
  candidates: {
    title: string;
    titleAccent: string;
    description: string;
    image: string;
    points: string[];
  };
  faqs: Array<{ q: string; a: string }>;
  pricing: { headline: string; sub: string; note: string };
  cta: { title: string; titleAccent: string; description: string };
};

export type BenefitIcon =
  | "shield"
  | "tooth"
  | "sparkle"
  | "calendar"
  | "heart"
  | "smile"
  | "clock"
  | "leaf"
  | "lightning"
  | "diamond"
  | "wallet"
  | "stethoscope";

export const services: Service[] = [
  {
    slug: "preventive-dentistry",
    category: "Preventive",
    label: "Preventive Dentistry",
    shortDescription: "Cleanings, exams, and protective treatments that stop problems before they start.",
    hubImage: "/images-services/hub-preventive.jpg",
    hero: {
      eyebrow: "Preventive Dentistry",
      title: "Stop Problems Before They Start —",
      titleAccent: "Preventive Care That Saves Smiles & Money",
      description:
        "The dentistry you don't notice is the dentistry that saves you the most. Routine cleanings, exams and fluoride catch tiny issues before they become $3,000 surprises.",
      image: "/images-services/preventive-hero.jpg",
      imageAlt: "Healthy family laughing together",
      stats: [
        { value: "60%", label: "Lower Lifetime Bills" },
        { value: "2×/yr", label: "Recommended Visits" },
        { value: "$99", label: "Hygiene Special" },
      ],
    },
    intro: {
      eyebrow: "The Foundation of Every Smile",
      title: "More Than Just a Cleaning —",
      titleAccent: "A Full Health Screening for Your Mouth",
      paragraphs: [
        "Every six-month visit is far more than scraping plaque. Our hygienists screen for gum disease, oral cancer, jaw issues, enamel wear, and early decay — issues that quietly cost patients tens of thousands of dollars when caught late.",
        "We pair clinical excellence with comfort: ultrasonic scalers, fluoride foam, and a relaxed pace that respects your time and your nerves.",
      ],
      image: "/images-services/preventive-intro.jpg",
      bullets: [
        "Comprehensive 6-point oral exam",
        "Digital X-rays (90% less radiation)",
        "Ultrasonic deep cleaning",
        "Oral cancer screening included",
      ],
    },
    benefits: [
      { icon: "shield", title: "Stop Decay Early", body: "Catch tiny cavities while they're still painless and inexpensive to fix." },
      { icon: "heart", title: "Save Your Heart", body: "Gum disease links directly to heart disease. Clean gums protect your whole body." },
      { icon: "wallet", title: "Save Thousands Long-Term", body: "Patients on a 6-month plan spend 60% less on dentistry over their lifetime." },
      { icon: "smile", title: "Brighter, Whiter Smile", body: "Professional cleaning removes coffee, wine and tobacco stains brushing can't touch." },
    ],
    process: [
      { num: "01", title: "Welcome & Health Review", body: "We review your medical history, medications, and any concerns since your last visit." },
      { num: "02", title: "Comprehensive Exam", body: "Visual exam, gum-pocket measurements, oral cancer screening and digital X-rays as needed." },
      { num: "03", title: "Professional Cleaning", body: "Ultrasonic scaling, polish, fluoride application — gentle and thorough." },
      { num: "04", title: "Personalized Plan", body: "Walk out with a clear written plan: next visit, home care tips, and any flagged work." },
    ],
    candidates: {
      title: "Preventive Care Is For",
      titleAccent: "Every Smile, Every Age",
      description:
        "Whether you're a brand-new patient, a parent booking the whole family, or a senior managing complex needs — prevention is the smartest dental investment you'll ever make.",
      image: "/images-services/preventive-candidates.jpg",
      points: [
        "Adults due for their 6-month checkup",
        "Children (we recommend first visit by age 1)",
        "Pregnant patients (hormones increase gum risk)",
        "Seniors managing dry mouth or root sensitivity",
        "Patients with braces, implants, or crowns",
        "Anyone who's avoided the dentist for a while",
      ],
    },
    faqs: [
      { q: "How often should I really come in?", a: "Twice a year for most adults. Patients with gum disease, smokers, or those with crowns/implants may need 3–4 visits per year. We'll recommend a custom interval after your first exam." },
      { q: "Will my insurance cover cleanings?", a: "Most plans cover 2 cleanings per year at 80–100%. We bill insurance directly and quote any out-of-pocket amount up-front — no surprises." },
      { q: "Does cleaning hurt if I have sensitive teeth?", a: "Rarely. We use ultrasonic scalers (much gentler than scraping) and can apply topical numbing for sensitive areas. Tell us — we'll adjust." },
      { q: "What if I haven't been to a dentist in years?", a: "You're far from alone — we welcome you back with zero judgment. Expect a more thorough first cleaning and a gentle plan to get you healthy again." },
      { q: "Is fluoride safe for children?", a: "Yes, professionally applied topical fluoride is one of the most-studied treatments in medicine and dramatically reduces childhood cavities." },
    ],
    pricing: { headline: "$99", sub: "Hygiene Services", note: "Direct insurance billing — most patients pay $0 out-of-pocket." },
    cta: {
      title: "Book your six-month",
      titleAccent: "cleaning today",
      description: "Same-week appointments available, evenings and weekends included. New patients welcome — and yes, we'll bill your insurance directly.",
    },
  },

  {
    slug: "dental-implants",
    category: "Restorative",
    label: "Dental Implants",
    shortDescription: "Permanent, natural-feeling teeth replacements starting at $3,000 all-inclusive.",
    hubImage: "/images-services/hub-implants.jpeg",
    hero: {
      eyebrow: "Dental Implants",
      title: "Permanent Teeth That",
      titleAccent: "Look, Feel & Function Like Your Own",
      description:
        "Replace one tooth or a full arch with implants that bite, chew and smile like nature intended. All-inclusive pricing starts at $3,000 — and we mean all-inclusive.",
      image: "/images-services/implants-hero.jpg",
      imageAlt: "Confident senior man with restored smile",
      stats: [
        { value: "$3,000", label: "All-Inclusive Start" },
        { value: "98%", label: "Success Rate" },
        { value: "25+yr", label: "Average Lifespan" },
      ],
    },
    intro: {
      eyebrow: "The Gold Standard in Tooth Replacement",
      title: "Why Implants Beat",
      titleAccent: "Bridges & Dentures",
      paragraphs: [
        "A dental implant is a titanium root that fuses with your jawbone — exactly the way a natural tooth root does. We then attach a custom porcelain crown on top, indistinguishable from the teeth around it.",
        "Unlike bridges (which damage neighboring teeth) or removable dentures (which slip and shrink your jaw), implants stand alone, preserve bone, and last decades.",
      ],
      image: "/images-services/implants-intro.jpg",
      bullets: [
        "Bite force equal to natural teeth",
        "Preserves jawbone & facial structure",
        "No special cleaning routine",
        "Cannot get cavities — ever",
      ],
    },
    benefits: [
      { icon: "diamond", title: "Permanent Solution", body: "Properly placed implants typically last 25+ years — often a lifetime." },
      { icon: "tooth", title: "Preserve Your Jaw", body: "Implants stimulate bone like natural roots — preventing the sunken-face look of dentures." },
      { icon: "smile", title: "Eat What You Love", body: "Steak, apples, corn on the cob — no foods are off-limits with implants." },
      { icon: "shield", title: "All-Inclusive Pricing", body: "$3,000 covers consult, surgery, healing cap, abutment and crown — no hidden fees." },
    ],
    process: [
      { num: "01", title: "Free Consult & 3D Scan", body: "Cone-beam CT scan to map bone density, nerves and ideal placement angle." },
      { num: "02", title: "Implant Placement", body: "Comfortable in-office surgery under local anaesthetic or IV sedation. Most patients return to work next day." },
      { num: "03", title: "Healing & Integration", body: "Over 3–6 months, your bone fuses with the titanium post. You leave with a temporary tooth in the meantime." },
      { num: "04", title: "Final Crown", body: "Custom porcelain crown placed and adjusted for a perfect bite. You walk out with a permanent new tooth." },
    ],
    candidates: {
      title: "Implants Are Right For You If",
      titleAccent: "You're Missing One or More Teeth",
      description:
        "Almost any healthy adult is a candidate. We've successfully placed implants in patients from 22 to 92 — including those who were told 'no' elsewhere.",
      image: "/images-services/implants-candidates.png",
      points: [
        "Missing a single tooth or multiple teeth",
        "Tired of loose, shifting dentures",
        "Want to avoid grinding down healthy teeth for a bridge",
        "Have adequate bone (or interested in grafting options)",
        "Non-smokers (or willing to quit during healing)",
        "Generally healthy — diabetes is fine when well-managed",
      ],
    },
    faqs: [
      { q: "Is implant surgery painful?", a: "Less than most patients expect. The procedure is done under local anaesthetic (or IV sedation if you prefer). Most patients describe post-op discomfort as 'a sore jaw for 2–3 days' — managed easily with ibuprofen." },
      { q: "How long does the whole process take?", a: "From initial scan to final crown: typically 4–6 months. The bulk is bone-healing time, which you go about your normal life through (with a temporary tooth in place)." },
      { q: "Will insurance cover any of it?", a: "Some plans cover up to 50% of the crown portion. We submit pre-determination so you know exactly what's covered before any treatment begins." },
      { q: "What if I don't have enough bone?", a: "Bone grafting is a routine same-day procedure. We've successfully implanted patients who were told elsewhere they couldn't have implants." },
      { q: "Can I get all my teeth replaced?", a: "Yes — full-arch implants (All-on-4 or All-on-6) replace an entire upper or lower with just 4–6 implants. We'll quote it during your free consult." },
    ],
    pricing: { headline: "From $3,000", sub: "All-Inclusive Single Implant", note: "Includes consult, surgery, abutment and final crown. Financing available." },
    cta: {
      title: "Schedule your free",
      titleAccent: "implant consultation",
      description: "30-minute consult, complimentary 3D scan, written quote — yours to take home. Zero pressure, zero commitment.",
    },
  },

  {
    slug: "dental-crowns-bridges",
    category: "Restorative",
    label: "Dental Crowns & Bridges",
    shortDescription: "Restore damaged or missing teeth with tooth-coloured crowns and natural-looking bridges.",
    hubImage: "/images-services/hub-crowns.jpg",
    hero: {
      eyebrow: "Crowns & Bridges",
      title: "Restore Damaged Teeth.",
      titleAccent: "Regain a Confident Bite.",
      description:
        "Whether a tooth is cracked, root-canalled, or missing entirely — modern crowns and bridges look identical to your natural teeth and last 15+ years.",
      image: "/images-services/crowns-hero.jpeg",
      imageAlt: "Mature couple smiling confidently",
      stats: [
        { value: "15+yr", label: "Crown Lifespan" },
        { value: "100%", label: "Tooth-Coloured" },
        { value: "2", label: "Visit Process" },
      ],
    },
    intro: {
      eyebrow: "The Workhorse of Restorative Dentistry",
      title: "Crowns Cap, Bridges Span —",
      titleAccent: "Both Restore What Time Took",
      paragraphs: [
        "A crown is a custom-fit porcelain cap that covers a damaged tooth — protecting it from further breakage and restoring full chewing function. A bridge uses crowns on adjacent teeth to 'bridge' a gap left by a missing tooth.",
        "Both are made from premium tooth-coloured porcelain, hand-tinted to match your existing teeth so precisely that even you won't be able to tell.",
      ],
      image: "/images-services/crowns-intro.jpg",
      bullets: [
        "Indistinguishable from natural teeth",
        "Protects cracked or root-canalled teeth",
        "Restores 100% of chewing function",
        "Premium porcelain — no metal showing",
      ],
    },
    benefits: [
      { icon: "shield", title: "Prevents Further Damage", body: "A crown holds together a cracked tooth — saving it from extraction down the line." },
      { icon: "smile", title: "Perfect Aesthetic Match", body: "Hand-tinted porcelain matches your surrounding teeth in colour, translucency and shape." },
      { icon: "tooth", title: "Restores Full Function", body: "Bite into anything — apples, steak, almonds — with the same force as a natural tooth." },
      { icon: "clock", title: "Long-Lasting", body: "A well-cared-for porcelain crown lasts 15–25 years. Bridges typically last 10–15." },
    ],
    process: [
      { num: "01", title: "Prep & Impression", body: "We gently shape the tooth, take a digital impression (no goopy mould) and fit a comfortable temporary crown." },
      { num: "02", title: "Custom Fabrication", body: "Our master ceramist hand-crafts your crown in our local lab to match your exact tooth shade." },
      { num: "03", title: "Try-In & Adjust", body: "Two weeks later we check fit, colour and bite — adjusting until it's invisible and feels perfect." },
      { num: "04", title: "Permanent Cement", body: "Final cementation. You walk out chewing normally — ready for the next 15+ years of smiling." },
    ],
    candidates: {
      title: "You Likely Need a",
      titleAccent: "Crown or Bridge If",
      description:
        "Crowns rescue teeth that fillings can't save. Bridges replace single missing teeth without surgery — a great option when implants aren't right for you.",
      image: "/images-services/crowns-candidates.jpg",
      points: [
        "Cracked, broken or severely worn tooth",
        "Just had a root canal (crown protects the tooth)",
        "Large old filling that's failing",
        "Missing a single tooth between healthy neighbours",
        "Want a non-surgical alternative to an implant",
        "Cosmetic concerns (size, shape, dark discoloration)",
      ],
    },
    faqs: [
      { q: "Will the crown match my other teeth?", a: "Yes — our ceramist hand-tints each crown to match your natural shade, including the subtle translucency at the edge. Most patients can't pick which tooth is the crown." },
      { q: "How long does the procedure take?", a: "Two visits, about 90 minutes total. Visit 1 (prep + temporary) is the longer one; visit 2 (final fit) is usually under 30 minutes." },
      { q: "Will it feel different than my natural tooth?", a: "After 1–2 weeks of getting used to it, no. The bite is calibrated to your exact occlusion." },
      { q: "Crown vs. implant — which is better?", a: "Different problems. A crown saves an existing tooth; an implant replaces a missing one. If your tooth can be saved with a crown, that's usually the better choice." },
      { q: "Does insurance cover crowns?", a: "Most plans cover 50% after deductible. We submit pre-determination so you'll know your exact out-of-pocket before we start." },
    ],
    pricing: { headline: "From $1,200", sub: "Per Tooth-Coloured Crown", note: "Bridges from $2,800. We bill insurance directly and offer financing." },
    cta: {
      title: "Restore your bite with a",
      titleAccent: "crown that lasts decades",
      description: "Book a 30-minute consult — we'll look, take a quick X-ray, and quote your treatment in writing before you leave.",
    },
  },

  {
    slug: "dentures-partials",
    category: "Restorative",
    label: "Dentures & Partials",
    shortDescription: "Custom-crafted dentures that fit comfortably and look completely natural.",
    hubImage: "/images-services/hub-dentures.jpg",
    hero: {
      eyebrow: "Dentures & Partials",
      title: "Comfortable, Custom Dentures",
      titleAccent: "That Look & Feel Like You",
      description:
        "Modern dentures are nothing like the loose, plastic-looking sets your grandparents had. Today's dentures fit snugly, look natural, and let you eat almost anything.",
      image: "/images-services/dentures-hero.jpg",
      imageAlt: "Elegant senior woman smiling naturally",
      stats: [
        { value: "5–7", label: "Visits to Perfect" },
        { value: "10yr+", label: "Average Lifespan" },
        { value: "100%", label: "Custom-Fit" },
      ],
    },
    intro: {
      eyebrow: "A Fresh Take on a Time-Tested Solution",
      title: "Full or Partial Dentures —",
      titleAccent: "Engineered for Modern Life",
      paragraphs: [
        "Whether you're missing all your teeth (full denture) or just a few (partial denture), we craft each set in our local lab to your exact bite, jaw shape and facial features.",
        "Want even more stability? Implant-retained dentures snap securely onto two to four implants — eliminating slipping, glue, and the gradual jaw shrinkage of traditional dentures.",
      ],
      image: "/images-services/dentures-intro.jpg",
      bullets: [
        "Hand-shaded to match your skin tone",
        "Custom-contoured for natural facial support",
        "Implant-retained option available",
        "Same-day repair if needed",
      ],
    },
    benefits: [
      { icon: "smile", title: "Eat With Confidence", body: "Properly-fit dentures restore 80–90% of natural bite force — most foods are back on the menu." },
      { icon: "sparkle", title: "Look Years Younger", body: "Dentures restore the facial support lost with missing teeth — reducing the 'sunken' look." },
      { icon: "wallet", title: "Affordable Restoration", body: "Less expensive than full-mouth implants and covered substantially by most insurance plans." },
      { icon: "tooth", title: "Implant-Upgrade Anytime", body: "Start with a traditional denture and add implant snaps later as budget allows." },
    ],
    process: [
      { num: "01", title: "Consultation & Impressions", body: "We assess your gums, jaw and remaining teeth. Multiple impressions ensure a precise fit." },
      { num: "02", title: "Wax Try-In", body: "Try on a wax model to perfect tooth colour, shape and bite before final fabrication." },
      { num: "03", title: "Final Delivery", body: "Hand-finished dentures fitted, adjusted and balanced. We tweak until they're comfortable." },
      { num: "04", title: "Two-Week Follow-Up", body: "Free fine-tuning visits during the adjustment period. We won't stop until they feel perfect." },
    ],
    candidates: {
      title: "Dentures Work Best For",
      titleAccent: "Patients Who Need Reliable, Affordable Tooth Replacement",
      description:
        "If you're missing several or all your teeth and prefer a non-surgical solution, modern dentures may be your best path back to a full, confident smile.",
      image: "/images-services/dentures-candidates.jpg",
      points: [
        "Missing all upper or lower teeth",
        "Missing 3+ teeth in a row",
        "Looking for a non-surgical option",
        "Open to upgrading to implant-retained later",
        "Current dentures that are loose or 10+ years old",
        "Budget-conscious patients seeking full restoration",
      ],
    },
    faqs: [
      { q: "Will they look fake?", a: "Today's dentures are stunning. We custom-tint each tooth (slight variation looks more natural than perfectly uniform), shape the gum line to match your existing tissue, and balance the bite for a relaxed, natural smile." },
      { q: "How long until I get used to them?", a: "2–4 weeks for most patients. We schedule follow-ups during this period to adjust pressure points and answer questions." },
      { q: "Can I eat normally?", a: "After the adjustment period — mostly yes. Steak and corn on the cob can be tricky with full upper dentures; implant-retained dentures solve this entirely." },
      { q: "How do I clean them?", a: "Soak overnight in denture cleaner, brush gently with a denture brush each morning. We'll demonstrate at delivery." },
      { q: "What's the cost difference vs. implants?", a: "A full denture runs $1,500–$3,500. Full-arch implants run $20,000+. Many patients start with a denture and add implant retention ($5,000) later as budget allows." },
    ],
    pricing: { headline: "From $1,500", sub: "Full or Partial Denture", note: "Implant-retained option from $6,500. Direct insurance billing available." },
    cta: {
      title: "Get your custom dentures",
      titleAccent: "fitted by our local lab",
      description: "Free consult, written quote, and a no-pressure walk-through of all your options — including implant-supported alternatives.",
    },
  },

  {
    slug: "tooth-colored-fillings",
    category: "Restorative",
    label: "Tooth-Colored Fillings",
    shortDescription: "Mercury-free, metal-free composite fillings that match your tooth perfectly.",
    hubImage: "/images-services/hub-fillings.jpg",
    hero: {
      eyebrow: "Tooth-Colored Fillings",
      title: "Cavities, Repaired Invisibly —",
      titleAccent: "No Metal, No Mercury, No Black Spots",
      description:
        "Modern composite fillings bond directly to your tooth, look completely natural, and contain zero mercury. You'll forget which tooth was even repaired.",
      image: "/images-services/fillings-hero.jpg",
      imageAlt: "Woman with natural beautiful smile",
      stats: [
        { value: "0%", label: "Mercury" },
        { value: "1 Visit", label: "Same-Day Repair" },
        { value: "10–15yr", label: "Average Lifespan" },
      ],
    },
    intro: {
      eyebrow: "The Modern Replacement for Silver Amalgam",
      title: "Why We Stopped Using",
      titleAccent: "Old-School Silver Fillings",
      paragraphs: [
        "Silver (amalgam) fillings expand and contract with temperature, slowly cracking the tooth around them. They also contain mercury and are visible whenever you laugh or yawn.",
        "Composite resin fillings bond chemically to your tooth, expand at the same rate as enamel, and match your tooth colour perfectly. They're the safer, better-looking choice in every way.",
      ],
      image: "/images-services/fillings-intro.jpg",
      bullets: [
        "Mercury-free & BPA-free composite",
        "Bonds directly to tooth structure",
        "Same colour, translucency as enamel",
        "Less drilling — preserves more tooth",
      ],
    },
    benefits: [
      { icon: "leaf", title: "Mercury-Free", body: "Our composite contains zero mercury — safer for you and the environment." },
      { icon: "smile", title: "Invisible Repair", body: "Hand-shaded to your exact tooth colour — even your mirror won't spot it." },
      { icon: "tooth", title: "Preserves More Tooth", body: "Composite bonds to enamel, so less healthy tooth needs to be removed." },
      { icon: "clock", title: "Same-Day Treatment", body: "Most fillings are completed in one 45–60 minute visit." },
    ],
    process: [
      { num: "01", title: "Numb the Area", body: "Topical gel then a gentle injection so you feel nothing during the procedure." },
      { num: "02", title: "Remove Decay", body: "Carefully removes only the decayed portion — preserving as much healthy tooth as possible." },
      { num: "03", title: "Bond Composite", body: "Tooth-coloured composite is placed in layers, each cured with a special light." },
      { num: "04", title: "Shape & Polish", body: "We sculpt and polish until it matches the natural contour and shine of your tooth." },
    ],
    candidates: {
      title: "You Likely Need a Filling If",
      titleAccent: "You Have Decay or Old Silver Fillings",
      description:
        "Cavities don't heal on their own. Whether it's a new spot or replacing an aging silver filling, composite is the modern standard.",
      image: "/images-services/fillings-candidates.jpg",
      points: [
        "Sharp pain when biting down",
        "Sensitivity to hot, cold or sweet foods",
        "Visible dark spot or hole in a tooth",
        "Old silver filling that's cracking",
        "Food consistently getting stuck",
        "X-ray flagged a cavity at last cleaning",
      ],
    },
    faqs: [
      { q: "Should I replace my old silver fillings?", a: "Only if they're failing — cracked, leaking, or causing sensitivity. We don't recommend replacing healthy silver fillings just for aesthetics, but we're happy to discuss your options." },
      { q: "Does the procedure hurt?", a: "No. We numb thoroughly and check before starting. Most patients say they barely felt anything." },
      { q: "How long do composite fillings last?", a: "10–15 years for most patients, sometimes longer. Silver fillings last slightly longer (15–25 years) but the trade-offs aren't worth it for most." },
      { q: "Will my insurance cover it?", a: "Yes — fillings are typically covered at 80% after deductible. We bill directly and quote any difference up-front." },
      { q: "Can a cavity be reversed without a filling?", a: "Very early decay (only in the enamel) can sometimes be remineralized with fluoride. Once decay reaches the dentin, a filling is required." },
    ],
    pricing: { headline: "From $180", sub: "Per Composite Filling", note: "Most plans cover 80%. Insurance billed directly." },
    cta: {
      title: "Got a cavity? We'll",
      titleAccent: "fix it in one visit",
      description: "Most fillings done same-day. Bring us your X-rays from another office and we'll review free — no second-opinion fee.",
    },
  },

  {
    slug: "root-canal",
    category: "Restorative",
    label: "Root Canal",
    shortDescription: "Gentle, same-day root canals that relieve severe pain and save your natural tooth.",
    hubImage: "/images-services/hub-root-canal.jpg",
    hero: {
      eyebrow: "Root Canal Therapy",
      title: "Same-Day Pain Relief.",
      titleAccent: "Save Your Tooth, Not Replace It.",
      description:
        "A root canal isn't the horror story your grandparents told. Modern technique is comfortable, often completed in one visit, and saves a tooth that would otherwise need extraction.",
      image: "/images-services/root-canal-hero.jpg",
      imageAlt: "Relaxed patient after pain-free dental treatment",
      stats: [
        { value: "Same-Day", label: "Pain Relief" },
        { value: "95%", label: "Success Rate" },
        { value: "Painless", label: "Modern Technique" },
      ],
    },
    intro: {
      eyebrow: "Saving Teeth, Eliminating Pain",
      title: "What a Root Canal",
      titleAccent: "Actually Involves (And Why It's Not Scary)",
      paragraphs: [
        "When a tooth's inner pulp gets infected — usually from deep decay or trauma — the pain can be debilitating. A root canal removes the infected tissue, disinfects the inside of the tooth, and seals it so the tooth can stay in place.",
        "Modern rotary instruments and surgical microscopes have transformed the procedure. Most patients leave saying it was 'no worse than a filling' — and the throbbing pain is finally gone.",
      ],
      image: "/images-services/root-canal-intro.jpg",
      bullets: [
        "Gentle, microscope-guided technique",
        "Most cases completed in one visit",
        "Saves your natural tooth permanently",
        "Same-day emergency appointments",
      ],
    },
    benefits: [
      { icon: "lightning", title: "Immediate Pain Relief", body: "The throbbing, sleep-stealing pain stops the moment we remove the infected pulp." },
      { icon: "tooth", title: "Save Your Natural Tooth", body: "Far better than extraction — keeps your bite, jaw bone and smile intact." },
      { icon: "shield", title: "Prevents Spread", body: "Stops the infection from reaching your jawbone or bloodstream." },
      { icon: "clock", title: "Often One Visit", body: "Most root canals (especially front teeth) are done in a single 60–90 minute appointment." },
    ],
    process: [
      { num: "01", title: "Diagnosis & Anaesthetic", body: "X-ray confirms the issue. We numb the area thoroughly — most patients feel nothing." },
      { num: "02", title: "Remove Infected Pulp", body: "Tiny rotary files clean the canal under surgical microscope precision." },
      { num: "03", title: "Disinfect & Seal", body: "Antibacterial irrigation, then biocompatible filling material seals the canal." },
      { num: "04", title: "Place a Crown", body: "Within 2–3 weeks, we place a protective crown to prevent future fracture." },
    ],
    candidates: {
      title: "You Likely Need a",
      titleAccent: "Root Canal If",
      description:
        "Some symptoms scream 'root canal needed' — others are subtle. If any of these sound familiar, see us before the infection worsens.",
      image: "/images-services/root-canal-candidates.jpg",
      points: [
        "Severe, lingering toothache",
        "Sharp pain to hot or cold (especially lingering)",
        "Throbbing pain that wakes you at night",
        "Swollen gum near the painful tooth",
        "Tooth turning grey or dark",
        "Recent trauma to a tooth",
      ],
    },
    faqs: [
      { q: "Is it as painful as people say?", a: "No — and this is the myth we love debunking. The pain you feel before a root canal is from the infection. The procedure itself, with modern anaesthetic, is no more uncomfortable than a filling. Patients are stunned." },
      { q: "How long does it take?", a: "60–90 minutes for most teeth. Molars (with multiple canals) may need two visits, about 90 minutes each." },
      { q: "Will I need a crown after?", a: "Yes — root-canalled teeth become brittle and need a crown to prevent cracking. We typically place this within 2–3 weeks after the root canal heals." },
      { q: "What if I just have it extracted instead?", a: "Saving your natural tooth is almost always better. Extraction means losing the tooth permanently, then needing a bridge or implant — far more expensive and disruptive." },
      { q: "Is it covered by insurance?", a: "Yes, most plans cover 50–80% after deductible. We pre-determine and quote your exact out-of-pocket cost." },
    ],
    pricing: { headline: "From $850", sub: "Per Tooth (Most Common)", note: "Crown additional. Most plans cover 50–80% — billed directly." },
    cta: {
      title: "In pain right now?",
      titleAccent: "We see emergencies same-day",
      description: "Call our emergency line and we'll fit you in today — 7 days a week. Pain relief in one visit is our specialty.",
    },
  },

  {
    slug: "tooth-extractions",
    category: "Restorative",
    label: "Tooth Extractions",
    shortDescription: "Gentle, calm tooth removal when a tooth can't be saved — including wisdom teeth.",
    hubImage: "/images-services/hub-extractions.jpg",
    hero: {
      eyebrow: "Tooth Extractions",
      title: "Gentle, Calm Tooth Removal —",
      titleAccent: "Only When It's Truly Necessary",
      description:
        "We do everything to save your natural teeth first. But when extraction is the right call (severe decay, impacted wisdom teeth, or orthodontic prep), we make it comfortable, quick, and stress-free.",
      image: "/images-services/extractions-hero.jpg",
      imageAlt: "Confident man after dental visit",
      stats: [
        { value: "IV", label: "Sedation Available" },
        { value: "Same-Day", label: "Most Cases" },
        { value: "48 hrs", label: "Typical Recovery" },
      ],
    },
    intro: {
      eyebrow: "Last Resort, Done Right",
      title: "When Extraction Is the",
      titleAccent: "Right Choice (And When It Isn't)",
      paragraphs: [
        "Our default is to save the tooth. We'll always explore root canals, crowns, and other options first. But sometimes — a fully impacted wisdom tooth, a fractured root, severe gum disease — extraction is the safest path forward.",
        "We use gentle technique, surgical microscopes for precision, and offer IV sedation for anxious patients or complex cases. Most patients are back to normal in 48–72 hours.",
      ],
      image: "/images-services/extractions-intro.jpg",
      bullets: [
        "IV sedation available for anxiety",
        "Wisdom teeth specialty",
        "Replacement options discussed up-front",
        "Bone preservation for future implants",
      ],
    },
    benefits: [
      { icon: "shield", title: "Stop Infection Spreading", body: "A severely infected tooth can compromise your jawbone — removal stops it cold." },
      { icon: "lightning", title: "End Chronic Pain", body: "A non-savable tooth can cause endless pain. Extraction is permanent relief." },
      { icon: "heart", title: "Comfort-First Technique", body: "Modern anaesthetic, IV sedation options, and a gentle hand make it surprisingly easy." },
      { icon: "tooth", title: "Plan for Replacement", body: "We discuss bridges, implants and dentures before extraction so you have a clear path forward." },
    ],
    process: [
      { num: "01", title: "X-Ray & Consultation", body: "Confirm extraction is necessary, discuss sedation options, review replacement plans." },
      { num: "02", title: "Numb & Sedate", body: "Local anaesthetic for all extractions; IV sedation available for impacted teeth or anxious patients." },
      { num: "03", title: "Gentle Removal", body: "Modern technique uses gentle rocking — surprisingly little force or pressure required." },
      { num: "04", title: "Healing Support", body: "Bone graft if planning future implant. Written aftercare and 48-hour follow-up call." },
    ],
    candidates: {
      title: "Extraction May Be",
      titleAccent: "Right For You If",
      description:
        "Most teeth can be saved with modern dentistry. But these specific situations often call for extraction — and getting it done right matters.",
      image: "/images-services/extractions-candidates.jpg",
      points: [
        "Wisdom teeth (impacted or causing crowding)",
        "Tooth fractured below the gum line",
        "Severe decay beyond restoration",
        "Advanced gum disease loosening teeth",
        "Orthodontic prep requiring space",
        "Baby tooth blocking permanent tooth eruption",
      ],
    },
    faqs: [
      { q: "Does extraction hurt?", a: "During: no — you're fully numb. After: most patients describe it as 'tender, like a bruise' for 2–3 days, easily managed with ibuprofen. IV sedation makes the experience completely stress-free." },
      { q: "How long is recovery?", a: "Most patients are back to normal in 48–72 hours. Wisdom teeth take a bit longer — typically 5–7 days. We provide a detailed aftercare plan." },
      { q: "Should I replace the missing tooth?", a: "If it's a back molar, yes — to prevent neighbouring teeth from shifting. We discuss bridges and implants during the consult so you have a plan before extraction." },
      { q: "Will I need a bone graft?", a: "If you're planning a future implant, a small bone graft at the extraction site preserves the bone for placement. Most insurance plans cover it." },
      { q: "Is IV sedation safe?", a: "Yes — administered by our trained anaesthetic team with continuous monitoring. You'll be relaxed throughout, with minimal memory of the procedure." },
    ],
    pricing: { headline: "From $200", sub: "Per Tooth", note: "Wisdom teeth from $350. IV sedation additional. Insurance billed directly." },
    cta: {
      title: "Need a tooth removed?",
      titleAccent: "We make it gentle.",
      description: "Free consult to confirm extraction is the right call (or if your tooth can be saved). IV sedation available — book online or call.",
    },
  },

  {
    slug: "cosmetic-dentistry",
    category: "Cosmetic",
    label: "Cosmetic Dentistry",
    shortDescription: "Smile makeovers, whitening, veneers, and bonding — designed around your face and goals.",
    hubImage: "/images-services/hub-cosmetic.jpg",
    hero: {
      eyebrow: "Cosmetic Dentistry",
      title: "Design the Smile",
      titleAccent: "You've Always Wanted",
      description:
        "From subtle touch-ups to full smile makeovers, our cosmetic team blends artistry with precision engineering — designing smiles that fit your face, age and personality.",
      image: "/images-services/cosmetic-hero.jpg",
      imageAlt: "Confident couple with bright smiles",
      stats: [
        { value: "Free", label: "Smile Simulation" },
        { value: "500+", label: "Makeovers Done" },
        { value: "2 Visits", label: "Most Cases" },
      ],
    },
    intro: {
      eyebrow: "Artistry Meets Dentistry",
      title: "A Smile Designed Around",
      titleAccent: "Your Face, Not a Template",
      paragraphs: [
        "Cosmetic dentistry isn't about cookie-cutter Hollywood smiles. Our approach studies your facial features, lip line, age, and goals — then crafts a smile that looks like the best, most confident version of you.",
        "Combining veneers, whitening, bonding, contouring and orthodontics, we offer a full spectrum of options — from a $400 whitening to a $20,000 full makeover.",
      ],
      image: "/images-services/cosmetic-intro.jpg",
      bullets: [
        "Free digital smile simulation",
        "Custom-designed for your face",
        "Combines best techniques per case",
        "Try-before-you-buy mockups",
      ],
    },
    benefits: [
      { icon: "sparkle", title: "Tailored to Your Face", body: "We design smiles that flatter your specific features — not a one-size-fits-all template." },
      { icon: "smile", title: "Try Before You Buy", body: "See a digital simulation and even a temporary mockup before any permanent work begins." },
      { icon: "diamond", title: "Premium Materials", body: "We use top-tier porcelain, professional whitening systems, and master ceramists." },
      { icon: "heart", title: "Life-Changing Confidence", body: "Patients consistently report that a new smile transforms how they speak, laugh, and socialize." },
    ],
    process: [
      { num: "01", title: "Smile Consultation", body: "Free 45-minute consult: digital photos, smile simulation, and discussion of your goals and budget." },
      { num: "02", title: "Custom Design", body: "Our team designs your new smile — you approve every detail before treatment begins." },
      { num: "03", title: "Treatment Phase", body: "Whitening, veneers, bonding, or whatever combination — completed comfortably over 1–4 visits." },
      { num: "04", title: "Reveal Day", body: "Final polish, photos, and the smile you've been waiting for. Aftercare plan included." },
    ],
    candidates: {
      title: "Cosmetic Dentistry Is",
      titleAccent: "For Anyone Who's Ever Hidden Their Smile",
      description:
        "Whether you have one tooth you'd like fixed or you want a complete smile transformation — there's a cosmetic option (and price point) that fits.",
      image: "/images-services/cosmetic-candidates.jpg",
      points: [
        "Stained, yellow or discoloured teeth",
        "Chipped, cracked or worn-down teeth",
        "Crooked or unevenly spaced teeth",
        "Gaps between front teeth",
        "Gummy smile (too much gum showing)",
        "Wedding, reunion, career change, or just for you",
      ],
    },
    faqs: [
      { q: "How much does a full smile makeover cost?", a: "Varies widely — from $2,000 (whitening + bonding) to $20,000+ (full veneers + ortho). The free consult includes a detailed quote so you know exactly what's involved before deciding." },
      { q: "Will cosmetic work look fake?", a: "Not the way we do it. Our master ceramist hand-tints each veneer with subtle variation and translucency. Most patients can't tell which teeth are veneers in our portfolio." },
      { q: "Does insurance cover any of it?", a: "Cosmetic-only work is generally not covered. But many smile makeovers include functional work (crowns, fillings) that IS covered. We split the bill so you maximize your benefits." },
      { q: "How long do results last?", a: "Veneers: 10–20 years. Whitening: 1–2 years with touch-ups. Bonding: 5–8 years. Crowns: 15–25 years." },
      { q: "Is there a payment plan?", a: "Yes — we offer 0% interest financing for 12–24 months on approved credit, no down payment for most patients." },
    ],
    pricing: { headline: "From $400", sub: "Whitening — Up to $20K for Full Makeovers", note: "Free digital simulation and detailed quote at your consult." },
    cta: {
      title: "See your new smile",
      titleAccent: "before you commit",
      description: "Free digital simulation: walk in, smile for a photo, walk out with a preview of your new smile and a clear written quote.",
    },
  },

  {
    slug: "porcelain-veneers",
    category: "Cosmetic",
    label: "Porcelain Veneers",
    shortDescription: "Hand-crafted porcelain shells that transform your smile in just two visits.",
    hubImage: "/images-services/hub-veneers.jpg",
    hero: {
      eyebrow: "Porcelain Veneers",
      title: "Hollywood-Caliber Veneers,",
      titleAccent: "Hand-Tinted to Look Like You",
      description:
        "Ultra-thin porcelain shells that cover the front of your teeth — fixing chips, gaps, discolouration and shape in just two visits. The fastest cosmetic transformation in dentistry.",
      image: "/images-services/veneers-hero.jpg",
      imageAlt: "Stunning natural smile from porcelain veneers",
      stats: [
        { value: "2 Visits", label: "Total Treatment" },
        { value: "10–20yr", label: "Lifespan" },
        { value: "0.5mm", label: "Ultra-Thin" },
      ],
    },
    intro: {
      eyebrow: "The Gold Standard of Cosmetic Dentistry",
      title: "Why Veneers Are the",
      titleAccent: "Fastest Path to a New Smile",
      paragraphs: [
        "Veneers are wafer-thin porcelain facings bonded to the front of your teeth. In just two visits, they can change colour, shape, size, alignment and even fill small gaps — without braces.",
        "Our ceramist hand-tints each veneer with subtle colour variation and translucency. The result: a smile that looks bright, balanced, and unmistakably natural — not fake.",
      ],
      image: "/images-services/veneers-intro.jpg",
      bullets: [
        "Master-ceramist hand-shading",
        "Conservative — minimal tooth removal",
        "Stain-resistant porcelain",
        "Custom-designed for your face",
      ],
    },
    benefits: [
      { icon: "sparkle", title: "Instant Transformation", body: "Walk in with a smile you're unsure about — walk out two visits later with a smile you love." },
      { icon: "shield", title: "Stain-Resistant", body: "Coffee, wine and tobacco don't stain porcelain like they do natural enamel." },
      { icon: "diamond", title: "Premium Materials", body: "Top-grade porcelain layered by hand — not the budget composite veneers some offices use." },
      { icon: "smile", title: "Natural-Looking", body: "Subtle variation in shade and translucency makes veneers indistinguishable from natural teeth." },
    ],
    process: [
      { num: "01", title: "Smile Design Consult", body: "Photos, digital simulation, and detailed discussion of shape, colour and goals." },
      { num: "02", title: "Gentle Tooth Prep", body: "We remove just 0.5mm of enamel — barely a shave — then take precision digital impressions." },
      { num: "03", title: "Custom Crafting", body: "Two weeks at our lab while our ceramist hand-builds each veneer to your exact design." },
      { num: "04", title: "Bond Day Reveal", body: "Veneers are precisely bonded to your teeth. Final polish and photos — and your new smile." },
    ],
    candidates: {
      title: "Veneers Are Perfect For",
      titleAccent: "Patients Wanting a Fast, Beautiful Change",
      description:
        "Veneers solve in two visits what would take months with whitening, bonding and orthodontics combined. They're the right call when you want a complete transformation, fast.",
      image: "/images-services/veneers-candidates.jpg",
      points: [
        "Discoloured teeth that won't whiten",
        "Chipped, cracked or worn front teeth",
        "Small gaps between teeth",
        "Slightly crooked teeth (avoiding braces)",
        "Misshapen or small teeth",
        "Special occasion (wedding, public role)",
      ],
    },
    faqs: [
      { q: "Do veneers ruin your real teeth?", a: "No — modern veneers require removing only 0.5mm of enamel (about the thickness of a fingernail). The underlying tooth structure is preserved. With proper care, your teeth stay healthy under the veneers for decades." },
      { q: "Will they look fake or 'too white'?", a: "Not when designed properly. We use multiple shades, varied translucency, and slight asymmetry — exactly how natural teeth look. The 'fake' veneer look comes from over-uniform colour and shape." },
      { q: "How long do they last?", a: "10–20 years with proper care. Avoid using your front teeth to bite ice or hard objects, wear a nightguard if you grind, and maintain regular cleanings." },
      { q: "What if one breaks?", a: "Individual veneers can be replaced. Issues are rare with quality bonding and proper care, but we warranty all veneers for 5 years against material defects." },
      { q: "How much do they cost?", a: "$1,200–$1,800 per tooth depending on the case. A typical 8-veneer smile makeover runs $10,000–$14,000. Financing available." },
    ],
    pricing: { headline: "From $1,200", sub: "Per Hand-Crafted Veneer", note: "0% financing available. Free smile simulation at consult." },
    cta: {
      title: "Preview your veneer smile",
      titleAccent: "before you decide",
      description: "Free digital smile simulation. We'll show you exactly what your new smile could look like — no commitment to move forward.",
    },
  },

  {
    slug: "teeth-whitening",
    category: "Cosmetic",
    label: "Teeth Whitening",
    shortDescription: "Professional whitening that goes 5–8 shades brighter than over-the-counter strips.",
    hubImage: "/images-services/hub-whitening.jpg",
    hero: {
      eyebrow: "Professional Teeth Whitening",
      title: "5–8 Shades Brighter,",
      titleAccent: "Without Damaging Your Enamel",
      description:
        "Coffee, wine, tea and time leave their marks. One in-office whitening session removes years of staining safely — far beyond what drugstore strips can deliver.",
      image: "/images-services/whitening-hero.jpg",
      imageAlt: "Bright dazzling smile after whitening",
      stats: [
        { value: "5–8", label: "Shades Whiter" },
        { value: "60 min", label: "In-Office Session" },
        { value: "1–2yr", label: "Results Last" },
      ],
    },
    intro: {
      eyebrow: "Why Professional Beats DIY",
      title: "The Truth About",
      titleAccent: "Over-the-Counter Whitening Strips",
      paragraphs: [
        "Drugstore strips use the same active ingredient as professional whitening (hydrogen peroxide) — but at a fraction of the concentration. They can also slip and burn your gums.",
        "Our in-office system uses pharmacy-grade peroxide with a custom gum barrier, achieving in 60 minutes what would take you 4–6 weeks of nightly strips — and far whiter.",
      ],
      image: "/images-services/whitening-intro.jpg",
      bullets: [
        "Pharmacy-grade peroxide",
        "Custom gum barrier prevents burns",
        "Take-home trays for touch-ups",
        "Safe for enamel — no damage",
      ],
    },
    benefits: [
      { icon: "sparkle", title: "Dramatic Results", body: "5–8 shades whiter in a single 60-minute visit. Visible from across the room." },
      { icon: "shield", title: "Enamel-Safe", body: "Unlike harsh DIY methods (charcoal, lemon, baking soda) our system protects your enamel." },
      { icon: "clock", title: "Fast & Convenient", body: "One lunch break and you're done. Take-home trays let you maintain the result for years." },
      { icon: "leaf", title: "Reduced Sensitivity", body: "Our protocol includes desensitizer — most patients report little to no post-whitening sensitivity." },
    ],
    process: [
      { num: "01", title: "Pre-Whitening Cleaning", body: "We start with a professional cleaning — whitening works best on plaque-free teeth." },
      { num: "02", title: "Gum Protection", body: "A custom protective barrier is applied so the gel doesn't touch your gums." },
      { num: "03", title: "Three Whitening Cycles", body: "Three 15-minute applications of pharmacy-grade gel, with a special activating light." },
      { num: "04", title: "Take-Home Trays", body: "Custom trays + touch-up gel so you can maintain the result for the next 1–2 years." },
    ],
    candidates: {
      title: "Whitening Works Best For",
      titleAccent: "Healthy, Stained Teeth",
      description:
        "Whitening corrects surface and deep stains — but works only on natural tooth structure (not crowns, veneers or fillings, which keep their original colour).",
      image: "/images-services/whitening-candidates.jpg",
      points: [
        "Yellow or stained teeth from coffee/tea/wine",
        "Age-related dulling of enamel",
        "Smokers (after they've quit)",
        "Pre-wedding, reunion or new job",
        "Healthy gums and no untreated cavities",
        "Patients realistic about results (won't bleach crowns or veneers)",
      ],
    },
    faqs: [
      { q: "Is whitening safe?", a: "Yes — when professionally administered. The hydrogen peroxide briefly opens enamel pores to lift stains, then your saliva remineralizes them. Decades of research confirm it's safe." },
      { q: "Does it hurt?", a: "Most patients report mild sensitivity to cold for 24–48 hours after. Our protocol includes a desensitizing application that minimizes this significantly." },
      { q: "How long do results last?", a: "1–2 years for most patients. Smokers and heavy coffee/wine drinkers see fading faster. Touch-up trays at home extend results indefinitely." },
      { q: "Will it whiten my crowns or veneers?", a: "No — whitening only works on natural tooth enamel. If you have visible crowns or veneers in your smile, we'll plan accordingly (sometimes replacing them with new whiter ones is the right call)." },
      { q: "Why not just use drugstore strips?", a: "Strips can absolutely whiten — slowly. But they often slip, irritate gums, and max out at 1–2 shades. In-office whitening achieves 5–8 shades safely. Your call on time vs. money." },
    ],
    pricing: { headline: "$399", sub: "In-Office Whitening + Take-Home Trays", note: "Includes custom trays for touch-ups. Often offered in promotional packages." },
    cta: {
      title: "Brighter teeth",
      titleAccent: "in 60 minutes",
      description: "Book your whitening visit and walk out 5–8 shades whiter. Take-home trays included for ongoing maintenance.",
    },
  },

  {
    slug: "lumineers",
    category: "Cosmetic",
    label: "Lumineers",
    shortDescription: "Ultra-thin, no-prep veneers — a reversible alternative to traditional porcelain veneers.",
    hubImage: "/images-services/hub-lumineers.jpg",
    hero: {
      eyebrow: "Lumineers",
      title: "Reversible Smile Makeover.",
      titleAccent: "No Drilling. No Shots.",
      description:
        "Lumineers are ultra-thin, no-prep porcelain veneers that bond directly over your teeth — no shaving, no needles, and 100% reversible. Beautiful, fast, conservative.",
      image: "/images-services/lumineers-hero.jpg",
      imageAlt: "Mature woman with subtle radiant smile",
      stats: [
        { value: "0.2mm", label: "Ultra-Thin" },
        { value: "No Prep", label: "Zero Drilling" },
        { value: "Reversible", label: "Removable" },
      ],
    },
    intro: {
      eyebrow: "Veneers Without the Commitment",
      title: "Lumineers vs.",
      titleAccent: "Traditional Veneers",
      paragraphs: [
        "Traditional veneers require shaving 0.5mm of enamel — beautiful but permanent. Lumineers are half that thickness and bond directly over existing enamel, requiring no drilling at all.",
        "If you ever want them removed, your natural teeth are exactly as they were. Lumineers are the most conservative cosmetic option in dentistry — perfect for patients hesitant to permanently alter their teeth.",
      ],
      image: "/images-services/lumineers-intro.jpg",
      bullets: [
        "Zero drilling — no anaesthetic needed",
        "Fully reversible procedure",
        "Stain-resistant porcelain",
        "Lasts 10–20 years",
      ],
    },
    benefits: [
      { icon: "shield", title: "Preserves Your Teeth", body: "Zero enamel removal means your natural teeth stay 100% intact under the Lumineers." },
      { icon: "smile", title: "No Needles", body: "No drilling means no anaesthetic shots — the whole prep visit is needle-free." },
      { icon: "sparkle", title: "Beautiful, Subtle Results", body: "Hand-crafted porcelain delivers a natural-looking improvement, not an obvious 'veneer look'." },
      { icon: "clock", title: "Reversible Anytime", body: "Don't love them in 5 years? They can be removed and your natural teeth are unchanged." },
    ],
    process: [
      { num: "01", title: "Smile Design & Simulation", body: "Photos, digital simulation, and discussion of which teeth and what shade." },
      { num: "02", title: "Digital Impressions", body: "No goopy moulds — quick digital scans capture exact tooth shape." },
      { num: "03", title: "Custom Fabrication", body: "Master lab hand-crafts each Lumineer to fit precisely over your existing teeth." },
      { num: "04", title: "Bond & Reveal", body: "Lumineers cemented in a single comfortable visit. No prep, no shots, instant new smile." },
    ],
    candidates: {
      title: "Lumineers Are Ideal For",
      titleAccent: "Cosmetic Improvement Without Commitment",
      description:
        "If you love the idea of veneers but the permanence makes you hesitant — Lumineers are designed for you.",
      image: "/images-services/lumineers-candidates.jpg",
      points: [
        "Hesitant to permanently alter teeth",
        "Minor cosmetic concerns (colour, small gaps)",
        "Teeth that are slightly small or misshapen",
        "Patients with sensitive teeth (no shots needed)",
        "Anyone wanting a subtle, natural enhancement",
        "Open to the slightly bulkier feel vs. traditional veneers",
      ],
    },
    faqs: [
      { q: "Lumineers vs. traditional veneers — which should I choose?", a: "Lumineers if you want reversibility and minimal preparation. Traditional veneers if you want a more dramatic transformation or have significantly damaged front teeth. The free consult helps determine which fits your goals." },
      { q: "Do they feel bulky?", a: "Lumineers add 0.2mm of porcelain to the front of your teeth — barely noticeable. Most patients adjust within a few days. Traditional veneers feel slightly thinner since enamel is removed first." },
      { q: "Will they look as good as traditional veneers?", a: "For minor-to-moderate cosmetic concerns: yes, essentially identical. For severe staining or major reshaping, traditional veneers give the dentist more control." },
      { q: "How long do Lumineers last?", a: "10–20 years with proper care — same as traditional veneers. Use a nightguard if you grind, avoid biting hard objects, maintain regular cleanings." },
      { q: "Cost vs. traditional veneers?", a: "Roughly similar — $1,200–$1,500 per Lumineer. The 'savings' aren't financial; they're in tooth preservation and reversibility." },
    ],
    pricing: { headline: "From $1,200", sub: "Per Lumineer (No-Prep Veneer)", note: "Financing available. Free smile simulation at consult." },
    cta: {
      title: "Try a reversible smile",
      titleAccent: "transformation",
      description: "Free Lumineers consultation includes digital smile simulation — see your potential new smile before committing.",
    },
  },

  {
    slug: "orthodontics",
    category: "Orthodontics",
    label: "Orthodontics",
    shortDescription: "Comprehensive orthodontic care for children, teens and adults — braces and clear aligners.",
    hubImage: "/images-services/hub-ortho.png",
    hero: {
      eyebrow: "Orthodontics",
      title: "Straight Teeth for",
      titleAccent: "Every Age & Lifestyle",
      description:
        "From your child's first orthodontic check to discreet adult treatment — we offer the full range: traditional braces, clear aligners, and early intervention. Free consults always.",
      image: "/images-services/ortho-hero.jpg",
      imageAlt: "Smiling children with healthy growing smiles",
      stats: [
        { value: "Age 7+", label: "Treatment Window" },
        { value: "12–24mo", label: "Average Duration" },
        { value: "Free", label: "Consult" },
      ],
    },
    intro: {
      eyebrow: "The Full Spectrum of Straightening",
      title: "Three Paths to a",
      titleAccent: "Straighter Smile",
      paragraphs: [
        "Modern orthodontics is no longer just metal braces for teens. We offer traditional metal and ceramic braces, clear aligners (Invisalign), and early-intervention 'phase 1' treatment for kids.",
        "Your treatment is chosen based on the complexity of your case, your age, and your lifestyle — not a one-size-fits-all approach. Free consults include digital photos and a custom recommendation.",
      ],
      image: "/images-services/ortho-intro.jpg",
      bullets: [
        "Traditional + ceramic braces",
        "Invisalign clear aligners",
        "Phase 1 (early-intervention) treatment",
        "Adult-friendly discreet options",
      ],
    },
    benefits: [
      { icon: "smile", title: "Confidence Boost", body: "Patients consistently report dramatic confidence gains after orthodontic treatment." },
      { icon: "shield", title: "Easier to Clean", body: "Straight teeth are far easier to floss and brush — lowering long-term decay and gum disease risk." },
      { icon: "tooth", title: "Better Bite Function", body: "Aligned teeth bite, chew and speak more efficiently — reducing jaw strain over time." },
      { icon: "heart", title: "Lifelong Investment", body: "Orthodontic results last a lifetime with proper retainer use." },
    ],
    process: [
      { num: "01", title: "Free Consultation", body: "Digital photos, X-rays, and a recommendation for the right approach (braces, aligners, or phase 1)." },
      { num: "02", title: "Treatment Planning", body: "3D scans map your bite. We design every tooth movement and show you a simulation of the final result." },
      { num: "03", title: "Active Treatment", body: "Visits every 6–8 weeks for adjustments. Most cases complete in 12–24 months." },
      { num: "04", title: "Retainers For Life", body: "Custom retainers keep your new smile in place. We make replacement retainers as needed." },
    ],
    candidates: {
      title: "Orthodontics Helps",
      titleAccent: "Every Age & Stage",
      description:
        "First orthodontic check should happen by age 7. But adults of any age benefit from treatment — we've successfully straightened smiles from 8 to 78.",
      image: "/images-services/ortho-candidates.jpg",
      points: [
        "Crooked, crowded or rotated teeth",
        "Overbite, underbite or crossbite",
        "Gaps between teeth",
        "Children with developing alignment issues (age 7+)",
        "Teens before high school photos",
        "Adults considering Invisalign for discretion",
      ],
    },
    faqs: [
      { q: "What's the best age to start orthodontics?", a: "First check at age 7. Most active treatment starts between 10–14, but adult treatment is increasingly common. There's truly no age limit." },
      { q: "Braces vs. Invisalign — which is better?", a: "Both work brilliantly. Braces handle complex cases better. Invisalign offers superior discretion and removability. Free consult includes recommendation for your case." },
      { q: "How much does it cost?", a: "$3,500–$7,500 depending on complexity. Most plans cover up to 50% of orthodontic costs for kids and teens. Adult orthodontic insurance is rarer but available." },
      { q: "Will it hurt?", a: "There's mild discomfort for 2–3 days after each adjustment — easily managed with over-the-counter pain relief. Most patients are comfortable within a week of starting." },
      { q: "How long until I see results?", a: "Subtle changes within 6–8 weeks. Major visible progress around the 6-month mark. Full treatment 12–24 months for most cases." },
    ],
    pricing: { headline: "From $3,500", sub: "Comprehensive Orthodontic Treatment", note: "Most insurance plans cover up to 50%. 0% financing available." },
    cta: {
      title: "Free orthodontic",
      titleAccent: "consultation",
      description: "Bring your kids or yourself. 30-minute consult includes digital photos, X-rays and a clear treatment recommendation — no obligation.",
    },
  },

  {
    slug: "composite-bonding",
    category: "Cosmetic",
    label: "Composite Bonding",
    shortDescription: "Same-day repair for chips, gaps and small cosmetic concerns — no drilling required.",
    hubImage: "/images-services/hub-bonding.jpg",
    hero: {
      eyebrow: "Composite Bonding",
      title: "Same-Day Repairs.",
      titleAccent: "No Drilling, No Anesthesia.",
      description:
        "Composite bonding sculpts tooth-coloured resin onto your existing tooth — fixing chips, gaps and small cosmetic concerns in a single visit, with zero drilling.",
      image: "/images-services/bonding-hero.jpg",
      imageAlt: "Natural confident smile after composite bonding",
      stats: [
        { value: "1 Visit", label: "Same-Day Result" },
        { value: "No Drill", label: "Painless Procedure" },
        { value: "5–8yr", label: "Average Lifespan" },
      ],
    },
    intro: {
      eyebrow: "The Affordable Cosmetic Solution",
      title: "Why Bonding Is the",
      titleAccent: "Best 'Quick Win' in Dentistry",
      paragraphs: [
        "Composite bonding uses the same tooth-coloured resin we use for fillings — but sculpted on the front of teeth to fix cosmetic concerns. The procedure typically takes 30–60 minutes per tooth.",
        "It's the most affordable cosmetic option, doesn't require enamel removal, and can be completed in a single visit. Perfect for fixing a chipped front tooth, closing a small gap, or reshaping an uneven tooth.",
      ],
      image: "/images-services/bonding-intro.jpg",
      bullets: [
        "30–60 minutes per tooth",
        "No drilling, no anaesthetic needed",
        "Same-day results",
        "Most affordable cosmetic option",
      ],
    },
    benefits: [
      { icon: "lightning", title: "Same-Day Fix", body: "Walk in with a chipped tooth, walk out with it repaired — 60 minutes start to finish." },
      { icon: "wallet", title: "Most Affordable", body: "Far less expensive than veneers or crowns — ideal for minor cosmetic concerns." },
      { icon: "shield", title: "Tooth-Conservative", body: "No enamel is removed — your natural tooth structure stays intact." },
      { icon: "smile", title: "Beautiful Aesthetic", body: "Composite is hand-shaped and polished to match your surrounding teeth." },
    ],
    process: [
      { num: "01", title: "Shade Match", body: "We select composite shade to match your existing tooth colour exactly." },
      { num: "02", title: "Prep & Etch", body: "Light etching of the surface creates a microscopic texture for the composite to bond to." },
      { num: "03", title: "Sculpt & Cure", body: "Composite is layered, shaped freehand, and cured with a special blue light." },
      { num: "04", title: "Polish & Finish", body: "Final sanding and high polish leave a finish indistinguishable from natural enamel." },
    ],
    candidates: {
      title: "Bonding Is Right For You If",
      titleAccent: "You Have Small Cosmetic Concerns",
      description:
        "Bonding excels at small problems — chips, minor gaps, slight reshaping. For larger transformations, veneers or crowns are usually better.",
      image: "/images-services/bonding-candidates.jpg",
      points: [
        "Chipped or worn front tooth",
        "Small gap between front teeth",
        "Slightly misshapen or uneven tooth",
        "Minor surface discoloration",
        "Receding gum exposing root",
        "Want a same-day, affordable fix",
      ],
    },
    faqs: [
      { q: "Bonding vs. veneers — which should I choose?", a: "Bonding is best for one or two teeth or small fixes — cheaper, faster, no enamel removal. Veneers are better for multiple teeth or major colour/shape changes — last longer and look slightly more refined." },
      { q: "How long does it last?", a: "5–8 years for most patients. Lasts longer with regular cleanings, a nightguard if you grind, and avoiding biting hard objects like ice or pens." },
      { q: "Will it stain?", a: "Composite stains more than porcelain. Cut back on coffee, red wine and tobacco to keep it looking fresh — or budget for a polish every few years." },
      { q: "Does it look natural?", a: "Yes — properly placed bonding is impossible to distinguish from natural enamel. We shade-match and polish carefully." },
      { q: "How much does it cost?", a: "$200–$500 per tooth depending on size and complexity. A single front-tooth chip is typically $250." },
    ],
    pricing: { headline: "From $200", sub: "Per Tooth", note: "Most patients pay $200–$400. Sometimes covered by insurance as a restorative procedure." },
    cta: {
      title: "Chip or gap?",
      titleAccent: "Fixed in 60 minutes.",
      description: "Walk-in consults welcome. Most bonding is done same-visit — book today for a same-week appointment.",
    },
  },

  {
    slug: "invisalign",
    category: "Orthodontics",
    label: "Invisalign Clear Braces",
    shortDescription: "Virtually invisible aligners that straighten teeth without metal wires or brackets.",
    hubImage: "/images-services/hub-invisalign.jpg",
    hero: {
      eyebrow: "Invisalign Clear Aligners",
      title: "Straighten Your Teeth",
      titleAccent: "Without Anyone Knowing",
      description:
        "Invisalign uses a series of clear, removable aligners to gradually shift your teeth into place — discreet, comfortable and removable for eating, brushing and special occasions.",
      image: "/images-services/invisalign-hero.jpg",
      imageAlt: "Confident woman with straight invisible aligners",
      stats: [
        { value: "From $5,000", label: "All-Inclusive" },
        { value: "Invisible", label: "Clear Aligners" },
        { value: "12–18mo", label: "Average Treatment" },
      ],
    },
    intro: {
      eyebrow: "Invisalign Platinum Provider",
      title: "Why Adults Choose Invisalign",
      titleAccent: "Over Traditional Braces",
      paragraphs: [
        "Invisalign is a series of custom-fit clear plastic aligners — you wear each set for 1–2 weeks, then progress to the next. Teeth gradually shift into perfect alignment over 12–18 months.",
        "As an Invisalign Platinum Provider, we've completed hundreds of cases — including complex ones that other clinics refer out. The first consult is always free and includes a digital simulation of your finished smile.",
      ],
      image: "/images-services/invisalign-intro.jpg",
      bullets: [
        "Virtually invisible aligners",
        "Removable for eating & brushing",
        "Fewer office visits than braces",
        "No diet restrictions",
      ],
    },
    benefits: [
      { icon: "smile", title: "Practically Invisible", body: "Most people won't notice you're wearing them — perfect for adults in client-facing roles." },
      { icon: "clock", title: "Removable Anytime", body: "Take them out for meals, photos, special events. Just 20–22 hours daily for best results." },
      { icon: "leaf", title: "No Diet Restrictions", body: "Unlike braces, you can eat anything — popcorn, gum, apples, sticky candy." },
      { icon: "calendar", title: "Fewer Visits", body: "6–8 week check-ins instead of monthly braces tightenings. Saves time over the year." },
    ],
    process: [
      { num: "01", title: "Free Smile Simulation", body: "3D scan + computer simulation shows your finished smile before treatment starts." },
      { num: "02", title: "Custom Aligner Series", body: "Custom-fit aligners ship to us in 3–4 weeks. We deliver several sets at each visit." },
      { num: "03", title: "Wear & Progress", body: "Wear each set 1–2 weeks, 20–22 hours daily. Switch to the next set as scheduled." },
      { num: "04", title: "Refinement & Retainers", body: "Final fine-tuning, then custom retainers to keep your perfect new smile in place." },
    ],
    candidates: {
      title: "Invisalign Works For",
      titleAccent: "Most Orthodontic Cases",
      description:
        "Invisalign can correct most issues that traditional braces fix — and is especially popular with adults, teens, and anyone wanting a discreet treatment option.",
      image: "/images-services/invisalign-candidates.jpg",
      points: [
        "Crooked, crowded, or rotated teeth",
        "Mild to moderate overbite or underbite",
        "Gaps and spaces between teeth",
        "Adults wanting discretion in treatment",
        "Teens (Invisalign Teen available)",
        "Disciplined patients (will wear 20–22 hrs daily)",
      ],
    },
    faqs: [
      { q: "How long does Invisalign take?", a: "12–18 months for most adult cases. Simple cases finish in 6 months; complex ones take up to 24. The free consult includes a personalized estimate." },
      { q: "Does it hurt?", a: "Mild pressure for 2–3 days at each new set as teeth shift. Most patients adapt within a week per tray. No metal wires poking your cheeks." },
      { q: "Will I lisp?", a: "Some patients have a slight lisp for the first 3–5 days as their tongue adjusts. It goes away once you're used to the aligners — usually within a week." },
      { q: "Can I drink coffee with them in?", a: "Water only with aligners in. Coffee, tea, and dark drinks will stain them. Remove for any food or drink besides water, then brush before reinserting." },
      { q: "How much does it cost?", a: "$5,000–$7,500 all-inclusive (consult, scans, aligners, refinements, retainers). Most insurance plans cover up to $1,500–$2,500 of orthodontics." },
    ],
    pricing: { headline: "From $5,000", sub: "All-Inclusive Invisalign", note: "Includes consult, scans, all aligners, refinements and retainers. Financing available." },
    cta: {
      title: "Free Invisalign",
      titleAccent: "simulation & consult",
      description: "30-minute consult includes free 3D smile simulation — see your finished smile before committing to treatment.",
    },
  },

  {
    slug: "snap-on-smile",
    category: "Cosmetic",
    label: "Snap-On Smile",
    shortDescription: "Removable, non-invasive smile makeover — snap a beautiful new smile over your existing teeth.",
    hubImage: "/images-services/hub-snap-on.jpg",
    hero: {
      eyebrow: "Snap-On Smile",
      title: "A Beautiful New Smile,",
      titleAccent: "Removable & Affordable",
      description:
        "Snap-On Smile is a thin, custom-crafted appliance that fits over your existing teeth — instantly delivering a confident new smile without drilling, shots or permanent changes.",
      image: "/images-services/snap-on-hero.jpg",
      imageAlt: "Friends sharing genuine confident smiles",
      stats: [
        { value: "Removable", label: "Try Before Forever" },
        { value: "2 Visits", label: "Total Process" },
        { value: "5+yr", label: "Lifespan" },
      ],
    },
    intro: {
      eyebrow: "An Affordable Cosmetic Alternative",
      title: "Snap-On Smile vs.",
      titleAccent: "Permanent Cosmetic Work",
      paragraphs: [
        "Snap-On Smile is a thin, durable resin appliance custom-made to fit over your existing teeth. You wear it during the day, take it off at night — and your smile transforms instantly.",
        "It's the perfect choice for patients who want a beautiful smile but aren't ready (or can't afford) permanent veneers or implants. Wonderful for upcoming events, photo sessions, or as a long-term bridge until you're ready for permanent work.",
      ],
      image: "/images-services/snap-on-intro.jpg",
      bullets: [
        "No drilling or anaesthetic",
        "Removable anytime",
        "Eat and drink normally",
        "Fraction of veneer cost",
      ],
    },
    benefits: [
      { icon: "wallet", title: "Affordable Transformation", body: "About 1/4 the cost of a full set of veneers — life-changing aesthetic without the price tag." },
      { icon: "clock", title: "Fast Turnaround", body: "Two visits, about three weeks total. Walk in with your existing smile, walk out with a new one." },
      { icon: "shield", title: "Zero Tooth Damage", body: "Your underlying teeth are completely untouched — the appliance simply snaps over them." },
      { icon: "smile", title: "Eat & Drink Normally", body: "Yes, you can eat and drink with it in. Just remove for cleaning and overnight." },
    ],
    process: [
      { num: "01", title: "Smile Design Consult", body: "Discuss shade, shape, and style. Take digital impressions of your existing teeth." },
      { num: "02", title: "Custom Lab Fabrication", body: "Snap-On Smile is custom-crafted to fit your bite — takes about three weeks." },
      { num: "03", title: "Fit & Adjust", body: "We check fit, comfort and aesthetics. Minor adjustments at delivery for a perfect snap-on feel." },
      { num: "04", title: "Daily Care Plan", body: "How to clean, store and maintain your Snap-On Smile for 5+ years of beautiful use." },
    ],
    candidates: {
      title: "Snap-On Smile Is Perfect For",
      titleAccent: "Patients Who Want Reversibility",
      description:
        "If you've been hesitant about veneers because of cost or permanence — Snap-On Smile lets you experience a beautiful new smile without commitment.",
      image: "/images-services/snap-on-candidates.png",
      points: [
        "Upcoming wedding, reunion or photo shoot",
        "Budget concerns vs. veneers",
        "Hesitant about permanent dental work",
        "Missing teeth not yet replaced with implants",
        "Stained or worn teeth not amenable to whitening",
        "Want to 'preview' how veneers would look long-term",
      ],
    },
    faqs: [
      { q: "Will people notice it's not real?", a: "Up close, those who look carefully might. From conversational distance — no, they look like beautiful natural teeth. Many patients use Snap-On Smile for years before deciding to invest in permanent veneers." },
      { q: "Can I eat with it in?", a: "Yes — soft foods absolutely, harder foods cautiously. Avoid biting directly into apples or steak with your front teeth. Remove for cleaning after meals." },
      { q: "How long does it last?", a: "5–8 years for most patients with proper care. Avoid biting hard objects, store in its case at night, and bring it for adjustment if anything feels off." },
      { q: "Does it cover all my teeth?", a: "Typically the front 10 upper teeth (or 8 lower) — what shows when you smile. You can choose upper-only, lower-only, or both." },
      { q: "Is it covered by insurance?", a: "Generally no — Snap-On Smile is considered cosmetic. Cost is about $2,000–$3,500 per arch (upper or lower). Financing available." },
    ],
    pricing: { headline: "From $2,000", sub: "Per Arch (Upper or Lower)", note: "Far less than veneers, and fully removable. Financing available." },
    cta: {
      title: "Try a new smile",
      titleAccent: "without commitment",
      description: "Free Snap-On Smile consult: digital impressions and shade simulation. See your potential new smile before deciding.",
    },
  },

  {
    slug: "tmj-therapy",
    category: "Specialty",
    label: "TMJ Therapy",
    shortDescription: "Relief from jaw pain, headaches and grinding through customized TMJ treatment.",
    hubImage: "/images-services/hub-tmj.jpg",
    hero: {
      eyebrow: "TMJ Therapy",
      title: "Relief From Jaw Pain,",
      titleAccent: "Headaches & Nightly Grinding",
      description:
        "TMJ disorders cause chronic headaches, jaw clicking, neck pain and sleep disruption. Our custom nightguards and physiotherapy-based approach get to the root — not just the symptoms.",
      image: "/images-services/tmj-hero.jpg",
      imageAlt: "Patient relieved from TMJ-related headaches",
      stats: [
        { value: "85%", label: "Patients Improved" },
        { value: "2–4 wks", label: "First Relief" },
        { value: "Custom", label: "Nightguard Fit" },
      ],
    },
    intro: {
      eyebrow: "Beyond Just a Nightguard",
      title: "How We Approach",
      titleAccent: "TMJ Differently",
      paragraphs: [
        "TMJ disorders are complex — involving the jaw joint, surrounding muscles, your bite, and often stress and sleep. A one-size-fits-all drugstore nightguard rarely helps and can actually worsen symptoms.",
        "Our approach starts with a comprehensive assessment: bite analysis, joint imaging, muscle palpation and lifestyle review. Treatment is tailored: custom-fit nightguards, bite adjustment, jaw exercises, and referral to specialists when needed.",
      ],
      image: "/images-services/tmj-intro.jpg",
      bullets: [
        "Comprehensive joint & bite assessment",
        "Custom-fit lab-made nightguard",
        "Bite adjustment when needed",
        "Coordinated with physio when beneficial",
      ],
    },
    benefits: [
      { icon: "lightning", title: "Headache Relief", body: "Most TMJ-related morning headaches resolve within 2–4 weeks of proper treatment." },
      { icon: "tooth", title: "Save Your Teeth", body: "Grinding wears teeth down rapidly. A custom guard protects them — saving thousands in future restorative work." },
      { icon: "heart", title: "Better Sleep", body: "Reduced jaw clenching at night means deeper, more restorative sleep." },
      { icon: "shield", title: "Long-Term Joint Health", body: "Untreated TMJ can permanently damage the jaw joint. Early treatment prevents this." },
    ],
    process: [
      { num: "01", title: "Comprehensive Assessment", body: "Joint palpation, bite analysis, X-rays, and detailed history of symptoms and triggers." },
      { num: "02", title: "Custom Diagnosis", body: "Together we identify your specific TMJ pattern: grinding, clenching, joint disorder, or bite imbalance." },
      { num: "03", title: "Custom Treatment Plan", body: "Most often a custom nightguard. Sometimes bite adjustment, jaw exercises or specialist referral." },
      { num: "04", title: "Follow-Up & Adjust", body: "2-week and 6-week check-ins. We fine-tune until you're sleeping better and waking pain-free." },
    ],
    candidates: {
      title: "You May Have a",
      titleAccent: "TMJ Disorder If",
      description:
        "TMJ symptoms are often misattributed to migraines, stress or aging. If any of these sound familiar, a TMJ assessment is worth your time.",
      image: "/images-services/tmj-candidates.jpg",
      points: [
        "Wake up with jaw pain or headaches",
        "Clicking or popping when you open your mouth",
        "Teeth that are flat or worn-looking",
        "Neck or shoulder tension that won't resolve",
        "Partner reports grinding sounds at night",
        "Jaw locks open or shut occasionally",
      ],
    },
    faqs: [
      { q: "Will a drugstore nightguard work?", a: "Rarely — and sometimes it makes things worse. Drugstore guards are too thick and don't accommodate your specific bite, which can throw the joint further out of balance. Custom-fit is the only way to do this properly." },
      { q: "How long until I feel better?", a: "Most patients notice significant headache and jaw-pain reduction within 2–4 weeks of nightly guard use. Some cases (especially long-standing) take 2–3 months." },
      { q: "Is it covered by insurance?", a: "Custom nightguards are typically covered at 50–80% as a medical/dental device. We pre-determine before fabrication." },
      { q: "Will I need to wear it forever?", a: "Most patients yes — grinding is usually a long-term pattern. The guard is comfortable enough that it becomes a normal part of bedtime." },
      { q: "What if a guard doesn't fix it?", a: "Some cases need additional intervention — physiotherapy, Botox for muscle tension, or referral to a TMJ specialist. We coordinate the entire team if needed." },
    ],
    pricing: { headline: "$500", sub: "Custom-Fit TMJ Nightguard", note: "Most insurance plans cover 50–80%. Comprehensive assessment included." },
    cta: {
      title: "Wake up without",
      titleAccent: "jaw pain",
      description: "Free 30-minute TMJ assessment. We'll evaluate your symptoms, examine your bite, and recommend the right next step — no commitment.",
    },
  },

  {
    slug: "sedation-dentistry",
    category: "Specialty",
    label: "Sedation Dentistry",
    shortDescription: "Nitrous, oral and IV sedation options for nervous patients and complex procedures.",
    hubImage: "/images-services/hub-sedation.jpg",
    hero: {
      eyebrow: "Sedation Dentistry",
      title: "Sleep Through Your",
      titleAccent: "Dental Procedure — Stress-Free",
      description:
        "Whether you're anxious about the dentist or facing a complex procedure, our sedation options range from light relaxation to deep IV sedation. Wake up done — with little memory of the experience.",
      image: "/images-services/sedation-hero.jpg",
      imageAlt: "Calm relaxed patient",
      stats: [
        { value: "3 Levels", label: "Of Sedation" },
        { value: "IV", label: "Anaesthesiologist On-Site" },
        { value: "Safer", label: "Than You Think" },
      ],
    },
    intro: {
      eyebrow: "Anxiety Should Never Stop Care",
      title: "Three Sedation Options,",
      titleAccent: "Tailored to You",
      paragraphs: [
        "Dental anxiety affects 1 in 4 adults. For many, it leads to years of avoidance and progressively worse oral health. Sedation eliminates this barrier — making dentistry comfortable, even pleasant.",
        "We offer three levels: nitrous oxide (light relaxation), oral sedation (you'll be very relaxed but awake), and IV sedation (deep sedation, minimal memory). Our team includes a certified anaesthesia provider for safe IV sedation in-office.",
      ],
      image: "/images-services/sedation-intro.jpg",
      bullets: [
        "Nitrous oxide for light relaxation",
        "Oral sedation pills for moderate anxiety",
        "IV sedation for severe anxiety or complex work",
        "Certified anaesthesia team",
      ],
    },
    benefits: [
      { icon: "heart", title: "End Dental Anxiety", body: "Many patients who avoided dentistry for years return to regular care after a positive sedation experience." },
      { icon: "clock", title: "Multiple Procedures in One Visit", body: "Combine procedures (e.g., 4 fillings + a crown) into a single sedation visit — far less stressful." },
      { icon: "shield", title: "Safe & Monitored", body: "Continuous vital-sign monitoring throughout. Our anaesthesia provider is certified and experienced." },
      { icon: "smile", title: "Wake Up Done", body: "Most patients have only fragmented memory of the procedure — and zero anxiety afterward." },
    ],
    process: [
      { num: "01", title: "Sedation Consult", body: "We discuss your anxiety triggers, medical history, and which level of sedation fits best." },
      { num: "02", title: "Pre-Op Instructions", body: "Fasting requirements, medication review, and arranging transportation home for oral/IV sedation." },
      { num: "03", title: "Procedure Under Sedation", body: "Comfortable chair, warm blanket, soft music. Continuous monitoring. You'll feel calm or asleep depending on your sedation level." },
      { num: "04", title: "Recovery & Discharge", body: "30–60 minutes in our recovery area. A friend or family member drives you home — and you sleep off any residual effects comfortably." },
    ],
    candidates: {
      title: "Sedation Is Right For You If",
      titleAccent: "Dentistry Feels Overwhelming",
      description:
        "Sedation isn't only for the highly anxious — it's also ideal for long procedures, complex work, or anyone with a strong gag reflex or trouble staying still.",
      image: "/images-services/sedation-candidates.jpg",
      points: [
        "Severe dental anxiety or PTSD",
        "Avoided dentistry for years",
        "Complex procedure (multiple extractions, implants)",
        "Strong gag reflex",
        "Difficulty staying still (back pain, restlessness)",
        "Want multiple treatments combined into one visit",
      ],
    },
    faqs: [
      { q: "Will I be unconscious?", a: "Depends on the level. Nitrous: fully awake, just relaxed. Oral sedation: very relaxed, may doze. IV sedation: deep sleep-like state, minimal memory. None are full general anaesthesia (we don't intubate)." },
      { q: "Is it safe?", a: "Yes, when administered by a certified team with proper monitoring. Our IV sedation is overseen by a certified anaesthesia provider. We follow ASA monitoring guidelines for every patient." },
      { q: "How do I get home?", a: "For oral and IV sedation, a friend or family member must drive you home. You'll be relaxed but ambulatory after recovery (30–60 min). Don't drive, work, or sign legal documents for 24 hours." },
      { q: "How much does it cost?", a: "Nitrous: $80. Oral sedation: $250. IV sedation: $400–$800 depending on duration. Some insurance plans cover sedation for documented anxiety or complex cases." },
      { q: "Will I feel groggy after?", a: "Nitrous wears off in 5 minutes. Oral sedation effects fade over 4–6 hours. IV sedation: most patients feel normal within 24 hours, though many sleep for several hours that afternoon." },
    ],
    pricing: { headline: "From $80", sub: "Nitrous Oxide — IV Sedation From $400", note: "Some plans cover sedation for documented anxiety. We discuss costs upfront." },
    cta: {
      title: "End your dental anxiety",
      titleAccent: "for good",
      description: "Free consultation to discuss your anxiety, our sedation options, and a no-pressure plan to get you the care you need — comfortably.",
    },
  },

  {
    slug: "dental-emergency",
    category: "Specialty",
    label: "Dental Emergency",
    shortDescription: "Same-day emergency care for tooth pain, broken teeth, knocked-out teeth and abscesses.",
    hubImage: "/images-services/hub-emergency.jpg",
    hero: {
      eyebrow: "Dental Emergency",
      title: "Same-Day Emergency Care.",
      titleAccent: "7 Days a Week.",
      description:
        "Severe toothache, broken tooth, knocked-out tooth, or swelling? Call us and we'll see you today. Most emergencies are resolved in a single visit — no waiting rooms, no week-long delays.",
      image: "/images-services/emergency-hero.jpg",
      imageAlt: "Smiling patient relieved after emergency care",
      stats: [
        { value: "Same-Day", label: "Appointments" },
        { value: "7 Days", label: "A Week" },
        { value: "60 min", label: "Average Visit" },
      ],
    },
    intro: {
      eyebrow: "When Pain Can't Wait",
      title: "Most Dental Emergencies",
      titleAccent: "Are Solved in One Visit",
      paragraphs: [
        "Whether you've chipped a front tooth before a big event, woken up with a throbbing molar, or had a tooth knocked out playing hockey — we see emergencies the same day. Often within 1–2 hours of your call.",
        "Our after-hours line connects directly to an on-call dentist. We'll triage your situation, give you immediate first-aid instructions, and get you in to the office or refer you to the ER if it's a life-threatening situation.",
      ],
      image: "/images-services/emergency-intro.jpg",
      bullets: [
        "Same-day appointments — even Sundays",
        "After-hours emergency line",
        "Pain relief during the visit",
        "Most cases resolved in one appointment",
      ],
    },
    benefits: [
      { icon: "lightning", title: "Immediate Pain Relief", body: "Our first goal is to stop the pain. Local anaesthetic, antibiotics if needed, and definitive treatment same-visit." },
      { icon: "tooth", title: "Save the Tooth If Possible", body: "A knocked-out tooth replanted within 30 minutes has a 90%+ success rate. Call us immediately." },
      { icon: "shield", title: "Stop the Spread", body: "Untreated dental infections can spread to your jaw or bloodstream. Same-day care prevents this." },
      { icon: "calendar", title: "7-Day Availability", body: "Pain doesn't take weekends off. We're open Saturday and Sunday — and have an emergency line after hours." },
    ],
    process: [
      { num: "01", title: "Call Our Emergency Line", body: "Tell us your symptoms. We'll triage, give immediate first-aid instructions, and book you in (usually same day)." },
      { num: "02", title: "Same-Day Exam & X-Ray", body: "Quick diagnostic exam and digital X-ray to identify the issue precisely." },
      { num: "03", title: "Same-Visit Treatment", body: "Most emergencies (root canals, extractions, broken-tooth repairs) are completed in the same visit." },
      { num: "04", title: "Follow-Up Plan", body: "Written aftercare, prescriptions if needed, and a follow-up visit scheduled if required." },
    ],
    candidates: {
      title: "Call Us Immediately If You Have",
      titleAccent: "Any of These Symptoms",
      description:
        "If you're unsure whether your situation is an emergency, call anyway — we'll help you decide. We'd rather see you and rule it out than have you wait through unnecessary pain.",
      image: "/images-services/emergency-candidates.jpg",
      points: [
        "Severe toothache — especially throbbing or waking you at night",
        "Knocked-out tooth (handle by crown, keep in milk, call immediately)",
        "Cracked or broken tooth",
        "Lost filling or crown",
        "Swollen face or jaw (could indicate infection)",
        "Persistent bleeding after a procedure",
      ],
    },
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe pain, bleeding, knocked-out teeth, broken teeth, lost crowns/fillings causing pain, and any facial swelling. When in doubt — call us. We'll help you decide." },
      { q: "What should I do if a tooth gets knocked out?", a: "Time is critical. Pick up the tooth by the crown (NOT the root), gently rinse if dirty, and either reinsert into the socket or store in milk. Call us immediately — replantation within 30 minutes has the best success." },
      { q: "Can I just go to the ER instead?", a: "ERs can manage pain and infection — but they rarely have a dentist on-site. They'll typically prescribe antibiotics and refer you to a dentist anyway. Call us first unless there's facial swelling threatening your airway." },
      { q: "How much does emergency dentistry cost?", a: "Same as standard rates — we don't charge premiums for emergency visits. The exam is typically $90; treatment depends on what's needed and is quoted before we proceed." },
      { q: "Will insurance cover emergency care?", a: "Yes — emergency exams and necessary treatment are covered like any other dental visit. We bill directly." },
    ],
    pricing: { headline: "Standard", sub: "Same-Visit Pricing — No Emergency Premiums", note: "Emergency exam $90. Most treatments same-day. Insurance billed directly." },
    cta: {
      title: "In pain right now?",
      titleAccent: "Call us — we'll see you today.",
      description: "Don't suffer through the night. Our same-day emergency line is staffed 7 days a week. We'll triage, advise, and get you in fast.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
