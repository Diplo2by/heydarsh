import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { RiGithubFill, RiRadioButtonFill } from "react-icons/ri";

const ProjectPage = ({
  title,
  subtitle,
  heroImage,
  overview,
  techStack,
  contributors,
  links,
  cardStack,
  pageTitle
}) => {
  return (
    <div className="min-h-screen pb-16 dark:bg-slate-950">
      <Head>
        <title>{pageTitle || `Projects - ${title}`}</title>
      </Head>

      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="max-w-[1240px] mx-auto px-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-900 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="border-t border-slate-200 bg-white p-6 md:p-8 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.3em] text-brand">Project Snapshot</p>
                <h1 className="mt-3 text-3xl leading-tight text-slate-900 md:text-5xl dark:text-slate-100">{title}</h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-700 md:text-base dark:text-slate-300">{subtitle}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.7)] dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Stack Focus
              </p>
              <p className="mt-3 text-2xl font-bold leading-tight text-slate-900 dark:text-slate-100">
                {cardStack}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-slate-300 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    <ArrowUpRight size={15} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto grid gap-6 px-4 lg:grid-cols-[2fr_1fr]">
        <article className="rounded-[2rem] border border-slate-200/70 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Overview</p>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">Tech Stack</p>
            <div className="mt-4 space-y-3">
              {techStack.map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <RiRadioButtonFill className="text-brand" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {contributors?.length > 0 && (
            <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">Contributors</p>
              <div className="mt-4 space-y-3">
                {contributors.map((contributor) => (
                  <a
                    key={contributor.url}
                    href={contributor.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-brand dark:text-slate-300 dark:hover:text-brand"
                  >
                    <RiGithubFill />
                    {contributor.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
};

export default ProjectPage;
