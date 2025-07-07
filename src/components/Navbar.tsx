import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isTransition, setIsTransition] = useState("");
  const location = useLocation();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    setTimeout(() => {
      document.body.classList.remove("transition-none!");
      setIsTransition("transition-colors duration-300");
    }, 250);
  }, []);

  const selected =
    "text-indigo-600 dark:text-sky-400 border-indigo-600 dark:border-sky-400";

  return (
    <nav
      className={`sticky top-0 z-50 border-gray-300 px-4 sm:px-12 md:px-24 dark:border-gray-600 ${isTransition}`}
    >
      <div className="container mx-auto flex max-w-[1000px] items-center justify-between">
        <Link to="/">
          <div className="group relative inline-block w-70 overflow-hidden p-4">
            <h1 className="lg:font-5xl block cursor-pointer text-2xl font-bold font-stretch-extra-expanded transition-all duration-300 group-hover:-translate-y-20 group-hover:opacity-50 group-hover:blur-md group-hover:text-shadow-transparent md:text-3xl">
              AD
            </h1>

            <div
              className="lg:font-5xl absolute inset-0 translate-y-full transform cursor-pointer p-4 pl-2 text-2xl font-black text-indigo-600 transition-all duration-300 group-hover:translate-y-0 md:text-3xl dark:text-sky-500"
              style={{ textShadow: "0 5px 15px var(--gradient-glow)" }}
            >
              Aidan DeGooyer
            </div>
          </div>
        </Link>
        <div className="hidden space-x-4 md:flex md:p-4">
          <Link to="/">
            <p
              className={`${location.pathname == "/" && location.hash == "" ? selected : ""} text-md border-background/0 my-1.5 cursor-pointer rounded-md border-b-2 px-1 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
            >
              Home
            </p>
          </Link>
          <Link to="/resume">
            <p
              className={`${location.pathname == "/resume" ? selected : ""} text-md border-background/0 my-1.5 cursor-pointer rounded-md border-b-2 px-1 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
            >
              Resume
            </p>
          </Link>
          <Link to="/portfolio">
            <p
              className={`${location.pathname == "/portfolio" ? selected : ""} text-md border-background/0 my-1.5 cursor-pointer rounded-md border-b-2 px-1 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
            >
              Portfolio
            </p>
          </Link>
          <Link to="/#contact">
            <p
              className={`${location.pathname == "/" && location.hash == "#contact" ? selected : ""} text-md border-background/0 my-1.5 cursor-pointer rounded-md border-b-2 px-1 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
            >
              Contact
            </p>
          </Link>
          <div
            className="group cursor-pointer rounded-full p-2 pb-0 transition-all duration-300"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun-icon lucide-sun stroke-black transition-all group-hover:stroke-indigo-600 dark:group-hover:stroke-sky-400"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon-icon lucide-moon stroke-white transition-all group-hover:stroke-indigo-600 dark:group-hover:stroke-sky-400"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </div>
        </div>

        <div className="mr-2 cursor-pointer pb-2 md:hidden">
          {theme === "light" ? (
            <div className="flex cursor-pointer space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun-icon lucide-sun stroke-black transition-all hover:stroke-indigo-600 dark:hover:stroke-sky-400"
                onClick={toggleTheme}
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
          ) : (
            <div className="flex cursor-pointer space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon-icon lucide-moon stroke-white transition-all hover:stroke-indigo-600 dark:hover:stroke-sky-400"
                onClick={toggleTheme}
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pb-4 md:hidden">
        <Link to="/">
          <p
            className={`${location.pathname == "/" ? selected : ""} text-md border-background/0 cursor-pointer rounded-md border-b-2 px-3 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
          >
            Home
          </p>
        </Link>
        <Link to="/resume">
          <p
            className={`${location.pathname == "/resume" ? selected : ""} text-md border-background/0 cursor-pointer rounded-md border-b-2 px-3 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
          >
            Resume
          </p>
        </Link>
        <Link to="/portfolio">
          <p
            className={`${location.pathname == "/portfolio" ? selected : ""} text-md border-background/0 cursor-pointer rounded-md border-b-2 px-3 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
          >
            Portfolio
          </p>
        </Link>
        <Link to="/#contact">
          <p
            className={`${location.pathname == "/#contact" ? selected : ""} text-md border-background/0 cursor-pointer rounded-md border-b-2 px-3 font-medium transition-all hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-sky-400 dark:hover:text-sky-400`}
          >
            Contact
          </p>
        </Link>
      </div>

      <div className="bg-background/50 pointer-events-none absolute -top-8 right-0 left-0 -z-10 h-36 w-full blur-md backdrop-blur-lg md:h-26" />
    </nav>
  );
}

export default Navbar;
