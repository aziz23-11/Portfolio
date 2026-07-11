import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Nav from "../components/Nav";
import Avatar3D from "../components/Avatar3D";
import { projects } from "../data/projects";

const skillGroups = [
  { title: "Backend", items: ["Python", "FastAPI", "MySQL", "java", "C"] },
  { title: "Frontend", items: ["React", "Tailwind"] },
  { title: "AI / ML", items: ["PyTorch", "spaCy"] },
  { title: "Graphic Design", items: ["Figma", "Photoshop", "Illustrator", "Canva"] },
];

const experience = [
  {
    year: "2026",
    role: "PFE — full-stack developer",
    org: "KHADAMNI project",
    desc: "Built a CV-to-job compatibility platform with NLP scoring and JWT auth.",
  },
  {
    year: "2024",
    role: "Graphic Designer Freelancer",
    org: "Posters, web design and social media posts",
    desc: "Creating elegant and modern design for all clients needs",
  },
  {
    year: "2023",
    role: "CS Student",
    org: "Starting college as a computer Science Student",
    desc: "",
  },
];

// Shared style for every pill/tag on the site: a violet outline that glows
// softly on hover in both light and dark mode.
const PILL_CLASS =
  "text-xs border border-violet-400 text-violet-700 dark:border-violet-700 dark:text-violet-300 rounded-full px-2 py-0.5 cursor-default transition-shadow duration-200 hover:border-violet-500 dark:hover:border-violet-400 hover:shadow-[0_0_10px_2px_rgba(167,139,250,0.55)] dark:hover:shadow-[0_0_10px_2px_rgba(167,139,250,0.45)]";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Home() {
  const location = useLocation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 0);
    }
  }, [location]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFormStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:azizbejawi2311@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus("sent");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans contrast-[1.05] transition-colors">
      <div className="max-w-4xl mx-auto border border-violet-200 dark:border-violet-900/40 rounded">
        <Nav />

        {/* Hero */}
        <section id="home" className="px-5 sm:px-8 pt-12 pb-10 text-center scroll-mt-16">
          <span className="inline-block text-xs border border-violet-300 text-violet-700 bg-violet-50 dark:border-violet-700 dark:text-violet-300 dark:bg-violet-950/40 rounded-full px-3 py-1 mb-5">
            available for new projects
          </span>
          <h1 className="text-2xl sm:text-3xl font-medium mb-2">
            Hey, I am{" "}
            <span className="text-violet-600 font-semibold dark:text-violet-400">
              Bejawi Aziz
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
            Computer science student — AI &amp; full-stack development &amp; Graphic designer
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
            I build cool software — Run on caffein &amp;
            Creat clean, functional design.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-violet-600 hover:bg-violet-700 text-white border border-violet-600 rounded px-5 py-2.5 text-sm transition-colors"
            >
              View my work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent text-violet-600 dark:text-violet-300 border border-violet-600 rounded px-5 py-2.5 text-sm hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-violet-200 dark:border-violet-900/40 px-5 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-8 items-center scroll-mt-16"
        >
          <div>
            <h2 className="text-xl font-medium mb-3">About me</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2.5">
              Studying computer science at the Superior Institute of computer Science in KEF,
              focused on machine learning, web development, and Graphic Design.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently working on a final-year project combining NLP and
              full-stack engineering, alongside a medical imaging model
              built on PyTorch.
            </p>
          </div>

          {/* Same 3D-tilt avatar in both light and dark mode — it tilts
              toward the cursor as you move it around the page. */}
          <div className="flex justify-center md:justify-end">
            <Avatar3D className="w-40 h-40 sm:w-48 sm:h-48" />
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-violet-200 dark:border-violet-900/40 px-5 sm:px-8 py-8">
          <h2 className="text-xl font-medium mb-4">Skills &amp; technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="border border-violet-200 bg-violet-50/40 dark:border-violet-900/50 dark:bg-gray-900/40 rounded p-4"
              >
                <p className="text-sm font-medium mb-2">{group.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className={PILL_CLASS}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-violet-200 dark:border-violet-900/40 px-5 sm:px-8 py-8">
          <h2 className="text-xl font-medium mb-5">Experience</h2>
          <div className="space-y-0">
            {experience.map((item, i) => (
              <div key={item.year} className="flex gap-3 sm:gap-4 mb-3.5 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-violet-600 bg-violet-600 text-white flex items-center justify-center text-xs font-medium shrink-0">
                    {item.year}
                  </div>
                  {i < experience.length - 1 && (
                    <div className="w-px flex-1 bg-violet-300 dark:bg-violet-800 mt-1" />
                  )}
                </div>
                <div className="border border-violet-200 bg-violet-50/40 dark:border-violet-900/50 dark:bg-gray-900/40 rounded px-4 py-3.5 flex-1 min-w-0">
                  <p className="text-sm font-medium mb-0.5">{item.role}</p>
                  <p className="text-xs text-violet-600 dark:text-violet-400 mb-1.5">{item.org}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-violet-200 dark:border-violet-900/40 bg-violet-50/50 dark:bg-black/40 px-5 sm:px-8 py-10 scroll-mt-16"
        >
          <h2 className="text-2xl font-medium text-center mb-1.5">
            My projects
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
            A selection of what I've built, from web apps to ML models.
          </p>
          {/* flex-wrap + fixed basis instead of a fixed-column grid: this way the
              cards always center themselves and never leave a lopsided empty
              gap when the project count isn't a multiple of 3 (e.g. 2 projects) */}
          <div className="flex flex-wrap justify-center gap-3.5">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.slug}
                  className="bg-white dark:bg-gray-900/60 border border-violet-200 dark:border-violet-900/50 rounded overflow-hidden w-full sm:w-[calc(50%-0.44rem)] md:w-[calc(33.333%-0.6rem)]"
                >
                  <div className="h-20 border-b border-violet-200 dark:border-violet-900/50 flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-violet-50 dark:from-violet-950 dark:via-gray-900 dark:to-black">
                    <Icon size={28} aria-hidden="true" className="text-violet-500 dark:text-violet-400" />
                  </div>
                  <div className="p-3.5">
                    <p className="text-sm font-medium mb-1">{project.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2.5">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex-1 text-center bg-violet-600 hover:bg-violet-700 text-white rounded py-1.5 text-xs transition-colors"
                      >
                        View details
                      </Link>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="shrink-0 border border-violet-300 text-violet-600 dark:border-violet-700 dark:text-violet-300 rounded-full p-1.5 flex items-center justify-center hover:bg-violet-50 dark:hover:bg-violet-950/40"
                      >
                        <Github size={14} aria-hidden="true" />
                      </a>
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} live demo`}
                          className="shrink-0 border border-violet-300 text-violet-600 dark:border-violet-700 dark:text-violet-300 rounded-full p-1.5 flex items-center justify-center hover:bg-violet-50 dark:hover:bg-violet-950/40"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-violet-200 dark:border-violet-900/40 px-5 sm:px-8 py-10 scroll-mt-16"
        >
          <h2 className="text-2xl font-medium text-center mb-6">
            Let's work together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <form onSubmit={handleSubmit}>
              <label className="text-xs block mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border border-violet-300 focus:border-violet-500 dark:border-violet-700 dark:focus:border-violet-400 placeholder-violet-300 dark:placeholder-gray-600 rounded p-2 text-sm mb-3 outline-none"
              />
              <label className="text-xs block mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full bg-transparent border border-violet-300 focus:border-violet-500 dark:border-violet-700 dark:focus:border-violet-400 placeholder-violet-300 dark:placeholder-gray-600 rounded p-2 text-sm mb-3 outline-none"
              />
              <label className="text-xs block mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Say hello"
                className="w-full bg-transparent border border-violet-300 focus:border-violet-500 dark:border-violet-700 dark:focus:border-violet-400 placeholder-violet-300 dark:placeholder-gray-600 rounded p-2 text-sm h-20 mb-3 outline-none"
              />
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white rounded px-5 py-2 text-sm transition-colors"
              >
                Send message
              </button>
              {formStatus === "sent" && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Your email client should have opened with the message ready to send.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-xs text-violet-600 dark:text-violet-300 mt-2">
                  Fill in all fields before sending.
                </p>
              )}
            </form>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Open to web development, AI projects, and research
                collaborations. Feel free to reach out.
              </p>
              <p className="text-xs font-medium mb-2">Find me on</p>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/aziz23-11"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="border border-violet-300 text-violet-600 dark:border-violet-700 dark:text-violet-300 rounded-full p-2 flex items-center justify-center hover:bg-violet-50 dark:hover:bg-violet-950/40"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aziz-bejoui-21024a295/?locale=fr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="border border-violet-300 text-violet-600 dark:border-violet-700 dark:text-violet-300 rounded-full p-2 flex items-center justify-center hover:bg-violet-50 dark:hover:bg-violet-950/40"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a
                  href="mailto:azizbejawi2311@gmail.com"
                  aria-label="Email"
                  className="border border-violet-300 text-violet-600 dark:border-violet-700 dark:text-violet-300 rounded-full p-2 flex items-center justify-center hover:bg-violet-50 dark:hover:bg-violet-950/40"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
