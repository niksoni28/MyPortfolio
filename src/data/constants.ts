export enum SkillNames {
  C = "c",
  CPP = "cpp",
  JAVA = "java",
  PYTHON = "python",
  JS = "js",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  BOOTSTRAP = "bootstrap",
  GIT = "git",
  GITHUB = "github",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.C]: {
    id: 1,
    name: "c",
    label: "C",
    shortDescription: "where pointers keep you humble 🖥️",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription: "DSA's favorite language, no cap 💪",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 3,
    name: "java",
    label: "Java",
    shortDescription: "write once, debug everywhere ☕",
    color: "#ea2d2e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 4,
    name: "python",
    label: "Python",
    shortDescription: "clean syntax, questionable indentation crises 🐍",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JS]: {
    id: 5,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95 🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 6,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad, still bussin' 🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 7,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip 💁‍♂️",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 8,
    name: "react",
    label: "React",
    shortDescription: "components all the way down 🧩",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now' 🔙",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard 🚂",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip 🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 12,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "grids and components on tap 🅱️",
    color: "#7952b3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard 🕵️‍♂️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

// Repurposed as an Education + Achievements timeline since there's no job
// history yet — same card layout as a work-experience timeline.
export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2024",
    endDate: "Active",
    title: "Master of Computer Applications (MCA)",
    company: "Indian Institute of Information Technology, Bhopal",
    description: [
      "Building full-stack applications on the MERN stack with hands-on experience integrating AI/LLM APIs (OpenAI, OpenRouter) into production-style projects.",
      "Comfortable across the stack — REST API design, authentication systems, and database modeling.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.JS,
    ],
  },
  {
    id: 2,
    startDate: "May 2020",
    endDate: "Jun 2023",
    title: "Bachelor of Science, Computer Science (BSc)",
    company: "Govt. Holkar (Model Autonomous) Science College, Indore, MP",
    description: [
      "Built a foundation in core CS concepts — Data Structures & Algorithms, OOP, Operating Systems, Computer Networks, and DBMS.",
    ],
    skills: [SkillNames.C, SkillNames.CPP, SkillNames.JAVA, SkillNames.PYTHON],
  },
  {
    id: 3,
    startDate: "",
    endDate: "",
    title: "Certifications & Achievements",
    company: "",
    description: [
      "Craft Precise Prompts for AI Models — IBM SkillsBuild, issued Jul 2026.",
      "Strengthened problem-solving and DSA skills by solving 200+ coding problems across LeetCode and GeeksforGeeks.",
      "AIR 945 in NIMCET (NIT MCA Common Entrance Test), June 2023.",
      "92.5 percentile in MAH-CET (Maharashtra Common Entrance Test), March 2023.",
      "90 percentile in KIITEE (KIIT Entrance Exam), March 2023.",
    ],
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
