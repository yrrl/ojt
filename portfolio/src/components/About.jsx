import photo from './4x4.jpg'

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image container */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src={photo} 
              alt="John Lerry Fule" 
              className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Text content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              {/* Add your about me text here */}
              I am a passionate intern at QRIO IT Solutions, dedicated to learning and growing in the field of web development...
            </p>
            {/* Add more paragraphs or content as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 