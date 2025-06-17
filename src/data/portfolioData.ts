// Portfolio Data Constants
// Centralized data for easy content management and updates

import {
  Code,
  Database,
  Globe,
  Terminal,
  Trophy,
  Award,
  type LucideIcon,
} from "lucide-react";

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

export const PERSONAL_INFO = {
  name: "Shashank Shetty",
  title: "Computer Science Engineer",
  description:
    "Passionate about creating innovative solutions through code and technology.",
  email: "shettyshashank089@gmail.com",
  phone: "+91-6361128305",
  github: "https://github.com/shashankshetty1",
  portfolio: "https://shashankshettyy.netlify.app/",
  location: "Bangalore, India",
} as const;

// =============================================================================
// SKILLS & TECHNOLOGIES
// =============================================================================

export interface Skill {
  name: string;
  category: string;
  color: string;
}

export const SKILLS: Skill[] = [
  {
    name: "Java",
    category: "Language",
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  {
    name: "MySQL",
    category: "Database",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  {
    name: "HTML",
    category: "Frontend",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  },
  {
    name: "CSS",
    category: "Frontend",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    color:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  },
  {
    name: "Python",
    category: "Language",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  {
    name: "MongoDB",
    category: "Database",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
  {
    name: "OpenGL",
    category: "Graphics",
    color:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  },
  {
    name: "Visual Studio",
    category: "Tools",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  },
  {
    name: "GitHub",
    category: "Tools",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  },
  {
    name: "Excel",
    category: "Tools",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
];

// =============================================================================
// ABOUT SECTION DATA
// =============================================================================

export const SKILL_CATEGORIES = [
  {
    icon: Code,
    title: "Languages",
    description: "Java, Python, JavaScript",
  },
  {
    icon: Database,
    title: "Database",
    description: "MySQL, MongoDB",
  },
  {
    icon: Globe,
    title: "Web Tech",
    description: "HTML, CSS, JavaScript",
  },
  {
    icon: Terminal,
    title: "Tools",
    description: "Visual Studio, GitHub",
  },
] as const;

export const COURSEWORK = [
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "Software Engineering",
];

export const SOFT_SKILLS = [
  "Leadership",
  "Event Management",
  "Time Management",
  "Sportive",
];

// =============================================================================
// EDUCATION DATA
// =============================================================================

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  current: boolean;
}

export const EDUCATION: Education[] = [
  {
    institution: "AMC Engineering College",
    degree: "Bachelor of Engineering in Computer Science and Engineering (CSE)",
    location: "Bangalore, India",
    period: "2021 - 2025",
    grade: "CGPA: 8.3",
    current: true,
  },
  {
    institution: "Viveka PU College",
    degree: "Pre-university College (PCMC)",
    location: "Udupi, India",
    period: "2019 - 2021",
    grade: "Percentage: 84.33%",
    current: false,
  },
  {
    institution: "Govt Board High School",
    degree: "Class X (KSEEB)",
    location: "Brahmavar, Udupi, India",
    period: "2018 - 2019",
    grade: "Percentage: 83.36%",
    current: false,
  },
];

// =============================================================================
// EXPERIENCE DATA
// =============================================================================

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  current: boolean;
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Java Full Stack Development Intern",
    company: "Besant Technologies",
    period: "January 2025 – May 2025",
    location: "Offline Internship",
    type: "Internship",
    description:
      "Completing internship in Java Full Stack Development, gaining proficiency in MySQL, Java, HTML, CSS, and JavaScript. Enhancing problem-solving abilities and deepening understanding of full stack architecture and best practices.",
    current: true,
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Varcons Technologies",
    period: "October - December 2023",
    location: "Online Project Intern",
    type: "Project Intern",
    description:
      "Developed design skills and showed self-motivated attitude towards learning. Gained hands-on experience with Full Stack web development. Professional growth working on real world projects provided practical experience in applying theoretical knowledge.",
    current: false,
  },
];

// =============================================================================
// PROJECTS DATA
// =============================================================================

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  period: string;
  type: string;
  highlight: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Malware Detection System",
    description:
      "Machine learning-based malware detection system using Random Forest algorithm to analyze and classify malicious files and URLs. Enhances cybersecurity by identifying threats based on URL structure, file attributes, and behavioral patterns.",
    tech: [
      "Python",
      "MongoDB",
      "Machine Learning",
      "Random Forest",
      "Feature Extraction",
    ],
    github: "https://github.com/shashankshetty1",
    live: "mailto:shashankshetty123@gmail.com",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    period: "February 2025",
    type: "Group Project",
    highlight: false,
  },
  {
    title: "Gesture Key Virtual Keyboard",
    description:
      "Virtual keyboard to enhance user experience and accessibility across desktops, laptops, tablets, and smartphones. Features customization and adaptability, allowing users to tailor their input interface to their needs.",
    tech: ["OpenGL", "Python", "Computer Vision", "UI/UX"],
    github: "https://github.com/shashankshetty1",
    live: "mailto:shashankshetty123@gmail.com",
    image:
      "https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg?w=600&h=400&fit=crop",
    period: "July 2024",
    type: "Personal Project",
    highlight: false,
  },
  {
    title: "RiceMill Website",
    description:
      "Created a responsive website for a rice mill to help improve its online presence and make it easier for people to find information. The website includes a map to the location, contact details, and a live weather report to help with daily planning. This project shows how I built a complete frontend website for real industry use.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Weather API"],
    github: "https://github.com/shashankshetty1",
    live: "https://harekrishnaricemill.netlify.app/",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
    period: "June 2024",
    type: "Industry Project",
    highlight: false,
  },
];

// =============================================================================
// ACHIEVEMENTS DATA
// =============================================================================

export interface Achievement {
  title: string;
  event: string;
  date: string;
  description: string;
  icon: LucideIcon;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "First Place – Volleyball Tournament",
    event: "UDAAN 2023, AMC Engineering College",
    date: "December 2023",
    description: "Recognized for outstanding performance and teamwork",
    icon: Trophy,
  },
  {
    title: "VTU Intercollegiate Volleyball Tournament",
    event: "Participant",
    date: "February 2022",
    description: "Contributing to team performance and fostering sportsmanship",
    icon: Award,
  },
];

// =============================================================================
// CERTIFICATIONS DATA
// =============================================================================

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  description: string;
  category: string;
  priority?: number;
}

export const CERTIFICATIONS: Certification[] = [
  // Current/Upcoming Certifications (2025)
  {
    name: "Java Full Stack Training",
    issuer: "Besant Technologies",
    date: "May 2025",
    description:
      "Comprehensive full stack development with Java, Spring Boot, and modern web technologies",
    category: "Development",
    priority: 1,
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "June 2025",
    description:
      "Java programming fundamentals, OOP concepts, and problem solving",
    category: "Programming",
    priority: 2,
  },
  {
    name: "HTML & CSS Bootcamp",
    issuer: "LetsUpgrade EdTech Pvt. Ltd",
    date: "March 2025",
    description:
      "Modern web development fundamentals, responsive design, and CSS frameworks",
    category: "Frontend",
    priority: 3,
  },

  // Completed Certifications (2024)
  {
    name: "Data Visualization using Python",
    issuer: "Infosys Springboard",
    date: "July 2024",
    description:
      "Creating interactive visualizations with Matplotlib, Seaborn, and Plotly",
    category: "Data Science",
    priority: 4,
  },
  {
    name: "Project Management",
    issuer: "Great Learning",
    date: "July 2024",
    description:
      "Project lifecycle, planning, execution strategies, and team management",
    category: "Management",
    priority: 5,
  },

  // Professional Certifications
  {
    name: "AWS Academy Graduate: AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024",
    description:
      "Cloud computing fundamentals, AWS services overview, and cloud architecture",
    category: "Cloud",
    priority: 6,
  },
];

// =============================================================================
// RESPONSIBILITIES DATA
// =============================================================================

export const RESPONSIBILITIES = [
  "Organized and led a cricket tournament in college, coordinating teams, managing schedules, and ensuring smooth operations",
  "Volunteered in organizing and managing college fest events, showcasing leadership and event management abilities",
];

// =============================================================================
// NAVIGATION DATA
// =============================================================================

export const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;
