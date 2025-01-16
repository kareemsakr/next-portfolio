import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profile_pic.jpg";
import DatingAppPic from "@/public/dating_app.jpg";
import WritingAppPic from "@/public/writing_app.jpg";
import Link from "next/link";
import {
  ArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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
              <li className="border-b-2 border-background hover:border-foreground  transition-all duration-500 pr-16 md:pr-0 md:translate-x-0">
                <Link href="/#about_me">About Me</Link>
              </li>
              <li className="border-b-2 border-background hover:border-foreground  transition-all duration-500 pr-16 md:pr-0 md:translate-x-0">
                <Link href="/#my_work">My Work</Link>
              </li>
              <li className="border-b-2 border-background hover:border-foreground  transition-all duration-500 pr-16 md:pr-0 md:translate-x-0">
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
            I&apos;M KAREEM, A <em>FULL-STACK DEVELOPER</em>
          </p>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-900 to-papaya-orange">
              Digital
              <br />
              Solutions
            </span>
            That
            <br /> Matter
          </h1>

          <p className="pl-2 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10 lg:max-w-[50%] ">
            Creating meaningful digital products that improve people&apos;s
            lives. Bringing ideas to life with React, Next.js, and modern web
            technologies.
          </p>
          <div className="flex gap-4">
            <button className="font-bold border-2 border-foreground px-2 py-2 transition-all duration-300 hover:shadow-button   md:px-6 md:py-4 md:text-2xl md:border-4">
              Explore My Projects
            </button>
            <button className="font-bold border-2 border-foreground px-2 py-2 transition-all duration-300 hover:shadow-button   md:px-6 md:py-4 md:text-2xl md:border-4">
              Start Your Project
            </button>
          </div>
          <div className="flex justify-center md:justify-end absolute bottom-0 right-4">
            <ArrowDownIcon className="size-12 animate-bounce-slow" />
            <p className="hidden rotate-90 -translate-x-6 -translate-y-6 md:block">
              SCROLL
            </p>
          </div>
        </section>

        <section
          id="about_me"
          className="flex flex-col gap-16 pt-2 pb-6 px-6 items-center"
        >
          <div className="bg-white shadow-custom flex gap-12 items-center flex-wrap justify-center py-8 px-2">
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
                I&apos;m a passionate Full-Stack Developer with a proven track
                record of success in delivering innovative and user-centric
                digital solutions. Beyond my technical expertise, I&apos;m a
                strong communicator and collaborator, adept at understanding
                business needs and translating them into impactful digital
                experiences.
                <br />
                In my free time, I enjoy exploring new technologies,
                contributing to open-source projects, and mentoring aspiring
                developers. I&apos;m always eager to learn and grow, and
                I&apos;m excited to contribute my skills to a challenging and
                rewarding role or project.
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
        </section>
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What I Bring to the Table
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A unique blend of technical expertise, architectural knowledge,
                and leadership skills to deliver high-impact solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-100  text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Technical Expertise</h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Full-stack development with modern technologies
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-50 text-slate-600  text-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Tailwind CSS
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Redux
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        PHP/Laravel
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        RESTful APIs
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        GraphQL
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Cloud & DevOps
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        AWS
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Docker
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        CI/CD
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Microservices
                      </span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-600 text-sm">
                        Serverless
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white  shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-100  text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Best Practices & Architecture
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Building scalable and maintainable systems
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Clean Code & Design Patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Microservices Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Test-Driven Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Security Best Practices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white  shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-100 text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Leadership & Communication
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Driving team success and stakeholder alignment
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span>Led cross-functional teams of 5-10 developers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span>Mentored junior developers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span>Streamlined development processes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span>Improved team velocity by 40%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span>Reduced technical debt by 60%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="mt-16 text-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-600 text-white  font-semibold hover:bg-slate-700 transition-colors"
              >
                View My Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div> */}
          </div>
        </section>

        <section id="my_work" className="p-6 mb-32 container mx-auto">
          <header className="max-w-2xl mb-20">
            <span className="bg-slate-100 text-slate-600 py-2 px-4 text-sm font-semibold tracking-wide">
              FEATURED PROJECTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Crafting Digital Experiences with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-900 to-papaya-orange">
                Real Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Each project is crafted with a focus on user experience,
              performance, and business impact. Here are some highlights from my
              portfolio.
            </p>
          </header>
          {/* <p className="text-lg font-semibold">
            Here&apos;s what I&apos;m building in my free time to bring value
            and joy to people&apos;s lives:
          </p> */}
          <ul className="flex gap-24 flex-wrap">
            <li className="flex-1 font-semibold flex flex-col gap-4 shadow-lg hover:shadow-xl transition-all duration-300  min-w-[150px] md:flex-row md:min-w-full md:max-h-[525px]">
              <div className="md:max-w-[40%] overflow-hidden">
                <Image
                  width={undefined}
                  height={undefined}
                  src={DatingAppPic}
                  alt="Match maker app screenshot"
                  className="w-full"
                />
              </div>

              <div className="bg-white flex flex-col md:gap-2 px-3 py-6 md:pb-10">
                <div className="pb-3">
                  <h3 className="font-bold text-xl md:text-3xl">SoulCurate</h3>
                  <h4 className="pl-1 pb-4 text-black text-opacity-60 text-xs md:text-base">
                    Reclaim your dating life from algorithms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black/70 text-white text-sm backdrop-blur-sm">
                      NEXT.JS
                    </span>
                    <span className="px-3 py-1 bg-black/70 text-white text-sm backdrop-blur-sm">
                      Firebase/GCP
                    </span>
                    <span className="px-3 py-1 bg-black/70 text-white text-sm backdrop-blur-sm">
                      Vercel
                    </span>
                  </div>
                </div>
                <p className="flex-1 pb-6 pl-1 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10">
                  A dating app that puts human wisdom back into matchmaking. Our
                  community of experienced matchmakers helps create meaningful
                  connections, resulting in a 45% higher success rate compared
                  to algorithm-based apps.
                </p>
                {/* TODO: fill with real user stats here */}
                {/* <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />

                    <span>50,000+ active monthly users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />

                    <span>Featured in TechCrunch</span>
                  </li>
                  <li className="flex items-center gap-2 pb-6">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />

                    <span>4.8/5 App Store rating</span>
                  </li>
                </ul> */}
                <div className="flex gap-2 flex-wrap">
                  <Link href={"/project/soulcurate"}>
                    <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg ">
                      View Case Study
                    </button>
                  </Link>
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg">
                    Explore the App
                  </button>
                </div>
              </div>
            </li>
            <li className="flex-1 font-semibold flex flex-col gap-4 min-w-[150px] shadow-lg hover:shadow-xl transition-all duration-300 md:flex-row-reverse md:min-w-full md:max-h-[520px]">
              <div className="md:max-w-[40%] overflow-hidden">
                <Image
                  width={undefined}
                  height={undefined}
                  src={WritingAppPic}
                  alt="Writing habit app screenshot"
                  className="w-full"
                />
              </div>
              <div className="bg-white flex flex-col  md:gap-2 px-3 py-6 md:pb-10">
                <div className="pb-3">
                  <h3 className="font-bold text-xl md:text-3xl">
                    Daily 700 Words
                  </h3>
                  <h4 className="pl-1 pb-4 text-black text-opacity-60 text-xs md:text-base">
                    Write daily, grow steadily
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black/70 text-white text-sm backdrop-blur-sm">
                      Laravel/PHP
                    </span>
                    <span className="px-3 py-1 bg-black/70 text-white text-sm backdrop-blur-sm">
                      DigitalOcean
                    </span>
                  </div>
                </div>
                <p className="flex-1 pl-1 pb-6 font-bold text-black text-opacity-60 text-md leading-8 md:text-2xl md:leading-10">
                  Transform your writing through daily practice. While a single
                  day&apos;s work may feel small, a year of consistency creates
                  extraordinary results. Develop your craft, find your voice,
                  and watch your writing evolve.
                </p>
                {/* TODO: fill with real user stats */}
                {/* <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />

                    <span>25,000+ manuscripts completed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />

                    <span>85% user retention rate</span>
                  </li>
                  <li className="flex items-center gap-2 pb-6">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />

                    <span>Product Hunt #3 Product of the Day</span>
                  </li>
                </ul> */}
                <div className="flex gap-2 flex-wrap">
                  <Link href={"/project/700words"}>
                    <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg">
                      View Case Study
                    </button>
                  </Link>
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg">
                    Explore The App
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section id="career_summary" className="p-6 container mx-auto">
          <header className="max-w-2xl mb-20">
            <span className="bg-slate-100 text-slate-600 py-2 px-4 text-sm font-semibold tracking-wide">
              CAREER HIGHLIGHTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Notable Impact &amp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-900 from-papaya-orange">
                Key Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A track record of building products that users love and delivering
              solutions that make a difference.
            </p>
          </header>

          <div className="space-y-12">
            <article className="bg-white  p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <header className="border-b border-gray-100 pb-8 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Senior Frontend Developer
                </h3>
                <p className="text-lg text-gray-500 mt-2">BBY Canada</p>
              </header>

              <div className="space-y-8">
                <p className="text-xl text-gray-800">
                  Modernized e-commerce experiences and internal tools for
                  Canada's largest electronics retailer
                </p>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-slate-100 text-slate-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Built a dynamic category navigation system enabling
                        product teams to customize menu structures through CMS,
                        eliminating frontend development bottlenecks and
                        accelerating A/B testing of category layouts.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-purple-100 text-purple-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Led development of a greenfield store returns management
                        system, replacing legacy software with an intuitive
                        wizard-driven interface that enables store clerks to
                        process returns, verify eligibility, and manage customer
                        data.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-green-100 text-green-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Mentored junior developers, conducted code reviews, and
                        facilitated knowledge-sharing sessions, fostering a
                        high-performing team and ensuring code quality and
                        consistency across projects.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </article>

            <article className="bg-white  p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <header className="border-b border-gray-100 pb-8 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">Tech Lead</h3>
                <p className="text-lg text-gray-500 mt-2">
                  LSK Technologies (Y-Combinator Startup)
                </p>
              </header>

              <div className="space-y-8">
                <p className="text-xl text-gray-800">
                  Transformed a prototype medical diagnostics platform into a
                  production-ready system with clinical-grade reliability
                </p>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-indigo-100 text-indigo-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Completely rewrote and modernized a medical device
                        application from Python/Qt to TypeScript/React (Atom),
                        achieving 90% test coverage and comprehensive
                        documentation
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-yellow-100 text-yellow-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Architected a distributed system separating UI, hardware
                        interfaces, and analysis into discrete services,
                        improving reliability and maintainability
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-red-100 text-red-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Established software development lifecycle processes
                        including issue tracking, version control standards, and
                        quality assurance procedures aligned with medical
                        compliance requirements
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </article>

            <article className="bg-white  p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <header className="border-b border-gray-100 pb-8 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Software Engineer
                </h3>
                <p className="text-lg text-gray-500 mt-2">
                  DIYAR United Company
                </p>
              </header>

              <div className="space-y-8">
                <p className="text-xl text-gray-800">
                  Architected and delivered a nationwide contactless payment
                  system revolutionizing fuel station operations
                </p>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-emerald-100 text-emerald-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Led the development for a contactless fuel payment
                        system deployed across 400+ stations, integrating RFID
                        technology with real-time payment processing
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-pink-100 text-pink-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Architected and developed comprehensive system including
                        customer mobile app for account management and payments,
                        employee management portal, and station clerk desktop
                        applications
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-12 h-12  bg-orange-100 text-orange-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg">
                        Developed internal management platform enabling system
                        configuration, reporting, and monitoring across the
                        station network
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section
          id="contact_me"
          className="py-24 bg-gradient-to-b from-background to-white"
        >
          <div className="container mx-auto px-6">
            <header className="max-w-2xl mx-auto text-center mb-16">
              <span className="bg-slate-100 text-slate-600 py-2 px-4  text-sm font-semibold tracking-wide">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Let&apos;s Create Something
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-papaya-orange">
                  Exceptional
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you have a project in mind or just want to chat about
                technology, I&apos;m always open to discussing new
                opportunities.
              </p>
            </header>

            <div className="max-w-xl mx-auto">
              <form
                action="https://formsubmit.co/kareem.h.sakr@gmail.com"
                method="POST"
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3  border-2 border-gray-300 focus:border-slate-500 focus:ring focus:ring-slate-200 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3  border-2 border-gray-300 focus:border-slate-500 focus:ring focus:ring-slate-200 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3  border-2 border-gray-300 focus:border-slate-500 focus:ring focus:ring-slate-200 transition-colors resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 text-lg font-semibold text-white bg-black  hover:shadow-custom focus:outline-none focus:ring-4 focus:ring-slate-200 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-12 pt-12 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-700 mb-4">
                    Prefer to connect professionally?
                  </p>
                  <div className="flex justify-center gap-6">
                    <a
                      href="https://www.linkedin.com/in/kareem-sakr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-600 hover:text-slate-600 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/kareemsakr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center">
        <p>&copy; 2025 Kareem Sakr</p>
      </footer>
    </>
  );
}
