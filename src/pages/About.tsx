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

          {/* Timeline Container */}
          <div className="relative h-[2000px]">
            {/* Fixed Background Timeline with Year Markers */}
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
              {/* Vertical Line - with gap */}
              <div className="absolute left-1/2 top-0 w-0.5 bg-neutral-300 dark:bg-neutral-700 transform -translate-x-1/2" style={{ height: '70%' }}></div>
              <div className="absolute left-1/2 w-0.5 bg-neutral-300 dark:bg-neutral-700 transform -translate-x-1/2" style={{ top: '75%', height: '25%' }}></div>
              
              {/* Gap indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '72.5%' }}>
                <div className="flex flex-col items-center">
                  <div className="text-neutral-400 dark:text-neutral-600 text-xs font-semibold">⋮</div>
                </div>
              </div>
              
              {/* Fixed Year Markers (2025 - 2019, then 2015) */}
              {[2025, 2024, 2023, 2022, 2021, 2020, 2019].map((year, index) => (
                <div 
                  key={year}
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: `${(index / 7) * 70}%` }}
                >
                  {/* Small fixed dot */}
                  <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600"></div>
                  
                  {/* Year label */}
                  <span className="absolute left-full ml-6 md:left-auto md:right-full md:mr-6 top-1/2 transform -translate-y-1/2 text-sm font-bold text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
                    {year}
                  </span>
                </div>
              ))}
              
              {/* 2015 marker at the bottom */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{ top: '75%' }}
              >
                {/* Small fixed dot */}
                <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600"></div>
                
                {/* Year label */}
                <span className="absolute left-full ml-6 md:left-auto md:right-full md:mr-6 top-1/2 transform -translate-y-1/2 text-sm font-bold text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
                  2015
                </span>
              </div>
            </div>

            {/* Dynamic Work Experience Hotspots */}
            <div className="relative h-full">
              {experiences.map((exp, index) => {
                // Parse start date from period string
                const parseStartDate = (period: string): number => {
                  const monthMap: { [key: string]: number } = {
                    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
                    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11,
                    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
                  }
                  
                  // Extract the start part (before " - ")
                  const startPart = period.split(' - ')[0].trim()
                  
                  // Try to match "Month Year" or "Month YYYY" pattern
                  const match = startPart.match(/([A-Za-z]+)\s+(\d{4})/)
                  if (match) {
                    const month = match[1]
                    const year = parseInt(match[2])
                    const monthNum = monthMap[month] !== undefined ? monthMap[month] : 0
                    // Return fractional year (e.g., March 2025 = 2025.167)
                    return year + (monthNum / 12)
                  }
                  
                  // Fallback: just extract year
                  const yearMatch = startPart.match(/(\d{4})/)
                  return yearMatch ? parseInt(yearMatch[1]) : 2020
                }
                
                const startDate = parseStartDate(exp.period)
                
                // Calculate position based on date with gap
                // 2025-2019 occupies 0-70% of timeline
                // 2015 occupies 75% of timeline
                let yearPosition: number
                if (startDate >= 2019) {
                  // Map 2025-2019 to 0-70%
                  yearPosition = ((2025 - startDate) / 6) * 70
                } else {
                  // Map 2015 experiences to 75% (close to the 2015 marker)
                  yearPosition = 75
                }
                
                // Define different colors for each work experience
                const colors = [
                  { bg: 'bg-cyan-500', dark: 'dark:bg-cyan-400', shadow: 'shadow-cyan-500/50' },
                  { bg: 'bg-purple-500', dark: 'dark:bg-purple-400', shadow: 'shadow-purple-500/50' },
                  { bg: 'bg-pink-500', dark: 'dark:bg-pink-400', shadow: 'shadow-pink-500/50' },
                  { bg: 'bg-orange-500', dark: 'dark:bg-orange-400', shadow: 'shadow-orange-500/50' },
                  { bg: 'bg-green-500', dark: 'dark:bg-green-400', shadow: 'shadow-green-500/50' },
                  { bg: 'bg-blue-500', dark: 'dark:bg-blue-400', shadow: 'shadow-blue-500/50' }
                ]
                const color = colors[index % colors.length]
                
                return (
                  <motion.div
                    key={exp.id}
                    className="absolute w-full"
                    style={{ top: `${yearPosition}%` }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Dynamic Work Experience Dot - Larger and colored */}
                    <motion.div 
                      className={`absolute left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${color.bg} ${color.dark} ${
                        hoveredExperience === exp.id 
                          ? `scale-150 shadow-lg ${color.shadow}` 
                          : ''
                      }`}
                      animate={{
                        scale: hoveredExperience === exp.id ? 1.5 : 1,
                      }}
                    />

                    {/* Content Card */}
                    <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+3rem)]' : 'md:pl-[calc(50%+3rem)]'}`}>
                      <motion.div
                        className={`bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                          hoveredExperience === exp.id 
                            ? 'shadow-2xl scale-105 border-2 border-accent-400 dark:border-accent-500' 
                            : 'hover:shadow-xl'
                        }`}
                        whileHover={{ y: -5 }}
                        onMouseEnter={() => setHoveredExperience(exp.id)}
                        onMouseLeave={() => setHoveredExperience(null)}
                      >
                        {/* Header - Always Visible */}
                        <div className="mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-600 dark:text-neutral-400">
                            <p className="font-medium">{exp.period}</p>
                            <p>{exp.location}</p>
                          </div>
                        </div>

                        {/* Description - Shows on Hover */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: hoveredExperience === exp.id ? 'auto' : 0,
                            opacity: hoveredExperience === exp.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-700">
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        </motion.div>

                        {/* Hover Indicator */}
                        {hoveredExperience !== exp.id && (
                          <motion.p 
                            className="text-sm text-neutral-500 dark:text-neutral-400 italic mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            Hover to see details
                          </motion.p>
                        )}
                      </motion.div>
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
