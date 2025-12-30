import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  location: string
  description: string
}

function About() {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Operations Manager",
      company: "Sysworld",
      period: "Mar 2025 - Present",
      location: "Buenos Aires, Argentina (Remote)",
      description: "Pacer is a Sysworld product, which is a fintech SaaS platform streamlining payments for businesses across Latin America. In my role, I design and put in place the main setup and processes for our payments platform, making it easier to grow and add new features that fit what customers want, while handling full client relationships from start to finish, listening to their needs, and delivering custom changes to the platform to keep them happy. I also oversee daily tools and frameworks."
    },
    {
      id: 2,
      title: "Sr Product Manager",
      company: "TRIPP Inc.",
      period: "September 2023 - February 2025",
      location: "California, USA (Remote)",
      description: "TRIPP is a wellness and meditation app available across VR devices and mobile platforms. I worked closely with Art, Technical Art, and the growth team to create new experiences for the game, from immersive scenes and experiences to new content and challenges that drove retention and kept our users engaged. Beyond project coordination and day-to-day operations, I worked directly on shaping upcoming product features and initiatives, aligning them with user needs and business objectives. My role mainly involved managing timelines, resolving bottlenecks, and making sure we hit our goals on time."
    },
    {
      id: 3,
      title: "Delivery Manager",
      company: "Interatica",
      period: "August 2021 - July 2023",
      location: "California, USA (Remote)",
      description: "Interatica is a software development agency creating custom digital solutions for clients in marketing and entertainment. As a Project and Delivery Manager, I oversaw the development of a range of software products, including web-based applications, native mobile apps, games, VR/AR experiences, interactive panels, and other digital media used mainly in marketing activations and conventions, being in charge of their delivery and setup on time and making sure everything went according to the plan. I led a highly skilled team of designers, developers, and testers to ensure that we delivered exceptional, high-quality products and exclusive experiences to our renowned clients."
    },
    {
      id: 4,
      title: "Communication-Operations Manager",
      company: "Indelve Studios",
      period: "October 2021 - May 2023",
      location: "USA (Remote)",
      description: "I joined Indelve, an indie game studio, as a side venture to follow my passion for gaming, where I managed communications and networking. This role taught me a lot about the entrepreneurial side. From pitching to possible investors and public speaking to building a remote team of devs and artists from scratch, all while steering the project through creative milestones to bring the game's vision to life."
    },
    {
      id: 5,
      title: "Project Manager",
      company: "Summa Solutions (Infracommerce)",
      period: "June 2020 - August 2021",
      location: "Buenos Aires, Argentina (Remote)",
      description: "Summa Solutions is an e-commerce agency building custom digital platforms for clients. In my role, I handled overall coordination, implementation, and control of e-commerce projects mainly in Adobe Commerce and VTEX mixing methodologies from waterfall and time-and-materials setups for structured builds to more agile approaches for quick pivots on client tweaks. I coordinated teams, forecasted resources, and created P&L reports for the company partners, plus managed the daily interface and communication with the client project team to keep everything moving on track. I also supported feedback loops and live incident resolutions, adapting plans and reacting to make sure our customers were happy."
    },
    {
      id: 6,
      title: "General Producer",
      company: "Grupo Sarapura",
      period: "July 2015 - June 2020",
      location: "Buenos Aires, Argentina (Remote)",
      description: "Grupo Sarapura produces corporate and social events across Argentina and South America. In my role, I handled overall direction, coordination, control, and execution of events for clients, managing a mixed team of lighting, sound, and video technicians alongside aspects like catering, setting, etc. I also directed client relationships, building solid partnerships with strategic industry and media companies to keep collaborations strong and on track."
    }
  ].reverse()

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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 py-20 px-4 transition-colors duration-1000 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-400/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-accent-400 dark:to-accent-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          About Me
        </motion.h1>

        {/* Story Content */}
        <motion.div 
          className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 font-light"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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

        {/* Work Experience Timeline Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Work Experience
          </h2>

          {/* Mobile-First Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 dark:from-primary-700 dark:via-accent-700 dark:to-primary-700 transform -translate-x-1/2"></div>

            {/* Work Experience Cards */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => {
                // Define different colors for each work experience
                const colors = [
                  { bg: 'bg-cyan-500', dark: 'dark:bg-cyan-400', shadow: 'shadow-cyan-500/50', border: 'border-cyan-500 dark:border-cyan-400' },
                  { bg: 'bg-purple-500', dark: 'dark:bg-purple-400', shadow: 'shadow-purple-500/50', border: 'border-purple-500 dark:border-purple-400' },
                  { bg: 'bg-pink-500', dark: 'dark:bg-pink-400', shadow: 'shadow-pink-500/50', border: 'border-pink-500 dark:border-pink-400' },
                  { bg: 'bg-orange-500', dark: 'dark:bg-orange-400', shadow: 'shadow-orange-500/50', border: 'border-orange-500 dark:border-orange-400' },
                  { bg: 'bg-green-500', dark: 'dark:bg-green-400', shadow: 'shadow-green-500/50', border: 'border-green-500 dark:border-green-400' },
                  { bg: 'bg-blue-500', dark: 'dark:bg-blue-400', shadow: 'shadow-blue-500/50', border: 'border-blue-500 dark:border-blue-400' }
                ]
                const color = colors[index % colors.length]
                
                return (
                  <motion.div
                    key={exp.id}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Desktop: Alternating Layout */}
                    <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                      {/* Timeline Dot - Centered on desktop, left on mobile */}
                      <div className={`hidden md:block absolute left-1/2 top-8 w-6 h-6 rounded-full transform -translate-x-1/2 z-10 transition-all duration-300 ${color.bg} ${color.dark} ring-4 ring-white dark:ring-neutral-900 ${
                        hoveredExperience === exp.id 
                          ? `scale-125 shadow-lg ${color.shadow}` 
                          : ''
                      }`}></div>

                      {/* Mobile Timeline Dot - Left aligned */}
                      <div className={`md:hidden absolute left-0 top-8 w-5 h-5 rounded-full z-10 transition-all duration-300 ${color.bg} ${color.dark} ring-3 ring-white dark:ring-neutral-900`}></div>

                      {/* Content Card */}
                      <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                        <motion.div
                          className={`bg-white dark:bg-neutral-800 rounded-2xl p-5 md:p-6 shadow-lg transition-all duration-300 border-l-4 md:border-l-0 ${color.border} ${
                            hoveredExperience === exp.id 
                              ? 'shadow-2xl md:scale-105 md:border-2' 
                              : 'hover:shadow-xl'
                          }`}
                          whileHover={{ y: -5 }}
                          onMouseEnter={() => setHoveredExperience(exp.id)}
                          onMouseLeave={() => setHoveredExperience(null)}
                          onTouchStart={() => setHoveredExperience(exp.id)}
                        >
                          {/* Header - Always Visible */}
                          <div className="mb-3">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                              {exp.company}
                            </p>
                            <div className="flex flex-col text-xs md:text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                              <p className="font-medium">{exp.period}</p>
                              <p>{exp.location}</p>
                            </div>
                          </div>

                          {/* Description - Always visible on mobile, hover on desktop */}
                          <motion.div
                            initial={{ height: 'auto', opacity: 1 }}
                            animate={{
                              height: hoveredExperience === exp.id ? 'auto' : 'auto',
                              opacity: hoveredExperience === exp.id ? 1 : 1
                            }}
                            className="md:overflow-hidden"
                            style={{
                              height: hoveredExperience === exp.id ? 'auto' : (typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : 'auto')
                            }}
                          >
                            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-700">
                              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                {exp.description}
                              </p>
                            </div>
                          </motion.div>

                          {/* Hover Indicator - Desktop only */}
                          {hoveredExperience !== exp.id && (
                            <motion.p 
                              className="hidden md:block text-sm text-neutral-500 dark:text-neutral-400 italic mt-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              Hover to see details
                            </motion.p>
                          )}
                        </motion.div>
                      </div>

                      {/* Empty column for alternating layout on desktop */}
                      <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
