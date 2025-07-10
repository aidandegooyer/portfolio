import Button from "@/components/Button";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="home-container mx-auto flex max-w-[1000px] flex-col items-center px-4 sm:px-12 md:px-24">
      <div className="mb-8 text-center">
        <h1 className="px-2 pb-4 text-6xl font-bold">Resume</h1>
      </div>
      <div className="w-full text-left">
        <section className="resume-section">
          <h2 className="z-10 mb-5 border-b-2 border-gray-200 py-4 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
            Personal Information
          </h2>
          <ul>
            <li>
              <strong>Name:</strong> Aidan DeGooyer
            </li>
            <li>
              <strong>Email:</strong> aidandegooyer@gmail.com
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="z-10 mb-5 border-b-2 border-gray-200 py-4 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
            Education
          </h2>
          <h5>Syracuse University</h5>
          <p>2021-2025, GPA 3.8, Magna Cum Laude</p>
          <ul>
            <li>B.S. Computer Science</li>
            <li>B.A. Economics</li>
            <li>Tau Beta Pi Engineering Honor Society</li>
            <li>
              Relevant Coursework: Evolutionary Machine Learning, Design of OS,
              Object Oriented Programming in C++
            </li>
            <li>Awards: 8x Dean’s List</li>
            <li>Study Abroad: London, Fall 2023</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="z-10 mb-5 border-b-2 border-gray-200 py-4 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
            Experience
          </h2>
          <h5>Software Engineer at Higher Skills</h5>
          <p>Feb 2024 - Current</p>
          <ul>
            <li>
              Led a team that designed and developed AI-driven analysis software
              using Meta's LLaMa model and began the fine-tuning process.
            </li>
            <li>
              Designed and created a responsive and intuitive frontend for users
              to interact with this AI-driven simulation.
            </li>
            <li>Collected usage data to improve the model and product.</li>
            <li>
              Our product came in 2nd place at the Fairfield University StartUp
              Showcase, and tied for 1st at the UTA MavPitch competition.
            </li>
            <li>
              Secured over $20k in seed funding through these competitions.
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="z-10 mb-5 border-b-2 border-gray-200 py-4 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
            Projects
          </h2>
          <div className="my-4">
            <Link to="/portfolio" id="header">
              <Button className="group text-muted-foreground flex rounded-[0.5rem]">
                <div>Go to Portfolio</div>
                <div className="ml-0 transition-all group-hover:ml-2">
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
              </Button>
            </Link>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="z-10 mb-5 border-b-2 border-gray-200 py-4 pb-1 text-4xl transition-colors duration-300 dark:border-gray-700">
            Technical Skills
          </h2>
          <h5>Programming Languages</h5>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>TypeScript/JavaScript</li>
            <li>CSS/HTML</li>
          </ul>
          <h5>Tools</h5>
          <ul>
            <li>TensorFlow/Keras</li>
            <li>Git</li>
            <li>CUDA</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Django</li>
            <li>React</li>
            <li>PyTorch</li>
            <li>GUnicorn</li>
            <li>nginx</li>
          </ul>
          <h5>Skills:</h5>
          <ul>
            <li>Responsive Frontend Design</li>
            <li>Machine Learning</li>
            <li>Data Visuialization</li>
            <li>Evolutionary Algorithms</li>
            <li>Full-Stack Development and Deployment</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
