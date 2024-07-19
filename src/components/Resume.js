import resumeImg from "../assests/resume.jpg";

export default function Resume() {
  const config = {
    link: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
  };
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-about px-5 py-10"
    >
      <div className="md:w-1/2 flex justify-center">
        <img className="w-[300px]" src={resumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <div className="flex flex-col justify-center py-14 px-5">
          <h1 className="text-4xl mb-5 font-bold">Resume</h1>
          <p>
            You can view my resume{" "}
            <a
              className="btn text-white ml-3"
              target="_blank"
              href={config.link}
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
