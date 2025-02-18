import background from './background.jpg'

function Hero() {
  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-6xl font-bold mb-4 text-blue-400">John Lerry Fule</h1>
        <h2 className="text-2xl mb-6 text-gray-300">Intern at QRIO IT Solutions</h2>
        <button className="bg-gray-800 text-blue-400 px-6 py-3 rounded-full font-semibold 
          hover:bg-gray-700 transition duration-300 border border-blue-500">
          View My Work
        </button>
      </div>
    </div>
  )
}

export default Hero 