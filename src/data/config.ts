const config = {
  title: "Nikhil Soni | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Nikhil Soni, an MCA student at IIIT Bhopal and full-stack developer building MERN stack applications with hands-on experience integrating AI/LLM APIs. Discover my latest work, including SpeakScore.AI, TaskFlow, and a Spotify Clone. Let's build something amazing together!",
    short:
      "Discover the portfolio of Nikhil Soni, a full-stack developer building MERN stack apps with applied AI features.",
  },
  keywords: [
    "Nikhil Soni",
    "portfolio",
    "full-stack developer",
    "MERN stack",
    "web development",
    "SpeakScore.AI",
    "TaskFlow",
    "web design",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  author: "Nikhil Soni",
  email: "niksoni777.ns@gmail.com",
  // No custom domain yet — update this once deployed (e.g. to your Vercel URL).
  site: "https://nikhil-soni-portfolio.vercel.app",

  // GitHub stars button in the header is disabled (set both to enable it) —
  // point these at your own fork/repo once you publish this portfolio's code.
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/nikhil-soni-2b080228b/",
    instagram: "https://www.instagram.com/_.niksoni._/",
    github: "https://github.com/niksoni28",
  },
};
export { config };
