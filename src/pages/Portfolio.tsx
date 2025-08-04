import Project from "@/components/Project";
import CCLogo from "@/assets/C Logo@0.5x.png";
import HSLogo from "@/assets/icon.png";
import WaterLogo from "@/assets/water.png";
import EyesightLogo from "@/assets/eyesight.png";
import Globe from "@/assets/globe.svg";

function Portfolio() {
  return (
    <div className="home-container mx-auto flex max-w-[1000px] flex-col items-center px-4 sm:px-12 md:px-24">
      <div className="mb-8 text-center">
        <h1 className="px-2 pb-4 text-6xl font-bold" id="header">
          Portfolio
        </h1>
      </div>
      <div className="w-full space-y-4 text-left">
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
          title={"Eyesight Records"}
          description={
            "Created a landing page for my record label, Eyesight Records. The page showcases the label's artists and their music, providing a platform for fans to discover new music."
          }
          tools={["NextJS", "Sanity CMS", "Social Media Integration"]}
          image={EyesightLogo}
          buttonOnClick={() => {
            window.open("https://www.eyesightrecords.com", "_blank");
          }}
          imageFull
        />

        <Project
          title={"This Website"}
          description={
            "This website is built from scratch using React and TypeScript, showcasing my portfolio and projects. It is designed to be responsive and user-friendly, providing an overview of my work and skills."
          }
          tools={["React", "GitHub Pages"]}
          image={Globe}
          buttonDisabled
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
      </div>
    </div>
  );
}

export default Portfolio;
