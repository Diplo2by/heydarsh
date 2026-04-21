import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectItem from "./ProjectItem";
import { projects } from "./projects";

const Projects = () => {
  const totalProjects = projects.length;

  const [trackIndex, setTrackIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [disableTransition, setDisableTransition] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const minSwipeDistance = 50;

  const carouselProjects = useMemo(() => {
    if (totalProjects === 0) {
      return [];
    }

    return [projects[totalProjects - 1], ...projects, projects[0]];
  }, [totalProjects]);

  const currentIndex =
    (((trackIndex - 1 + totalProjects) % totalProjects) + totalProjects) %
    totalProjects;

  const nextSlide = useCallback(() => {
    setTrackIndex((prevIndex) => prevIndex + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setTrackIndex((prevIndex) => prevIndex - 1);
  }, []);

  const onTouchStart = (e) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const onTrackTransitionEnd = () => {
    if (trackIndex === 0) {
      setDisableTransition(true);
      setTrackIndex(totalProjects);
      return;
    }

    if (trackIndex === totalProjects + 1) {
      setDisableTransition(true);
      setTrackIndex(1);
    }
  };

  useEffect(() => {
    if (!disableTransition) {
      return undefined;
    }

    const frame = requestAnimationFrame(() => {
      setDisableTransition(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [disableTransition]);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const autoScroll = setInterval(nextSlide, 5000);
    return () => clearInterval(autoScroll);
  }, [nextSlide, isPaused]);

  if (totalProjects === 0) {
    return null;
  }

  return (
    <section
      id="projects"
      className="w-full overflow-hidden px-4 py-16 sm:py-20 dark:bg-slate-950"
    >
      <div className="max-w-[1240px] mx-auto">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#5651e9]">
          Projects
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl capitalize">
            To build or not to build
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(totalProjects).padStart(2, "0")}
          </p>
        </div>

        <div
          className="relative mt-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/90 p-3 text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="overflow-hidden"
            onTransitionEnd={onTrackTransitionEnd}
          >
            <div
              className={`flex ${disableTransition ? "" : "transition-transform duration-500 ease-out"}`}
              style={{ transform: `translateX(-${trackIndex * 100}%)` }}
            >
              {carouselProjects.map((project, idx) => (
                <div
                  key={`${project.slug}-${idx}`}
                  className="w-full shrink-0 px-12 sm:px-16"
                >
                  <ProjectItem
                    title={project.cardTitle}
                    backgroundImg={project.heroImage}
                    projectUrl={project.route}
                    techStack={project.cardStack}
                    summary={project.cardSummary}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/90 p-3 text-slate-800 shadow-md transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((project, idx) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setTrackIndex(idx + 1)}
              aria-label={`Go to ${project.cardTitle}`}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-10 bg-cyan-600 dark:bg-cyan-400"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
