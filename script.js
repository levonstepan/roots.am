const playInViewVideos = document.querySelectorAll(".video-play-in-view");

playInViewVideos.forEach((video) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { root: null, threshold: 0.28 }
  );
  observer.observe(video);
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const navItems = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname.split("/").pop() || "index.html";

navItems.forEach((item) => {
  const href = item.getAttribute("href");
  if (href === currentPath) {
    item.classList.add("active");
  }
});

// -- Chair scroll image sequence --
(function () {
  const section = document.querySelector(".chair-scroll-section");
  if (!section) return;

  const imgs = document.querySelectorAll(".chair-img");
  const total = imgs.length;
  const dotsContainer = document.getElementById("chairDots");
  if (!total || !dotsContainer) return;

  imgs.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "chair-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => jumpToImage(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".chair-dot");
  let currentIndex = 0;

  function showImage(index) {
    if (index === currentIndex) return;
    imgs[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = index;
    imgs[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function jumpToImage(index) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const totalScroll = section.offsetHeight - window.innerHeight;
    const target = sectionTop + (index / (total - 1)) * totalScroll;
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  window.addEventListener(
    "scroll",
    () => {
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const total_h = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, scrolled / total_h);
      const index = Math.min(total - 1, Math.floor(progress * total));
      showImage(index);
    },
    { passive: true }
  );
})();

const translations = {
  en: {
    htmlLang: "en",
    title: "Roots Furniture | Rooted in Tradition",
    description:
      "Roots Furniture crafts tables and chairs in Armenia with a tradition-first, automation-smart approach.",
    navToggleAria: "Toggle navigation",
    navToggleLabel: "Menu",
    languageSwitchAria: "Language switch",
    navLinks: ["Home", "About", "Products", "Customization", "People", "Contact"],
    heroTitle: "Rooted in tradition.<br />Crafted with precision.",
    heroBody:
      "Roots Furniture makes tables and chairs from natural beech in Vagharshapat. We combine Armenian woodworking with Industry 4.0 automation to deliver consistent, honest craftsmanship.",
    heroButtons: ["Explore Products", "Customise Your Chair"],
    storyTag: "Since 1999",
    storyTitle: "Story Snapshot",
    storySubtitle: "Family roots, modern precision, built in Armenia.",
    storyBody:
      "Roots Furniture is a family business with over 20 years of history. We keep the heart of craftsmanship and amplify it with smart automation.",
    storyPoints: ["Family legacy", "Handed down through generations.", "Industry 4.0 precision", "Automation for consistency and accuracy."],
    storyLearnMore: "Learn More",
    aboutPageTitle: "Our Story | Roots Furniture",
    aboutBack: "← Back to Story Snapshot",
    aboutHeading: "Our story",
    aboutLead: "Video from our workshop and team — the same roots behind every piece.",
    aboutVideoTitle: "Roots Furniture — our story",
    privacyPageTitle: "Privacy Policy",
    privacyBack: "← Back",
    privacySubtitle: "Last updated: April 2026",
    privacySectionTitles: [
      "1. Who we are",
      "2. What data we collect",
      "3. How we use your data",
      "4. Data retention",
      "5. Your rights",
      "6. Security",
      "7. Changes to this policy",
      "8. Contact",
    ],
    privacySectionBodies: [
      "Roots Furniture LLC (also known as Acobian Furniture) is a furniture manufacturer based at 20/1 Ter-Gabrielyan Street, Vagharshapat, Armenia. We operate the website roots.am. You can reach us at info@roots.am.",
      "We collect only the information you voluntarily provide — such as your name, email address, and message — when you contact us through our website. We do not use tracking cookies, run advertising, or collect data automatically beyond standard server logs.",
      "Your information is used solely to respond to your enquiry or process your order. We do not sell, share, or rent your personal data to any third party.",
      "We retain your contact information only as long as necessary to fulfil your request or as required by Armenian law. You may request deletion of your data at any time by emailing info@roots.am.",
      "You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at info@roots.am and we will respond within 30 days.",
      "We take reasonable technical measures to protect your data. Our website uses HTTPS encryption for all data in transit.",
      "We may update this policy occasionally. The date at the top of this page will always reflect the most recent version.",
      "For any privacy-related questions, email us at <a href=\"mailto:info@roots.am\" style=\"color: var(--accent);\">info@roots.am</a> or call +374 91 665520.",
    ],
    legalNotesPageTitle: "Legal Notes",
    legalNotesBack: "← Back",
    legalNotesSubtitle: "Last updated: April 2026",
    legalNotesSectionTitles: [
      "Company information",
      "Intellectual property",
      "Accuracy of information",
      "Limitation of liability",
      "Governing law",
    ],
    legalNotesSectionBodies: [
      "Roots Furniture LLC (Acobian Furniture) is a furniture company based at 20/1 Ter-Gabrielyan Street, Vagharshapat, Armenia. You can reach us by email and phone as listed on the website.",
      "All content on this website — including text, images, product designs, technical drawings, and 3D models — is the property of Roots Furniture LLC and is protected under applicable Armenian and international copyright law. Reproduction or use without written permission is prohibited.",
      "We make every effort to ensure the information on this site is accurate and up to date. However, product specifications, pricing, and availability may change without notice. Always confirm details with us directly before placing an order.",
      "Roots Furniture LLC shall not be liable for any indirect or consequential loss arising from the use of this website or reliance on any information contained herein.",
      "These legal notes are governed by the laws of the Republic of Armenia. Any disputes shall be subject to the jurisdiction of the competent courts of Armenia.",
    ],
    termsPageTitle: "Terms & Conditions",
    termsBack: "← Back",
    termsSubtitle: "Last updated: April 2026",
    termsSectionTitles: [
      "1. Orders & confirmation",
      "2. Pricing",
      "3. Production timelines",
      "4. Payment",
      "5. Delivery & pickup",
      "6. Returns & cancellations",
      "7. Warranty",
      "8. Damaged items",
      "9. Governing law",
      "10. Contact",
    ],
    termsSectionBodies: [
      "All orders are subject to written confirmation by Roots Furniture LLC. An order is considered accepted only once you receive a formal confirmation from us via email. We reserve the right to decline any order at our discretion.",
      "All prices are quoted in Armenian Dram (AMD) unless otherwise stated. Prices are subject to change without notice. The price confirmed in your order confirmation is the price that applies to your order.",
      "Lead times are provided as estimates and may vary depending on order complexity, materials, and workshop capacity. We will keep you informed of any significant delays.",
      "A deposit of 50% is required to begin production. The remaining balance is due before delivery or pickup. Accepted payment methods will be confirmed at the time of order.",
      "Customers may collect finished items from our workshop in Vagharshapat. Delivery arrangements can be discussed and are subject to additional fees depending on location. Risk of damage passes to the customer upon collection or delivery.",
      "Custom and made-to-order items cannot be returned unless they arrive with a manufacturing defect. Cancellations made after production has begun may forfeit the deposit. Please contact us as early as possible if your plans change.",
      "Our furniture carries a 12-month warranty against manufacturing defects under normal use conditions. This does not cover damage caused by misuse, improper care, or natural wear and tear. To make a warranty claim, contact <a href=\"mailto:info@roots.am\" style=\"color: var(--accent);\">info@roots.am</a> with photos and your order details.",
      "Any damage must be reported within 48 hours of receiving your order, with photographic evidence. Claims made after this period may not be accepted.",
      "These terms are governed by the laws of the Republic of Armenia. Disputes will be resolved in the competent courts of Armenia.",
      "For any questions about these terms, reach us at <a href=\"mailto:info@roots.am\" style=\"color: var(--accent);\">info@roots.am</a> or +374 91 665520.",
    ],
    proofTitle: "Proof & Trust",
    proofSubtitle: "Supported by Acba Leasing · Exporting to Russia · Exhibitions · Certifications",
    proofCards: [
      ["Italian 5-axis CNC", "Precision manufacturing"],
      ["Waste-free", "Dust collection + furnace"],
      ["Solar Power", "Zero electricity cost"],
      ["Smart Kilns", "Remote monitoring"],
    ],
    peopleTitle: ["Meet", "Our", "People"],
    peopleSubtitle: "The hands, habits, and humour<br />behind every piece.",
    productsTitle: "Product Categories",
    classCards: [
      {
        title: "Econom",
        subtitle: "Accessible • Practical • Honest",
        items: [
          "Focus on essential function",
          "Simplified, clean design",
          "Efficient material usage",
          "Standard wood and finishes",
          "Durable for everyday use",
          "Cost-optimized production",
          "Ideal for rental or budget-conscious spaces",
        ],
      },
      {
        title: "Standard",
        subtitle: "Balanced • Refined • Versatile",
        items: [
          "Improved comfort and ergonomics",
          "More refined proportions and details",
          "Better material selection",
          "Wider choice of finishes and fabrics",
          "Strong balance of price and quality",
          "Suitable for most home interiors",
        ],
      },
      {
        title: "Premium",
        subtitle: "Crafted • Detailed • Expressive",
        items: [
          "High-quality, carefully selected wood",
          "Advanced finishing techniques",
          "Attention to fine details and joints",
          "More complex forms and aesthetics",
          "Enhanced tactile and visual experience",
          "Built for longevity and presence",
        ],
      },
      {
        title: "Custom",
        subtitle: "Personal • Adaptive • Unique",
        items: [
          "Customizable",
          "Choice of wood, fabric, and finishes",
          "Adapted to specific interior spaces",
          "Collaborative design process",
          "Unique, one-of-a-kind pieces",
          "Flexible production approach",
          "Tailored to individual needs and vision",
        ],
      },
    ],
    environmentTitle: "We Care About the Environment.",
    environmentBody:
      "We run a low-waste shop: dust and offcuts feed recovery instead of the trash pile, solar offsets a real share of our power, and we tune kilns and cutting so timber goes further. Less scrap, less guesswork-and furniture you can still be proud to put in a room.",
    customiseTitle: "Customise Your Chair",
    customiseLead:
      "Build a custom chair with shell, wood type, and fabric selections.",
    contactTitle: "Contact Us",
    contactIntro: "Roots Furniture LLC",
    contactLabels: ["Address", "Phone", "Leadership", "Email"],
    contactAddress: "20/1 Ter-Gabrielyan Street, Vagharshapat",
    contactLeadership: "Levon Stepanyan - CEO of Roots LLC",
    footerCompanyTitle: "Company",
    footerCompanyLinks: ["Privacy policy", "Legal notes", "Terms & conditions"],
    footerFollowTitle: "Follow Us",
    footerBottom: "© 2026 Roots Furniture · Acobian Furniture",
    footerTagline: "Made with ❤ in Armenia",
  },
  hy: {
    htmlLang: "hy",
    title: "Roots Furniture | Արմատավորված ավանդույթում",
    description:
      "Roots Furniture-ը Հայաստանում պատրաստում է սեղաններ և աթոռներ՝ համադրելով ավանդական վարպետությունն ու խելացի ավտոմատացումը։",
    navToggleAria: "Բացել նավիգացիան",
    navToggleLabel: "Մենյու",
    languageSwitchAria: "Լեզվի ընտրություն",
    navLinks: ["Գլխավոր", "Մեր մասին", "Ապրանքներ", "Անհատականացում", "Մարդիկ", "Կապ"],
    heroTitle: "Արմատավորված ավանդույթում, ստեղծված վարպետությամբ։",
    heroBody:
      "Roots Furniture-ը Վաղարշապատում բնական հաճարենուց պատրաստում է սեղաններ և աթոռներ։ Մենք համադրում ենք հայկական փայտամշակման փորձը և Industry 4.0 ավտոմատացումը՝ ապահովելու կայուն ու ազնիվ որակ։",
    heroButtons: ["Դիտել ապրանքները", "Անհատականացրեք ձեր աթոռը"],
    storyTag: "1999-ից",
    storyTitle: "Մեր պատմությունը",
    storySubtitle: "Ընտանեկան արմատներ, ժամանակակից ճշգրտություն՝ Հայաստանում։",
    storyBody:
      "Roots Furniture-ը ընտանեկան բիզնես է՝ ավելի քան 20 տարվա պատմությամբ։ Մենք պահպանում ենք վարպետության սիրտը և ուժեղացնում այն խելացի ավտոմատացմամբ։",
    storyPoints: ["Ընտանեկան ժառանգություն", "Սերնդեսերունդ փոխանցված արժեքներ։", "Industry 4.0 ճշգրտություն", "Ավտոմատացում՝ կայունության և ճշգրտության համար։"],
    storyLearnMore: "Իմանալ ավելին",
    aboutPageTitle: "Մեր պատմությունը | Roots Furniture",
    aboutBack: "← Վերադառնալ Պատմության հատված",
    aboutHeading: "Մեր պատմությունը",
    aboutLead: "Տեսանյութ մեր արհեստանոցից և թիմից՝ նույն արմատները յուրաքանչյուր արտադրանքի հիմքում։",
    aboutVideoTitle: "Roots Furniture — մեր պատմությունը",
    privacyPageTitle: "Գաղտնիության քաղաքականություն",
    privacyBack: "← Վերադառնալ",
    privacySubtitle: "Վերջին թարմացումը՝ ապրիլ 2026",
    privacySectionTitles: [
      "1. Ով ենք մենք",
      "2. Ի՞նչ տվյալներ ենք հավաքում",
      "3. Ինչպե՞ս ենք օգտագործում ձեր տվյալները",
      "4. Տվյալների պահպանման ժամկետ",
      "5. Ձեր իրավունքները",
      "6. Անվտանգություն",
      "7. Այս քաղաքականության փոփոխություններ",
      "8. Կապ",
    ],
    privacySectionBodies: [
      "Roots Furniture LLC-ն (նաև հայտնի որպես Acobian Furniture) կահույք արտադրող ընկերություն է, որը գտնվում է 20/1 Ter-Gabrielyan Street, Վաղարշապատ, Հայաստան։ Մենք գործում ենք roots.am կայքում։ Կարող եք կապ հաստատել մեզ հետ info@roots.am հասցեով։",
      "Մենք հավաքում ենք միայն այն տվյալները, որոնք դուք կամավոր տրամադրում եք՝ օրինակ՝ ձեր անունը, էլ․ հասցեն և հաղորդագրությունը, երբ մեզ հետ կապ եք հաստատում մեր կայքի միջոցով։ Մենք չենք օգտագործում հետևելու (tracking) քուքիներ, չենք վարում գովազդ, և տվյալներ չենք հավաքում ավտոմատ կերպով՝ սովորական սերվերի լոգերից դուրս։",
      "Ձեր տվյալներն օգտագործվում են բացառապես ձեր հարցմանը պատասխանելու կամ ձեր պատվերը մշակելու համար։ Մենք չենք վաճառում, չենք փոխանցում և չենք վարձակալում ձեր անձնական տվյալները որևէ երրորդ կողմի։",
      "Մենք պահպանում ենք ձեր կոնտակտային տվյալները միայն այնքան ժամանակ, որքան անհրաժեշտ է ձեր հարցումը բավարարելու համար կամ ինչպես պահանջում է Հայաստանի օրենքը։ Դուք ցանկացած պահի կարող եք պահանջել ձեր տվյալների ջնջում՝ info@roots.am էլ․ հասցեով գրելով։",
      "Դուք ունեք ձեր մասին պահվող անձնական տվյալները հասանելի դարձնելու, ուղղելու կամ ջնջելու իրավունք։ Այս իրավունքները կիրառելու համար կապ հաստատեք info@roots.am հասցեով, և մենք կպատասխանենք 30 օրվա ընթացքում։",
      "Մենք ձեռնարկում ենք ողջամիտ տեխնիկական միջոցներ՝ ձեր տվյալները պաշտպանելու համար։ Մեր կայքը օգտագործում է HTTPS կոդավորումը բոլոր տվյալների փոխանցման ընթացքում։",
      "Մենք կարող ենք ժամանակ առ ժամանակ թարմացնել այս քաղաքականությունը։ Էջի վերևում նշված ամսաթիվը միշտ կհամապատասխանի առավել նոր տարբերակին։",
      "Գաղտնիությանը վերաբերող ցանկացած հարցի համար էլ․ փոստ գրեք մեզ՝ <a href=\"mailto:info@roots.am\" style=\"color: var(--accent);\">info@roots.am</a> կամ զանգահարեք +374 91 665520։",
    ],
    legalNotesPageTitle: "Իրավական ծանուցումներ",
    legalNotesBack: "← Վերադառնալ",
    legalNotesSubtitle: "Վերջին թարմացումը՝ ապրիլ 2026",
    legalNotesSectionTitles: [
      "Ընկերության տվյալներ",
      "Հեղինակային իրավունքներ",
      "Տեղեկատվության ճշտություն",
      "Պատասխանատվության սահմանափակում",
      "Կիրառելի իրավունք",
    ],
    legalNotesSectionBodies: [
      "Roots Furniture LLC-ն (Acobian Furniture) կահույքի ընկերություն է, որը գտնվում է 20/1 Ter-Gabrielyan Street, Վաղարշապատ, Հայաստան։ Կապ հաստատելու համար կարող եք օգտագործել կայքում նշված էլ․ փոստն ու հեռախոսը։",
      "Այս կայքի ամբողջ բովանդակությունը՝ ներառյալ տեքստերը, պատկերները, արտադրանքի նախագծերը, տեխնիկական գծագրերը և 3D մոդելները պատկանում են Roots Furniture LLC-ին և պաշտպանված են ՀՀ և միջազգային հեղինակային իրավունքի նորմերով։ Վերարտադրումը կամ օգտագործումը՝ առանց գրավոր թույլտվության արգելված է։",
      "Մենք անում ենք ամեն ինչ՝ այս կայքում տեղադրված տեղեկատվությունը ճշգրիտ և արդիական պահելու համար։ Սակայն արտադրանքի բնութագրերը, գները և հասանելիությունը կարող են փոխվել՝ առանց նախապես ծանուցելու։ Պատվեր կատարելուց առաջ մանրամասները միշտ ճշտեք մեզ հետ ուղղակիորեն։",
      "Roots Furniture LLC-ն չի կրելու որևէ անուղղակի կամ հետևանքային վնասի պատասխանատվություն՝ այս կայքի օգտագործման կամ սույն կայքում տեղադրված տեղեկատվության վրա հենվելու արդյունքում։",
      "Սույն իրավական ծանուցումները կարգավորվում են Հայաստանի Հանրապետության օրենքներով։ Ցանկացած վեճ ենթակա է Հայաստանի իրավասու դատարանների իրավասությանը։",
    ],
    termsPageTitle: "Պայմաններ և դրույթներ",
    termsBack: "← Վերադառնալ",
    termsSubtitle: "Վերջին թարմացումը՝ ապրիլ 2026",
    termsSectionTitles: [
      "1. Պատվերներ և հաստատում",
      "2. Գներ",
      "3. Արտադրության ժամկետներ",
      "4. Վճարում",
      "5. Առաքում և ինքնաառաքում",
      "6. Վերադարձ և չեղարկումներ",
      "7. Երաշխիք",
      "8. Վնասված ապրանքներ",
      "9. Կիրառելի իրավունք",
      "10. Կապ",
    ],
    termsSectionBodies: [
      "Բոլոր պատվերները ենթակա են Roots Furniture LLC-ի կողմից գրավոր հաստատման։ Պատվերը համարվում է ընդունված միայն այն պահից, երբ ստանում եք մեր կողմից էլ․ փոստով պաշտոնական հաստատումը։ Մենք իրավունք ենք վերապահում մեր հայեցողությամբ հրաժարվել ցանկացած պատվերից։",
      "Բոլոր գները նշվում են Հայաստանի դրամով (AMD), եթե այլ բան չի նշված։ Գները կարող են փոխվել առանց նախնական ծանուցման։ Ձեր պատվերի հաստատման մեջ նշված գինը կիրառելի է ձեր պատվերի համար։",
      "Առաջադրված ժամկետները ներկայացվում են որպես գնահատականներ և կարող են տարբերվել՝ կախված պատվերի բարդությունից, նյութերից և արտադրական հզորությունից։ Մենք կտեղեկացնենք ցանկացած էական ուշացման մասին։",
      "Արտադրությունը սկսելու համար պահանջվում է 50% նախավճար։ Մնացորդը վճարվում է մինչև առաքումը կամ ինքնաառաքումը։ Վճարման ընդունված եղանակները կհաստատվեն պատվերի պահին։",
      "Հաճախորդները կարող են պատրաստի իրերը վերցնել մեր արտադրամասից Վաղարշապատում։ Առաքումը կարող է քննարկվել և կախված գտնվելու վայրից կարող է ներառել լրացուցիչ վճարներ։ Վնասի ռիսկը փոխանցվում է հաճախորդին՝ վերցնելու կամ առաքման պահից։",
      "Պատվերով և պատրաստված-հատուկ արտադրանքները չեն վերադարձվում, եթե չեն ժամանում արտադրական արատի պատճառով։ Երբ արտադրությունը արդեն սկսվել է, չեղարկումների դեպքում կարող է կորսվել նախավճարը։ Եթե ձեր ծրագրերը փոխվում են, խնդրում ենք հնարավորինս շուտ կապ հաստատել մեզ հետ։",
      "Մեր կահույքը ունի 12 ամսվա երաշխիք՝ արտադրական արատների դեպքում՝ բնականոն օգտագործման պայմաններում։ Այն չի ծածկում ոչ պատշաճ օգտագործման, ոչ ճիշտ խնամքի կամ բնական մաշվածության հետևանքով առաջացած վնասը։ Երաշխիքային պահանջ ներկայացնելու համար կապ հաստատեք՝ <a href=\"mailto:info@roots.am\" style=\"color: var(--accent);\">info@roots.am</a> ուղարկելով նկարներ և ձեր պատվերի տվյալները։",
      "Ցանկացած վնաս պետք է հաղորդվի պատվերը ստանալուց հետո 48 ժամվա ընթացքում՝ լուսանկարային ապացույցներով։ Այս ժամկետից հետո ներկայացված պահանջները կարող են չընդունվել։",
      "Սույն պայմանները կարգավորվում են Հայաստանի Հանրապետության օրենքներով։ Վեճերը կլուծվեն իրավասու դատարաններում։",
      "Սույն պայմանների վերաբերյալ ցանկացած հարցի համար կապ հաստատեք՝ <a href=\"mailto:info@roots.am\" style=\"color: var(--accent);\">info@roots.am</a> կամ +374 91 665520 հեռախոսահամարով։",
    ],
    proofTitle: "Վստահություն և ապացույցներ",
    proofSubtitle: "Աջակցվում է Acba Leasing-ի կողմից · Արտահանում Ռուսաստան · Ցուցահանդեսներ · Սերտիֆիկատներ",
    proofCards: [
      ["Իտալական 5-առանցքային CNC", "Ճշգրիտ արտադրություն"],
      ["Անթափոն արտադրություն", "Փոշեհավաքում + վառարան"],
      ["Արևային էներգիա", "Էլեկտրաէներգիայի զրոյական ծախս"],
      ["Խելացի չորանոցներ", "Հեռավար վերահսկում"],
    ],
    peopleTitle: ["Մեր", "մարդիկ", ""],
    peopleSubtitle: "Ձեռքերը, սովորույթներն ու հումորը,<br />որոնք կանգնած են յուրաքանչյուր արտադրանքի հետևում։",
    productsTitle: "Ապրանքների կատեգորիաներ",
    classCards: [
      {
        title: "Էկոնոմ",
        subtitle: "Մատչելի • Գործնական • Ազնիվ",
        items: [
          "Կենտրոնացում հիմնական ֆունկցիայի վրա",
          "Պարզեցված, մաքուր դիզայն",
          "Նյութի արդյունավետ օգտագործում",
          "Ստանդարտ փայտ և երանգներ",
          "Ամուր՝ ամենօրյա օգտագործման համար",
          "Արժեքի օպտիմիզացված արտադրություն",
          "Հարմար է վարձով կամ բյուջետային տարածքների համար",
        ],
      },
      {
        title: "Ստանդարտ",
        subtitle: "Հավասարակշռված • Նրբագեղ • Բազմակողմանի",
        items: [
          "Բարելավված հարմարավետություն և էրգոնոմիկա",
          "Ավելի նրբագեղ համամասնություններ և դետալներ",
          "Նյութերի ավելի որակյալ ընտրություն",
          "Երանգների և գործվածքների ավելի լայն ընտրանի",
          "Գին-որակ օպտիմալ հավասարակշռություն",
          "Հարմար է տան ինտերիերների մեծ մասի համար",
        ],
      },
      {
        title: "Պրեմիում",
        subtitle: "Վարպետացված • Մանրակրկիտ • Արտահայտիչ",
        items: [
          "Բարձրորակ, խնամքով ընտրված փայտ",
          "Մշակման առաջադեմ տեխնիկաներ",
          "Մանրուքների և միացումների բարձր ուշադրություն",
          "Ավելի բարդ ձևեր և գեղագիտություն",
          "Ավելացված տեսողական և շոշափելի տպավորություն",
          "Ստեղծված երկարատև ծառայության համար",
        ],
      },
      {
        title: "Պատվերով",
        subtitle: "Անձնական • Հարմարվող • Յուրահատուկ",
        items: [
          "Անհատականացվող",
          "Փայտի, գործվածքի և երանգների ընտրություն",
          "Հարմարեցված կոնկրետ ինտերիերային տարածքներին",
          "Համագործակցային դիզայնի գործընթաց",
          "Յուրօրինակ, մեկ օրինակով լուծումներ",
          "Ճկուն արտադրական մոտեցում",
          "Հարմարեցված ձեր կարիքներին և տեսլականին",
        ],
      },
    ],
    environmentTitle: "Մենք հոգ ենք տանում շրջակա միջավայրի մասին։",
    environmentBody:
      "Մենք վարում ենք ցածր թափոններով արտադրություն․ փոշին և մնացորդները վերամշակվում են, արևային էներգիան ծածկում է էլեկտրաէներգիայի մի մասը, իսկ չորացման և կտրման գործընթացները կարգավորվում են, որպեսզի փայտը առավել արդյունավետ օգտագործվի։ Ավելի քիչ թափոն, ավելի քիչ սխալներ, և կահույք, որով կարող եք հպարտանալ։",
    customiseTitle: "Անհատականացրեք ձեր աթոռը",
    customiseLead:
      "Ստեղծեք պատվերով աթոռ՝ ընտրելով կորպուսը, փայտի տեսակը և գործվածքը։",
    contactTitle: "Կապ մեզ հետ",
    contactIntro: "Roots Furniture ՍՊԸ",
    contactLabels: ["Հասցե", "Հեռախոս", "Ղեկավարություն", "Էլ. փոստ"],
    contactAddress: "20/1 Տեր-Գաբրիելյան փողոց, Վաղարշապատ",
    contactLeadership: "Լևոն Ստեփանյան - Roots LLC-ի տնօրեն",
    footerCompanyTitle: "Ընկերություն",
    footerCompanyLinks: ["Գաղտնիության քաղաքականություն", "Իրավական նշումներ", "Պայմաններ և դրույթներ"],
    footerFollowTitle: "Հետևեք մեզ",
    footerBottom: "© 2026 Roots Furniture · Acobian Furniture",
    footerTagline: "Ստեղծված է ❤-ով Հայաստանում",
  },
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (!element || typeof value !== "string") return;
  element.textContent = value;
}

function setHtml(selector, value) {
  const element = document.querySelector(selector);
  if (!element || typeof value !== "string") return;
  element.innerHTML = value;
}

function setList(selector, values) {
  if (!Array.isArray(values)) return;
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node, index) => {
    if (values[index] !== undefined) {
      node.textContent = values[index];
    }
  });
}

function applyLanguage(langCode) {
  const locale = translations[langCode] ? langCode : "en";
  const copy = translations[locale];

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", copy.description);

  setText(".nav-toggle", copy.navToggleLabel);
  const navToggleButton = document.querySelector(".nav-toggle");
  if (navToggleButton) navToggleButton.setAttribute("aria-label", copy.navToggleAria);
  const langSwitch = document.querySelector(".language-switch");
  if (langSwitch) langSwitch.setAttribute("aria-label", copy.languageSwitchAria);

  setList(".nav-links a", copy.navLinks);
  setHtml(".hero-copy h1", copy.heroTitle);
  setText(".hero-copy p", copy.heroBody);
  setList(".hero-actions .btn", copy.heroButtons);

  setText(".story-highlight .tag", copy.storyTag);
  setText(".story-highlight .section-title", copy.storyTitle);
  setText(".story-highlight .section-subtitle", copy.storySubtitle);
  setText(".story-highlight > p:not(.section-subtitle)", copy.storyBody);
  setText(".story-point:nth-of-type(1) h4", copy.storyPoints[0]);
  setText(".story-point:nth-of-type(1) p", copy.storyPoints[1]);
  setText(".story-point:nth-of-type(2) h4", copy.storyPoints[2]);
  setText(".story-point:nth-of-type(2) p", copy.storyPoints[3]);
  setText('.story-highlight .btn-outline[href*="about.html"]', copy.storyLearnMore);
  if (!document.querySelector('.story-highlight .btn-outline[href*="about.html"]')) {
    const storyCta = document.querySelector(".story-highlight .btn-outline");
    if (storyCta) storyCta.textContent = copy.storyLearnMore;
  }

  setText(".about-story-back .btn", copy.aboutBack);
  setText(".about-story-page .section-title", copy.aboutHeading);
  setText(".about-story-lead", copy.aboutLead);
  const aboutIframe = document.querySelector(".about-story-page iframe");
  if (aboutIframe && copy.aboutVideoTitle) {
    aboutIframe.setAttribute("title", copy.aboutVideoTitle);
  }

  // Legal / policy pages (privacy, legal notes, terms)
  setText(".privacy-policy-page .section-title", copy.privacyPageTitle);
  setText(".privacy-policy-page .section-subtitle", copy.privacySubtitle);
  setText(".privacy-policy-page .btn.btn-outline", copy.privacyBack);
  document
    .querySelectorAll(".privacy-policy-page .privacy-sections h3")
    .forEach((h, i) => {
      if (copy.privacySectionTitles?.[i] !== undefined) h.textContent = copy.privacySectionTitles[i];
    });
  document
    .querySelectorAll(".privacy-policy-page .privacy-sections p.muted")
    .forEach((p, i) => {
      if (copy.privacySectionBodies?.[i] !== undefined) p.innerHTML = copy.privacySectionBodies[i];
    });

  setText(".legal-notes-page .section-title", copy.legalNotesPageTitle);
  setText(".legal-notes-page .section-subtitle", copy.legalNotesSubtitle);
  setText(".legal-notes-page .btn.btn-outline", copy.legalNotesBack);
  document
    .querySelectorAll(".legal-notes-page .legal-notes-sections h3")
    .forEach((h, i) => {
      if (copy.legalNotesSectionTitles?.[i] !== undefined) h.textContent = copy.legalNotesSectionTitles[i];
    });
  document
    .querySelectorAll(".legal-notes-page .legal-notes-sections p.muted")
    .forEach((p, i) => {
      if (copy.legalNotesSectionBodies?.[i] !== undefined) p.innerHTML = copy.legalNotesSectionBodies[i];
    });

  setText(".terms-and-conditions-page .section-title", copy.termsPageTitle);
  setText(".terms-and-conditions-page .section-subtitle", copy.termsSubtitle);
  setText(".terms-and-conditions-page .btn.btn-outline", copy.termsBack);
  document
    .querySelectorAll(".terms-and-conditions-page .terms-sections h3")
    .forEach((h, i) => {
      if (copy.termsSectionTitles?.[i] !== undefined) h.textContent = copy.termsSectionTitles[i];
    });
  document
    .querySelectorAll(".terms-and-conditions-page .terms-sections p.muted")
    .forEach((p, i) => {
      if (copy.termsSectionBodies?.[i] !== undefined) p.innerHTML = copy.termsSectionBodies[i];
    });

  setText(".story-proof h3", copy.proofTitle);
  setText(".story-proof > p", copy.proofSubtitle);
  document.querySelectorAll(".proof-card").forEach((card, idx) => {
    const cardCopy = copy.proofCards[idx];
    if (!cardCopy) return;
    const title = card.querySelector("strong");
    const subtitle = card.querySelector("p");
    if (title) title.textContent = cardCopy[0];
    if (subtitle) subtitle.textContent = cardCopy[1];
  });
  setList(".people-flyin-txt-cont .people-flyIn", [
    copy.peopleTitle[0],
    copy.peopleTitle[1],
    copy.peopleTitle[2],
  ]);
  setHtml(".people-line-four", copy.peopleSubtitle);

  setText("#products .section-title", copy.productsTitle);
  document.querySelectorAll(".class-card").forEach((card, cardIndex) => {
    const cardCopy = copy.classCards[cardIndex];
    if (!cardCopy) return;
    const heading = card.querySelector(".class-head h3");
    const subtitle = card.querySelector(".class-head p");
    if (heading) heading.textContent = cardCopy.title;
    if (subtitle) subtitle.textContent = cardCopy.subtitle;
    const items = card.querySelectorAll("li");
    items.forEach((item, itemIndex) => {
      if (cardCopy.items[itemIndex] !== undefined) {
        item.textContent = cardCopy.items[itemIndex];
      }
    });
  });

  setText(".environment-text-frame .section-title", copy.environmentTitle);
  setText(".environment-text-frame .section-subtitle", copy.environmentBody);

  setText("#customization .chair-scroll-text .section-title", copy.customiseTitle);
  setText("#customization .chair-scroll-text .section-subtitle", copy.customiseLead);
  setText("#contact .section-title", copy.contactTitle);
  setText(".contact-intro", copy.contactIntro);
  setList(".contact-item h3", copy.contactLabels);
  setText(".contact-item:nth-of-type(1) p", copy.contactAddress);
  setText(".contact-item:nth-of-type(3) p", copy.contactLeadership);

  setText(".footer-company-title", copy.footerCompanyTitle);
  setText(".footer-follow-title", copy.footerFollowTitle);
  const footerCompanyLinks = document.querySelectorAll(".footer-company-links li");
  footerCompanyLinks.forEach((item, itemIndex) => {
    if (copy.footerCompanyLinks[itemIndex] === undefined) return;
    const anchor = item.querySelector("a");
    if (anchor) {
      anchor.textContent = copy.footerCompanyLinks[itemIndex];
    } else {
      item.textContent = copy.footerCompanyLinks[itemIndex];
    }
  });

  setText(".footer-bottom > span:first-child", copy.footerBottom);
  setText(".footer-tagline", copy.footerTagline);

  const langButtons = document.querySelectorAll(".language-switch .lang-btn");
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === locale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  window.localStorage.setItem("siteLanguage", locale);
}

const languageButtons = document.querySelectorAll(".language-switch .lang-btn");
const savedLanguage = window.localStorage.getItem("siteLanguage") || "en";
applyLanguage(savedLanguage);

if (languageButtons.length > 0) {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.lang || "en";
      applyLanguage(selected);
    });
  });
}

// -- Drifting sketches background --
(function () {
  const container = document.getElementById('sketchesBg');
  if (!container) return;

  const TOTAL = 20;
  const DURATION = 45;
  const ROWS = 3;
  const rowTops = [10, 40, 68];

  for (let i = 0; i < TOTAL; i++) {
    const img = document.createElement('img');
    img.className = 'sketch-item';
    img.src = `./Images/Sketches/sketch_${String(i + 1).padStart(2, '0')}.png`;

    const row = i % ROWS;
    const top = rowTops[row] + (Math.random() * 6 - 3);
    const scale = 0.8 + Math.random() * 0.45;
    const dur = DURATION + Math.random() * 12;
    const delay = -(i / TOTAL) * dur;

    img.style.cssText = `
      top: ${top}vh;
      left: -320px;
      width: ${260 * scale}px;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(img);
  }
})();
