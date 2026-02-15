import { Rocket, ShieldCheck, Code, Layers, Code2, Smartphone, Cloud, Container, Brain, Globe } from "lucide-react";

export const heroContent = {
    eyebrow: "Strategy · Innovation · Growth",

    headline: ["Excellence", "Through", "Solutions"],

    subtext:
        "We build smart and reliable digital solutions that help startups and businesses grow. Focused on quality, scalability, and real-world impact.",

    cta: {
        primary: "Our Services",
        secondary: "Get in Touch",
    },

    mission: {
        title: "Our Mission",
        quote:
            "We help businesses turn ideas into practical, scalable technology that lasts.",
    },

    missionServices: [
        {
            label: "Web Development",
            desc: "Modern, fast, and responsive applications",
            icon: Code,
        },
        {
            label: "Backend & APIs",
            desc: "Secure and scalable server-side systems",
            icon: Layers,
        },
        {
            label: "Startup Solutions",
            desc: "Built for speed, growth, and flexibility",
            icon: Rocket,
        },
    ],

    accentCards: [
        {
            label: "Quality First",
            sub: "Thoughtfully Engineered",
            icon: ShieldCheck,
        },
        {
            label: "Scalable by Design",
            sub: "Built to Grow with You",
            icon: Layers,
        },
    ]

};


export const featuresContent = [
  { icon: Code2, title: "Full Stack Apps", description: "End-to-end web applications built with modern frameworks and scalable architecture.", num: "01" },
  { icon: Smartphone, title: "Mobile First", description: "Cross-platform mobile apps with native performance and beautiful user experiences.", num: "02" },
  { icon: Cloud, title: "Cloud Native", description: "Scalable cloud infrastructure on AWS, Azure, and GCP designed for growth.", num: "03" },
  { icon: Container, title: "DevOps Pipeline", description: "Automated CI/CD, containerization, and infrastructure as code for rapid delivery.", num: "04" },
  { icon: Brain, title: "AI Integration", description: "Smart automation, predictive analytics, and LLM-powered features for your products.", num: "05" },
  { icon: Globe, title: "Global Scale", description: "Distributed systems and edge computing to serve users worldwide with low latency.", num: "06" },
];

export const partners = ["TechVault", "Horizon Inc", "NovaBridge", "EcoSphere", "PeakPoint"];

export const blogPosts = [
  {
    title: "The Future of AI in Enterprise Software",
    excerpt: "How artificial intelligence is reshaping the way businesses build, deploy, and maintain software at scale.",
    category: "AI & Innovation",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    slug: "future-of-ai-enterprise",
    image:'/assets/blog-ai.jpg',
  },
  {
    title: "Why Sustainable Tech Matters More Than Ever",
    excerpt: "Exploring the intersection of environmental responsibility and cutting-edge technology solutions.",
    category: "Sustainability",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    slug: "sustainable-tech-matters",
    image: "/assets/blog-sustainability.jpg",
  },
  {
    title: "Scaling Startups: From MVP to Market Leader",
    excerpt: "A proven framework for transforming minimum viable products into industry-defining platforms.",
    category: "Strategy",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    slug: "scaling-startups-mvp",
    image: '/assets/blog-scaling.jpg',
  },
];