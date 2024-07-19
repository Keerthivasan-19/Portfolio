import heroImg from "../assests/hero.png";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";

export default function Hero() {
  const config = {
    subtitle: "I'm a Full-stack developer",
    social: {
      linkedin: "www.linkedin.com/in/keerthivasanv19",
      github: "https://github.com/Keerthivasan-19?tab=repositories",
      instagram: "",
    },
  };

  return (
    <section className="flex flex-col md:flex-row justify-center px-5 py-32">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-4xl md:text-6xl font-hero-font">
          Hi, <br /> I'm <span className="text-violet-600">Keerthivasan V</span>
          <p className="text-2xl py-2">{config.subtitle}</p>
        </h1>
        <div className="flex py-6">
          <a
            className="pr-5 hover:text-violet-700"
            href={config.social.linkedin}
            target="_blank"
          >
            <GrLinkedin size={25} />
          </a>
          <a
            className="pr-5 hover:text-violet-700"
            href={config.social.github}
            target="_blank"
          >
            <GrGithub size={25} />
          </a>
          <a
            className="pr-5 hover:text-violet-700"
            href={config.social.instagram}
            target="_blank"
          >
            <GrInstagram size={25} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={heroImg} />
    </section>
  );
}
