import { motion, Variants } from 'framer-motion'

function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center md:text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Manuel Palli
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-display-md font-display font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-primary-300 dark:to-accent-400 bg-clip-text text-transparent">
                Sr Project and Product Manager, Operations & Strategy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light"
              variants={itemVariants}
            >
              5+ years in the IT industry leading teams, delivering great and innovative products. Passionate about AI, prototyping, Cooking and Jiu Jitsu.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              variants={itemVariants}
            >
              <a 
                href="#projects"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20"
              >
                View Portfolio
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a 
                href="https://www.linkedin.com/in/manuelpalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-accent-600 hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent-500/20 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Headshot Placeholder */}
          <motion.div 
            className="flex justify-center md:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-300 via-accent-300 to-primary-400 dark:from-primary-700 dark:via-accent-700 dark:to-primary-600 rounded-full shadow-2xl flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-32 h-32 md:w-40 md:h-40 text-white/80 dark:text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home
