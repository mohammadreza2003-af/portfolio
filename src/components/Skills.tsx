import { skills } from "../constants/data";

const Skills = () => (
  <section
    id="skills"
    className="py-10 flex flex-col justify-center items-start gap-8"
  >
    <h2 className="sm:text-3xl text-2xl font-bold">
      <span className="text-indigo-500">02. </span> &lt;my skills&gt;
    </h2>
    <div className="flex items-center justify-center w-full">
      <div className="grid grid-cols-4 gap-8 mt-8">
        {skills.map((skill, index) => (
          <img key={index} src={skill.src} width={128} />
        ))}
      </div>
    </div>

    <h2 className="sm:text-3xl text-2xl font-bold text-gray-300 self-end">
      &lt;/my skills&gt;
    </h2>
  </section>
);

export default Skills;
