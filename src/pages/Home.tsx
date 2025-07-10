import ReactiveCard from "@/components/ReactiveCard";
import CCLogo from "@/assets/C Logo@0.5x.png";
import HSLogo from "@/assets/icon.png";
import WaterLogo from "@/assets/water.png";
import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Project from "@/components/Project";

function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      // Delay slightly to ensure DOM is rendered
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);

      setTimeout(() => {
        document
          .getElementById("contactTitle")
          ?.classList.add("border-indigo-600", "dark:border-sky-500");
      }, 500);
    } else {
      document
        .getElementById("contactTitle")
        ?.classList.remove("border-indigo-600", "dark:border-sky-500");
    }
  }, [location]);

  return (
    <div className="home-container mx-auto flex max-w-[1000px] flex-col items-center px-4 sm:px-12 md:px-24">
      <div className="mb-8 text-center">
        <h1 className="pb-4 text-6xl font-bold">Aidan DeGooyer</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Software engineer with a love for technology and innovation.
        </p>
      </div>
      <div className="w-full text-left">
        <h2 className="z-10 mb-5 border-b-2 border-gray-200 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
          About me
        </h2>
        I'm a new graduate with degrees in Computer Science and Economics. I
        love tackling complex problems and have a keen eye for detail.
        Technology excites me, especially when it comes to building innovative
        solutions. I'm always looking for opportunities to apply my skills and
        creativity in a team that's pushing the boundaries of what's possible!
      </div>
      <Link to="/resume">
        <div className="group text-muted-foreground mt-4 flex cursor-pointer flex-row border-b-1 border-transparent text-2xl transition-all duration-200 group-hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400">
          <div>Go to Resume</div>
          <div className="mt-[0.3rem] ml-0 transition-all group-hover:ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </Link>
      <div className="mt-8 w-full text-left">
        <h2 className="z-10 mb-5 border-b-2 border-gray-200 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
          My Skills
        </h2>
      </div>
      {Skills()}
      <div className="mt-8 w-full text-left">
        <h2 className="z-10 mb-5 border-b-2 border-gray-200 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
          My Work
        </h2>
      </div>
      {FeaturedProjects()}
      <div className="w-full text-left" ref={contactRef}>
        <h2
          className="z-10 mb-5 border-b-2 border-gray-200 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700"
          id="contactTitle"
        >
          Contact Me
        </h2>
      </div>

      <div className="mb-8 flex w-full max-w-[650px] flex-col items-center space-y-4 selection:bg-indigo-500! dark:selection:bg-sky-500!">
        <p className="text-foreground">
          If you have any questions or would like to get in touch, feel free to
          reach out using the form below.
        </p>

        <form
          action="https://formsubmit.co/601f8cd864276aafb44535bb50edc7ed"
          method="POST"
          className="flex w-full flex-col space-y-4"
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-[.75rem] border-gray-200 dark:border-gray-700 dark:focus:border-sky-400"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-[.75rem] border-gray-200 dark:border-gray-700 dark:focus:border-sky-400"
          />
          <Textarea
            name="message"
            placeholder="Message"
            required
            className="h-32 w-full resize-y rounded-[.75rem] border-gray-200 dark:border-gray-700 dark:focus:border-sky-400"
          />
          <div className="flex w-full justify-end">
            <Button className="rounded-[0.5rem]" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;

function FeaturedProjects() {
  return (
    <div className="mx-auto mb-8 flex max-w-[800px] flex-col items-center space-y-4">
      <Project
        title={"College Counter"}
        description={
          "College Counter is a web application that allows anyone to follow collegiate Counter-Strike matches. Users can view upcoming matches, past matches, and team statistics."
        }
        tools={["React", "Django", "PostgreSQL", "Google Cloud"]}
        image={CCLogo}
        imageFull
        buttonOnClick={() => {
          window.open("https://collegecounter.org", "_blank");
        }}
      />

      <Project
        title={"Higher Skills"}
        description={
          "Higher Skills is a cutting-edge training platform dedicated to equipping individuals with the tools they need to excel in today's competitive job market. Higher Skills aims to assess, teach, and refine soft skills through AI-guided simulations."
        }
        tools={["WebRTC", "OpenCV", "LLaMa", "OpenAI TTS"]}
        image={HSLogo}
        buttonOnClick={() => {
          window.open(
            "https://www.fairfield.edu/news/2024/april/start-up-showcase-team-higher-skills.html",
            "_blank",
          );
        }}
      />

      <Project
        title={"Home Water Meter"}
        description={
          "The water meter is a sensing system that I designed, built, and installed into my home's water storage system. It uses an ultrasonic sensor to determine water level and displays that information on a custom frontend in kiosk mode."
        }
        tools={["Flask", "Raspberry Pi/Linux", "HTML/CSS"]}
        image={WaterLogo}
        buttonOnClick={() => {
          window.open(`${window.location.origin}/watermeter.html`, "_blank");
        }}
      />

      <Link to="/portfolio" id="header">
        <div className="group text-muted-foreground mt-4 flex cursor-pointer flex-row border-b-1 border-transparent text-2xl transition-all duration-200 group-hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400">
          <div>Go to Portfolio</div>
          <div className="mt-[0.3rem] ml-0 transition-all group-hover:ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Skills() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="mx-0 flex flex-wrap items-center justify-center gap-8 sm:mx-16 lg:mx-0 lg:flex-row">
        <ReactiveCard b={255} animated>
          <div className="w-full px-4 md:w-100 lg:h-50 lg:w-60">
            <div className="flex text-2xl font-semibold">
              Full-Stack Development
            </div>
            <p className="text-muted-foreground">
              Proficient in developing full-stack applications using TypeScript,
              Python, and Java, with a focus on clean architecture and
              maintainability.
            </p>
          </div>
        </ReactiveCard>

        <ReactiveCard r={255} animated>
          <div className="w-full px-4 md:w-100 lg:h-50 lg:w-60">
            <div className="flex text-2xl font-semibold">
              Scalable System Design
            </div>
            <p className="text-muted-foreground">
              Strong foundation in system design principles with the ability to
              create scalable, resilient, and maintainable software systems.
            </p>
          </div>
        </ReactiveCard>

        <ReactiveCard g={255} animated>
          <div className="w-full px-4 md:w-100 lg:h-50 lg:w-60">
            <div className="flex text-2xl font-semibold">
              Applied AI & Machine Learning
            </div>
            <p className="text-muted-foreground">
              Practical experience in building and integrating AI solutions,
              including large language models (LLMs) and convolutional neural
              networks (CNNs).
            </p>
          </div>
        </ReactiveCard>
      </div>

      <div
        className={`mx-0 flex flex-wrap items-center justify-center gap-8 pb-8 transition-all duration-300 ease-in-out sm:mx-16 lg:mx-0 lg:flex-row ${
          expanded
            ? "mt-8 max-h-[1000px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ReactiveCard b={255} g={255} animated>
          <div className="w-full px-4 md:w-100 lg:h-50 lg:w-60">
            <div className="flex text-2xl font-semibold">
              Front-End & UI/UX Design
            </div>
            <p className="text-muted-foreground">
              Proficient in building responsive and accessible UIs with React,
              Next.js, and Tailwind CSS, ensuring accessibility and user
              engagement.
            </p>
          </div>
        </ReactiveCard>

        <ReactiveCard r={210} b={200} animated>
          <div className="w-full px-4 md:w-100 lg:h-50 lg:w-60">
            <div className="flex text-2xl font-semibold">
              Database Design & Optimization
            </div>
            <p className="text-muted-foreground">
              Strong understanding of relational databases such as PostgreSQL
              with a focus on performance and data integrity.
            </p>
          </div>
        </ReactiveCard>

        <ReactiveCard r={200} g={210} animated>
          <div className="w-full px-4 md:w-100 lg:h-50 lg:w-60">
            <div className="flex text-2xl font-semibold">
              DevOps & Cloud Hosting
            </div>
            <p className="text-muted-foreground">
              Skilled with Docker and experienced in deploying and managing
              applications across various cloud providers.
            </p>
          </div>
        </ReactiveCard>
      </div>
      <div onClick={toggleExpanded}>
        {expanded ? (
          <div className="group text-muted-foreground flex cursor-pointer flex-row text-2xl">
            <div>See Less</div>
            <div className="mt-[0.3rem] ml-1 -rotate-90 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="group text-muted-foreground flex cursor-pointer flex-row text-2xl">
            <div>See More</div>
            <div className="mt-[0.3rem] ml-1 transition-all group-hover:rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
