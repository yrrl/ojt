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
      title: "Role Models",
      description: "Inspired by tech leaders and innovators who've made a difference in the world through code and creativity.",
      image: "https://placehold.co/600x400/2563eb/ffffff/png?text=Inspirations",
      items: ["Ada Lovelace", "Linus Torvalds", "Grace Hopper"],
      link: "#"
    },
    {
      title: "Hobbies & Interests",
      description: "When I'm not coding, you'll find me exploring these passions that fuel my creativity and problem-solving skills.",
      image: "https://placehold.co/600x400/2563eb/ffffff/png?text=Hobbies",
      items: ["Photography", "Chess", "Reading Tech Blogs"],
      link: "#"
    }
  ]

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About My Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={section.image} alt={section.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {section.items.map((item, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
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