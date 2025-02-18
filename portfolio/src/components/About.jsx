import photo from './4x4.jpg'

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src={photo} 
              alt="John Lerry Fule" 
              className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg border-2 border-blue-500"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              I am a passionate intern at QRIO IT Solutions, dedicated to learning and growing in the field of web development...
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-gray-800 text-blue-400 px-4 py-2 rounded-full border border-blue-500">React</span>
              <span className="bg-gray-800 text-blue-400 px-4 py-2 rounded-full border border-blue-500">JavaScript</span>
              <span className="bg-gray-800 text-blue-400 px-4 py-2 rounded-full border border-blue-500">Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* My Journey Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-10 text-white text-center">My Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-blue-500 hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Education</h3>
              <p className="text-gray-300">Bachelor of Science in Information Technology</p>
              <p className="text-gray-400">Laguna State Polytechnic University</p>
              <p className="text-gray-400">2020 - Present</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-blue-500 hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Internship</h3>
              <p className="text-gray-300">Web Development Intern</p>
              <p className="text-gray-400">QRIO IT Solutions</p>
              <p className="text-gray-400">2024 - Present</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-blue-500 hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Skills</h3>
              <ul className="text-gray-300 space-y-2">
                <li>HTML and CSS</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Network Troubleshooting</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 