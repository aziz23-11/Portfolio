import React from "react";
import {
  Terminal,
  FileText,
  Brain,
  Hand,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

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

const projects = [
  {
    icon: FileText,
    name: "KHADAMNI",
    desc: "CV-to-job compatibility engine",
  },
  {
    icon: Brain,
    name: "Alzheimer MRI",
    desc: "MRI-based detection model",
  },
  {
    icon: Hand,
    name: "Sign language recognition",
    desc: "Real-time gesture detection",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans grayscale contrast-[1.05]">
      <div className="max-w-4xl mx-auto border border-gray-900 rounded">
        {/* Nav */}
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-900">
          <span className="text-base font-medium">Aziz_BEJAWU.py</span>
          <div className="flex gap-5 text-sm text-gray-700">
            <span className="text-gray-900 font-medium">Home</span>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-8 pt-12 pb-10 text-center">
          <span className="inline-block text-xs border border-gray-900 rounded-full px-3 py-1 mb-5">
            available for new projects
          </span>
          <h1 className="text-3xl font-medium mb-2">Hey, I am BojBoj</h1>
          <p className="text-lg text-gray-700 mb-4">
            Computer science student — AI &amp; full-stack development
          </p>
          <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
            I build cool software — Run on caffein
            Creat clean, functional design.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-gray-900 text-white border border-gray-900 rounded px-5 py-2.5 text-sm">
              View my work
            </button>
            <button className="bg-white text-gray-900 border border-gray-900 rounded px-5 py-2.5 text-sm">
              Contact Me
            </button>
          </div>
        </section>

        {/* About */}
        <section className="border-t border-gray-900 px-8 py-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <h2 className="text-xl font-medium mb-3">About me</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2.5">
              Studying computer science at the Superior Institute of computer Science in KEF,
              focused on machine learning, web development, and Graphic Design.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Currently working on a final-year project combining NLP and
              full-stack engineering, alongside a medical imaging model
              built on PyTorch.
            </p>
          </div>
          <div className="border border-gray-900 rounded h-36 flex items-center justify-center">
            <Terminal size={48} aria-hidden="true" />
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-gray-900 px-8 py-8">
          <h2 className="text-xl font-medium mb-4">Skills &amp; technologies</h2>
          <div className="grid grid-cols-3 gap-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="border border-gray-900 rounded p-4"
              >
                <p className="text-sm font-medium mb-2">{group.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs border border-gray-900 rounded-full px-2 py-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-gray-900 px-8 py-8">
          <h2 className="text-xl font-medium mb-5">Experience</h2>
          <div className="space-y-0">
            {experience.map((item, i) => (
              <div key={item.year} className="flex gap-4 mb-3.5 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center text-xs font-medium shrink-0">
                    {item.year}
                  </div>
                  {i < experience.length - 1 && (
                    <div className="w-px flex-1 bg-gray-300 mt-1" />
                  )}
                </div>
                <div className="border border-gray-900 rounded px-4 py-3.5 flex-1">
                  <p className="text-sm font-medium mb-0.5">{item.role}</p>
                  <p className="text-xs text-gray-500 mb-1.5">{item.org}</p>
                  <p className="text-xs text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="border-t border-gray-900 bg-gray-50 px-8 py-10">
          <h2 className="text-2xl font-medium text-center mb-1.5">
            My projects
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            A selection of what I've built, from web apps to ML models.
          </p>
          <div className="grid grid-cols-3 gap-3.5">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.name}
                  className="bg-white border border-gray-900 rounded overflow-hidden"
                >
                  <div className="h-20 border-b border-gray-900 flex items-center justify-center">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <div className="p-3.5">
                    <p className="text-sm font-medium mb-1">{project.name}</p>
                    <p className="text-xs text-gray-500 mb-2.5">
                      {project.desc}
                    </p>
                    <button className="w-full bg-gray-900 text-white rounded py-1.5 text-xs">
                      View details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-gray-900 px-8 py-10">
          <h2 className="text-2xl font-medium text-center mb-6">
            Let's work together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs block mb-1">Name</label>
              <input
                placeholder="Your name"
                className="w-full border border-gray-900 rounded p-2 text-sm mb-3"
              />
              <label className="text-xs block mb-1">Email</label>
              <input
                placeholder="you@email.com"
                className="w-full border border-gray-900 rounded p-2 text-sm mb-3"
              />
              <label className="text-xs block mb-1">Message</label>
              <textarea
                placeholder="Say hello"
                className="w-full border border-gray-900 rounded p-2 text-sm h-20 mb-3"
              />
              <button className="bg-gray-900 text-white rounded px-4.5 py-2 text-sm">
                Send message
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Open to web development, AI projects, and research
                collaborations. Feel free to reach out.
              </p>
              <p className="text-xs font-medium mb-2">Find me on</p>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com"
                  aria-label="GitHub"
                  className="border border-gray-900 rounded-full p-2 flex items-center justify-center"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aziz-bejoui-21024a295/?locale=fr"
                  aria-label="LinkedIn"
                  className="border border-gray-900 rounded-full p-2 flex items-center justify-center"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a
                  href="mailto:azizbejawi2311@gmail.com"
                  aria-label="Email"
                  className="border border-gray-900 rounded-full p-2 flex items-center justify-center"
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

export default Portfolio;
