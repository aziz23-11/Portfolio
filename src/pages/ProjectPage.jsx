import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import { getProjectBySlug, projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans contrast-[1.05] transition-colors">
        <div className="max-w-4xl mx-auto border border-gray-900 dark:border-gray-100 rounded">
          <Nav />
          <div className="px-5 sm:px-8 py-16 text-center">
            <p className="text-lg font-medium mb-3">Project not found</p>
            <Link
              to="/"
              className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded px-4 py-2 text-sm"
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
      <div className="max-w-4xl mx-auto border border-gray-900 dark:border-gray-100 rounded">
        <Nav />

        <div className="px-5 sm:px-8 py-6 border-b border-gray-900 dark:border-gray-100">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to projects
          </Link>
        </div>

        <section className="px-5 sm:px-8 py-10 text-center border-b border-gray-900 dark:border-gray-100">
          <div className="w-16 h-16 mx-auto mb-4 border border-gray-900 dark:border-gray-100 rounded-full flex items-center justify-center">
            <Icon size={28} aria-hidden="true" />
          </div>
          <h1 className="text-xl sm:text-2xl font-medium mb-2">{project.name}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {project.summary}
          </p>
        </section>

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="px-5 sm:px-8 py-8 border-b border-gray-900 dark:border-gray-100">
            <h2 className="text-sm font-medium mb-3">Gallery</h2>
            <Gallery images={project.screenshots} />
          </section>
        )}

        <section className="px-5 sm:px-8 py-8 border-b border-gray-900 dark:border-gray-100 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8">
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
                <span
                  key={item}
                  className="text-xs border border-gray-900 dark:border-gray-100 rounded-full px-2 py-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded px-4 py-2 text-xs"
            >
              View on GitHub
            </a>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-5 flex items-center justify-between text-xs">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              ← {prevProject.name}
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
