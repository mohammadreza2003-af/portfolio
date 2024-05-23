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
          className="bg-gray-100 overflow-hidden rounded-b-lg  shadow-lg h-[360px]"
        >
          <img src={project.img} className="w-full h-[40%]" />
          <div className="grid grid-rows-3 items-start p-4 h-[60%]">
            <h3 className="font-bold text-lg ">{project.title}</h3>
            <p className=" text-gray-500  ">{project.description}</p>
            <div className="grid grid-cols-3  lg:grid-cols-3 gap-2 w-full">
              {project.technologies.map((item) => (
                <h2 className="bg-gray-200 text-gray-600 text-sm py-1 flex justify-center rounded-[24px]">
                  {item.name}
                </h2>
              ))}
            </div>
            <div className="flex justify-start items-center w-full gap-2 self-end">
              <a href={project.github} target="_blank">
                <img src="/assets/icons/github-dark.svg" className="w-[24px]" />
              </a>
              <a href={project.visit} target="_blank">
                <img src="/assets/icons/globe.svg" className="w-[24px]" />
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
