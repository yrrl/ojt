function Projects() {
  const sections = [
    {
      title: "Vision & Goals",
      description: "In 5 years, I aim to be a senior full-stack developer leading innovative projects. I'm passionate about creating technology that makes a positive impact.",
      image: "https://placehold.co/600x400/2563eb/ffffff/png?text=Vision+2029",
      items: ["Lead Developer", "Tech Mentor", "Open Source Contributor"],
      link: "#"
    },
    
    {
      title: "Hobbies & Interests",
      description: "When I'm not coding, you'll find me exploring these passions that fuel my creativity and problem-solving skills.",
      image: "https://placehold.co/600x400/2563eb/ffffff/png?text=Hobbies",
      items: ["Reading", "Online Games", "Watching Youtube"],
      link: "#"
    },
    
    {
      title: "Future Projects",
      description: "Planning to develop innovative solutions that combine my technical skills with creative problem-solving approaches.",
      image: "https://placehold.co/600x400/2563eb/ffffff/png?text=Projects",
      items: ["Web Apps", "Mobile Development", "AI Integration"],
      link: "#"
    }
  ]

  return (
    <div className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About My Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 border border-blue-500">
              <img src={section.image} alt={section.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{section.title}</h3>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {section.items.map((item, i) => (
                    <span key={i} className="bg-gray-900 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 