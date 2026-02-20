import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './index.css';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import mailme from './assets/mailme.svg';
import pic4 from './assets/pic4.jpg';
import rightarrow from './assets/rightarrow.svg';
import { Link } from 'react-router-dom';

// Register the GSAP hook
gsap.registerPlugin(useGSAP);

const Landing = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // --- ENTRANCE ANIMATIONS ---
      tl.from('.hero-nav-item', {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
        .from(
          '.hero-image-wrapper',
          {
            scale: 0.95,
            opacity: 0,
            duration: 1.5,
            ease: 'expo.out',
          },
          '-=0.6'
        )
        .from(
          '.hero-text > *',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          '-=1'
        );

      // --- CONTINUOUS BACKGROUND MESH ANIMATION ---
      // Orb 1: The Emerald Core (moves diagonally and scales)
      gsap.to('.ambient-orb-1', {
        x: '15vw',
        y: '15vh',
        scale: 1.2,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Orb 2: The Deep Blue/Purple counterpart (moves opposite)
      gsap.to('.ambient-orb-2', {
        x: '-15vw',
        y: '-10vh',
        scale: 1.3,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Orb 3: Slow rotation center accent
      gsap.to('.ambient-orb-3', {
        rotation: 360,
        scale: 1.1,
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative min-h-screen w-full overflow-hidden text-white"
    >
      {/* --- AMBIENT GRADIENT MESH BACKGROUND --- */}
      <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden bg-slate-950">
        {/* Emerald Glow - Top Left */}
        <div className="ambient-orb-1 absolute -top-[10%] -left-[10%] h-[50vh] w-[50vw] rounded-full bg-emerald-600/20 blur-[120px]" />

        {/* Deep Slate/Purple Glow - Bottom Right */}
        <div className="ambient-orb-2 absolute -right-[10%] -bottom-[10%] h-[60vh] w-[60vw] rounded-full bg-indigo-900/30 blur-[140px]" />

        {/* Cyan Highlight - Center */}
        <div className="ambient-orb-3 absolute top-[30%] left-[25%] h-[40vh] w-[40vw] rounded-full bg-teal-500/10 blur-[100px]" />

        {/* Noise overlay to give it a premium, textured matte feel */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* --- MAIN CONTENT (Wrapped to stay above background) --- */}
      <div className="relative z-10 mx-auto my-5 grid max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:my-10 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {/* Header */}
        <header className="hero-nav-item whitespace-nowrap lg:order-1">
          <h1 className="font-header text-6xl decoration-slate-400 hover:underline">
            <a href="/">Shayan Mukherjee</a>
          </h1>
        </header>

        {/* Social Links */}
        <div className="hero-nav-item order-1 flex items-center justify-between gap-4 sm:order-0 sm:justify-end lg:order-3">
          <a
            href="https://github.com/Thedrogon"
            className="transition-transform hover:scale-110"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/sayanjit-mukherjee/"
            className="transition-transform hover:scale-110"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10 sm:col-start-2 sm:justify-end lg:order-2 lg:justify-center">
          <Link
            to="/Projects"
            className="hero-nav-item text-lg font-semibold transition-colors hover:text-emerald-400"
          >
            Projects
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aec.sayanjitmukherjee@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-nav-item group flex items-center justify-center space-x-1.5 text-lg font-semibold transition-colors hover:text-emerald-400"
          >
            <img
              src={mailme}
              alt="Mail me"
              className="h-5 transition-transform group-hover:-translate-y-1"
            />
            <p>Let's talk</p>
          </a>
        </nav>

        {/* Main Content Area */}
        <div className="col-span-full my-4 lg:order-3">
          <div className="tablet:grid-cols-2 grid grid-cols-1 gap-1">
            {/* Hero Image - CLEANED UP */}
            <picture className="hero-image-wrapper tablet:justify-start flex items-start justify-center">
              <img
                src={pic4}
                alt="Me"
                width={768}
                draggable="false"
                onContextMenu={e => e.preventDefault()}
                height={1024}
                className="block aspect-3/4 max-w-full rounded-2xl object-cover drop-shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-700 hover:scale-[1.03] hover:drop-shadow-[0_0_35px_rgba(16,185,129,0.3)] sm:w-72 lg:w-96"
              />
            </picture>

            {/* Hero Text */}
            <section className="hero-text tablet:order-last relative z-10 space-y-5 text-slate-300">
              <h1 className="text-[21px]">
                Hi, I'm <strong className="text-[23px] text-white">Shayan,</strong>
              </h1>
              <p className="text-[18px]">
                A <strong className="text-white">software engineer</strong> building
                scalable, high-performance web architecture. I specialize in turning
                complex logic into seamless, 60 FPS user experiences.
              </p>
              <p className="text-[17px]">
                My core stack revolves around the bleeding edge of the{' '}
                <strong className="text-emerald-400">React.js</strong> ecosystem,
                specifically <strong className="text-white">Next.js</strong>. I write
                strict <strong className="text-blue-400">TypeScript</strong> and optimize
                data layers using GraphQL and PostgreSQL to eliminate latency.
              </p>
              <p className="text-[18px]">
                I don't just build UI; I engineer systems. From developing custom O(n)
                regex parsers to physics-based graph rendering, you can explore my
                architectures in the
                <Link
                  to="/Projects"
                  className="font-bold text-white transition-colors hover:text-emerald-400"
                >
                  {' '}
                  <span>projects</span>
                </Link>{' '}
                section.
              </p>
              <p className="text-[18px]">
                Beyond building, I am obsessed with algorithmic efficiency.{' '}
                <span className="font-medium text-emerald-300/90 italic">
                  "Code is only as strong as the data structures beneath it."{' '}
                </span>
              </p>
              <p className="text-[18px]">
                I document my deep dives into algorithms, system design, and LeetCode
                problem-solving daily. Read my technical breakdowns on
                <a
                  href="https://medium.com/@aec.sayanjitmukherjee"
                  className="font-semibold text-white transition-colors hover:text-emerald-400"
                >
                  {' '}
                  Medium
                </a>
                .
              </p>

              {/* Call to Action Links */}
              {/* Call to Action Links */}
              <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 pt-4 text-base font-semibold text-white sm:text-lg">
                <a
                  href="https://medium.com/@aec.sayanjitmukherjee"
                  className="group flex cursor-pointer items-center justify-center gap-1.5 transition-colors hover:text-emerald-400"
                >
                  <span className="border-b-2 border-slate-600 pb-0.5 whitespace-nowrap transition-colors group-hover:border-emerald-400">
                    Architecture Blogs
                  </span>
                  <img
                    src={rightarrow}
                    alt="right_arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://leetcode.com/u/Thedrogon/"
                  className="group flex cursor-pointer items-center justify-center gap-1.5 transition-colors hover:text-emerald-400"
                >
                  <span className="border-b-2 border-slate-600 pb-0.5 whitespace-nowrap transition-colors group-hover:border-emerald-400">
                    LeetCode Stats
                  </span>
                  <img
                    src={rightarrow}
                    alt="right_arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
