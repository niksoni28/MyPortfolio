import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor).
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips — mono SVGs where available locally, simple text marks
// otherwise (no network access here to fetch new icon files).
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const textMark = (title: string, label: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[10px] font-bold">{label}</span>,
});

const PROJECT_SKILLS = {
  react: brand("React.js", "react-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  express: brand("Express.js", "express-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  html: textMark("HTML", "HTML"),
  css: textMark("CSS", "CSS"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  jwt: textMark("JWT", "JWT"),
  openrouter: textMark("OpenRouter API", "AI"),
  razorpay: textMark("Razorpay", "₹"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "speakscore",
    category: "AI mock interview platform",
    title: "SpeakScore.AI",
    src: `${BASE_PATH}/speakscore/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.openrouter,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.razorpay,
      ],
    },
    live: "https://SpeakScore.AI",
    github: "https://github.com/niksoni28/speakscore-ai",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An AI-powered mock interview platform that turns any résumé into
            a full practice interview in seconds.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built on the MERN stack with the OpenRouter API (GPT-4o-mini),
            SpeakScore parses an uploaded résumé with pdfjs-dist and
            auto-generates role-specific questions across two interview
            modes — HR and Technical — in under 5 seconds.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Voice-synchronized AI interviewer
          </TypographyH3>
          <p className="font-mono mb-2">
            Real-time voice-synchronized AI avatars deliver questions
            naturally and capture spoken answers via the Web Speech API for
            speech-to-text responses.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/speakscore/interview.png`,
              `${BASE_PATH}/speakscore/modes.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Instant AI evaluation & analytics
          </TypographyH3>
          <p className="font-mono mb-2">
            An instant AI evaluation engine scores candidates on confidence,
            communication, and correctness immediately after each response —
            cutting manual interview-prep effort by an estimated 60–70% —
            backed by a Recharts analytics dashboard and jsPDF report
            export.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/speakscore/analysis.png`,
              `${BASE_PATH}/speakscore/history.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Auth, payments & setup flow
          </TypographyH3>
          <p className="font-mono mb-2">
            Firebase Google Authentication and JWT-based session handling
            secure every session, with a Razorpay payment gateway powering a
            credit-based subscription system.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/speakscore/setup.png`,
              `${BASE_PATH}/speakscore/features.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "taskflow",
    category: "Task management app",
    title: "TaskFlow",
    src: `${BASE_PATH}/taskflow/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.jwt,
      ],
    },
    // No public repo link available right now.
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A full-stack MERN task management app with real-time status
            tracking and multi-user collaboration.
          </TypographyP>
          <TypographyP className="font-mono ">
            Dynamic task creation, checklists, and status tracking are
            backed by secure JWT-based authentication and role-based task
            assignment for multi-user collaboration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            RESTful APIs & responsive dashboard
          </TypographyH3>
          <p className="font-mono mb-2">
            RESTful APIs connect the frontend and backend, enabling
            real-time updates across a responsive, mobile-friendly
            dashboard.
          </p>
          <SlideShow images={[`${BASE_PATH}/taskflow/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "spotify-clone",
    category: "Music streaming UI",
    title: "Spotify Clone",
    src: `${BASE_PATH}/spotify-clone/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    // No public repo link available right now.
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A fully responsive music streaming UI replicating core Spotify
            functionality.
          </TypographyP>
          <TypographyP className="font-mono ">
            Playlist browsing and a functional playback bar are built with
            song management and playback logic in vanilla JavaScript,
            ensuring smooth interaction across devices.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            No frameworks, just fundamentals
          </TypographyH3>
          <p className="font-mono mb-2">
            A consistent, responsive layout built with plain HTML and CSS —
            no external frameworks.
          </p>
          <SlideShow images={[`${BASE_PATH}/spotify-clone/landing.png`]} />
        </div>
      );
    },
  },
];
export default projects;
