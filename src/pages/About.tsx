function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Optional Photo Placeholder */}
        <div className="flex justify-center mb-12">
          <div className="w-48 h-48 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full shadow-xl flex items-center justify-center">
            <svg className="w-24 h-24 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Story Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            I'm a 37-year-old tech leader based in Buenos Aires, Argentina, deeply passionate about technology, games, and how people interact with both.
          </p>

          <p>
            My path hasn't been a straight line—and I'm glad for that. After finishing school, I started law school thinking that was my future. Four years in, I realized it wasn't. So I hit pause, traveled, and chased winters snowboarding wherever the snow was falling.
          </p>

          <p>
            Life moved on, and about 12 years ago I jumped into the gastronomy world—organizing catering events and even opening a business with a close friend. That naturally led me into entertainment, where I spent over five years as a general technical producer. I designed immersive stages with lights, LED screens, lasers, and all kinds of fun gadgets. It was creative, high-energy work that I truly loved.
          </p>

          <p>
            Then 2020 arrived. Lockdown hit the entertainment industry hard—especially here in Argentina, where it lasted a long time. But every challenge opens a door. With my lifelong love for tech and some great coaching from my brother (a seasoned IT project manager with over 20 years of experience), I made the pivot into project and product management in tech.
          </p>

          <p>
            It's been the perfect fit. These days I lead remote teams, build products that solve real problems, and get to play in an industry that's constantly evolving. Honestly, it's an amazing time to be alive and part of this space—blending creativity, human behavior, and cutting-edge tools every day.
          </p>

          <p className="pt-4 text-center text-xl font-semibold text-gray-900 dark:text-white">
            Outside work, you'll find me training Jiu-Jitsu, cooking (empanadas are my go-to), gaming, or enjoying family time as a proud dad.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
