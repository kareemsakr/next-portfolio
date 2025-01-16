import { Project } from "../lib/definitions";

const ProjectCaseStudy = ({ project }: { project: Project }) => {
  const renderTechStack = (techs: string[]) => (
    <div className="flex flex-wrap gap-2 mb-6">
      {techs.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-black/70 text-white text-sm backdrop-blur-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  const renderSection = (title: string, content: string[]) => (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {Array.isArray(content) ? (
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span>•</span>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  );

  return (
    <div className="w-full mb-12 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-8">
        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
        <p className="text-xl text-gray-600 mb-8">{project.subtitle}</p>

        {renderTechStack(project.techStack)}

        {renderSection("Overview", [project.overview])}
        {renderSection("The Challenge", project.challenges)}

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">The Solution</h3>
          {renderSection("Core Features", project.features)}
          {renderSection("Technical Implementation", project.technical)}
          {renderSection("UX Considerations", project.ux)}
        </div>

        {project.impact && renderSection("Impact & Results", project.impact)}
        {project.status && renderSection("Development Status", project.status)}
        {project.future && renderSection("Future Plans", project.future)}
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
