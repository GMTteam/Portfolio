import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiSwift,
  SiCplusplus,
  SiPaypal,
  SiWordpress,
  SiPhp,
  SiMysql,
  SiCsharp,
  SiUnity,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Demo
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
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
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  swift: {
    title: "Swift",
    bg: "black",
    fg: "white",
    icon: <SiSwift />,
  },
  paypal: {
    title: "PayPal",
    bg: "black",
    fg: "white",
    icon: <SiPaypal />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  // cplusplus: {
  //   title: "C++",
  //   bg: "black",
  //   fg: "white",
  //   icon: (
  //     <span>
  //       <strong>Y</strong>js
  //     </span>
  //   ),
  // },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  wordpress: {
    title: "WordPress",
    bg: "black",
    fg: "white",
    icon: <SiWordpress/>,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp/>,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  csharp: {
    title: "C#",
    bg: "black",
    fg: "white",
    icon: <SiCsharp />,
  },
  unity: {
    title: "Unity",
    bg: "black",
    fg: "white",
    icon: <SiUnity/>,
  },
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
  model?: string;
};
const projects: Project[] = [
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png", "skills.png", "about.png", "projects.png"],
    live: "http://andree-portfolio.vercel.app",
    github:"https://github.com/GMTteam/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            most amazing way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/about.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "vilandtravel",
    category: "Booking Tour Website",
    title: "Viland Travel",
    src: "/assets/projects-screenshots/vilandtravel/vilandtravel-home.png",
    screenshots: ["vilandtravel-home.png"],
    live: "https://vilandtravel.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.wordpress,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.sanity,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Viland Travel is a booking tour website that offers a wide range of
            travel packages to destinations around the world. With a clean,
            modern design and user-friendly interface, Viland Travel makes it
            easy.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest travel
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[
            `${BASE_PATH}/vilandtravel/vilandtravel-home.png`,
            `${BASE_PATH}/vilandtravel/vilandtravel-tour.png`

            ]}   
          />
        </div>
      );
    },
  },
  {
    id: "thirdperson",
    category: "Unity Game",
    title: "Third Person Hunter",
    src: "/assets/projects-screenshots/thirdPerson/mockup.png",
    screenshots: ["Capture.PNG", "2.png", "3.png", "4.png"],
    model: "/assets/macbook-pro.glb",
    live: "",
    github: "https://github.com/cuoicungtui/Third-Person",
    skills: {
      frontend: [PROJECT_SKILLS.csharp, PROJECT_SKILLS.unity],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Third Person Hunter is a thrilling action game that puts you in the
            shoes of a hunter on a mission to take down dangerous creatures. The
            game features stunning graphics, intense combat, and a gripping
            storyline that will keep you on the edge of your seat.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/thirdPerson/2.png`,
            `${BASE_PATH}/thirdPerson/3.png`,
            `${BASE_PATH}/thirdPerson/4.png`,
            ]} 
          />
        </div>
      );
    },
  },
  {
    id: "shopizilla",
    category: "E-commerce iOS App",
    title: "Shopizilla",
    src: "/assets/projects-screenshots/shopizilla/mockup.png",
    screenshots: ["shopizilla-home.png"],
    model: "/assets/iphone-11.glb",
    skills: {
      frontend: [
        PROJECT_SKILLS.swift,
      ],
      backend: [
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.paypal
      ],
    },
    live: "https://www.youtube.com/watch?v=ao2ymOi3nvQ&ab_channel=T%C3%BANguy%E1%BB%85nAnh",
    github: "https://github.com/GMTteam/Shopizilla.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Shopizilla - The ultimate shopping experience on your fingertips on iOS
          </TypographyP>
          <TypographyP className="font-mono ">
            Shopizilla is a one-stop solution for all your shopping needs. With
            a sleek, user-friendly interface, it offers a seamless shopping
            experience that is both efficient and enjoyable. Whether you are
            looking for the latest fashion trends, tech gadgets, or home
            essentials, Shopizilla has you covered.           
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
          <p className="font-mono mb-2">
            The app was designed to address the following challenges:
            UI + UX: Create a visually appealing and user-friendly interface
            that enhances the shopping experience.
            Performance: Ensure the app is fast, responsive, and easy to
            navigate.
            Payment Integration: Integrate PayPal for secure and convenient
            payments.
            Chat Feature: Implement a chat feature to enable users to
            communicate and collaborate in real-time.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shopizilla/shopizilla-home.png`,
              `${BASE_PATH}/shopizilla/shopizilla-filter.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "taskor",
    category: "Task Manager App",
    title: "Taskor",
    src: "/assets/projects-screenshots/taskor/mockup.png",
    screenshots: ["Screenshot-loading.png", "Screenshot-taskScreen.png", "Screenshot-timelineScreen.png", "Screenshot-calendarScreen.png", "Screenshot-cateScreen.png"],
    model: "/assets/iphone-12.glb",
    live: "https://www.youtube.com/watch?v=5bGNcBDdhu8&ab_channel=T%C3%BANguy%E1%BB%85nAnh",
    github: "https://github.com/GMTteam/taskor",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Taskor is a task manager app that helps you stay organized and
            productive. With a sleek, modern design and intuitive user
            interface, Taskor makes it easy to create, manage, and track your
            tasks, so you can focus on what matters most.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Key features of Taskor include:
            Task Creation: Easily create new tasks with just a few clicks.
            Task Management: Organize your tasks into categories and set due dates.
            Task Tracking: Monitor your progress and stay on top of deadlines.
          </p>
          <SlideShow images={[`${BASE_PATH}/taskor/Screenshot-loadingScreen.png`]} />
          <TypographyH3 className="my-4 ">Tasks</TypographyH3>
          <p className="font-mono mb-2">
            View all your tasks at a glance, with color-coded categories and
            due dates for easy reference.
            Drag and Drop: Rearrange tasks and categories with a simple drag and
            drop interface.
            Task Details: Click on a task to view more details, add notes, and
            mark as complete.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/taskor/Screenshot-taskScreen.png`,
              `${BASE_PATH}/taskor/Screenshot-taskDetail.png`,
              `${BASE_PATH}/taskor/Screenshot-timelineScreen.png`,
              `${BASE_PATH}/taskor/Screenshot-dndTaskScreen.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

          <p className="font-mono mb-2">
            Organize your tasks into categories for easy navigation and
            prioritization.
            Add, edit, and delete categories as needed to keep your tasks
            organized.
            Drag and Drop: Rearrange categories to customize your workflow.
          </p>
          <SlideShow images={[
            `${BASE_PATH}/taskor/Screenshot-cateScreen.png`,
            `${BASE_PATH}/taskor/Screenshot-dndCateScreen.png`
          ]} />
          <TypographyH3 className="my-4 mt-8">Calendar</TypographyH3>
          <p className="font-mono mb-2">
            View your tasks on a calendar to visualize your schedule and plan
            ahead.
            Click on a date to see all tasks due on that day and add new tasks
            directly from the calendar.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/taskor/Screenshot-calendarScreen.png`,
              `${BASE_PATH}/taskor/Screenshot-taskDetail-Calendar.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "flappybird",
    category: "Unity Game",
    title: "Flappy Bird",
    src: "/assets/projects-screenshots/flappyBird/mockup.jpeg",
    screenshots: ["1.PNG", "2.PNG", "3.PNG", "4.PNG, 5.PNG, 6.PNG"],
    model: "/assets/iphone-13.glb",
    live: "",
    github:"https://github.com/cuoicungtui/Flappybird",
    skills: {
      frontend: [PROJECT_SKILLS.csharp, PROJECT_SKILLS.unity],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Flappy Bird is a classic game that has been reimagined in Unity. The
            game features the same addictive gameplay as the original, with a
            few modern twists to keep things fresh.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/flappyBird/1.PNG`,
              `${BASE_PATH}/flappyBird/2.PNG`,
              `${BASE_PATH}/flappyBird/3.PNG`,
              `${BASE_PATH}/flappyBird/4.PNG`,
              `${BASE_PATH}/flappyBird/5.PNG`,
              `${BASE_PATH}/flappyBird/6.PNG`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
