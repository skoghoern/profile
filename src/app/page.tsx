"use client"; // Add this directive for useState

import Image from "next/image";
import { Github, Linkedin } from "lucide-react"; // Removed Twitter import for now
import { useState } from "react"; // Import useState

export default function Home() {
  const [activeTab, setActiveTab] = useState<"about" | "projects">("about"); // State for active tab

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      {/* Main Content Card */}
      <div className="w-full max-w-3xl bg-white dark:bg-slate-800/80 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="p-6 sm:p-10 text-center relative">
          {/* Profile Picture and Name are now conditionally rendered inside the 'about' tab */}

          {/* Tab Navigation */}
          <div className="mb-8 border-b border-slate-200 dark:border-slate-700">
            <nav
              className="-mb-px flex justify-center space-x-8"
              aria-label="Tabs"
            >
              <button
                onClick={() => setActiveTab("about")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "about"
                    ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600"
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "projects"
                    ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600"
                }`}
              >
                Projects
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="text-left max-w-xl mx-auto">
            {" "}
            {/* Align content left */}
            {activeTab === "about" && (
              <section
                id="about"
                className="text-base sm:text-lg leading-relaxed"
              >
                {/* Profile Picture - Moved here */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <Image
                      src="/profile/profile.jpg" // Path relative to the public directory
                      alt="Profile Picture"
                      width={150}
                      height={150}
                      className="rounded-full"
                      priority // Prioritize loading the profile picture
                    />
                  </div>
                </div>

                {/* Name - Moved here */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-slate-900 dark:text-white tracking-tight">
                  Welcome!
                </h1>

                <p className="mb-6 text-slate-600 dark:text-slate-300 text-center">
                  Hi, I&apos;m Ben! My goal is to understand intelligence,
                  cognition and the mind.
                </p>
                {/* Existing Bio Section */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-6 text-center">
                  {" "}
                  {/* Centered Bio */}
                  <h3 className="text-xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
                    More About Me
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    My core passion lies at the intersection of the brain,
                    mathematics, and code. I&apos;m deeply curious about
                    unraveling the mathematical principles that govern how our
                    minds work. My goal is not just theoretical understanding,
                    but also translating these principles into tangible code,
                    aiming to simulate aspects of human cognition. My background
                    spans medicine, neurobiology, and cognitive science,
                    complemented by a keen interest in mathematics and
                    psychology, all driving my quest to understand the blueprint
                    of intelligence.
                  </p>
                </div>
              </section>
            )}
            {activeTab === "projects" && (
              <section
                id="projects"
                className="text-base sm:text-lg leading-relaxed"
              >
                <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200 text-center">
                  Projects
                </h2>
                <p className="mb-4 text-slate-600 dark:text-slate-300 text-center">
                  Here&apos;s an overview of some things I&apos;ve worked on.
                </p>

                {/* Project Example 1: Marimo Notebook */}
                <div className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800/50">
                  <h3 className="text-lg font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Visual Introduction to Active Inference
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    An introduction to programming active inference agents in
                    python with the pymdp package. Explore the concepts visually
                    and interactively.
                  </p>
                  <a
                    href="https://skoghoern.github.io/notebooks/visual-intro_active-inference.html" // Updated link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View Marimo Notebook
                  </a>
                </div>

                {/* Project Example 2: Active Inference GIF */}
                <div className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800/50">
                  <h3 className="text-lg font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Active Inference Loop
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    A brief visual explanation of the active inference concept.
                  </p>
                  <div className="flex justify-center my-4">
                    <Image
                      src="/profile/ActiveInferenceLoop.gif" // Assumes GIF is in public/profile
                      alt="Active Inference Loop GIF"
                      width={300} // Base width
                      height={200} // Base height
                      unoptimized={true} // Important for GIFs in Next.js Image component
                      className="rounded w-64 h-auto md:w-80 lg:w-96" // Responsive width classes, auto height
                    />
                  </div>
                </div>

                {/* Publications Section */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 text-center">
                    Publications
                  </h3>
                  {/* Paper 1 */}
                  <div className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Expression of Lineage Transcription Factors Identifies
                      Differences in Transition States of Induced Human
                      Oligodendrocyte Differentiation
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      Published in{" "}
                      <a
                        href="https://www.mdpi.com/2073-4409/11/2/241"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline italic"
                      >
                        Cells
                      </a>
                      , 2022.
                    </p>
                    <a
                      href="https://www.mdpi.com/2073-4409/11/2/241"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      View Publication
                    </a>
                  </div>
                  {/* Paper 2 */}
                  <div className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800/50">
                    <h4 className="text-lg font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      iPSC-modelling reveals genetic associations and
                      morphological alterations of oligodendrocytes in
                      schizophrenia
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Accepted by{" "}
                      <span className="italic">Translational Psychiatry</span>{" "}
                      (April 23, 2025). {/* Adjusted date format */}
                    </p>
                    {/* No link yet as it's accepted but not published */}
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Social Links Section - Kept at bottom */}
          <section className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-10">
            {" "}
            {/* Increased top margin */}
            <h2 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
              Connect
            </h2>
            <div className="flex justify-center space-x-5">
              <a
                href="https://github.com/skoghoern"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Github size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/benedikt-waldeck-604ab02b2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Linkedin size={30} />
              </a>
              {/* Add more links with icons as needed */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
