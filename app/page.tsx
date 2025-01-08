import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profile_pic.jpg";
import DatingAppPic from "@/public/dating_app.jpg";
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
              className={`flex flex-col text-lg font-semibold tracking-[-1px] p-3 gap-2 bg-background shadow-custom 
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
          <p className="font-bold text-black text-opacity-70 text-xs pl-[2.3] -mb-8 md:pl-2 md:text-base">
            I&apos;M KAREEM, YOUR <em>GUIDE</em> TO
          </p>
          <h1 className="text-5xl md:text-9xl font-bold">
            CODE FOR
            <br />
            <em>IMPACT</em>
          </h1>
          {/* <p className="pl-2 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10 lg:max-w-[50%] ">
            With a passion for crafting meaningful digital experiences that
            connect people. With a human-centered approach and collaborative
            mindset, I turn ideas into impactful solutions. Let&apos;s create
            something amazing together.
          </p> */}
          <div className="flex gap-4">
            <button className="font-bold border-2 border-foreground px-2 py-2 md:px-6 md:py-4 md:text-2xl md:border-4">
              My Work
            </button>
            <button className="font-bold border-2 border-foreground px-2 py-2 md:px-6 md:py-4 md:text-2xl md:border-4">
              Contact Me
            </button>
          </div>
          <div className="flex justify-center md:justify-end absolute bottom-0 right-0">
            <ArrowDownIcon className="size-12 animate-bounce-slow" />
            <p className="hidden rotate-90 -translate-x-6 -translate-y-4 md:block">
              SCROLL
            </p>
          </div>
        </section>

        <section
          id="about_me"
          className="flex flex-col gap-16 pt-2 pb-6 px-6 items-center"
        >
          <div className="shadow-custom flex gap-12 items-center flex-wrap justify-center py-8 px-2">
            <div className="avatar">
              <div className="mask mask-circle w-72 md:w-96">
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
              <p className="pl-2 pb-6 font-bold text-black text-opacity-50 text-md leading-8 md:text-2xl md:leading-10">
                <span className="text-black">Full-stack developer</span>{" "}
                crafting complex solutions - from automating{" "}
                <span className="text-black">nationwide systems </span>
                nationwide systems to enhancing{" "}
                <span className="text-black">user journeys for millions</span>.
                I bridge technical excellence with{" "}
                <span className="text-black">business needs</span> through clear
                <span className="text-black"> communication</span> and deep
                system understanding. Recently returned from SE Asia with fresh
                perspectives, seeking opportunities to create{" "}
                <span className="text-black"> meaningful impact </span>
                through{" "}
                <span className="text-black"> innovative solutions</span>.
              </p>
              <ul className="flex gap-6 w-full justify-center">
                <p className="font-bold">Find me on:</p>
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
          <article className="flex flex-col gap-10 items-center py-24 md:max-w-[80%]">
            <h2 className="text-4xl font-bold">What I bring to the table:</h2>
            <ul className="flex gap-6 flex-wrap">
              <li className="p-4 flex-1 font-semibold flex flex-col gap-6 shadow-custom min-h-[250px]">
                <div className="flex gap-2 items-center">
                  <CodeBracketIcon className="size-12 " />
                  <h3 className="font-bold text-xl">Technical Skills</h3>
                </div>
                <p className="pl-4 text-black text-opacity-70 text-md md:text-xl">
                  Seasoned in all things Web.{" "}
                  <span className="badge badge-outline text-black text-opacity-100">
                    HTML
                  </span>{" "}
                  <span className="badge badge-outline text-black text-opacity-100">
                    CSS
                  </span>{" "}
                  <span className="badge badge-outline text-black text-opacity-100">
                    JS
                  </span>{" "}
                  <span className="badge badge-outline text-black text-opacity-100">
                    React
                  </span>{" "}
                  <span className="badge badge-outline text-black text-opacity-100">
                    NEXT.JS
                  </span>{" "}
                  and also{" "}
                  <span className="badge badge-outline text-black text-opacity-100">
                    Python
                  </span>{" "}
                  <span className="badge badge-outline text-black text-opacity-100">
                    {" "}
                    PHP/Laravel
                  </span>
                </p>
              </li>
              <li className="p-4 flex-1 font-semibold flex flex-col gap-6 shadow-custom min-h-[250px]">
                <div className="flex gap-2 items-center">
                  <DocumentTextIcon className="size-12 " />
                  <h3 className="font-bold text-xl">Robust Documentation</h3>
                </div>
                <p className="pl-4 text-black text-opacity-70 text-md md:text-xl">
                  A focus on delivering robust documentation and fostering
                  seamless collaboration
                </p>
              </li>
              <li className="p-4 flex-1 font-semibold flex flex-col gap-6 shadow-custom min-h-[250px]">
                <div className="flex gap-2 items-center">
                  <UsersIcon className="size-12 " />
                  <h3 className="font-bold text-xl">Stakeholder Management</h3>
                </div>
                <p className="pl-4 text-black text-opacity-70 text-md md:text-xl">
                  Ensuring alignment between technical solutions and business
                  goals through clear communication and collaboration.
                </p>
              </li>
            </ul>
          </article>
        </section>

        <section id="my_work" className="p-6">
          <h2 className="text-4xl font-bold pb-10">
            Passion Projects with real <em>impact</em>:
          </h2>
          {/* <p className="text-lg font-semibold">
            Here&apos;s what I&apos;m building in my free time to bring value
            and joy to people&apos;s lives:
          </p> */}
          <ul className="flex gap-24 flex-wrap">
            <li className="flex-1 font-semibold flex flex-col gap-4 shadow-custom min-w-[150px] md:flex-row md:min-w-full md:max-h-[450px]">
              <div className="md:max-w-[40%] overflow-hidden">
                <Image
                  width={undefined}
                  height={undefined}
                  src={DatingAppPic}
                  alt="Match maker app screenshot"
                  className="w-full"
                />
              </div>

              <div className="flex flex-col md:gap-6 px-3 py-6 md:pb-10">
                <div>
                  <h3 className="font-bold text-xl md:text-3xl">SoulCurate</h3>
                  <h4 className="text-black text-opacity-50 font-[8px] md:text-base">
                    A dating app for people by people
                  </h4>
                </div>
                <p className="flex-1 pb-6 pl-1 font-bold text-black text-opacity-50 text-md leading-8 md:text-2xl md:leading-10">
                  A dating platform where <em>real</em> people, not algorithms,
                  help users connect.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button className="border-2 border-black p-1 md:px-3 md:py-2 md:text-lg">
                    View Project
                  </button>
                  <button className="border-2 border-black p-1 md:px-3 md:py-2 md:text-lg">
                    View Demo
                  </button>
                </div>
              </div>
            </li>
            <li className="flex-1 font-semibold flex flex-col gap-4 shadow-custom min-w-[150px] md:flex-row-reverse md:min-w-full md:max-h-[450px]">
              <div className="md:max-w-[40%] overflow-hidden">
                <Image
                  width={undefined}
                  height={undefined}
                  src={DatingAppPic}
                  alt="Match maker app screenshot"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col md:gap-6 px-3 py-6 md:pb-10">
                <div>
                  <h3 className="font-bold text-xl md:text-3xl">
                    Writer&apos;s Productivity App
                  </h3>
                  <h4 className="text-black text-opacity-50">
                    A minilmalist Productivity tool for writers
                  </h4>
                </div>
                <p className="flex-1 pl-1 pb-6 font-bold text-black text-opacity-50 text-md leading-8 md:text-2xl md:leading-10">
                  Helping writers meet daily word goals and rewarding
                  consistency.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button className="border-2 border-black p-1 md:px-3 md:py-2 md:text-lg">
                    View Project
                  </button>
                  <button className="border-2 border-black p-1 md:px-3 md:py-2 md:text-lg">
                    View Demo
                  </button>
                </div>
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
