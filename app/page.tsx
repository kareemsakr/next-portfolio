import Image from "next/image";
import Logo from "@/public/next_logo.png";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profile_pic.jpg";
import Link from "next/link";
import {
  CodeBracketIcon,
  DocumentTextIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar p-6 pb-0">
          <div className="flex-1">
            <Image
              width={85}
              height={85}
              src={Logo}
              className="logo"
              alt="Logo"
            />
          </div>
          <div className="flex-none">
            <ul className="flex gap-6 text-lg font-semibold">
              <li>
                <Link href="/#about_me">About me</Link>
              </li>
              <li>
                <Link href="/#my_work">My work</Link>
              </li>
              <li>
                <Link href="/#contact_me">Get in touch</Link>
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
          <h1 className="text-6xl	">Hi, I&apos;m Kareem Sakr</h1>
          <p className="text-lg leading-8 md:text-2xl md:leading-10 md:max-w-[50%]">
            A full-stack developer passionate about building meaningful digital
            experiences that connect people and make the world a better place.
            With a human-centered approach and a knack for fostering
            collaboration, I turn ideas into impactful solutions. Whether
            you&apos;re a startup founder or a freelance client, let&apos;s
            create something amazing together.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary text-lg">Explore My Work</button>
            <button className="btn text-lg">Contact Me</button>
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
            <div className="md:max-w-[30%]">
              <p className="text-lg leading-8 md:text-2xl md:leading-10 pb-6">
                My main skillset is bridging gaps between crossfunctional teams
                and stakeholders to foster harmony and drive results. From
                automating nationwide systems to enhancing user journeys for
                millions, my work is driven by the belief that understanding
                people is the key to solving complex challenges.
              </p>
              <ul className="flex gap-6 w-full justify-start">
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
                  Next.js and much more.
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
