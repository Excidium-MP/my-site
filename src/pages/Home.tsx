import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Tech Leader Driving Fintech Innovation & Revenue Growth
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              9+ years leading remote teams in fintech, e-commerce, gaming, and blockchain. Delivered payment solutions for major clients like Volkswagen, Toyota, and a real estate administrator managing 14,000 units.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 italic">
              Passionate about AI prototyping, blockchain, Jiu-Jitsu, cooking, and being a dad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link 
                to="/portfolio"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                View Portfolio
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Right Column - Headshot Placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full shadow-2xl flex items-center justify-center">
              <svg className="w-32 h-32 md:w-40 md:h-40 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
