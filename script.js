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

function initModelViewerInteractions() {
  const modelViewers = document.querySelectorAll("model-viewer.model-viewer");

  modelViewers.forEach((viewer) => {
    viewer.setAttribute("camera-orbit", "0deg 75deg 2.4m");
    viewer.setAttribute("field-of-view", "30deg");

    let rotateTimeout;

    viewer.addEventListener("mouseenter", () => {
      viewer.autoRotate = true;
      viewer.setAttribute("camera-orbit", "35deg 70deg 2m");
      clearTimeout(rotateTimeout);
      rotateTimeout = setTimeout(() => {
        viewer.autoRotate = false;
      }, 700);
    });

    viewer.addEventListener("mouseleave", () => {
      viewer.autoRotate = false;
      viewer.setAttribute("camera-orbit", "0deg 75deg 2.4m");
    });
  });
}

if (customElements.get("model-viewer")) {
  initModelViewerInteractions();
} else {
  customElements.whenDefined("model-viewer").then(initModelViewerInteractions);
}

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
    customiseEyebrow: "Configurator",
    customiseTitle: "Customise Your Chair",
    customiseSubtitle: "Shape the details that matter.",
    customiseBodyOne:
      "Pick the seat and back profiles you prefer, select beech tones and surface treatments, and pair upholstery that fits your space. Each combination is built around the same honest construction we use across our tables and chairs.",
    customiseBodyTwo:
      "When you are ready, we review your choices, confirm timelines, and answer questions so nothing is left ambiguous before production begins in our Vagharshapat workshop.",
    customiseListAria: "What you can customise",
    customiseList: [
      "Shell and silhouette options",
      "Wood stain and natural grain direction",
      "Fabric or leather family and colour direction",
      "Hardware and edge details where applicable",
    ],
    contactTitle: "Contact Us",
    contactIntro: "Roots Furniture LLC",
    contactLabels: ["Address", "Phone", "Leadership", "Email"],
    contactLeadership: "Levon Stepanyan - CEO of Roots LLC",
    footerHeads: ["Purchasing", "Resources", "Company"],
    footerCols: [
      ["How to order", "Production timelines", "Delivery & pickup", "Warranty", "Returns", "Damaged items", "Cancellations"],
      ["Product care", "Wood & finishes guide", "Catalog (coming soon)"],
      ["Careers", "Privacy policy", "Legal notes", "Terms & conditions"],
    ],
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
    heroTitle: "Արմատավորված ավանդույթում.<br />Պատրաստված ճշգրտությամբ։",
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
    proofTitle: "Վստահություն և ապացույցներ",
    proofSubtitle: "Աջակցվում է Acba Leasing-ի կողմից · Արտահանում Ռուսաստան · Ցուցահանդեսներ · Սերտիֆիկատներ",
    proofCards: [
      ["Իտալական 5-առանցքային CNC", "Ճշգրիտ արտադրություն"],
      ["Անթափոն արտադրություն", "Փոշեհավաքում + վառարան"],
      ["Արևային էներգիա", "Էլեկտրաէներգիայի զրոյական ծախս"],
      ["Խելացի չորանոցներ", "Հեռավար վերահսկում"],
    ],
    peopleTitle: ["Ծանոթացեք", "Մեր", "Մարդկանց"],
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
    customiseEyebrow: "Կոնֆիգուրատոր",
    customiseTitle: "Անհատականացրեք ձեր աթոռը",
    customiseSubtitle: "Կերպավորեք այն մանրուքները, որոնք կարևոր են ձեզ համար։",
    customiseBodyOne:
      "Ընտրեք նստատեղի և մեջքի նախընտրելի ձևերը, հաճարենու երանգներն ու մակերեսային մշակումը, և համադրեք պաստառապատումը ձեր տարածքին համապատասխան։ Յուրաքանչյուր համադրություն հիմնված է նույն ազնիվ կառուցվածքի վրա, որն օգտագործում ենք մեր սեղանների և աթոռների արտադրությունում։",
    customiseBodyTwo:
      "Երբ պատրաստ լինեք, մենք վերանայում ենք ձեր ընտրությունը, հաստատում ժամկետները և պատասխանում հարցերին, որպեսզի մինչև արտադրության մեկնարկը Վաղարշապատի մեր արհեստանոցում ամեն ինչ հստակ լինի։",
    customiseListAria: "Ինչ կարող եք անհատականացնել",
    customiseList: [
      "Կորպուսի և ուրվագծի տարբերակներ",
      "Փայտի երանգ և բնական հյուսվածքի ուղղություն",
      "Գործվածքի կամ կաշվի ընտանիք և գունային ուղղություն",
      "Մետաղական և եզրային դետալներ, որտեղ կիրառելի է",
    ],
    contactTitle: "Կապ մեզ հետ",
    contactIntro: "Roots Furniture ՍՊԸ",
    contactLabels: ["Հասցե", "Հեռախոս", "Ղեկավարություն", "Էլ. փոստ"],
    contactLeadership: "Լևոն Ստեփանյան - Roots LLC-ի տնօրեն",
    footerHeads: ["Գնումներ", "Ռեսուրսներ", "Ընկերություն"],
    footerCols: [
      ["Ինչպես պատվիրել", "Արտադրության ժամկետներ", "Առաքում և ինքնաառաքում", "Երաշխիք", "Վերադարձ", "Վնասված ապրանքներ", "Չեղարկումներ"],
      ["Ապրանքի խնամք", "Փայտի և երանգների ուղեցույց", "Կատալոգ (շուտով)"],
      ["Աշխատանք", "Գաղտնիության քաղաքականություն", "Իրավական նշումներ", "Պայմաններ և դրույթներ"],
    ],
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
  setText('.story-highlight a[href="about.html"]', copy.storyLearnMore);

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

  setText(".customise-eyebrow", copy.customiseEyebrow);
  setText(".customise-copy-frame .section-title", copy.customiseTitle);
  setText(".customise-copy-subtitle", copy.customiseSubtitle);
  const customiseParagraphs = document.querySelectorAll(".customise-copy-body");
  if (customiseParagraphs[0]) customiseParagraphs[0].textContent = copy.customiseBodyOne;
  if (customiseParagraphs[1]) customiseParagraphs[1].textContent = copy.customiseBodyTwo;
  const customiseList = document.querySelector(".customise-copy-list");
  if (customiseList) customiseList.setAttribute("aria-label", copy.customiseListAria);
  setList(".customise-copy-list li", copy.customiseList);

  setText("#contact .section-title", copy.contactTitle);
  setText(".contact-intro", copy.contactIntro);
  setList(".contact-item h3", copy.contactLabels);
  setText(".contact-item:nth-of-type(3) p", copy.contactLeadership);

  setList(".footer-grid h4", copy.footerHeads);
  document.querySelectorAll(".footer-grid > div").forEach((column, colIndex) => {
    const items = copy.footerCols[colIndex];
    if (!items) return;
    column.querySelectorAll("li").forEach((item, itemIndex) => {
      if (items[itemIndex] !== undefined) {
        item.textContent = items[itemIndex];
      }
    });
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

if (languageButtons.length > 0) {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.lang || "en";
      applyLanguage(selected);
    });
  });

  const savedLanguage = window.localStorage.getItem("siteLanguage") || "en";
  applyLanguage(savedLanguage);
}
