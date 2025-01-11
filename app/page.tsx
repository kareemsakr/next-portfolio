import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profile_pic.jpg";
import DatingAppPic from "@/public/dating_app.jpg";
import WritingAppPic from "@/public/writing_app.jpg";
import Link from "next/link";
import {
  CheckCircleIcon,
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
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
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
            Creating meaningful digital products that improve people's lives.
            Bringing ideas to life with React, Next.js, and modern web
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
                I'm a passionate Full-Stack Developer with a proven track record
                of success in delivering innovative and user-centric digital
                solutions. Beyond my technical expertise, I'm a strong
                communicator and collaborator, adept at understanding business
                needs and translating them into impactful digital experiences.
                <br />
                In my free time, I enjoy exploring new technologies,
                contributing to open-source projects, and mentoring aspiring
                developers. I'm always eager to learn and grow, and I'm excited
                to contribute my skills to a challenging and rewarding role or
                project.
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
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div> */}
          </div>
        </section>

        <section id="my_work" className="p-6 mb-32">
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
            <li className="flex-1 font-semibold flex flex-col gap-4 shadow-custom min-w-[150px] md:flex-row md:min-w-full md:max-h-[525px]">
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
                  <h4 className="pl-1 pb-4 text-black text-opacity-60 text-xs md:text-base">
                    Reclaim your dating life from algorithms
                  </h4>
                  <div className="flex gap-2">
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
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg ">
                    View Case Study
                  </button>
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg">
                    Explore the App
                  </button>
                </div>
              </div>
            </li>
            <li className="flex-1 font-semibold flex flex-col gap-4 shadow-custom min-w-[150px] md:flex-row-reverse md:min-w-full md:max-h-[520px]">
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
                  <h4 className="pl-1 pb-4 text-black text-opacity-60 text-xs md:text-base">
                    Write daily, grow steadily
                  </h4>
                  <div className="flex gap-2">
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
                  day's work may feel small, a year of consistency creates
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
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg">
                    View Case Study
                  </button>
                  <button className="border-2 border-black p-1 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg">
                    Explore The App
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
            <button className="border-2 border-black p-2 transition-all duration-300 hover:shadow-button   md:px-3 md:py-2 md:text-lg">
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
