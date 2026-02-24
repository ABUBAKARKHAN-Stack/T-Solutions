import { TwitterIcon } from "@sanity/icons";
import { Brain, Cloud, Code2, Container, FacebookIcon, Headphones, InstagramIcon, LinkedinIcon, Mail, MapPin, Phone, Smartphone } from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];


export const serviceItems = [
  { icon: Code2, label: "Full Stack Development", description: "End-to-end web applications" },
  { icon: Smartphone, label: "App Development", description: "iOS, Android & cross-platform" },
  { icon: Cloud, label: "Cloud Solutions", description: "Scalable cloud infrastructure" },
  { icon: Container, label: "DevOps & Automation", description: "CI/CD & infrastructure as code" },
  { icon: Brain, label: "AI & Machine Learning", description: "Intelligent automation & insights" },
];
export const contactInfo = [
  {
    label: "Mail",
    value: "info@t-solutionz.com",
    link: "mailto:info@t-solutionz.com",
    icon: Mail
  },
  {
    label: "Help & Support",
    value: "contact@t-solutionz.com",
    link: "mailto:contact@t-solutionz.com",
    icon: Headphones
  },
  {
    label: "Phone",
    value: "+92-3257030523",
    link: "tel:+923257030523",
    icon: Phone
  },
]

export const socials = [
  { label: "Facebook", icon: FacebookIcon, url: "https://facebook.com" },
  { label: "Instagram", icon: InstagramIcon, url: "https://instagram.com" },
  { label: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com" },
]