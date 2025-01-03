import Image from "next/image";
import Logo from "@/public/next_logo.png";
import Link from "next/link";

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
          <p className="text-lg leading-8">
            A full-stack developer passionate about building meaningful digital
            experiences that connect people and make the world a better place.
            With a human-centered approach and a knack for fostering
            collaboration, I turn ideas into impactful solutions. Whether
            you&apos;re a startup founder or a freelance client, let&apos;s
            create something amazing together.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Explore My Work</button>
            <button className="btn">Contact Me</button>
          </div>
        </section>
        <section id="about_me">
          <p>
            I&apos;m a developer with a rare combination of technical expertise
            and exceptional communication skills. My superpower is bridging gaps
            between developers, designers, and stakeholders to foster harmony
            within teams. From automating nationwide systems to enhancing user
            journeys for millions, my work is driven by the belief that
            understanding people is the key to solving complex challenges.
          </p>
          <article>
            <h2>Here&apos;s what I bring to the table:</h2>
            <ul>
              <li>
                Expertise in HTML, CSS, JavaScript, React, Next.js, and React
                Native.
              </li>
              <li>Creative coding with p5.js and Unity 3D.</li>
              <li>
                A focus on delivering robust documentation and fostering
                seamless collaboration
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
