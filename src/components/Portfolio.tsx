import { projects } from "../constants/data";
const Portfolio = () => (
  <section
    id="portfolio"
    className="py-10 flex flex-col justify-center items-start gap-8"
  >
    <h2 className="sm:text-3xl text-2xl font-bold">
      <span className="text-indigo-500">03. </span> &lt;my portfolio&gt;
    </h2>
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center w-full gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg card shadow-lg sm:h-[380px] h-[400px] overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-[40%] overflow-hidden">
            <img
              src={project.img}
              alt={`${project.title} image`}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
          <div className="grid grid-rows-3 items-start sm:p-4 px-4 py-8 h-[60%]">
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-500 mb-4">{project.description}</p>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 w-full mb-4">
              {project.technologies.map((item, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-200 text-gray-600 text-sm py-1 px-2 flex justify-center rounded-[24px] transition-colors duration-300 hover:bg-gray-300"
                >
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex justify-start items-center w-full gap-2 self-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/github-dark.svg"
                  alt="GitHub link"
                  className="w-[24px] transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a href={project.visit} target="_blank" rel="noopener noreferrer">
                <img
                  src="/assets/icons/globe.svg"
                  alt="Live site link"
                  className="w-[24px] transition-transform duration-300 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="sm:text-3xl text-2xl font-bold text-gray-300 self-end">
      &lt;/my portfolio&gt;
    </h2>
  </section>
);

export default Portfolio;
