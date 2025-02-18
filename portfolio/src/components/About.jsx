function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img 
            src="https://placehold.co/400x400/png" 
            alt="Profile" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm a passionate full-stack developer with experience in building modern web applications. 
            I love creating elegant solutions to complex problems and am constantly learning new technologies.
          </p>
          <div className="mt-6 flex gap-4">
            <span className="bg-gray-200 px-4 py-2 rounded-full">React</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full">Node.js</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 