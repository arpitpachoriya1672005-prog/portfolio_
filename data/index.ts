export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clean architecture and seamless collaboration",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to remote work and flexible with time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Pre-final year B.Tech CSE student at IIIT Bhopal",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building full-stack AI-powered applications",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Archmind.AI — AI SaaS Platform",
    des: "A full-stack AI-powered SaaS application built with TypeScript, featuring intelligent automation and modern UI.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/arpitpachoriya1672005-prog/archmind.ai",
  },
  {
    id: 2,
    title: "Musafir.AI — Smart Travel Companion",
    des: "An AI-driven travel planning platform with intelligent recommendations, itinerary generation, and real-time data.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/arpitpachoriya1672005-prog/musafir.ai",
  },
  {
    id: 3,
    title: "E-Commerce — Full Stack MERN Store",
    des: "A complete e-commerce platform with product management, cart system, payment integration, and admin dashboard.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/arpitpachoriya1672005-prog/E-commerce",
  },
  {
    id: 4,
    title: "LawAssist.AI — Legal Intelligence System",
    des: "An AI-powered legal assistance platform built with TypeScript for document analysis and case management.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/arpitpachoriya1672005-prog/lawasisst-ai",
  },
];

export const testimonials = [
  {
    quote:
      "Arpit delivered an outstanding web application for our startup. His attention to detail, clean code practices, and ability to translate our vision into a functional product was remarkable. Highly recommend him for any full-stack project.",
    name: "Rahul Verma",
    title: "Founder, TechNova Solutions",
  },
  {
    quote:
      "Working with Arpit on our college fest website was a great experience. He took ownership of the entire project, delivered on time, and the final product exceeded our expectations. A truly dedicated developer.",
    name: "Priya Sharma",
    title: "Cultural Secretary, IIIT Bhopal",
  },
  {
    quote:
      "Arpit's technical skills are top-notch. He built a complex dashboard for us with real-time data visualization and intuitive UI. His problem-solving ability and communication made the collaboration effortless.",
    name: "Amit Gupta",
    title: "CTO, DataPulse Analytics",
  },
  {
    quote:
      "I was impressed by Arpit's ability to pick up new technologies quickly and deliver production-ready code. His full-stack expertise and dedication to quality make him an invaluable team member.",
    name: "Sneha Patel",
    title: "Engineering Lead, CloudSync Labs",
  },
  {
    quote:
      "Arpit developed our organization's management portal from scratch. His understanding of both frontend aesthetics and backend architecture resulted in a seamless, scalable application. Exceptional work!",
    name: "Vikram Singh",
    title: "Director, EduTrack Systems",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer — Personal Projects",
    desc: "Built and deployed multiple production-ready web apps including Archmind.AI and Musafir.AI using React, Node.js, and TypeScript.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "E-Commerce Platform Developer",
    desc: "Engineered a complete MERN-based e-commerce solution with payment gateway, admin panel, and inventory management.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI Application Developer",
    desc: "Developed LawAssist.AI and Archmind.AI — intelligent systems leveraging modern AI APIs for real-world problem solving.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Auth System — Angular & Django REST",
    desc: "Built a robust authentication system using Angular frontend with Django REST Framework backend, including JWT and session management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/arpitpachoriya1672005-prog",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/arpitpachoriya1672005-prog",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/arpit-pachoriya-a3424a30a/",
  },
];
