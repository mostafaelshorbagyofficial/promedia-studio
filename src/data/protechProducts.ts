import type { ProTechProduct } from '../types';

export const protechProducts: ProTechProduct[] = [
  {
    id: 'websites',
    title: 'WEBSITES',
    titleAr: 'المواقع الإلكترونية',
    icon: 'Globe',
    category: 'core',
    shortDesc: 'High-performance websites designed around your brand, business, and conversion goals.',
    shortDescAr: 'مواقع إلكترونية عالية الأداء مصممة خصيصاً لتعزيز علامتك التجارية وتحقيق أهداف عملك.',
    whatItIs: 'High-performance websites designed around your brand, business, and strategic goals.',
    whatItIsAr: 'مواقع إلكترونية متطورة فائقة السرعة والأداء يتم تصميمها حول علامتك التجارية وأهدافك التجارية.',
    whatItCanDo: [
      'Present your business professionally across all devices',
      'Build long-term brand trust and credibility',
      'Showcase key products, portfolios, or enterprise services',
      'Generate high-intent leads via modern customer pathways',
      'Support direct online sales and customer inquiries',
      'Create a smoother, frictionless customer journey'
    ],
    whatItCanDoAr: [
      'تقديم عملك بشكل احترافي ومتوافق مع جميع الشاشات والأجهزة',
      'بناء الثقة والمصداقية طويلة الأجل لعلامتك التجارية',
      'عرض المنتجات والخدمات الرئيسية بطريقة مميزة',
      'جذب العملاء المحتملين عبر مسارات مخصصة للتحويل',
      'دعم المبيعات المباشرة واستفسارات العملاء الإلكترونية',
      'توفير رحلة مستخدم سلسة وخالية من التعقيد'
    ],
    businessValue: 'A better digital presence can help attract more potential customers and create more opportunities for conversion and sales.',
    businessValueAr: 'الوجود الرقمي المتميز يساعد على جذب المزيد من العملاء المحتملين وخلق فرص أكبر للمبيعات والتحويل.'
  },
  {
    id: 'ecommerce',
    title: 'E-COMMERCE SOLUTIONS',
    titleAr: 'حلول التجارة الإلكترونية',
    icon: 'ShoppingCart',
    category: 'core',
    shortDesc: 'Digital stores and commerce experiences designed to help businesses sell products online.',
    shortDescAr: 'متاجر رقمية وتجارب تسوق متكاملة مصممة لمساعدة الشركات على بيع منتجاتها عبر الإنترنت.',
    whatItIs: 'Digital stores and commerce experiences designed to help businesses sell online with security and speed.',
    whatItIsAr: 'متاجر رقمية متكاملة وتجارب شراء سلسة تتيح للشركات بيع المنتجات والخدمات أونلاين بأمان وسرعة.',
    whatItCanDo: [
      'Display products in high-impact responsive galleries',
      'Organize seamless online purchasing workflows',
      'Improve the overall customer shopping experience',
      'Support global digital payments, currencies, and sales workflows'
    ],
    whatItCanDoAr: [
      'عرض المنتجات في معارض تفاعلية جذابة وسريعة التحميل',
      'تنظيم مسارات الشراء والدفع بأسلوب ميسر للعميل',
      'تحسين تجربة التسوق الرقمية وزيادة معدل إكمال الطلبات',
      'دعم بوابات الدفع الإلكتروني، العملات المتعددة، وإدارة المبيعات'
    ],
    businessValue: 'Makes it easier for customers to discover and purchase products online, creating more sales opportunities.',
    businessValueAr: 'تسهل على العملاء اكتشاف وشراء المنتجات عبر الإنترنت مما يخلق فرص مبيعات مستمرة.'
  },
  {
    id: 'automation',
    title: 'AUTOMATION',
    titleAr: 'الأتمتة وسير العمل',
    icon: 'Zap',
    category: 'ai',
    shortDesc: 'Automated workflows that connect repetitive processes and reduce unnecessary manual work.',
    shortDescAr: 'مسارات عمل مؤتمتة تربط الإجراءات المكررة وتقلل من المهام اليدوية غير الضرورية.',
    whatItIs: 'Automated workflows that connect repetitive business processes and eliminate manual bottlenecks.',
    whatItIsAr: 'أنظمة أتمتة تربط العمليات التجارية المكررة وتلغي الإجراءات اليدوية البطيئة.',
    whatItCanDo: [
      'Automate repetitive operational and administrative tasks',
      'Connect separate software tools and internal systems',
      'Trigger instant real-time actions and alerts',
      'Organize multi-step cross-departmental workflows',
      'Reduce unnecessary manual data entry and human error'
    ],
    whatItCanDoAr: [
      'أتمتة المهام الإدارية والتشغيلية اليدوية المكررة',
      'ربط التطبيقات والأدوات والأنظمة البرمجية المختلفة معاً',
      'إرسال تنبيهات وتأدية إجراءات فورية بناءً على أحداث معينة',
      'تنظيم سير العمل متعدد الخطوات بين الأقسام المختلفة',
      'تقليل الأخطاء البشرية وإلغاء إدخال البيانات المكرر'
    ],
    businessValue: 'Helps save time, improve operational efficiency, and allow teams to focus on more important strategic work.',
    businessValueAr: 'تساعد على توفير الوقت والجهد، تحسين الكفاءة التشغيلية، وتركييز فريق العمل على الأهداف الاستراتيجية.'
  },
  {
    id: 'ai-solutions',
    title: 'AI SOLUTIONS',
    titleAr: 'حلول الذكاء الاصطناعي',
    icon: 'Sparkles',
    category: 'ai',
    shortDesc: 'AI-powered tools and solutions engineered around specific business operational needs.',
    shortDescAr: 'أدوات وحلول ذكية مدعومة بالذكاء الاصطناعي تم تطويرها حول احتياجاتك التشغيلية.',
    whatItIs: 'AI-powered tools and custom models designed around specific business operational requirements.',
    whatItIsAr: 'تطبيقات ونماذج ذكاء اصطناعي مخصصة تُصمم لتلبية متطلبات تشغيلية وتحليلية دقيقة في عملك.',
    whatItCanDo: [
      'Process large volumes of business information quickly',
      'Support intelligent data-backed decision-making',
      'Automate complex analysis and document processing',
      'Improve existing digital product workflows',
      'Create smarter, personalized customer experiences'
    ],
    whatItCanDoAr: [
      'معالجة وتحليل كميات ضخمة من البيانات والمعلومات بسرعة',
      'دعم اتخاذ القرارات بناءً على تحليلات ذكية ودقيقة',
      'أتمتة تحليل المستندات والبيانات المعقدة',
      'تحسين مسارات العمل في المنتجات والتطبيقات الحالية',
      'تقديم تجارب مخصصة وذكية لكل عميل'
    ],
    businessValue: 'Can help businesses work more efficiently and create smarter ways of handling daily operations.',
    businessValueAr: 'تساعد الشركات على العمل بكفاءة أعلى وابتكار طرق أذكى لإدارة العمليات اليومية.'
  },
  {
    id: 'ai-agents',
    title: 'AI AGENTS',
    titleAr: 'وكلاء الذكاء الاصطناعي',
    icon: 'Bot',
    category: 'ai',
    shortDesc: 'Intelligent AI agents designed to execute specific tasks and multi-step business workflows.',
    shortDescAr: 'وكلاء ذكاء اصطناعي مستقلون لتنفيذ مهام محددة وسير عمل متعدد الخطوات.',
    whatItIs: 'Intelligent AI agents designed to perform specific operational tasks and multi-step business workflows.',
    whatItIsAr: 'وكلاء ذكاء اصطناعي برمجيون قادرون على تنفيذ مهام تشغيلية محددة وسير عمل معقد بشكل شبه مستقل.',
    whatItCanDo: [
      'Handle defined business tasks autonomously',
      'Assist teams with information retrieval and document analysis',
      'Respond dynamically based on custom business instructions',
      'Automate specialized operational processes',
      'Support customer service and internal operations 24/7'
    ],
    whatItCanDoAr: [
      'تنفيذ المهام المحددة في العمل باستقلالية عالية',
      'مساعدة فريق العمل في البحث وتحليل المستندات والبيانات',
      'الاستجابة الديناميكية وفقاً لتعليمات وقواعد عملك',
      'أتمتة إجراءات تشغيلية متخصصة ومحددة',
      'دعم خدمات العملاء والعمليات الداخلية على مدار 24 ساعة'
    ],
    businessValue: 'Can reduce repetitive work and create more scalable ways of handling business operations.',
    businessValueAr: 'تقلل من الأعمال المكررة وتخلق طرقاً قابلة للتوسع لإدارة عمليات الشركة.'
  },
  {
    id: 'ai-chatbots',
    title: 'AI CHATBOTS',
    titleAr: 'روبوتات المحادثة الذكية',
    icon: 'MessageSquareText',
    category: 'ai',
    shortDesc: 'Smart conversational systems designed to communicate with visitors and handle inquiries.',
    shortDescAr: 'أنظمة محادثة تفاعلية ذكية للتواصل مع زوار الموقع والرد على الاستفسارات فورياً.',
    whatItIs: 'Smart conversational systems designed to communicate effectively with website visitors and clients.',
    whatItIsAr: 'أنظمة محادثة تفاعلية مجهزة بالذكاء الاصطناعي للتواصل الفعال مع العملاء وزوار الموقع.',
    whatItCanDo: [
      'Answer common customer questions instantly',
      'Engage website visitors proactively',
      'Capture and qualify potential sales leads',
      'Support 24/7 customer communication',
      'Improve overall response speed and user satisfaction'
    ],
    whatItCanDoAr: [
      'الإجابة الفورية على الأسئلة الشائعة للعملاء',
      'التفاعل مع زوار الموقع ومساعدتهم فور دخولهم',
      'جمع بيانات العملاء المهتمين وتأهيلهم للفريق',
      'تقديم الدعم والتواصل 24/7 على مدار اليوم',
      'تحسين سرعة الاستجابة ورفع مستوى رضا العملاء'
    ],
    businessValue: 'Can improve customer experience and help businesses respond to more potential customers efficiently.',
    businessValueAr: 'تحسن من تجربة العميل وتساعد الشركة على الرد على عدد أكبر من الاستفسارات بكفاءة.'
  },
  {
    id: 'saas-products',
    title: 'SAAS PRODUCTS',
    titleAr: 'المنصات السحابية (SaaS)',
    icon: 'Cloud',
    category: 'systems',
    shortDesc: 'Scalable cloud-based software products designed around modern business needs.',
    shortDescAr: 'منتجات برمجية سحابية قابلة للتوسع مصممة حول متطلبات الأعمال الحديثة.',
    whatItIs: 'Scalable cloud-based software products designed around specific market and enterprise needs.',
    whatItIsAr: 'أنظمة ومنصات برمجية تعمل عبر السحابة وتخدم قطاعات ومجالات أعمال محددة بنموذج الاشتراكات.',
    whatItCanDo: [
      'Provide accessible digital tools over the web',
      'Support multi-tenant and multi-user organizations',
      'Centralize team workflows in one digital hub',
      'Scale smoothly as user base and workload grows'
    ],
    whatItCanDoAr: [
      'توفير أدوات برمجية مريحة عبر الويب بدون الحاجة لتثبيت برامج',
      'دعم عدة مستخدمين وشركات متعددة الصلاحيات (Multi-tenant)',
      'تجميع أدوات وسير عمل الفريق في منصة واحدة',
      'التوسع السلس مع زيادة أعداد المستخدمين وحجم البيانات'
    ],
    businessValue: 'Creates opportunities for businesses to use scalable digital products without relying on traditional manual processes.',
    businessValueAr: 'تتيح التوسع وتقديم أدوات رقمية سحابية للمستخدمين والشركات دون الاعتماد على العمل اليدوي التقليدي.'
  },
  {
    id: 'business-systems',
    title: 'BUSINESS SYSTEMS',
    titleAr: 'أنظمة الأعمال البرمجية',
    icon: 'Briefcase',
    category: 'systems',
    shortDesc: 'Custom digital systems built to organize, streamline, and scale business operations.',
    shortDescAr: 'أنظمة رقمية مخصصة لتنظيم العمليات وتسهيل إدارة الشركة وتوسعها.',
    whatItIs: 'Custom digital systems designed to organize and improve core business operations.',
    whatItIsAr: 'أنظمة رقمية متكاملة تُصمم خصيصاً لإدارة وتنظيم العمليات الأساسية داخل المنشأة.',
    whatItCanDo: [
      'Centralize essential company information',
      'Organize daily operational workflows',
      'Manage end-to-end business processes',
      'Connect different departments and operational hubs'
    ],
    whatItCanDoAr: [
      'مركزية معلومات وبيانات الشركة الأساسية في مكان آمن',
      'تنظيم وإدارة مسارات العمل التشغيلية اليومية',
      'إدارة العمليات من البداية وحتى النهاية',
      'ربط الفروع والأقسام المختلفة بنظام واحد متكامل'
    ],
    businessValue: 'Helps businesses operate with more structure, visibility, and long-term efficiency.',
    businessValueAr: 'تمنح الشركة هيكلية منظمة، رؤية واضحة للعمليات، وكفاءة أطول مدى.'
  },
  {
    id: 'management-systems',
    title: 'MANAGEMENT SYSTEMS',
    titleAr: 'أنظمة الإدارة والتشغيل',
    icon: 'Kanban',
    category: 'systems',
    shortDesc: 'Digital systems designed to manage teams, tasks, operations, and internal processes.',
    shortDescAr: 'أنظمة رقمية لمتابعة فرق العمل، المهام، المشاريع، والعمليات الداخلية.',
    whatItIs: 'Digital systems engineered to manage teams, tasks, operational projects, and internal resources.',
    whatItIsAr: 'أنظمة برمجية مخصصة لإدارة الفرق، توزيع المهام، متابعة المشاريع، والموارد الداخلية.',
    whatItCanDo: [
      'Organize project deliverables and timelines',
      'Track task completion and staff accountability',
      'Manage cross-functional teams smoothly',
      'Monitor ongoing operational status',
      'Improve internal communication and transparency'
    ],
    whatItCanDoAr: [
      'تنظيم وتسليم المشاريع وضبط المواعيد والجدولة',
      'متابعة إنجاز المهام ومسؤوليات الموظفين',
      'إدارة الفرق المتعددة التخصصات بسهولة',
      'مراقبة حالة التشغيل والمشاريع الحالية لحظياً',
      'رفع مستويات التواصل والشفافية الداخلية'
    ],
    businessValue: 'Helps create clearer processes and makes daily operations significantly easier to manage.',
    businessValueAr: 'تساهم في وضع إجراءات واضحة وتجعل إدارة التشغيل اليومي أكثر سهولة وسلاسة.'
  },
  {
    id: 'crm-systems',
    title: 'CRM SYSTEMS',
    titleAr: 'أنظمة إدارة العملاء (CRM)',
    icon: 'Users',
    category: 'systems',
    shortDesc: 'Customer and lead management systems built to track relationships and boost sales.',
    shortDescAr: 'أنظمة إدارة علاقات العملاء ومتابعة الصفقات والمبيعات من مكان واحد.',
    whatItIs: 'Customer and lead management systems designed to streamline sales pipelines.',
    whatItIsAr: 'أنظمة مخصصة لإدارة العلاقات مع العملاء وتتبع صفقات المبيعات ومراحل التواصل.',
    whatItCanDo: [
      'Organize and centralize customer contact history',
      'Track lead progress through visual sales pipelines',
      'Improve team follow-up speed and consistency',
      'Manage ongoing customer relationships effectively',
      'Support structured sales workflows and deal tracking'
    ],
    whatItCanDoAr: [
      'تنظيم سجلات وتواصل العملاء في قاعدة بيانات واحدة',
      'تتبع الصفقات والعملاء المهتمين عبر مسار مبيعات مرئي',
      'تسريع وتيرة المتابعة والرد لدى فريق المبيعات',
      'إدارة العلاقات مع العملاء الحاليين والمستقبليين',
      'استخراج تقارير الأداء وتوقعات المبيعات'
    ],
    businessValue: 'Better organization and follow-up can help businesses avoid losing potential revenue opportunities.',
    businessValueAr: 'التنظيم الدقيق والمتابعة السريعة يساعدان الشركة على تجنب ضياع الصفقات والفرص.'
  },
  {
    id: 'custom-software',
    title: 'CUSTOM SOFTWARE',
    icon: 'Code2',
    category: 'systems',
    shortDesc: 'Tailor-made software solutions engineered specifically around unique business needs.',
    shortDescAr: 'برمجيات مخصصة ومبنية من الصفر وفقاً لمتطلبات عملك الفريدة.',
    whatItIs: 'Software built specifically around a business’s unique operational requirements and goals.',
    whatItIsAr: 'برامج وتطبيقات تُصمم وتبنى خصيصاً لتلبية متطلبات فريدة لا تلبيها البرامج الجاهزة.',
    whatItCanDo: [
      'Solve specific complex operational problems',
      'Replace outdated or inefficient legacy processes',
      'Create specialized proprietary workflows',
      'Support unique, innovative business models'
    ],
    whatItCanDoAr: [
      'حل المشكلات التشغيلية المعقدة والخاصة بنشاطك',
      'استبدال البرامج والعمليات القديمة غير الفعالة',
      'بناء مسارات عمل ملكية خاصة بمنشأتك',
      'دعم نماذج أعمال جديدة ومبتكرة في السوق'
    ],
    businessValue: 'Creates a solution designed around the business instead of forcing the business to adapt to generic software.',
    businessValueAr: 'تمنحك حلاً مصمماً خصيصاً حول عملك بدلاً من إجبار شركتك على التأقلم مع برامج جاهزة قاصرة.'
  },
  {
    id: 'mobile-apps',
    title: 'MOBILE APPS',
    titleAr: 'تطبيقات الجوال (Apps)',
    icon: 'Smartphone',
    category: 'apps',
    shortDesc: 'Native custom mobile applications designed for seamless iOS and Android experiences.',
    shortDescAr: 'تطبيقات جوال مخصصة وعالية الأداء لنظامي iOS و Android.',
    whatItIs: 'Custom mobile applications designed for high performance on Android and iOS devices.',
    whatItIsAr: 'تطبيقات هواتف ذكية مخصصة تتميز بالسلاسة والسرعة على أجهزة آيفون وأندرويد.',
    whatItCanDo: [
      'Create direct engaging customer experiences',
      'Provide instant mobile access to services and products',
      'Support field teams with offline-first mobile tools',
      'Build subscription or product-based app experiences'
    ],
    whatItCanDoAr: [
      'بناء قناة تواصل وتفاعل مباشرة مع العميل',
      'توفير الوصول الفوري للمنتجات والخدمات عبر الهواتف',
      'دعم فرق العمل الميدانية بأدوات تعمل حتى بدون إنترنت',
      'تطوير تطبيقات المنتجات الرقمية والاشتراكات'
    ],
    businessValue: 'Makes services and products more accessible through the devices people use every day.',
    businessValueAr: 'تجعل خدماتك ومنتجاتك أقرب وأسهل في الوصول من خلال الهواتف التي يستخدمها العملاء يومياً.'
  },
  {
    id: 'desktop-apps',
    title: 'DESKTOP APPS',
    titleAr: 'تطبيقات سطح المكتب',
    icon: 'Monitor',
    category: 'apps',
    shortDesc: 'Dedicated desktop applications built for high-performance specialized business tools.',
    shortDescAr: 'تطبيقات سطح مكتب متخصصة مخصصة للأعمال والأجهزة ذات الأداء العالي.',
    whatItIs: 'Dedicated desktop applications for specialized business and operational needs.',
    whatItIsAr: 'برامج تعمل مباشرة على أنظمة ويندوز وماك لتلبية احتياجات احترافية ومعالجة بيانات ثقيلة.',
    whatItCanDo: [
      'Support complex processing and heavy offline workflows',
      'Provide focused internal tools for desktop workstations',
      'Handle specialized hardware and local system processes',
      'Create professional desktop business software'
    ],
    whatItCanDoAr: [
      'دعم المعالجة المعقدة والعمل دون الاتصال بالإنترنت',
      'توفير أدوات مخصصة لمحطات العمل وأجهزة الشركة',
      'الربط مع الأجهزة والمعدات المحلية الملحقة',
      'بناء برمجيات احترافية ذات اعتمادية عالية'
    ],
    businessValue: 'Can improve productivity and provide a tailored environment for specific hardware or office operations.',
    businessValueAr: 'ترفع الكفاءة وتوفر بيئة عمل مخصصة للمعدات والأجهزة المكتبية المعقدة.'
  },
  {
    id: 'integrations',
    title: 'INTEGRATIONS',
    titleAr: 'الربط والتكامل البرمجي',
    icon: 'Network',
    category: 'infra',
    shortDesc: 'Seamlessly connecting separate platforms, tools, databases, and APIs together.',
    shortDescAr: 'ربط المنصات والأنظمة وقواعد البيانات المختلفة لتنسيق البيانات تلقائياً.',
    whatItIs: 'Connecting different software platforms, systems, APIs, and tools together into one connected ecosystem.',
    whatItIsAr: 'ربط الأنظمة والتطبيقات والخدمات السحابية المختلفة عبر واجهات برمجة التطبيقات (APIs).',
    whatItCanDo: [
      'Synchronize data in real-time across platforms',
      'Reduce duplicate manual entry across departments',
      'Connect fragmented digital tools into fluid workflows',
      'Automate secure communication between third-party systems'
    ],
    whatItCanDoAr: [
      'مزامنة البيانات بين الأنظمة المختلفة في الوقت الفعلي',
      'تقليل الإدخال اليدوي المكرر بين الأقسام',
      'ربط الأدوات المتفرقة في بيئة عمل موحدة وسلسة',
      'توفير اتصال آمن ومؤتمت بين البرامج والأنظمة'
    ],
    businessValue: 'Helps businesses create smoother operations and reduce unnecessary manual movement of information.',
    businessValueAr: 'تساعد الشركة على إنشاء عمليات سلسة وتقليل التنقل اليدوي للمعلومات بين الأنظمة.'
  },
  {
    id: 'dashboards-analytics',
    title: 'DASHBOARDS & ANALYTICS',
    titleAr: 'لوحات التحكم والتحليلات',
    icon: 'BarChart3',
    category: 'infra',
    shortDesc: 'Clear visual dashboards organizing key performance metrics and business data.',
    shortDescAr: 'لوحات تحكم تفاعلية توضح مؤشرات الأداء والبيانات التشغيلية بوضوح.',
    whatItIs: 'Digital dashboards designed to organize and visualize critical business information.',
    whatItIsAr: 'لوحات عرض رقمية تهدف إلى تنظيم وتجسيد البيانات الحيوية ومؤشرات الأداء للشركة.',
    whatItCanDo: [
      'Display key performance indicators (KPIs) clearly',
      'Monitor real-time operational activity',
      'Organize complex raw data into actionable insights',
      'Support faster, better-informed business decision-making'
    ],
    whatItCanDoAr: [
      'عرض مؤشرات الأداء الرئيسية (KPIs) بشكل مرئي واضح',
      'مراقبة الأنشطة التشغيلية والمبيعات في الوقت الفعلي',
      'تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ',
      'دعم اتخاذ القرارات بناءً على أرقام وحقائق موثوقة'
    ],
    businessValue: 'Clearer information can help teams understand performance and make more informed strategic decisions.',
    businessValueAr: 'الوضوح الأكبر في البيانات يساعد الإدارة على فهم الأداء واتخاذ قرارات استراتيجية أسرع وأدق.'
  },
  {
    id: 'internal-tools',
    title: 'INTERNAL TOOLS',
    icon: 'Wrench',
    category: 'infra',
    shortDesc: 'Custom internal tools designed specifically to empower staff and streamline tasks.',
    shortDescAr: 'أدوات برمجية داخلية مخصصة لتمكين فريق العمل وتسهيل المهام اليومية.',
    whatItIs: 'Custom software tools designed specifically for internal company teams and operations.',
    whatItIsAr: 'برمجيات وأدوات لوجستية تُبنى خصيصاً لاستخدام موظفي وفرق العمل داخل المنشأة.',
    whatItCanDo: [
      'Simplify complex internal administration',
      'Reduce repetitive manual employee tasks',
      'Organize internal documentation and assets',
      'Improve daily team workflow velocity'
    ],
    whatItCanDoAr: [
      'تبسيط الإجراءات الإدارية الداخلية المعقدة',
      'تقليل الأعمال اليدوية اليومية عن كاهل الموظفين',
      'تنظيم المجموعات والأصول والمستندات الداخلية',
      'تسريع سرعة تنفيذ وسير العمل الداخلي'
    ],
    businessValue: 'Helps teams work faster, reduce burnout, and focus on higher-value core tasks.',
    businessValueAr: 'تساعد الموظفين على العمل بسرعة أعلى وتقليل الجهد المهدور والتركيز على المهام القيمة.'
  },
  {
    id: 'digital-platforms',
    title: 'DIGITAL PLATFORMS',
    titleAr: 'المنصات الرقمية الشاملة',
    icon: 'Layers',
    category: 'systems',
    shortDesc: 'Complete digital platforms built around specific market models, marketplaces, or services.',
    shortDescAr: 'منصات رقمية متكاملة تُبنى حول نماذج عمل مخصصة، أسواق إلكترونية، أو خدمات.',
    whatItIs: 'Complete digital platforms built around a specific product, service, marketplace, or workflow.',
    whatItIsAr: 'منصات رقمية معقدة وشاملة تُبنى لخدمة نموذج عمل محدد مثل المنصات الخدمية أو الأسواق الإلكترونية.',
    whatItCanDo: [
      'Connect buyers, sellers, or service providers seamlessly',
      'Manage multi-stage transactional processes',
      'Deliver digital services to end users scalable',
      'Support online marketplaces, communities, or SaaS platforms'
    ],
    whatItCanDoAr: [
      'ربط مقدمي الخدمات والعملاء في بيئة تفاعلية موحدة',
      'إدارة العمليات المالية والتشغيلية متعددة الأطراف',
      'تقديم الخدمات الرقمية للمستخدمين بنطاق واسع',
      'دعم المنصات التشاركية والأسواق والمجتمعات الرقمية'
    ],
    businessValue: 'Can create new digital revenue opportunities and scalable ways of delivering products or services.',
    businessValueAr: 'تخلق فرص عوائد رقمية جديدة وتوفر طرقاً قابلة للتوسع لتقديم الخدمات والمنتجات.'
  },
  {
    id: 'api-backend',
    title: 'API & BACKEND SOLUTIONS',
    titleAr: 'البنية التحتية والواجهات (API)',
    icon: 'Server',
    category: 'infra',
    shortDesc: 'Robust technical backend infrastructure powering web apps, mobile apps, and data systems.',
    shortDescAr: 'بنية تحتية برمجية آمنة وقوية لتغذية التطبيقات والمواقع بقواعد البيانات والأوامر.',
    whatItIs: 'The secure technical infrastructure behind modern websites, mobile apps, and systems.',
    whatItIsAr: 'البنية التحتية البرمجية والأنظمة الخلفية التي تدير البيانات والتطبيقات وتضمن استقرارها.',
    whatItCanDo: [
      'Power web and mobile application logic securely',
      'Manage database storage and query speed',
      'Connect disparate systems via REST & GraphQL APIs',
      'Support high-traffic scalable digital products',
      'Enable third-party developer integrations'
    ],
    whatItCanDoAr: [
      'تشغيل منطق وقواعد التطبيقات والمواقع بأمان وفاعلية',
      'إدارة قواعد البيانات وحفظ السرعة العالية في الاستعلامات',
      'توفير واجهات API معيارية للربط والتكامل (REST & GraphQL)',
      'تحمل الضغط العالي وعدد الزوار الكثيف في المنصات',
      'تمكين المطورين من التفاعل مع أنظمتك بأمان'
    ],
    businessValue: 'Creates a strong, reliable foundation for scalable and secure enterprise digital experiences.',
    businessValueAr: 'توفر أساساً برمجياً قوياً وموثوقاً لبناء تجارب رقمية آمنة وقابلة للنمو.'
  }
];
