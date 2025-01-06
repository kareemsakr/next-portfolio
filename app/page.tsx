import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profile_pic.jpg";
import Link from "next/link";
import {
  CodeBracketIcon,
  DocumentTextIcon,
  UsersIcon,
  ArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar px-6 pb-0 relative">
          <div className="flex-1">
            <p className="font-black text-4xl tracking-[-7px] hover:tracking-normal transition-all duration-300">
              KSAKR.IO
            </p>
          </div>
          <label
            htmlFor="hamburger_menu"
            className="swap swap-rotate md:hidden"
          >
            <input
              id="hamburger_menu"
              className={styles.hamburger_menu}
              type="checkbox"
            />
            <Bars3Icon className="swap-off size-8" />
            <XMarkIcon className="swap-on size-8" />
          </label>
          <div className={styles.my_menu}>
            <ul
              className={`flex flex-col text-lg font-semibold tracking-[-1px] border-2 border-foreground p-3 gap-2 bg-background shadow-2xl 
                md:text-2xl md:gap-6 md:flex-row md:shadow-none md:bg-transparent md:border-0`}
            >
              <li className="border-b-2 border-background hover:border-foreground transition-all duration-500 pr-16 md:pr-0 md:translate-x-0">
                <Link href="/#about_me">About Me</Link>
              </li>
              <li className="border-b-2 border-background hover:border-foreground transition-all duration-500 pr-16 md:pr-0 md:translate-x-0">
                <Link href="/#my_work">My Work</Link>
              </li>
              <li className="border-b-2 border-background hover:border-foreground transition-all duration-500 pr-16 md:pr-0 md:translate-x-0">
                <Link href="/#contact_me">Get In Touch</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="min-h-[calc(100vh-50px)] flex flex-col justify-center gap-6 p-6"
        >
          <p className="font-bold text-foreground text-opacity-70 pl-[2.3] md:pl-2 -mb-8">
            Hi, I&apos;M KAREEM
          </p>
          <h1 className="text-5xl md:text-9xl font-bold">
            FULL-STACK DEVELOPER
          </h1>
          <p className="pl-2 font-bold text-foreground text-opacity-60 text-md leading-8 md:text-2xl md:leading-10 lg:max-w-[50%] ">
            With a passion for crafting meaningful digital experiences that
            connect people. With a human-centered approach and collaborative
            mindset, I turn ideas into impactful solutions. Let&apos;s create
            something amazing together.
          </p>
          <div className="flex gap-4">
            <button className="font-bold border-2 border-foreground px-2 py-2 md:px-6 md:py-4 md:text-2xl md:border-4">
              Explore My Work
            </button>
            <button className="font-bold border-2 border-foreground px-2 py-2 md:px-6 md:py-4 md:text-2xl md:border-4">
              Contact Me
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <ArrowDownIcon className="size-12 animate-bounce-slow" />
            <p className="hidden rotate-90 -translate-x-6 -translate-y-4 md:block">
              SCROLL
            </p>
          </div>
        </section>

        <section
          id="about_me"
          className="flex flex-col gap-16 p-6 items-center"
        >
          <div className="flex gap-12 items-center flex-wrap justify-center">
            <div className="avatar">
              <div className="mask mask-squircle w-72 md:w-96">
                <Image
                  width={250}
                  height={250}
                  src={ProfilePic}
                  alt="profile picture"
                />
              </div>
            </div>
            <div className="md:max-w-[35%]">
              {/* <p className="text-lg leading-8 md:text-2xl md:leading-10 pb-6"> */}
              <p className="pl-2 pb-6 font-bold text-foreground text-opacity-60 text-md leading-8 md:text-2xl md:leading-10">
                My main skillset is bridging gaps between crossfunctional teams
                and stakeholders to foster harmony and drive results. From
                automating nationwide systems to enhancing user journeys for
                millions, my work is driven by the belief that understanding
                people is the key to solving complex challenges.
              </p>
              <ul className="flex gap-6 w-full justify-center">
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/kareem-sakr/"}
                  >
                    <Image src={LinkedinIcon} alt="linkedin icon" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={"https://github.com/kareemsakr"}>
                    <Image src={GithubIcon} alt="github icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <article className="flex flex-col gap-6 items-center">
            <h2 className="text-3xl">Here&apos;s what I bring to the table:</h2>
            <ul className="flex gap-6 max-w-[80%] flex-wrap">
              <li className="p-4 rounded-lg flex-1 font-semibold bg-kubio-color-5 flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <CodeBracketIcon className="size-12 text-papaya-orange" />
                  <h3 className="font-bold">Technical Skills</h3>
                </div>
                <p>
                  Well seasoned in all things Web. HTML, CSS, JavaScript, React,
                  Next.js and also Python and Laravel.
                </p>
              </li>
              <li className="p-4 rounded-lg flex-1 font-semibold bg-kubio-color-5 flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <DocumentTextIcon className="size-12 text-papaya-orange" />
                  <h3 className="font-bold">Robust Documentation</h3>
                </div>
                <p>
                  A focus on delivering robust documentation and fostering
                  seamless collaboration
                </p>
              </li>
              <li className="p-4 rounded-lg flex-1 font-semibold bg-kubio-color-5 flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <UsersIcon className="size-12 text-papaya-orange" />
                  <h3 className="font-bold">Stakeholder Management</h3>
                </div>
                <p>
                  Ensuring alignment between technical solutions and business
                  goals through clear communication and collaboration.
                </p>
              </li>
            </ul>
          </article>
        </section>

        <section id="my_work">
          <h2>Passion Projects That Solve Real Problems</h2>
          <p>
            Here&apos;s what I&apos;m building in my free time to bring value
            and joy to people&apos;s lives:
          </p>
          <ul>
            <li>
              Matchmaker App: A dating platform where real people, not
              algorithms, help users connect.
              <div>
                <button>View Project</button>
                <button>View Demo</button>
              </div>
            </li>
            <li>
              Writer&apos;s Productivity App: Helping writers meet daily word
              goals and rewarding consistency.
              <div>
                <button>View Project</button>
                <button>View Demo</button>
              </div>
            </li>
          </ul>
        </section>

        <section id="career_summary">
          <h2>Career Accomplishments That Make an Impact:</h2>
          <ul>
            <li>
              <h3>Gas Station Automation System (UAE)</h3>
              <p>
                Led the development of a nationwide system serving millions.
                Built user interfaces, backend APIs, and managed database
                operations. Collaborated directly with Abu Dhabi National Oil
                Company to deliver seamless solutions.
              </p>
            </li>
            <li>
              <h3>COVID Testing Desktop Application</h3>
              <p>
                Created a desktop app using OpenCV and AWS serverless backend
                for a startup revolutionizing decentralized medical testing.
                Delivered investor-ready demos and helped with regulatory
                compliance
              </p>
            </li>
            <li>
              <h3>Best Buy Canada Website</h3>
              <p>
                Enhanced UX for category menus, collaborated with UX designers
                to improve customer journeys, and contributed to launching a new
                customer returns system
              </p>
            </li>
          </ul>
        </section>

        <section id="contact_me">
          <p>
            Excited to collaborate on your next big idea? Let&apos;s make it
            happen. Reach out to me to discuss how we can work together!
          </p>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
