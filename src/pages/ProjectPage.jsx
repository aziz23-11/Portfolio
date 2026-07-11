import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import { getProjectBySlug, projects } from "../data/projects";

const PILL_CLASS =
  "text-xs border border-violet-400 text-violet-700 dark:border-violet-700 dark:text-violet-300 rounded-full px-2 py-0.5 cursor-default transition-shadow duration-200 hover:border-violet-500 dark:hover:border-violet-400 hover:shadow-[0_0_10px_2px_rgba(167,139,250,0.55)] dark:hover:shadow-[0_0_10px_2px_rgba(167,139,250,0.45)]";

function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans contrast-[1.05] transition-colors">
        <div className="max-w-4xl mx-auto border border-violet-200 dark:border-violet-900/40 rounded">
          <Nav />
          <div className="px-5 sm:px-8 py-16 text-center">
            <p className="text-lg font-medium mb-3">Project not found</p>
            <Link
              to="/"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white rounded px-4 py-2 text-sm transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = project.icon;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans contrast-[1.05] transition-colors">
      <div className="max-w-4xl mx-auto border border-violet-200 dark:border-violet-900/40 rounded">
        <Nav />

        <div className="px-5 sm:px-8 py-6 border-b border-violet-200 dark:border-violet-900/40">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to projects
          </Link>
        </div>

        <section className="px-5 sm:px-8 py-10 text-center border-b border-violet-200 dark:border-violet-900/40">
          <div className="w-16 h-16 mx-auto mb-4 border border-violet-300 bg-violet-50 dark:border-violet-700 dark:bg-violet-950/40 rounded-full flex items-center justify-center">
            <Icon size={28} aria-hidden="true" className="text-violet-500 dark:text-violet-400" />
          </div>
          <h1 className="text-xl sm:text-2xl font-medium mb-2">{project.name}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {project.summary}
          </p>
        </section>

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="px-5 sm:px-8 py-8 border-b border-violet-200 dark:border-violet-900/40">
            <h2 className="text-sm font-medium mb-3">Gallery</h2>
            <Gallery images={project.screenshots} />
          </section>
        )}

        <section className="px-5 sm:px-8 py-8 border-b border-violet-200 dark:border-violet-900/40 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8">
          <div>
            <h2 className="text-sm font-medium mb-2">Overview</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.details}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium mb-2">Role</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-5">{project.role}</p>
            <h2 className="text-sm font-medium mb-2">Stack</h2>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((item) => (
                <span key={item} className={PILL_CLASS}>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded px-4 py-2 text-xs transition-colors"
              >
                <Github size={14} aria-hidden="true" />
                View on GitHub
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border border-violet-300 text-violet-600 dark:border-violet-700 dark:text-violet-300 rounded px-4 py-2 text-xs hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-colors"
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  Live demo
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-5 flex items-center justify-between text-xs">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
            >
              ← {prevProject.name}
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
            >
              {nextProject.name} →
            </Link>
          ) : (
            <span />
          )}
        </section>
      </div>
    </div>
  );
}

export default ProjectPage;
