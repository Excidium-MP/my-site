import { motion, Variants } from 'framer-motion'

function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Optional Photo Placeholder */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="w-48 h-48 bg-gradient-to-br from-primary-300 via-accent-300 to-primary-400 dark:from-primary-700 dark:via-accent-700 dark:to-primary-600 rounded-full shadow-xl flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-24 h-24 text-white/80 dark:text-white/60" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          About Me
        </motion.h1>

        {/* Story Content */}
        <motion.div 
          className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 font-light"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants}>
            I'm a 37-year-old Project and Product Manager based in Buenos Aires, Argentina, deeply passionate about technology, games, AI and how people interact with both.
          </motion.p>

          <motion.p variants={itemVariants}>
            My path hasn't been a straight line... and I'm glad for that. After finishing school, I started law school thinking that was my future. Four years in, I realized it wasn't. So I hit pause, traveled, and chased winters snowboarding wherever the snow was falling.
          </motion.p>

          <motion.p variants={itemVariants}>
            Life moved on, and about 12 years ago I jumped into the gastronomy world organizing catering events and even opening a business with a close friend. That led me into entertainment, where I spent over five years as a general technical producer. I designed immersive stages with lights, LED screens, lasers, and all kinds of fun gadgets. It was creative, high-energy work that I truly enjoyed.
          </motion.p>

          <motion.p variants={itemVariants}>
            Then 2020 arrived. Lockdown hit the entertainment industry hard especially here in Argentina, where it lasted a long time. But every challenge opens a door. With my lifelong love for tech and some great coaching from my brother (a seasoned IT project manager with over 20 years of experience), I made the pivot into project and product management in tech.
          </motion.p>

          <motion.p variants={itemVariants}>
            It's been the perfect fit. These days I lead remote teams, build products that solve real problems, and get to play in an industry that's constantly evolving. Honestly, it's an amazing time to be a part of this space blending creativity, human behavior, and cutting-edge tools every day.
          </motion.p>

          <motion.p 
            className="pt-4 text-center text-xl font-semibold text-neutral-900 dark:text-white"
            variants={itemVariants}
          >
            Outside work, you'll find me training Jiu-Jitsu, cooking (Asados are my go-to), gaming, or enjoying family time as a proud dad.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
