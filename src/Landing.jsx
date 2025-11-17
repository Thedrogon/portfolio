import "./index.css";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import mailme from "./assets/mailme.svg";
import pic4 from "./assets/pic4.jpg";
import rightarrow from "./assets/rightarrow.svg";

const Landing = () => {
  return (
    <div className="mx-auto max-w-7xl my-6 text-white grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:px-8 px-4 sm:my-10 items-center gap-6">
      <header>
        <h1 className="whitespace-nowrap lg:order-1">
          <a
            href="/"
            className="font-header text-6xl hover:underline decoration-slate-400"
          >
            Shayan Mukherjee
          </a>
        </h1>
      </header>
      <div className="order-1 flex items-center justify-between gap-4 sm:order-0 sm:justify-end lg:order-3">
        <a href="#">
          <img src={github} alt="github" />
        </a>
        <a href="#">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <nav className="flex items-center sm:justify-end lg:justify-center sm:col-start-2 gap-6 lg:order-2">
        <a
          href="#"
          className="font-semibold text-lg hover:underline decoration-slate-400 decoration-4"
        >
          Projects
        </a>
        <a
          href="#"
          className="font-semibold text-lg hover:underline decoration-slate-400 decoration-4 flex items-center justify-center space-x-1.5"
        >
          <img src={mailme} alt="Mail me" className="h-5 " />
          <p>Let's talk</p>
        </a>
      </nav>
      <div className="my-6 col-span-full lg:order-3">
        <div className="grid tablet:grid-cols-2 grid-cols-1 gap-2">
          <picture>
            <img
              src={pic4}
              alt="Me"
              width={768}
              height={1024}
              className="block aspect-3/4 max-w-full rounded-lg shadow-lg sm:w-72 lg:w-96"
            />
          </picture>
          <section className="space-y-4 text-slate-300 tablet:order-last">
            <h1 className="text-[20px]">
              Hi I'm <strong className="text-[23px] text-white">Shayan,</strong>
            </h1>
            <p className="text-[17px]">
              A
              <strong className="text-white">
                {" "}
                software engineering student{" "}
              </strong>
              based in India, passionate about emerging technologies and
              building meaningful software.
            </p>
            <p className="text-[16px]">
              As a final year student, I tend to deep dive my interests into{" "}
              <strong className="text-white">javascript</strong> and{" "}
              <strong className="text-white">python.</strong> I have explored a
              lot of libraries and frameworks but the ones that I work mostly
              with is <strong>React.js </strong>and <strong>FastAPI.</strong>{" "}
              Right now I am learning <strong>typescript </strong>so that while
              making my projects I can finally use <strong>Next.</strong>
            </p>
            <p className="text-[16px]">
              I have been working on a few fullstack projects that are mostly{" "}
              <strong>Saas apps.</strong> Some of them are listed in the
              <a
                href="#"
                className="font-bold text-white underline decoration-2 decoration-slate-400"
              >
                {" "}
                projects
              </a>{" "}
              area.
            </p>
            <p className="text-[16px]">
              Throughout the years I have realised,{" "}
              <span className="text-white italic font-medium">
                "the best way to improve and thrive in a skill is to teach that
                very skill to others".
              </span>
              For the sake of that I made this solemn resolve to grind leetcode
              and write Medium blogs everyday about the topic I study on that
              very same day. If you like to read too, you can visit me in
              <a
                href="#"
                className="text-white font-bold underline decoration-2 decoration-slate-400"
              >
                {" "}
                Medium
              </a>
              .
            </p>{" "}
            <div className="flex space-x-3 items-center justify-start gap-6 text-lg text-white font-semibold">
              <div className="flex items-center justify-center gap-1.5">
                <a
                  href="#"
                  className="underline decoration-3 decoration-slate-400"
                >
                  read my blogs
                </a>
                <img
                  src={rightarrow}
                  alt="right_arrow"
                  width={15}
                  height={15}
                />
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <a
                  href="#"
                  className="underline decoration-3 decoration-slate-400"
                >
                  check my leetcode
                </a>
                <img
                  src={rightarrow}
                  alt="right_arrow"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
