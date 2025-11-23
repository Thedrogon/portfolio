import "./index.css";
import Area from "./assets/Area.png";
import Berry from "./assets/berry-plan.png";
import { ExternalLink, Code, Eye } from "lucide-react";
// framer-motion removed per request

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 md:px-8  items-center  text-slate-200 bg-amber-300">
      <main className=" flex flex-col items-center justify-center gap-12 bg-green-300">
        <section
          id="Berry"
          className="p-6 bg-[#0D0D55] rounded-2xl shadow-xl ring-1 ring-black/30"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start transition-all">
            <div className="shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={Berry}
                  alt="Berry project"
                  width={768}
                  height={1024}
                  className="block aspect-3/2 max-w-full sm:w-72 lg:w-96 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-700/20 text-emerald-200 text-xs">
                  React
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-700/30 text-slate-200 text-xs">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none lg:max-w-xl">
              <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                Berry — Design & Layout
              </h3>
              <p className="text-slate-300 leading-relaxed">
                A clean product landing mock with emphasis on visual rhythm,
                spacing and a moody palette. Hover the image to see a subtle
                scale effect; use the links on the left to jump between
                projects.
              </p>

              <p className="text-slate-400">
                Small features added: smooth scroll, active nav highlighting,
                tech badges and subtle card glow.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/95 hover:bg-emerald-500 transition-shadow shadow"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <Eye size={16} />{" "}
                  <span className="font-medium text-sm">Live</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-emerald-400 transition"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <Code size={16} />{" "}
                  <span className="font-medium text-sm">Code</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="Plutus"
          className="p-6 bg-[#0D0D55] rounded-2xl shadow-xl ring-1 ring-black/30"
        >
          <div className="flex flex-col lg:flex-row-reverse gap-6 items-start transition-all">
            <div className="shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={Area}
                  alt="Plutus project"
                  width={700}
                  height={1024}
                  className="block aspect-1 max-w-full sm:w-72 lg:w-96 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-700/20 text-emerald-200 text-xs">
                  Next.js
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-700/30 text-slate-200 text-xs">
                  Framer Motion
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none lg:max-w-xl">
              <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                Plutus — Analytics Dashboard Concept
              </h3>
              <p className="text-slate-300 leading-relaxed">
                An explorative dashboard concept that focuses on data clarity,
                subtle color accents and clear hierarchy. The cards support
                quick scanning and provide short action buttons for common
                flows.
              </p>

              <p className="text-slate-400">
                I added light badges, CTA buttons, and a small nav flair to keep
                the left rail meaningful and not just decorative.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/95 hover:bg-emerald-500 transition-shadow shadow"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <ExternalLink size={16} />{" "}
                  <span className="font-medium text-sm">Preview</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-emerald-400 transition"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <Code size={16} />{" "}
                  <span className="font-medium text-sm">Repository</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="pointer-events-none fixed right-6 bottom-6 hidden md:block">
        <div className="px-4 py-2 rounded-2xl bg-black/30 ring-1 ring-emerald-600/20 text-xs text-slate-300">
          Keep it moody · subtle motion
        </div>
      </div>
    </div>
  );
};

export default Projects;
