import aboutImg from "../assests/about.png";

export default function About() {
  const config = {
    line1:
      "A passionate and dedicated software developer with a strong foundation in front-end and back-end technologies. With experience in HTML, CSS, JavaScript, SQL, Python, React.js, Node.js, Express.js, Tailwind CSS + Bootstrap.",
    line2:
      "My professional journey includes working as a Quality Documentation Specialist at Cognizant, where I honed my attention to detail and analytical skills. Currently, I'm seeking opportunities to leverage my technical expertise and creativity in roles such as Front-End Developer, Back-End Developer and Full-Stack Developer. I am excited to contribute to innovative projects and collaborate with like-minded professionals. Let's build something amazing together!",
  };

  return (
    <section id="about" className="flex flex-col md:flex-row bg-about px-5">
      <div className="md:w-1/2">
        <img src={aboutImg} />
      </div>
      <div className="md:w-1/2 flex">
        <div className="flex flex-col justify-center py-14 px-5">
          <h1 className="text-4xl mb-5 font-bold">About Me</h1>
          <p>{config.line1}</p>
          <p className="py-5">{config.line2}</p>
        </div>
      </div>
    </section>
  );
}
