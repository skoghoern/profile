import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react"; // Using lucide-react for icons

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      {/* Main Content Card */}
      <div className="w-full max-w-3xl bg-white dark:bg-slate-800/80 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="p-6 sm:p-10 text-center relative">
          {/* Profile Picture - Enhanced positioning and styling */}
          <div className="mb-8 flex justify-center">
            {" "}
            {/* Center the image container */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              {" "}
              {/* Container for image */}
              <Image
                // src="/profile/profile.jpg" // Explicitly include basePath
                src="/profile/profile.jpg" // Path relative to the public directory
                alt="Profile Picture"
                width={150} // Add width
                height={150} // Add height
                className="rounded-full mb-4"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-slate-900 dark:text-white tracking-tight">
            Your Name
          </h1>
          {/* Title/Tagline */}
          <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-6 italic">
            Your Title / Tagline (e.g., Software Engineer)
          </p>

          {/* Bio Section */}
          <section className="mb-8 text-base sm:text-lg leading-relaxed max-w-xl mx-auto border-t border-slate-200 dark:border-slate-700 pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Write a short and engaging bio about yourself here. Mention your
              interests, skills, or what you are passionate about. Keep it
              concise but informative! Highlight key achievements or
              aspirations.
            </p>
          </section>

          {/* Social Links Section */}
          <section className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
              Connect
            </h2>
            <div className="flex justify-center space-x-5">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Github size={30} /> {/* Slightly larger icon */}
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Linkedin size={30} /> {/* Slightly larger icon */}
              </a>
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Twitter size={30} /> {/* Slightly larger icon */}
              </a>
              {/* Add more links with icons as needed */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
