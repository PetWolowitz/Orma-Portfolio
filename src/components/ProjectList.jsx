export default function ProjectList({ projects }) {
  return (
    <ul className="mt-4 space-y-4">
      {projects.map((project, index) => (
        <li key={index} className="py-2">
          <h3 className="text-lg font-semibold">
            {project.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.location || project.technique || project.software || project.client}
          </p>
        </li>
      ))}
    </ul>
  );
}