const skills = [
  { name: "JavaScript", level: 4 },
  { name: "TypeScript", level: 3 },
  { name: "React", level: 4 },
  { name: "Node.js", level: 4 },
  { name: "CSS", level: 3 },
];

const Skills = () => (
  <section id="skills" className="py-10">
    <h2 className="text-3xl font-bold">
      <span className="text-indigo-500">01. </span> &lt;my skills&gt;
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded shadow">
          <h3 className="font-bold mb-2">{skill.name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full mr-1 ${
                  i < skill.level ? "bg-indigo-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
