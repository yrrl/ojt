import background from './background.jpg'

function Hero() {
  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">John Lerry Fule</h1>
        <h2 className="text-2xl mb-6">Intern at QRIO IT Solutions</h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
          View My Work
        </button>
      </div>
    </div>
  )
}

export default Hero 