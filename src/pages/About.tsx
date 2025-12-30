import { motion, Variants } from 'framer-motion'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  yearRange: string
  location: string
  bullets: string[]
}

function About() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Operations Manager",
      company: "Sysworld",
      period: "Mar 2025 - Present",
      yearRange: "2025 – Present",
      location: "Remote",
      bullets: [
        "Design and implement core setup and processes for Pacer, a fintech SaaS platform streamlining payments across Latin America",
        "Manage full client relationships from onboarding to delivery, ensuring custom platform changes meet customer needs",
        "Oversee daily tools and frameworks to support platform scalability and feature development",
        "Drive customer satisfaction through active listening and rapid response to client requirements"
      ]
    },
    {
      id: 2,
      title: "Sr Product Manager",
      company: "TRIPP Inc.",
      period: "September 2023 - February 2025",
      yearRange: "2023 – 2025",
      location: "Remote",
      bullets: [
        "Collaborated with Art, Technical Art, and growth teams to create immersive VR/mobile wellness experiences",
        "Shaped product features and initiatives aligned with user needs and business objectives",
        "Managed timelines and resolved bottlenecks to ensure on-time delivery of new content and challenges",
        "Drove user retention through engaging experiences and gamification elements"
      ]
    },
    {
      id: 3,
      title: "Delivery Manager",
      company: "Interatica",
      period: "August 2021 - July 2023",
      yearRange: "2021 – 2023",
      location: "Remote",
      bullets: [
        "Oversaw development of web apps, mobile apps, games, VR/AR experiences, and interactive panels for marketing activations",
        "Led cross-functional teams of designers, developers, and testers to deliver high-quality digital solutions",
        "Managed on-time delivery and setup for conventions and events for renowned clients",
        "Ensured exceptional product quality and exclusive experiences for marketing and entertainment sectors"
      ]
    },
    {
      id: 4,
      title: "Communication-Operations Manager",
      company: "Indelve Studios",
      period: "October 2021 - May 2023",
      yearRange: "2021 – 2023",
      location: "Remote",
      bullets: [
        "Managed communications and networking for indie game studio as a passion project",
        "Pitched to investors and delivered public presentations to secure funding and partnerships",
        "Built and led remote team of developers and artists from scratch",
        "Steered project through creative milestones to bring game vision to life"
      ]
    },
    {
      id: 5,
      title: "Project Manager",
      company: "Summa Solutions (Infracommerce)",
      period: "June 2020 - August 2021",
      yearRange: "2020 – 2021",
      location: "Remote",
      bullets: [
        "Coordinated e-commerce projects on Adobe Commerce and VTEX using waterfall and agile methodologies",
        "Forecasted resources and created P&L reports for company partners",
        "Managed daily client communication and interface to keep projects on track",
        "Supported live incident resolutions and feedback loops to ensure customer satisfaction"
      ]
    },
    {
      id: 6,
      title: "General Producer",
      company: "Grupo Sarapura",
      period: "July 2015 - June 2020",
      yearRange: "2015 – 2020",
      location: "Buenos Aires, Argentina",
      bullets: [
        "Directed overall coordination, control, and execution of corporate and social events across Argentina and South America",
        "Managed mixed teams of lighting, sound, and video technicians plus catering and setting logistics",
        "Built solid partnerships with strategic industry and media companies",
        "Maintained strong client relationships and ensured successful event delivery"
      ]
    }
  ]

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

        {/* Work Experience Section */}
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

          {/* Cards Grid - 1 column mobile, 2 columns desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Year Range Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-primary-600 dark:bg-primary-500 text-white text-sm font-bold rounded-full">
                    {exp.yearRange}
                  </span>
                </div>

                {/* Company Name (Bold) */}
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {exp.company}
                </h3>

                {/* Role */}
                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {exp.title}
                </p>

                {/* Location Tag */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2.5 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      <span className="text-primary-600 dark:text-primary-400 mt-1.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
