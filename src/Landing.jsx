import './index.css';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import mailme from './assets/mailme.svg';
import pic4 from './assets/pic4.jpg';
import rightarrow from './assets/rightarrow.svg';
import { Link } from 'react-router-dom';
import project from './assets/project.svg';
import resume from './assets/resume.svg';
//import Projects from "./Projects";

const Landing = () => {
  return (
    <div className="mx-auto my-5 grid max-w-7xl grid-cols-1 items-center gap-6 px-4 text-white sm:my-10 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
      <header>
        <h1 className="whitespace-nowrap lg:order-1">
          <a
            href="/"
            className="font-header text-6xl decoration-slate-400 hover:underline"
          >
            Shayan Mukherjee
          </a>
        </h1>
      </header>
      <div className="order-1 flex items-center justify-between gap-4 sm:order-0 sm:justify-end lg:order-3">
        <a href="https://github.com/Thedrogon">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/sayanjit-mukherjee/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <nav className="flex items-center justify-center gap-4 whitespace-nowrap sm:gap-6 lg:order-2 lg:gap-16">
        <Link
          to="/Projects"
          className="flex items-center gap-1 text-sm font-semibold decoration-slate-400 decoration-4 hover:underline sm:text-base lg:text-lg"
        >
          <img src={project} alt="projects" className="h-5 sm:h-6 lg:h-8" />
          <span className="leading-none">Projects</span>
        </Link>

        <Link
          to="/Resume"
          className="flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap decoration-slate-400 decoration-4 hover:underline sm:text-base lg:text-lg"
        >
          <img src={resume} alt="resume" className="h-6 sm:h-7 lg:h-9" />
          <span>wanna know me?</span>
        </Link>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aec.sayanjitmukherjee@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap decoration-slate-400 decoration-4 hover:underline sm:text-base lg:text-lg"
        >
          <img src={mailme} alt="Mail me" className="h-4 sm:h-5 lg:h-6" />
          <span>Let's talk</span>
        </a>
      </nav>
      <div className="col-span-full my-4 lg:order-3">
        <div className="tablet:grid-cols-2 grid grid-cols-1 gap-2">
          <picture>
            <img
              src={pic4}
              alt="Me"
              width={768}
              draggable="false"
              onContextMenu={e => e.preventDefault()}
              height={1024}
              className="block aspect-3/4 max-w-full rounded-lg shadow-lg sm:w-72 lg:w-96"
            />
          </picture>
          <section className="tablet:order-last space-y-5 text-slate-300">
            <h1 className="text-[21px]">
              Hi I'm <strong className="text-[23px] text-white">Shayan,</strong>
            </h1>
            <p className="text-[18px]">
              A<strong className="text-white"> software engineering student </strong>
              based in India, passionate about emerging technologies and building
              meaningful software.
            </p>
            <p className="text-[17px]">
              As a final year student, I tend to deep dive my interests into{' '}
              <strong className="text-yellow-100">javascript</strong> and{' '}
              <strong className="text-blue-400">typescript.</strong> I have explored a lot
              of libraries and frameworks but the ones that I mostly work with is{' '}
              <strong className="text-blue-300">
                React.js (Client and Server components)
              </strong>
              . Right now I am learning <strong>typescript </strong>in depth so that I can
              finally use <strong>Next</strong>.
            </p>
            <p className="text-[18px]">
              I have been working on a few fullstack projects that are mostly{' '}
              <strong>Saas apps.</strong> Some of them are listed in the
              <Link to="/Projects" className="font-bold text-white">
                {' '}
                <span> projects </span>
              </Link>{' '}
              area.
            </p>
            <p className="text-[18px]">
              Throughout the years I have realised,{' '}
              <span className="font-medium text-blue-200 italic">
                "the best way to improve and thrive in a skill is to teach that very skill
                to others".{' '}
              </span>
              For the sake of that I made this solemn resolve to grind leetcode and write
              Medium blogs everyday about the topic I study on that very same day. If you
              like to read too, you can visit me in
              <a
                href="https://medium.com/@aec.sayanjitmukherjee"
                className="font-semi-bold text-white"
              >
                {' '}
                Medium
              </a>
              .
            </p>{' '}
            <div className="flex items-center justify-start gap-6 space-x-3 text-lg font-semibold text-white">
              <div className="flex items-center justify-center gap-1.5">
                <a
                  href="#"
                  className="whitespace-nowrap underline decoration-slate-400 decoration-3"
                >
                  read my blogs
                </a>
                <img src={rightarrow} alt="right_arrow" width={15} height={15} />
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <a
                  href="https://leetcode.com/u/Thedrogon/"
                  className="whitespace-nowrap underline decoration-slate-400 decoration-3"
                >
                  check my leetcode
                </a>
                <img src={rightarrow} alt="right_arrow" width={15} height={15} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
