import {
  Code2, Smartphone, Cloud, Container, Brain, Shield, Users, Zap, Lightbulb, Globe, Target, Eye, Heart, Award, Clock, HeartHandshake, Sparkles, Search, Rocket
} from "lucide-react";




export const services = [
  {
    icon: "Code2",
    title: "Full Stack Development", slug: "full-stack-development", num: "01", image: "assets/service-fullstack.jpg", featured: true,
    description: "Build robust, scalable web applications from frontend to backend with modern technology stacks.",
    longDescription: "We deliver end-to-end web applications using cutting-edge technologies like React, Node.js, TypeScript, and PostgreSQL. From responsive UI design to robust API architecture and database optimization, our full stack team handles every layer of your application. We follow best practices in code quality, testing, and security to ensure your product is production-ready and maintainable.",
    tags: ["React", "Node.js", "TypeScript", "APIs"],
    deliverables: ["Full application architecture design", "Frontend & backend development", "API design & integration", "Testing & deployment pipeline"],
    technologies: [
      { name: "React", category: "Frontend", featured: true, description: "Our go-to UI library for building interactive, component-driven interfaces with a massive ecosystem and battle-tested performance at scale." },
      { name: "Next.js", category: "Frontend", featured: true, description: "The React framework for production — SSR, static generation, API routes, and edge functions in one cohesive package." },
      { name: "TypeScript", category: "Language", featured: true, description: "Type-safe JavaScript that catches bugs at compile time, improves developer productivity, and makes large codebases maintainable." },
      { name: "Node.js", category: "Backend", featured: true, description: "High-performance JavaScript runtime for building fast, scalable server-side applications and APIs with a unified language stack." },
      { name: "Express", category: "Backend", description: "Minimalist, flexible Node.js framework for building RESTful APIs and middleware-driven server architectures." },
      { name: "PostgreSQL", category: "Database", featured: true, description: "Enterprise-grade relational database with advanced indexing, JSON support, and rock-solid reliability for mission-critical data." },
      { name: "MongoDB", category: "Database", description: "Document-oriented NoSQL database ideal for flexible schemas, rapid prototyping, and handling unstructured data at scale." },
      { name: "Redis", category: "Caching", description: "In-memory data store for blazing-fast caching, session management, and real-time features like pub/sub and queues." },
      { name: "GraphQL", category: "API", description: "Query language that lets clients request exactly the data they need — reducing over-fetching and enabling flexible frontend development." },
      { name: "REST", category: "API", description: "Industry-standard architectural style for building predictable, stateless APIs that integrate seamlessly with any client." },
      { name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML — consistent, fast, and highly maintainable." },
      { name: "Prisma", category: "ORM", description: "Modern database toolkit with type-safe queries, auto-generated migrations, and an intuitive data modeling layer." },
    ],
    approach: [
      { step: "01", title: "Requirements & Architecture", description: "We map your business requirements to a scalable technical architecture, choosing the right stack for your needs." },
      { step: "02", title: "UI/UX & Prototyping", description: "Interactive prototypes and design systems ensure pixel-perfect implementation before a single line of code." },
      { step: "03", title: "Iterative Development", description: "Two-week sprints with demos, code reviews, and continuous integration keep you in the loop at every stage." },
      { step: "04", title: "Testing & Launch", description: "Comprehensive testing — unit, integration, E2E — followed by a smooth production deployment with zero downtime." },
    ],
    differentiators: [
      { title: "End-to-End Ownership", description: "One team handles frontend, backend, database, and deployment — no handoff friction." },
      { title: "Production-Grade Quality", description: "Every project ships with automated testing, CI/CD, and monitoring baked in from day one." },
      { title: "Scalable Architecture", description: "We build for growth — microservices, caching layers, and horizontal scaling are standard, not afterthoughts." },
      { title: "Developer Experience", description: "Clean code, thorough documentation, and knowledge transfer so your team can confidently take over." },
    ],
    faqs: [
      { q: "What frontend frameworks do you work with?", a: "We primarily work with React and Next.js, but also have deep experience with Vue.js and Svelte depending on project needs." },
      { q: "Can you work with our existing backend?", a: "Absolutely. We regularly integrate with existing APIs, databases, and legacy systems — migration or augmentation, we've got you covered." },
      { q: "How do you handle project handoffs?", a: "Every project includes comprehensive documentation, code walkthroughs, and optional training sessions to ensure your team is fully confident." },
      { q: "What does a typical timeline look like?", a: "Most full stack projects range from 8–16 weeks depending on complexity. We provide detailed milestones during the discovery phase." },
    ],
  },
  {
    icon: "Smartphone", title: "App Development", slug: "app-development", num: "02", image: "assets/service-appdev.jpg", featured: false,
    description: "Create stunning mobile experiences for iOS, Android, and cross-platform with native performance.",
    longDescription: "We build high-performance mobile applications that users love. Whether you need a native iOS/Android app or a cross-platform solution with React Native or Flutter, our team delivers pixel-perfect UI, smooth animations, and seamless backend integration. We handle everything from prototyping and design to App Store deployment and post-launch support.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    deliverables: ["UI/UX design & prototyping", "Cross-platform or native development", "Backend API integration", "App Store submission & launch support"],
    technologies: [
      { name: "React Native", category: "Cross-Platform", featured: true, description: "Build truly native mobile apps using React and JavaScript — one codebase for iOS and Android with near-native performance." },
      { name: "Flutter", category: "Cross-Platform", featured: true, description: "Google's UI toolkit for crafting beautiful, natively compiled apps from a single Dart codebase with expressive custom widgets." },
      { name: "Swift", category: "iOS", featured: true, description: "Apple's modern programming language for building high-performance, safe iOS and macOS applications with first-class platform APIs." },
      { name: "Kotlin", category: "Android", featured: true, description: "The preferred language for modern Android development — concise, expressive, and fully interoperable with Java." },
      { name: "Expo", category: "Tooling", description: "Managed workflow for React Native that simplifies builds, OTA updates, and access to device APIs without native code hassle." },
      { name: "Firebase", category: "Backend", description: "Google's app platform providing real-time databases, authentication, push notifications, and analytics out of the box." },
      { name: "Supabase", category: "Backend", description: "Open-source Firebase alternative with PostgreSQL, real-time subscriptions, auth, and storage — developer-friendly and scalable." },
      { name: "Redux", category: "State", description: "Predictable state container for complex app state with time-travel debugging and a rich middleware ecosystem." },
      { name: "Zustand", category: "State", description: "Lightweight, hook-based state management that's simple to set up and scales without boilerplate overhead." },
      { name: "Figma", category: "Design", description: "Collaborative design tool where we create high-fidelity prototypes, design systems, and developer handoff specs." },
    ],
    approach: [
      { step: "01", title: "Discovery & UX Research", description: "We study your users, competitors, and market to define an experience strategy that drives engagement." },
      { step: "02", title: "Design & Prototyping", description: "High-fidelity mockups and interactive prototypes tested with real users before development begins." },
      { step: "03", title: "Agile Development", description: "Cross-functional sprints with continuous builds so you can test on real devices throughout the process." },
      { step: "04", title: "Launch & Growth", description: "App Store optimization, analytics setup, and a post-launch iteration plan to drive downloads and retention." },
    ],
    differentiators: [
      { title: "Platform Expertise", description: "Deep knowledge of both native (Swift/Kotlin) and cross-platform (React Native/Flutter) — we pick what's best for you." },
      { title: "Design-Led Development", description: "Every app starts with design thinking — user research, personas, and journey mapping before code." },
      { title: "Performance Obsessed", description: "60fps animations, optimized bundle sizes, and native modules where needed for buttery smooth experiences." },
      { title: "Store-Ready Delivery", description: "We handle ASO, screenshots, descriptions, and the review process so your launch is stress-free." },
    ],
    faqs: [
      { q: "React Native or Flutter — which should I choose?", a: "It depends on your needs. React Native is great if you have a web team (shared JS/TS skills), while Flutter excels in custom UI-heavy apps. We'll recommend the best fit during discovery." },
      { q: "Can you update an existing app?", a: "Yes. We regularly take over and modernize existing mobile apps — from UI refreshes to full architecture overhauls." },
      { q: "How do you handle app store approvals?", a: "We've launched hundreds of apps. We handle submission guidelines, review responses, and optimization to ensure fast approvals." },
      { q: "Do you support post-launch maintenance?", a: "We offer flexible retainer plans for bug fixes, OS updates, feature additions, and performance monitoring." },
    ],
  },
  {
    icon: "Cloud", title: "Cloud Solutions", slug: "cloud-solutions", num: "03", image: "assets/service-cloud.jpg", featured: true,
    description: "Design and deploy scalable cloud infrastructure that grows with your business.",
    longDescription: "We architect cloud solutions on AWS, Azure, and GCP that are secure, cost-efficient, and infinitely scalable. From initial migration strategies to serverless architectures and microservices, we help you leverage the full power of the cloud. Our team ensures high availability, disaster recovery, and optimized performance across all your workloads.",
    tags: ["AWS", "Azure", "GCP", "Serverless"],
    deliverables: ["Cloud architecture design", "Migration strategy & execution", "Cost optimization audit", "Security & compliance setup"],
    technologies: [
      { name: "AWS", category: "Platform", featured: true, description: "The world's most comprehensive cloud platform — 200+ services spanning compute, storage, AI, and networking for any workload at any scale." },
      { name: "Azure", category: "Platform", featured: true, description: "Microsoft's enterprise cloud with deep integration into Office 365, Active Directory, and hybrid environments — ideal for enterprise ecosystems." },
      { name: "GCP", category: "Platform", featured: true, description: "Google's cloud built on the same infrastructure that powers Search, YouTube, and Gmail — unmatched in data analytics, AI, and Kubernetes." },
      { name: "Lambda", category: "Serverless", featured: true, description: "AWS's serverless compute service — run code without provisioning servers, pay only for execution time, and scale automatically to millions of requests." },
      { name: "CloudFront", category: "CDN", description: "AWS's global content delivery network that accelerates static and dynamic content with edge caching across 400+ locations worldwide." },
      { name: "S3", category: "Storage", description: "Virtually unlimited object storage with 99.999999999% durability — the backbone for data lakes, backups, and static asset hosting." },
      { name: "RDS", category: "Database", description: "Managed relational databases (PostgreSQL, MySQL, Aurora) with automated backups, patching, and multi-AZ failover built in." },
      { name: "DynamoDB", category: "Database", description: "Fully managed NoSQL database delivering single-digit millisecond latency at any scale — perfect for real-time, high-throughput applications." },
      { name: "CloudFormation", category: "IaC", description: "AWS-native infrastructure as code — define your entire cloud stack in templates for repeatable, version-controlled deployments." },
      { name: "Pulumi", category: "IaC", description: "Modern IaC using real programming languages (TypeScript, Python) instead of YAML — bringing software engineering practices to infrastructure." },
    ],
    approach: [
      { step: "01", title: "Assessment & Planning", description: "We audit your current infrastructure, identify bottlenecks, and design a cloud-native target architecture." },
      { step: "02", title: "Migration Strategy", description: "Lift-and-shift, re-platform, or re-architect — we choose the right migration path for each workload." },
      { step: "03", title: "Implementation", description: "Phased migration with rollback plans, ensuring zero disruption to your business operations." },
      { step: "04", title: "Optimization & Governance", description: "Continuous cost monitoring, security audits, and auto-scaling policies to maximize ROI." },
    ],
    differentiators: [
      { title: "Multi-Cloud Expertise", description: "We're certified across AWS, Azure, and GCP — no vendor lock-in, just the best tool for the job." },
      { title: "Cost-First Thinking", description: "Every architecture decision is evaluated for cost efficiency — we've saved clients millions in cloud spend." },
      { title: "Security by Default", description: "IAM policies, encryption, VPCs, and compliance frameworks are built in from the start, not bolted on." },
      { title: "24/7 Reliability", description: "We design for 99.99% uptime with multi-region failover, automated backups, and disaster recovery." },
    ],
    faqs: [
      { q: "Which cloud provider should I use?", a: "It depends on your existing stack, team expertise, and specific requirements. We'll evaluate all options and recommend the best fit — or a multi-cloud approach if beneficial." },
      { q: "How long does a cloud migration take?", a: "Simple migrations can take 4–6 weeks, while complex enterprise migrations may span 3–6 months. We provide a detailed timeline after assessment." },
      { q: "Will migration cause downtime?", a: "We use phased migration strategies with parallel running and automated failover to ensure zero or near-zero downtime." },
      { q: "How do you handle security and compliance?", a: "We implement security best practices (encryption, IAM, VPCs) and can configure for SOC 2, HIPAA, GDPR, and other compliance frameworks." },
    ],
  },
  {
    icon: "Container", title: "DevOps & Automation", slug: "devops-automation", num: "04", image: "assets/service-devops.jpg", featured: false,
    description: "Streamline your development workflow with CI/CD pipelines, containerization, and infrastructure as code.",
    longDescription: "We implement DevOps practices that accelerate your development lifecycle and improve reliability. From setting up CI/CD pipelines with GitHub Actions or Jenkins to containerizing applications with Docker and Kubernetes, we automate everything from testing to deployment. Our infrastructure-as-code approach using Terraform and Ansible ensures reproducible, version-controlled environments.",
    tags: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    deliverables: ["CI/CD pipeline setup", "Container orchestration", "Infrastructure as code", "Monitoring & alerting setup"],
    technologies: [
      { name: "Docker", category: "Containers", featured: true, description: "Industry-standard containerization that packages your app and dependencies into portable, reproducible units that run anywhere." },
      { name: "Kubernetes", category: "Orchestration", featured: true, description: "The gold standard for container orchestration — automated deployment, scaling, and management of containerized applications at production scale." },
      { name: "Terraform", category: "IaC", featured: true, description: "HashiCorp's infrastructure as code tool for provisioning and managing cloud resources declaratively across any provider." },
      { name: "Ansible", category: "Configuration", description: "Agentless automation for configuration management, application deployment, and multi-tier orchestration with simple YAML playbooks." },
      { name: "GitHub Actions", category: "CI/CD", featured: true, description: "Native CI/CD built into GitHub — automate builds, tests, and deployments with workflows triggered by any repository event." },
      { name: "Jenkins", category: "CI/CD", description: "The most widely adopted open-source automation server — infinitely extensible with 1,800+ plugins for any build or deployment pipeline." },
      { name: "ArgoCD", category: "GitOps", description: "Declarative GitOps continuous delivery for Kubernetes — your Git repo becomes the single source of truth for deployments." },
      { name: "Prometheus", category: "Monitoring", description: "Open-source monitoring and alerting toolkit purpose-built for reliability — pull-based metrics collection with a powerful query language." },
      { name: "Grafana", category: "Monitoring", description: "Beautiful, customizable dashboards for visualizing metrics from any data source — the observability layer your team actually enjoys using." },
      { name: "Datadog", category: "Observability", description: "Unified platform for logs, metrics, traces, and security — end-to-end visibility across your entire infrastructure and application stack." },
    ],
    approach: [
      { step: "01", title: "Pipeline Audit", description: "We analyze your current development workflow, identify bottlenecks, and map the ideal CI/CD pipeline." },
      { step: "02", title: "Containerization", description: "Applications are containerized with Docker, ensuring consistent environments from dev to production." },
      { step: "03", title: "Automation Setup", description: "CI/CD pipelines, automated testing, infrastructure as code, and GitOps workflows are implemented." },
      { step: "04", title: "Monitoring & Iteration", description: "Dashboards, alerting, and SLO tracking ensure your systems stay healthy and your team stays informed." },
    ],
    differentiators: [
      { title: "Deployment Velocity", description: "Our clients go from weekly releases to multiple daily deployments with full confidence and zero manual steps." },
      { title: "Infrastructure as Code", description: "Every environment is version-controlled, reproducible, and auditable — no more snowflake servers." },
      { title: "Observability Built-In", description: "Logging, metrics, tracing, and alerting are part of every project — not an afterthought." },
      { title: "Team Enablement", description: "We don't just set up tools — we train your team to own and evolve the DevOps culture internally." },
    ],
    faqs: [
      { q: "We have no CI/CD — where do we start?", a: "We start with a pipeline audit of your current workflow, then implement a tailored CI/CD pipeline step by step — usually GitHub Actions or GitLab CI depending on your tooling." },
      { q: "Docker or Kubernetes — do we need both?", a: "Docker is almost always beneficial. Kubernetes adds value when you're running multiple services at scale. We'll recommend the right level of orchestration for your needs." },
      { q: "Can you work with our existing infrastructure?", a: "Yes. We integrate with your current cloud provider, repositories, and tools — augmenting rather than replacing what works." },
      { q: "How do you handle secrets and configuration?", a: "We use industry-standard tools like HashiCorp Vault, AWS Secrets Manager, or sealed secrets in Kubernetes for secure, auditable config management." },
    ],
  },
  {
    icon: "Brain", title: "AI & Machine Learning", slug: "ai-machine-learning", num: "05", image: "assets/service-ai.jpg", featured: true,
    description: "Integrate intelligent automation, predictive analytics, and AI-powered features into your products.",
    longDescription: "We bring the power of AI and machine learning to your business. From building custom ML models and NLP pipelines to integrating GPT-powered features and computer vision, we help you unlock insights from your data and automate complex workflows. Our solutions are production-grade, scalable, and designed to deliver measurable business impact.",
    tags: ["LLMs", "Computer Vision", "NLP", "Predictive Analytics"],
    deliverables: ["AI feasibility assessment", "Custom model development", "API integration & deployment", "Performance monitoring & retraining"],
    technologies: [
      { name: "Python", category: "Language", featured: true, description: "The dominant language for AI/ML — unmatched ecosystem of scientific computing, data processing, and machine learning libraries." },
      { name: "TensorFlow", category: "ML Framework", featured: true, description: "Google's production-grade ML framework for training and deploying deep learning models at scale across devices and platforms." },
      { name: "PyTorch", category: "ML Framework", featured: true, description: "The research community's favorite — dynamic computation graphs, intuitive debugging, and the foundation for cutting-edge model architectures." },
      { name: "OpenAI API", category: "LLM", featured: true, description: "Access to GPT-4, DALL·E, and Whisper — the most capable commercial AI models for text, image, and speech generation." },
      { name: "LangChain", category: "LLM", description: "Framework for building context-aware, reasoning LLM applications — RAG pipelines, agents, and multi-step workflows made simple." },
      { name: "Hugging Face", category: "Models", description: "The open-source hub for 400K+ pre-trained models — transformers, diffusion models, and datasets for any AI task." },
      { name: "scikit-learn", category: "ML", description: "The Swiss Army knife of classical machine learning — classification, regression, clustering, and evaluation in a clean, consistent API." },
      { name: "Pandas", category: "Data", description: "The data manipulation powerhouse — clean, transform, and analyze structured data with intuitive DataFrames and Series." },
      { name: "FastAPI", category: "API", description: "High-performance Python API framework with automatic docs, type validation, and async support — perfect for serving ML models." },
      { name: "MLflow", category: "MLOps", description: "End-to-end ML lifecycle management — experiment tracking, model versioning, and deployment pipelines for reproducible, auditable AI." },
    ],
    approach: [
      { step: "01", title: "Data & Feasibility", description: "We assess your data quality, business objectives, and AI readiness to define realistic, high-impact use cases." },
      { step: "02", title: "Model Development", description: "Custom models are trained, validated, and benchmarked against your KPIs with full transparency into performance." },
      { step: "03", title: "Integration & Deployment", description: "Models are packaged as APIs and integrated into your product with scalable, production-grade infrastructure." },
      { step: "04", title: "Monitoring & Retraining", description: "Continuous performance tracking, drift detection, and automated retraining pipelines keep your models accurate." },
    ],
    differentiators: [
      { title: "Business-First AI", description: "We don't build AI for AI's sake — every model is tied to measurable business outcomes and ROI." },
      { title: "Production-Grade MLOps", description: "Automated pipelines for training, testing, deploying, and monitoring models at scale." },
      { title: "LLM Expertise", description: "Deep experience with GPT, Claude, and open-source LLMs — from RAG systems to fine-tuned domain models." },
      { title: "Data Privacy & Ethics", description: "We build AI responsibly — with data anonymization, bias detection, and transparent model explanations." },
    ],
    faqs: [
      { q: "Do we need a lot of data to start with AI?", a: "Not always. For some use cases, pre-trained models and transfer learning can deliver results with limited data. We'll assess your data readiness in the feasibility phase." },
      { q: "Can you integrate AI into our existing product?", a: "Yes. We commonly add AI features — like smart search, recommendations, or automation — into existing applications via API integration." },
      { q: "How do you ensure model accuracy?", a: "Rigorous validation against holdout datasets, A/B testing in production, and continuous monitoring with automated retraining when performance drifts." },
      { q: "What about data privacy and security?", a: "We follow strict data handling practices including encryption, access controls, anonymization, and compliance with GDPR/HIPAA as needed." },
    ],
  },
];

export const homeServices = [
  { icon: Code2, title: "Full Stack Development", slug: "full-stack-development", description: "Build robust, scalable web applications from frontend to backend.", num: "01", image: "assets/service-fullstack.jpg", tags: ["React", "Node.js", "TypeScript"], featured: true },
  { icon: Smartphone, title: "App Development", slug: "app-development", description: "Stunning mobile experiences for iOS, Android & cross-platform.", num: "02", image: "assets/service-appdev.jpg", tags: ["React Native", "Flutter"], featured: false },
  { icon: Cloud, title: "Cloud Solutions", slug: "cloud-solutions", description: "Scalable cloud infrastructure that grows with your business.", num: "03", image: "assets/service-cloud.jpg", tags: ["AWS", "Azure", "GCP"], featured: true },
  { icon: Container, title: "DevOps & Automation", slug: "devops-automation", description: "CI/CD pipelines, containerization, and infrastructure as code.", num: "04", image: "assets/service-devops.jpg", tags: ["Docker", "Kubernetes"], featured: false },
  { icon: Brain, title: "AI & Machine Learning", slug: "ai-machine-learning", description: "Intelligent automation, predictive analytics & AI-powered features.", num: "05", image: "assets/service-ai.jpg", tags: ["LLMs", "ML Models"], featured: true },
];


// ── Features (Home) ─────────────────────────────────────────


// ── Partners ────────────────────────────────────────────────
export const partners = ["TechVault", "Horizon Inc", "NovaBridge", "EcoSphere", "PeakPoint"];

// ── Stats (About Preview) ───────────────────────────────────
export const stats = [
  { val: 200, suffix: "+", label: "Clients Served" },
  { val: 95, suffix: "%", label: "Client Retention" },
  { val: 30, suffix: "+", label: "Industries" },
  { val: 10, suffix: "+", label: "Years Experience" },
];

// ── About Page ──────────────────────────────────────────────
export const values = [
  { icon: Target, title: "Purpose-Driven", description: "Every decision we make is guided by our commitment to sustainable growth and positive impact." },
  { icon: Eye, title: "Transparency", description: "We believe in open communication and honest partnerships with every client we serve." },
  { icon: Heart, title: "Integrity", description: "We hold ourselves to the highest ethical standards in everything we do." },
  { icon: Award, title: "Excellence", description: "We strive for exceptional results through innovation, expertise, and dedication." },
];

export const team = [
  { name: "Alexandra Reed", role: "Founder & CEO", initials: "AR" },
  { name: "Marcus Johnson", role: "Head of Strategy", initials: "MJ" },
  { name: "Priya Sharma", role: "Director of Operations", initials: "PS" },
  { name: "David Kim", role: "Lead Consultant", initials: "DK" },
];

// ── Approach ────────────────────────────────────────────────
export const approachSteps = [
  { num: "01", icon: Search, title: "Discover", description: "We analyze your requirements, tech stack, and business goals to define the perfect solution." },
  { num: "02", icon: Lightbulb, title: "Architect", description: "Our engineers design scalable architectures with clear milestones and technology choices." },
  { num: "03", icon: Rocket, title: "Build & Ship", description: "We develop iteratively with CI/CD, keeping you in the loop with demos every sprint." },
  { num: "04", icon: Zap, title: "Scale & Optimize", description: "Continuous monitoring, performance tuning, and feature iteration ensure long-term success." },
];

// ── Why Choose Us ───────────────────────────────────────────
export const whyChooseUsReasons = [
  { icon: Award, title: "Industry Experts", description: "Our team brings decades of combined experience across multiple industries." },
  { icon: Target, title: "Results-Driven", description: "Every engagement is designed around measurable outcomes and KPIs." },
  { icon: HeartHandshake, title: "True Partnership", description: "We work alongside your team, not in isolation — your success is ours." },
  { icon: Clock, title: "Agile Delivery", description: "Fast, iterative execution so you see value from day one." },
  { icon: Shield, title: "Trusted & Transparent", description: "No hidden agendas. Full visibility into progress, costs, and decisions." },
  { icon: Sparkles, title: "Innovation-First", description: "We leverage the latest tools and methodologies to keep you ahead." },
];

// ── Testimonials ────────────────────────────────────────────
export const testimonials = [
  { quote: "T-Solutions brought a fresh perspective to our sustainability roadmap. Their energy and dedication were exactly what our team needed.", name: "Sarah Mitchell", role: "Founder, EcoSphere" },
  { quote: "Working with a young, hungry team made all the difference. They treated our project like their own and delivered beyond expectations.", name: "James Chen", role: "CTO, TechVault" },
  { quote: "Their strategic framework helped us find clarity during a pivotal growth phase. Highly recommend for any startup or scaling business.", name: "Elena Rodriguez", role: "Director, NovaBridge" },
  { quote: "What they lack in decades, they make up for in insight and hustle. T-Solutions is the real deal.", name: "Marcus Liu", role: "Co-founder, PeakPoint" },
  { quote: "They challenged our assumptions in the best way possible. A truly collaborative experience from start to finish.", name: "Aisha Patel", role: "CEO, Horizon Inc" },
];

// ── FAQ ─────────────────────────────────────────────────────
export const faqs = [
  { q: "What industries do you specialize in?", a: "We work across technology, finance, healthcare, energy, and consumer goods. Our frameworks are adaptable to any sector, and we tailor every engagement to your specific market dynamics." },
  { q: "How long does a typical engagement last?", a: "Most projects range from 4 to 16 weeks depending on scope. We start with a discovery phase and provide a clear timeline before any commitment." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We've helped early-stage startups define their go-to-market strategy and guided Fortune 500 companies through digital transformation. Our approach scales to fit your stage." },
  { q: "What makes your sustainability audits different?", a: "We go beyond compliance checklists. Our audits combine environmental impact data with actionable business strategies, ensuring sustainability efforts also drive profitability." },
  { q: "How do you measure success?", a: "Every project begins with defined KPIs. We track progress through regular check-ins, dashboards, and a final impact report so results are always transparent and measurable." },
  { q: "Can we start with a small pilot project?", a: "Absolutely. Many clients start with a focused engagement to experience our approach firsthand before expanding into larger initiatives." },
];

// ── Case Studies (Portfolio) ────────────────────────────────
export const caseStudies = [
  { title: "EcoSphere Sustainability Overhaul", slug: "ecosphere-sustainability", category: "Sustainability", client: "EcoSphere", industry: "Clean Energy", duration: "12 weeks", description: "Reduced carbon emissions by 35% while cutting operational costs through a comprehensive sustainability audit.", longDescription: "EcoSphere, a mid-size clean energy company, approached us to overhaul their sustainability practices across manufacturing and distribution. Our team conducted a full lifecycle carbon analysis, identified 12 key emission reduction opportunities, and implemented a phased green strategy. The result was a 35% reduction in carbon emissions within the first year — alongside a 15% decrease in operational costs through energy optimization and waste reduction.", result: "35% emission reduction", results: ["35% carbon emission reduction", "15% operational cost savings", "$2.1M annual energy savings", "GRI-compliant ESG reporting"], before: 'assets/case-ecosphere-before.jpg', after: 'assets/case-ecosphere.jpg' },
  { title: "TechVault Digital Transformation", slug: "techvault-digital", category: "Digital", client: "TechVault", industry: "Enterprise Software", duration: "16 weeks", description: "Modernized legacy systems and boosted team productivity with AI-powered workflows.", longDescription: "TechVault's engineering team was bottlenecked by legacy infrastructure and manual processes. We mapped their entire technology stack, identified automation opportunities, and designed a cloud migration strategy. Over 16 weeks, we migrated critical systems to a modern cloud architecture, implemented AI-powered code review and testing pipelines, and trained their team on new workflows — resulting in a 2x productivity increase.", result: "2x productivity increase", results: ["2x team productivity increase", "60% faster deployment cycles", "99.9% system uptime achieved", "40% reduction in tech debt"], before: 'assets/case-techvault-before.jpg', after: 'assets/case-techvault.jpg' },
  { title: "NovaBridge Market Expansion", slug: "novabridge-expansion", category: "Growth", client: "NovaBridge", industry: "Financial Services", duration: "20 weeks", description: "Entered three new international markets within 12 months with a tailored expansion strategy.", longDescription: "NovaBridge, a growing fintech company, wanted to expand beyond their domestic market. We conducted deep market research across 8 potential regions, developed entry strategies for the top 3, and guided their leadership through regulatory compliance, localization, and partnership development. Within 12 months of engagement, NovaBridge successfully launched in three new markets — driving a 40% increase in annual revenue.", result: "40% revenue growth", results: ["40% year-over-year revenue growth", "3 new international markets", "12 strategic partnerships formed", "Regulatory approval in all regions"], before: 'assets/case-novabridge-before.jpg', after: 'assets/case-novabridge.jpg' },
];

// ── Hero badges & mission preview ───────────────────────────
export const heroBadges = [
  { icon: Lightbulb, label: "Fresh Thinking" },
  { icon: Users, label: "Dedicated Team" },
  { icon: Globe, label: "Global Mindset" },
];

export const heroMissionServices = [
  { icon: Code2, label: "Full Stack Development", desc: "End-to-end web apps" },
  { icon: Cloud, label: "Cloud Solutions", desc: "Scalable infrastructure" },
  { icon: Brain, label: "AI & Machine Learning", desc: "Intelligent automation" },
];

// ── About Preview highlights ────────────────────────────────
export const aboutHighlights = [
  { icon: Target, label: "Purpose-Driven" },
  { icon: Users, label: "Dedicated Team" },
  { icon: Globe, label: "Global Impact" },
];

// ── Contact info ────────────────────────────────────────────
export const contactInfo = [
  { icon: "Mail" as const, label: "Email", value: "hello@t-solutions.com" },
  { icon: "Phone" as const, label: "Phone", value: "+1 (555) 123-4567" },
];
