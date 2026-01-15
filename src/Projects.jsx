import './index.css';
import Area from './assets/Area.png';
import Berry from './assets/berry-plan.png';
import { ExternalLink, Code, Eye } from 'lucide-react';
// framer-motion removed per request



const Projects = () => {
  return (
    <div className="text-slate-20 mx-auto my-10 max-w-7xl items-center px-4 md:px-8">
      <main className="flex flex-col items-center justify-center gap-12">
        <section
          id="Berry"
          className="relative overflow-hidden rounded-2xl border border-white/12 bg-[color-mix(in_oklch,white_4%,transparent)] p-6 shadow-[0_24px_48px_-24px_oklch(0%_0_0/0.9)] backdrop-blur-xl backdrop-saturate-150 cursor-pointer"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/18 via-white/4 to-transparent" />

          <div className="flex flex-col items-start gap-6 transition-all lg:flex-row">
            <div className="shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={Berry}
                  alt="Berry project"
                  width={768}
                  height={1024}
                  className="block aspect-3/2 max-w-full transform object-cover transition-transform duration-300 hover:scale-105 sm:w-72 lg:w-96"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-emerald-700/20 px-2 py-1 text-xs text-emerald-200">
                  Next 
                </span>
                <span className="inline-flex items-center rounded-md bg-slate-700/30 px-2 py-1 text-xs text-slate-200">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none lg:max-w-xl">
              <h3 className="mb-2 text-2xl font-semibold text-slate-100">
                Berry — Design & Layout
              </h3>
              <p className="leading-relaxed text-slate-300">
                A clean product landing mock with emphasis on visual rhythm, spacing and a
                moody palette. Hover the image to see a subtle scale effect; use the links
                on the left to jump between projects.
              </p>

              <p className="text-slate-400">
                Small features added: smooth scroll, active nav highlighting, tech badges
                and subtle card glow.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/95 px-4 py-2 shadow transition-shadow hover:bg-emerald-500"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  <Eye size={16} /> <span className="text-sm font-medium">Live</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 transition hover:border-emerald-400"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  <Code size={16} className='text-emerald-500' /> <span className="text-sm font-medium text-emerald-500">Code</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="Plutus"
          className="rounded-2xl bg-[#0D0D55] p-6 shadow-xl ring-1 ring-black/30"
        >
          <div className="flex flex-col items-start gap-6 transition-all lg:flex-row-reverse">
            <div className="shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={Area}
                  alt="Plutus project"
                  width={700}
                  height={1024}
                  className="aspect-1 block max-w-full transform object-cover transition-transform duration-300 hover:scale-105 sm:w-72 lg:w-96"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-emerald-700/20 px-2 py-1 text-xs text-emerald-200">
                  Next.js
                </span>
                <span className="inline-flex items-center rounded-md bg-slate-700/30 px-2 py-1 text-xs text-slate-200">
                  Framer Motion
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none lg:max-w-xl">
              <h3 className="mb-2 text-2xl font-semibold text-slate-100">
                Plutus — Analytics Dashboard Concept
              </h3>
              <p className="leading-relaxed text-slate-300">
                An explorative dashboard concept that focuses on data clarity, subtle
                color accents and clear hierarchy. The cards support quick scanning and
                provide short action buttons for common flows.
              </p>

              <p className="text-slate-400">
                I added light badges, CTA buttons, and a small nav flair to keep the left
                rail meaningful and not just decorative.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/95 px-4 py-2 shadow transition-shadow hover:bg-emerald-500"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  <ExternalLink size={16} />{' '}
                  <span className="text-sm font-medium">Preview</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 transition hover:border-emerald-400"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  <Code size={16} className='text-emerald-500' />{' '}
                  <span className="text-sm font-medium text-emerald-500">Repository</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="pointer-events-none fixed right-6 bottom-6 hidden md:block">
        <div className="rounded-2xl bg-black/30 px-4 py-2 text-xs text-slate-300 ring-1 ring-emerald-600/20">
          Keep it moody · subtle motion
        </div>
      </div>
    </div>
  );
};

export default Projects;
