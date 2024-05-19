const projects = [
  {
    title: "Prezly code-style package",
    description:
      "ESLint, Prettier and StyleLint configs used for Prezly TypeScript projects.",
    tech: "TypeScript, NPM Package",
  },
  {
    title: "Next.js Prezly Theme Kit",
    description:
      "Data layer and utility library for developing Prezly themes with NextJS and TypeScript.",
    tech: "TypeScript, Next.js, React",
  },
  {
    title: "Bea Prezly Theme",
    description:
      "First Prezly CMS theme made on the new stack, using Next.js, Typescript and Prezly SDK.",
    tech: "TypeScript, Next.js, React, CSS Modules",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-10">
    <h2 className="text-3xl font-bold">
      <span className="text-indigo-500">03. </span> &lt;my portfolio&gt;
    </h2>
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
          <p className="mt-2 text-sm text-gray-500">{project.tech}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
