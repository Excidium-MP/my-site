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
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 transition-colors duration-1000 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center md:text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-display font-semibold bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-accent-400 dark:to-accent-300 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Hi, I'm Manuel Palli 👋
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-200 bg-clip-text text-transparent">
                Project & Product Manager
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-accent-400 dark:to-accent-300 bg-clip-text text-transparent">
                Operations & Strategy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal max-w-xl"
              variants={itemVariants}
            >
              5+ years in the IT industry leading teams, delivering great and innovative products. Passionate about AI, prototyping, Cooking and Jiu Jitsu.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6"
              variants={itemVariants}
            >
              <a 
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 dark:from-primary-500 dark:to-primary-400 dark:hover:from-primary-600 dark:hover:to-primary-500 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/30 relative overflow-hidden"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#contact"
                className="group px-8 py-4 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 text-neutral-900 dark:text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
              variants={itemVariants}
            >
              <a 
                href="https://www.linkedin.com/in/manuelpalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 dark:from-accent-500 dark:to-accent-400 dark:hover:from-accent-600 dark:hover:to-accent-500 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-500/30 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="/Manuel-Palli-Resume-2025.pdf"
                download
                className="group px-6 py-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 border border-neutral-300 dark:border-neutral-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Headshot Placeholder */}
          <motion.div 
            className="flex justify-center md:justify-end"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 rounded-full blur-2xl opacity-30 dark:opacity-20 animate-pulse"></div>
              
              {/* Main circle */}
              <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden border-4 border-white/20 dark:border-white/10 flex items-center justify-center bg-white/5">
                <img 
                  src="/profile.png" 
                  alt="Manuel Palli" 
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home
