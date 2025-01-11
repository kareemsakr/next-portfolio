import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profile_pic.jpg";
import DatingAppPic from "@/public/dating_app.jpg";
import WritingAppPic from "@/public/writing_app.jpg";
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
          <p className="font-bold text-black text-opacity-60 text-xs pl-[2.3] -mb-8 md:pl-2 md:text-base">
            I&apos;M KAREEM, I <em>BUILD</em>
          </p>
          <h1 className="text-5xl md:text-9xl font-bold">
            TECH THAT
            <br />
            <em>IMPACTS</em>
          </h1>
          <p className="pl-2 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10 lg:max-w-[50%] ">
            Crafting digital experiences that deliver **results**.
          </p>
          <div className="flex gap-4">
            <button className="font-bold border-2 border-foreground px-2 py-2 transition-all duration-300 hover:shadow-button md:px-6 md:py-4 md:text-2xl md:border-4">
              Explore My Projects
            </button>
            <button className="font-bold border-2 border-foreground px-2 py-2 transition-all duration-300 hover:shadow-button md:px-6 md:py-4 md:text-2xl md:border-4">
              Start Your Project
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
            <h2 className="text-4xl font-bold basis-full	text-center">
              About me
            </h2>
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
              <p className="pl-2 pb-6 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10">
                A <span className="text-black">Full-stack developer</span>{" "}
                crafting complex solutions - from automating{" "}
                <span className="text-black">nationwide systems </span>
                to enhancing{" "}
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
                <p className="pl-4 text-black text-opacity-60 text-md md:text-xl">
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
                  </span>{" "}
                  and much more.
                </p>
              </li>
              <li className="p-4 flex-1 font-semibold flex flex-col gap-6 shadow-custom min-h-[250px]">
                <div className="flex gap-2 items-center">
                  <DocumentTextIcon className="size-12 " />
                  <h3 className="font-bold text-xl">Robust Documentation</h3>
                </div>
                <p className="pl-4 text-black text-opacity-60 text-md md:text-xl">
                  A focus on delivering comprehensive documentation and
                  fostering seamless collaboration.
                </p>
              </li>
              <li className="p-4 flex-1 font-semibold flex flex-col gap-6 shadow-custom min-h-[250px]">
                <div className="flex gap-2 items-center">
                  <UsersIcon className="size-12 " />
                  <h3 className="font-bold text-xl">Stakeholder Management</h3>
                </div>
                <p className="pl-4 text-black text-opacity-60 text-md md:text-xl">
                  Ensuring alignment between technical solutions and business
                  goals through clear communication and collaboration.
                </p>
              </li>
            </ul>
          </article>
        </section>

        <section id="my_work" className="p-6 mb-32">
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

              <div className="flex flex-col md:gap-2 px-3 py-6 md:pb-10">
                <div className="pb-3">
                  <h3 className="font-bold text-xl md:text-3xl">SoulCurate</h3>
                  <h4 className="pl-1 text-black text-opacity-60 text-xs md:text-base">
                    Reclaim your dating life from algorithms
                  </h4>
                </div>
                <p className="flex-1 pb-6 pl-1 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10">
                  Our users are coupled up by human matchmakers who understand
                  the nuances of human connection. We believe in the power of
                  the human touch and the ability to connect people on a deeper
                  level.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button md:px-3 md:py-2 md:text-lg ">
                    Learn More
                  </button>
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button md:px-3 md:py-2 md:text-lg">
                    Explore the App
                  </button>
                </div>
              </div>
            </li>
            <li className="flex-1 font-semibold flex flex-col gap-4 shadow-custom min-w-[150px] md:flex-row-reverse md:min-w-full md:max-h-[450px]">
              <div className="md:max-w-[40%] overflow-hidden">
                <Image
                  width={undefined}
                  height={undefined}
                  src={WritingAppPic}
                  alt="Writing habit app screenshot"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col md:gap-2 px-3 py-6 md:pb-10">
                <div className="pb-3">
                  <h3 className="font-bold text-xl md:text-3xl">
                    Daily 700 Words
                  </h3>
                  <h4 className="pl-1 text-black text-opacity-60 text-xs md:text-base">
                    Writer's block doesn't stand a chance
                  </h4>
                </div>
                <p className="flex-1 pl-1 pb-6 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10">
                  Get your daily writing fix and build a habit of consistency.
                  We overesitmate what we can do in a day and underestimate what
                  we can do in a year. Watch your writing grow and your voice
                  develop.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button md:px-3 md:py-2 md:text-lg">
                    View Project
                  </button>
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button md:px-3 md:py-2 md:text-lg">
                    View Demo
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section id="career_summary" className="p-6">
          <h2 className="text-4xl font-bold pb-10">
            Career Accomplishments with major <em>Impact</em>:
          </h2>
          <ul>
            <li className="shadow-custom p-6 mb-6">
              <h3 className="font-bold text-xl md:text-3xl">
                Senior Front-end Developer
              </h3>
              <h4 className="pl-1 text-black text-opacity-60 text-xs md:text-base">
                BBY Canada, Vancouver, Canada
              </h4>
              <div className="flex-1 pl-1 pt-6 pb-6 font-bold text-black text-opacity-60 text-md leading-8 md:text-xl md:leading-10">
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Enhancing User Experience:
                  </span>{" "}
                  Spearheaded the redesign of key e-commerce components,
                  improving page load times by 25% and increasing customer
                  engagement metrics, such as time on site and conversion rates.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Leading Feature Development:
                  </span>{" "}
                  Led the development of dynamic, customer-facing features, such
                  as an advanced product filtering system, which resulted in a
                  15% improvement in user search satisfaction scores.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Cross-Team Collaboration:
                  </span>{" "}
                  Collaborated with UX designers, back-end developers, and
                  product managers to deliver seamless, responsive web solutions
                  that adhered to brand guidelines and met business goals.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Codebase Optimization:
                  </span>{" "}
                  Refactored legacy code to modern frameworks (e.g., React.js),
                  reducing technical debt and accelerating the onboarding
                  process for new developers by creating detailed documentation
                  and reusable components.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Mentoring and Leadership:
                  </span>{" "}
                  Mentored junior developers, conducted code reviews, and
                  facilitated knowledge-sharing sessions, fostering a
                  high-performing team and ensuring code quality and consistency
                  across projects.
                </p>
              </div>
            </li>

            <li className="shadow-custom p-6 mb-6">
              <h3 className="font-bold text-xl md:text-3xl">
                Tech. Lead at Y-Combinator Startup
              </h3>
              <h4 className="pl-1 text-black text-opacity-60 text-xs md:text-base">
                LSK Technologies Inc. (Now part of Nicoya) , Kitchener, Canada
              </h4>

              <div className="flex-1 pl-1 pt-6 pb-6 font-bold text-black text-opacity-60 text-md leading-8 md:text-xl md:leading-10">
                <p className="pb-6">
                  <span className="font-extrabod text-black">
                    Architecting a Decentralized System:
                  </span>{" "}
                  Designed and implemented a robust decentralized testing
                  platform leveraging AWS serverless architecture, ensuring
                  scalability and real-time processing for thousands of
                  simultaneous tests.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Developing an End-to-End Solution:
                  </span>{" "}
                  Delivered a fully operational desktop application that
                  integrated computer vision for test result analysis,
                  streamlining the diagnostic process and reducing human error.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Ensuring Regulatory Compliance:
                  </span>{" "}
                  Navigated complex medical and software regulations, working
                  closely with stakeholders to ensure the platform met stringent
                  compliance standards for deployment in medical environments.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Optimizing Performance and Cost:
                  </span>{" "}
                  Implemented serverless computing solutions that minimized
                  operational costs while maintaining high availability and
                  efficiency under heavy usage.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Leading a Cross-Functional Team:
                  </span>{" "}
                  Guided a multidisciplinary team of engineers, data scientists,
                  and QA specialists, fostering collaboration and delivering the
                  project ahead of schedule despite a fast-paced, high-stakes
                  environment.
                </p>
              </div>
            </li>

            <li className="shadow-custom p-6 mb-6">
              <h3 className="font-bold text-xl md:text-3xl">
                Software Engineer
              </h3>
              <h4 className="pl-1 text-black text-opacity-60 text-xs md:text-base">
                DIYAR United Company, UAE
              </h4>
              <div className="flex-1 pl-1 pt-6 pb-6 font-bold text-black text-opacity-60 text-md leading-8 md:text-xl md:leading-10">
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Designing a Nationwide Automation System:
                  </span>
                  Architected and developed a comprehensive system to automate
                  operations at gas stations, including POS systems, payment
                  processing, and inventory tracking, allowing millions of users
                  daily to have a zero contact experience at 400 gas stations in
                  the UAE.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Scaling for International Expansion:
                  </span>
                  Played a pivotal role in refining the platform, which was
                  later sold as a product internationally, showcasing the
                  scalability and adaptability of the solution.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Creating a Suite of Applications:
                  </span>
                  Delivered multiple interconnected applications, including
                  mobile apps for customers, management tools for station
                  operators, and backend systems for real-time data processing
                  and analytics.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Enhancing Reliability and Uptime:
                  </span>
                  Implemented robust monitoring and failover systems, achieving
                  over 99.99% uptime , which significantly reduced operational
                  disruptions for gas stations.
                </p>
                <p className="pb-6">
                  <span className="font-extrabold text-black">
                    Driving Cost Savings Through Automation:
                  </span>
                  Streamlined manual processes, reducing operational costs for
                  gas stations by improving efficiency, reducing human errors,
                  and enabling predictive maintenance.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section
          id="contact_me"
          className="flex flex-col items-center p-6 md:p-24 "
        >
          <h2 className="text-4xl font-bold pb-10 text-center">
            Let&apos;s <em>connect</em> and create something amazing together:
          </h2>
          <form
            className="flex flex-col gap-6 w-full max-w-[500px] items-center "
            action="https://formsubmit.co/kareem.h.sakr@gmail.com"
            method="POST"
          >
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 border-2 border-black"
              />
            </div>
            <div className="flex flex-col gap-2  w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border-2 border-black"
              />
            </div>
            <div className="flex flex-col gap-2  w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="p-2 border-2 border-black"
              ></textarea>
            </div>
            <button className="border-2 border-black p-2 transition-all duration-300 hover:shadow-button md:px-3 md:py-2 md:text-lg">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Kareem Sakr</p>
      </footer>
    </>
  );
}
