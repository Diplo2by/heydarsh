import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  techStack,
  summary,
}) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/70 dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={backgroundImg}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 920px"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="border-t border-slate-200 bg-white p-5 md:p-7 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#5651e9]">
          {techStack}
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 md:text-3xl dark:text-slate-100">
          {title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-700 md:text-base dark:text-slate-300">
          {summary}
        </p>

        <Link
          href={projectUrl}
          className="mt-4 inline-flex items-center rounded-full border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:border-slate-300 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          View Project
        </Link>
      </div>
    </article>
  );
};

export default ProjectItem;
