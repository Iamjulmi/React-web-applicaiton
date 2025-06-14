export default function Projects() {
  const projects = [
    {
      name: "Vertex City",
      location: "Tukkuguda",
      type: "Residential Plots",
      description: "A modern residential community offering premium plots in one of the fastest-developing areas of Hyderabad.",
      image: "https://picsum.photos/id/1015/600/400" 
    },
    {
      name: "Akshaya - Yadagirigutta",
      location: "Yadagirigutta",
      type: "Villa Projects",
      description: "Luxurious villa community nestled in serene surroundings with excellent connectivity to Hyderabad city.",
      image: "https://picsum.photos/id/1016/600/400" 
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-md cursor-pointer transform transition hover:scale-105 bg-white dark:bg-gray-800">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-blue-600">{project.type}</p>
                <p className="text-sm text-gray-500">{project.location}</p>
                <p className="mt-2 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
