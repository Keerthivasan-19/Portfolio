import websiteImg1 from "../assests/ecommerce-websites.jpg";
import websiteImg2 from "../assests/food-ecommerce.jpg";
import websiteImg3 from "../assests/website-blog.jpg";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "A E-commerce website built with MERN stack.",
        link: "https://github.com/Keerthivasan-19?tab=repositories",
      },
      {
        image: websiteImg2,
        description: "Food E-commerce website built with React js.",
        link: "https://github.com/Keerthivasan-19?tab=repositories",
      },
      {
        image: websiteImg3,
        description: "Blog website built with MERN stack.",
        link: "https://github.com/Keerthivasan-19?tab=repositories",
      },
    ],
  };

  return (
    <section id="projects" className="flex flex-col px-5 py-20 justify-center">
      <div className="w-full mb-10">
        <div className="flex flex-col px-10">
          <h1 className=" text-4xl mb-5 font-bold">Projects</h1>
          <p>These are some of my best projects. </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-6">
          {config.projects.map((project) => (
            <div className="relative mb-5">
              <img
                className="h-[200px] w-[500px]"
                src={project.image}
                alt="Website1"
              />
              <div className="project-description">
                <p className="text-center py-5 px-5">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
