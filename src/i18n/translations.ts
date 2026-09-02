export type Language = 'en' | 'ar';

export interface TranslationStructure {
  nav: {
    home: string;
    locations: string;
    protech: string;
    about: string;
    contact: string;
    backToStudio: string;
    products: string;
    impact: string;
    switchProtech: string;
    switchStudio: string;
    exploreSpaces: string;
    startProject: string;
  };
  heroStudio: {
    trustBadge: string;
    titleMain: string;
    titleRed: string;
    subtitle: string;
    ctaLocations: string;
    ctaProtech: string;
  };
  locationsSection: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    exploreSpace: string;
    photosCount: string;
  };
  aboutSection: {
    badge: string;
    title: string;
    subtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
  };
  contactSection: {
    badge: string;
    title: string;
    subtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    formTitle: string;
    experienceLabel: string;
    optStudio: string;
    optProtech: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    itemLabelStudio: string;
    itemLabelProtech: string;
    itemPlaceholderStudio: string;
    itemPlaceholderProtech: string;
    detailsLabelStudio: string;
    detailsLabelProtech: string;
    detailsPlaceholderStudio: string;
    detailsPlaceholderProtech: string;
    submitBtnWhatsApp: string;
    successTitle: string;
    successDesc: string;
  };
  heroProTech: {
    badge: string;
    title: string;
    subtitle: string;
    ctaProducts: string;
    ctaStudio: string;
  };
  productsSection: {
    badge: string;
    title: string;
    subtitle: string;
    learnMore: string;
    modalWhatItIs: string;
    modalWhatItCanDo: string;
    modalHowItHelps: string;
    modalQuestion: string;
    modalSub: string;
    modalBuildBtn: string;
  };
  impactSection: {
    badge: string;
    title: string;
    subtitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
    p5Title: string;
    p5Desc: string;
  };
  footer: {
    studioDesc: string;
    protechDesc: string;
    studioHeading: string;
    protechHeading: string;
    ecosystemTitleStudio: string;
    ecosystemTitleProtech: string;
    ecosystemSubStudio: string;
    ecosystemSubProtech: string;
    poweredBy: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  en: {
    nav: {
      home: 'Home',
      locations: 'Locations',
      protech: 'ProTech',
      about: 'About',
      contact: 'Contact',
      backToStudio: '← Back to Studio',
      products: 'Products & Solutions',
      impact: 'Business Impact',
      switchProtech: 'Switch to ProTech',
      switchStudio: 'Return to Studio',
      exploreSpaces: 'Explore Spaces',
      startProject: 'Start a Project',
    },
    heroStudio: {
      trustBadge: 'Over 22 Years of Experience in the Industry',
      titleMain: 'ProMedia ',
      titleRed: 'Studio',
      subtitle: 'Premium spaces built for creators, brands, productions, and ideas.',
      ctaLocations: 'Explore Locations',
      ctaProtech: 'Explore ProTech',
    },
    locationsSection: {
      badge: 'Studio Spaces',
      title: 'Explore Our Locations',
      subtitle: 'Immersive, acoustic, and high-key creative spaces engineered for film productions, commercials, broadcasts, and digital media.',
      filterAll: 'All',
      exploreSpace: 'Explore Space',
      photosCount: 'Photos',
    },
    aboutSection: {
      badge: 'Heritage & Excellence',
      title: 'Over 22 Years of Industry Craftsmanship',
      subtitle: 'ProMedia Studio provides precision-built environments tailored for creators, directors, commercial brands, and enterprise broadcast teams who demand absolute visual and acoustic control.',
      f1Title: 'Scalable Stage Geometry',
      f1Desc: 'From intimate podcast sets to high-bay vehicle soundstages, our modular layouts accommodate everything from commercial photography to multi-camera TV productions.',
      f2Title: 'Precision Acoustic Engineering',
      f2Desc: 'Soundproofed isolation walls, floating floors, and NC-20 broadcast ratings ensure flawless dialog recording without external environmental interference.',
      f3Title: 'ProTech Integration Ecosystem',
      f3Desc: 'Seamlessly connected with ProTech technology solutions — supporting cloud asset management, live streaming automation, custom software, and digital tools.',
    },
    contactSection: {
      badge: 'Get In Touch',
      title: 'Ready to Start Your Production or Project?',
      subtitle: 'Send your project inquiry directly to our team via WhatsApp for immediate support and customized scheduling.',
      f1Title: 'Flexible Scheduling & Booking',
      f1Desc: 'Daily, weekly, or custom project-based studio rentals and technical builds.',
      f2Title: 'Dedicated Management Support',
      f2Desc: 'Direct support for stage setups, technical builds, and custom business integrations.',
      formTitle: 'Submit an Inquiry via WhatsApp',
      experienceLabel: 'Interested Experience / Brand',
      optStudio: 'ProMedia Studio (Spaces & Media)',
      optProtech: 'ProTech (Software, Systems & AI)',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. Sarah Jenkins',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 000-0000',
      emailLabel: 'Email Address',
      emailPlaceholder: 'sarah@production.com',
      itemLabelStudio: 'Selected Studio Location',
      itemLabelProtech: 'Selected Product or Service',
      itemPlaceholderStudio: 'e.g. Location 01',
      itemPlaceholderProtech: 'e.g. AI Agents, Custom CRM...',
      detailsLabelStudio: 'Production Scope & Dates',
      detailsLabelProtech: 'Project Requirements & Business Goals',
      detailsPlaceholderStudio: 'Describe your shoot scope, dates, or technical needs...',
      detailsPlaceholderProtech: 'Outline what product or system you want to build and your business objectives...',
      submitBtnWhatsApp: 'Send Inquiry via WhatsApp',
      successTitle: 'Opening WhatsApp...',
      successDesc: 'Your structured message is ready. Click below if WhatsApp did not open automatically.',
    },
    heroProTech: {
      badge: 'Digital Products & AI Ecosystem',
      title: 'Technology That Moves Business Forward.',
      subtitle: 'We build digital products, smart systems, automation, and AI-powered solutions designed around real business needs.',
      ctaProducts: 'Explore Products & Solutions',
      ctaStudio: '← Back to ProMedia Studio',
    },
    productsSection: {
      badge: 'Solutions Catalog',
      title: 'Our Products & Solutions',
      subtitle: 'Powerful digital products and AI-driven solutions built to help businesses grow, automate operations, and scale with clarity.',
      learnMore: 'Learn more',
      modalWhatItIs: 'WHAT IT IS',
      modalWhatItCanDo: 'WHAT IT CAN DO',
      modalHowItHelps: 'HOW IT HELPS THE BUSINESS',
      modalQuestion: 'Interested in this solution?',
      modalSub: 'Our ProTech team will design a solution tailored to your operational requirements.',
      modalBuildBtn: 'Build This Solution',
    },
    impactSection: {
      badge: 'Value & Impact',
      title: 'Real Business Impact Through Purposeful Technology',
      subtitle: 'We design software, digital platforms, and AI integrations engineered around tangible operational outcomes rather than empty industry trends.',
      p1Title: 'Increase Opportunities',
      p1Desc: 'Better websites, digital products, business systems, and customer experiences can help businesses attract more potential clients and create more conversion opportunities.',
      p2Title: 'Save Time & Labor',
      p2Desc: 'Custom automation, intelligent AI agents, and streamlined workflows can significantly reduce repetitive manual processes and eliminate data entry bottlenecks.',
      p3Title: 'Improve Customer Experience',
      p3Desc: 'Responsive mobile applications, smart conversational bots, and streamlined client portals create smoother, faster, and more engaging customer interactions.',
      p4Title: 'Operate Smarter & Clearer',
      p4Desc: 'Centralized business systems, real-time analytics dashboards, and integrated tools provide actionable visibility into daily team performance and key operations.',
      p5Title: 'Scale More Efficiently',
      p5Desc: 'Scalable backend infrastructure and custom digital platforms help businesses build stronger foundations for sustainable, long-term expansion.',
    },
    footer: {
      studioDesc: 'Premium studios built for creators, brands, productions, and ideas. Scalable spaces engineered for uncompromising visual excellence.',
      protechDesc: 'Technology that drives business forward. Digital products, smart automation, AI solutions, and business software engineered around real needs.',
      studioHeading: 'ProMedia Studio',
      protechHeading: 'ProTech Solutions',
      ecosystemTitleStudio: 'Need Technology & AI?',
      ecosystemTitleProtech: 'Need Studio Spaces?',
      ecosystemSubStudio: 'Explore ProTech digital products, custom software, business systems, and AI workflows.',
      ecosystemSubProtech: 'Discover ProMedia Studio premium visual spaces built for production and creators.',
      poweredBy: 'Powered by',
      rights: '© 2026 ProMedia. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      locations: 'المواقع والاستديوهات',
      protech: 'برو تك (ProTech)',
      about: 'عن الاستديو',
      contact: 'التواصل والحجز',
      backToStudio: '← العودة إلى استديو برو ميديا',
      products: 'المنتجات والحلول',
      impact: 'أثر التكنولوجيا',
      switchProtech: 'الانتقال إلى برو تك',
      switchStudio: 'العودة إلى الاستديو',
      exploreSpaces: 'استكشاف المساحات',
      startProject: 'بدء مشروع',
    },
    heroStudio: {
      trustBadge: 'أكثر من 22 عاماً من الخبرة والتميز في القطاع',
      titleMain: 'برو ميديا ',
      titleRed: 'استديو',
      subtitle: 'مساحات فاخرة مصممة خصيصاً لصناع المحتوى، العلامات التجارية، والإنتاجات الإبداعية.',
      ctaLocations: 'استكشاف المواقع',
      ctaProtech: 'استكشاف برو تك',
    },
    locationsSection: {
      badge: 'مساحات الاستديو',
      title: 'استكشف استديوهاتنا ومواقعنا',
      subtitle: 'مساحات غامرة ومعزولة صوتياً ومجهزة بأحدث تقنيات الإضاءة والتصوير المخصصة للأفلام، الإعلانات، والبرامج.',
      filterAll: 'الكل',
      exploreSpace: 'استكشاف الاستديو',
      photosCount: 'صور',
    },
    aboutSection: {
      badge: 'العراقة والتميز',
      title: 'أكثر من 22 عاماً من الإتقان والخبرة',
      subtitle: 'يوفر برو ميديا استديو بيئات إنتاجية فائقة الدقة مصممة خصيصاً للمخرجين، صناع المحتوى، والعلامات التجارية التي تتطلب أعلى مستويات التحكم الصوتي والتحكم البصري.',
      f1Title: 'مساحات وهندسة مرنة',
      f1Desc: 'من استديوهات البودكاست المريحة إلى مساحات تصوير السيارات الضخمة، تتكيف مساحاتنا مع كافة متطلبات التصوير الفوتوغرافي والإنتاج التلفزيوني.',
      f2Title: 'عزل صوتي وهندسة أكوستيك متقدمة',
      f2Desc: 'جدران معزولة صوتياً وأرضيات عائمة مع تقييم NC-20 المعتمد للبث الحي تضمن تسجيلاً صوتياً نقياً بدون أي ضوضاء خارجية.',
      f3Title: 'منظومة متكاملة مع برو تك',
      f3Desc: 'ربط سلس مع حلول برو تك التكنولوجية لدعم إدارة الأصول السحابية، أتمتة البث المباشر، والحلول البرمجية المخصصة.',
    },
    contactSection: {
      badge: 'تواصل معنا',
      title: 'جاهز لبدء إنتاجك أو مشروعك الرقمي؟',
      subtitle: 'أرسل تفاصيل مشروعك مباشرة إلى فريقنا عبر واتساب للحصول على استجابة فورية وترتيب المواعيد.',
      f1Title: 'حجز ومواعيد مرنة',
      f1Desc: 'تأجير يومي، أسبوعي، أو مخصص حسب متطلبات الإنتاج والتنفيذ.',
      f2Title: 'دعم وإشراف فني متخصص',
      f2Desc: 'مساعدة مباشرة في تجهيز الإضاءة، التمديدات الكهربائية، والتجهيزات التكنولوجية.',
      formTitle: 'إرسال طلب عبر الواتساب',
      experienceLabel: 'الخدمة / العلامة التجارية المطلوبة',
      optStudio: 'برو ميديا استديو (مساحات وإنتاج مرئي)',
      optProtech: 'برو تك (برمجيات، أنظمة وذكاء اصطناعي)',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'مثال: محمد أحمد',
      phoneLabel: 'رقم الهاتف / الواتساب',
      phonePlaceholder: '+966 50 000 0000',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'name@company.com',
      itemLabelStudio: 'استديو / موقع التصوير المحدد',
      itemLabelProtech: 'المنتج أو الخدمة المحددة',
      itemPlaceholderStudio: 'مثال: موقع 01',
      itemPlaceholderProtech: 'مثال: وكلاء الذكاء الاصطناعي، نظام CRM...',
      detailsLabelStudio: 'نطاق الإنتاج والمواعيد المقترحة',
      detailsLabelProtech: 'متطلبات المشروع والأهداف التجارية',
      detailsPlaceholderStudio: 'اشرح نطاق التصوير، التواريخ، أو المتطلبات الفنية...',
      detailsPlaceholderProtech: 'اكتب تفاصيل النظام أو المنتج الذي ترغب في بنائه وأهدافك...',
      submitBtnWhatsApp: 'إرسال الطلب عبر الواتساب',
      successTitle: 'جاري فتح الواتساب...',
      successDesc: 'تم تجهيز نص الرسالة المنظم. انقر أدناه إذا لم يتم فتح الواتساب تلقائياً.',
    },
    heroProTech: {
      badge: 'المنتجات الرقمية والذكاء الاصطناعي',
      title: 'التكنولوجيا التي تدفع أعمالك إلى الأمام.',
      subtitle: 'نبني منتجات رقمية، أنظمة ذكية، أتمتة، وحلول ذكاء اصطناعي مصممة خصيصاً لترلبية احتياجات الأعمال الحقيقية.',
      ctaProducts: 'استكشاف المنتجات والحلول',
      ctaStudio: '← العودة إلى برو ميديا استديو',
    },
    productsSection: {
      badge: 'كتالوج الحلول',
      title: 'منتجاتنا وحلولنا التكنولوجية',
      subtitle: 'منتجات رقمية قوية وحلول مدعومة بالذكاء الاصطناعي تم بناؤها لمساعدة الشركات على النمو، أتمتة العمليات، والتوسع بوضوح.',
      learnMore: 'معرفة المزيد',
      modalWhatItIs: 'ما هو هذا المنتج؟',
      modalWhatItCanDo: 'ما الذي يمكنه فعله؟',
      modalHowItHelps: 'كيف يساعد أعمالك وتجارتك؟',
      modalQuestion: 'هل ترغب في بناء هذا الحل؟',
      modalSub: 'سيقوم فريق برو تك بتصميم وتطوير الحل المناسب لاحتياجاتك التشغيلية.',
      modalBuildBtn: 'بناء هذا الحل الآن',
    },
    impactSection: {
      badge: 'القيمة والأثر',
      title: 'أثر تجاري حقيقي عبر تكنولوجيا هادفة',
      subtitle: 'نقوم بتصميم البرمجيات، المنصات الرقمية، وتطبيقات الذكاء الاصطناعي المبنية على نتائج تشغيلية ملموسة بدلاً من المظاهر الزائفة.',
      p1Title: 'زيادة الفرص والمبيعات',
      p1Desc: 'المواقع والتطبيقات والأنظمة المتميزة تساعد الشركات على جذب المزيد من العملاء المحتملين وخلق فرص تحويل أكبر.',
      p2Title: 'توفير الوقت والجهد',
      p2Desc: 'الأتمتة المخصصة ووكلاء الذكاء الاصطناعي يقللون من المهام اليدوية المكررة ويلغون اختناقات إدخال البيانات.',
      p3Title: 'تحسين تجربة العملاء',
      p3Desc: 'تطبيقات الجوال السريعة وروبوتات المحادثة الذكية توفر تفاعلات أسرع وأكثر سلاسة مع العملاء.',
      p4Title: 'إدارة أذكى ورؤية أوضح',
      p4Desc: 'الأنظمة المركزية لوحات التحليلات تمنح الإدارة رؤية دقيقة ولحظية لأداء الفريق والعمليات اليومية.',
      p5Title: 'التوسع بكفاءة أعلى',
      p5Desc: 'البنية التحتية السحابية القابلة للتطوير تساعد الشركات على بناء أساس قوي للتوسع المستدام طويل الأجل.',
    },
    footer: {
      studioDesc: 'استديوهات فاخرة مصممة لصناع المحتوى، العلامات التجارية، والإنتاجات الإبداعية. مساحات مجهزة لأعلى درجات الجودة البصرية.',
      protechDesc: 'تكنولوجيا تدفع الأعمال للنمو. منتجات رقمية، أتمتة ذكية، حلول ذكاء اصطناعي، وبرمجيات مخصصة حول الاحتياجات الحقيقية.',
      studioHeading: 'برو ميديا استديو',
      protechHeading: 'حلول برو تك',
      ecosystemTitleStudio: 'تحتاج إلى تكنولوجيا وذكاء اصطناعي؟',
      ecosystemTitleProtech: 'تحتاج إلى مساحات استديو وتصوير؟',
      ecosystemSubStudio: 'استكشف منتجات برو تك الرقمية، البرمجيات المخصصة، أنظمة الأعمال، وسير عمل الذكاء الاصطناعي.',
      ecosystemSubProtech: 'اكتشف مساحات برو ميديا استديو الفاخرة المصممة للإنتاج المرئي وصناع المحتوى.',
      poweredBy: 'بواسطة',
      rights: '© 2026 برو ميديا. جميع الحقوق محفوظة.',
    },
  },
};
