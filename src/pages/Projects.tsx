import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: number
  name: string
  description: string
  note?: string
  image?: string
  video?: string
  videoType?: 'local' | 'embed'
  category: string
  logo?: string
  link?: string
}

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      name: "Jazmín Chebar – Innovative E-Commerce Feature Development",
      description: "Working closely with an experienced Delivery Manager who handled client relations, I led the internal development team for Jazmín Chebar's fashion e-commerce platform. Focused on building innovative features that were cutting-edge at the time, such as personalized styling tools, advanced filtering, 3D Images, and so on that elevated the shopping journey for a premium fashion brand.",
      note: "Live site: www.jazminchebar.com.ar",
      video: "https://www.youtube.com/embed/mgQXYqlf4tc",
      videoType: "embed",
      category: "E-Commerce"
    },
    {
      id: 2,
      name: "SommierCenter – E-Commerce Platform Migration & Feature Development",
      description: "As the main PM for SommierCenter (a leading Argentine mattress and furniture retailer), I led the full migration from Magento 1 to Magento 2 (now Adobe Commerce). This upgrade improved performance, security, and scalability for high-traffic seasons. Post-migration, I managed ongoing feature development and marketing campaigns on a time-and-materials basis delivering promotions, UX improvements, and checkout optimizations that supported consistent growth.",
      note: "Live site: www.sommiercenter.com.ar",
      image: "/sommier-center.png",
      category: "E-Commerce"
    },
    {
      id: 3,
      name: "Rex – Multi-Industry E-Commerce Transformation",
      description: "Supported Rex's strategic pivot from a traditional paint retailer to a broad multi-industry e-commerce platform, expanding from home improvement products to tech gadgets, appliances, and more. Managed roadmap, feature prioritization, and cross-functional delivery to create a unified, scalable online store that reflected the brand's new 'everything you need' positioning.",
      note: "Live site: somosrex.com",
      image: "/rex.png",
      category: "E-Commerce"
    },
    {
      id: 4,
      name: "AR Interactive Panel – Unity-Based Interactive Experience",
      description: "Developed a Unity-based interactive panel featuring augmented reality capabilities that mapped physical movements with target image recognition. This solution enabled real-time object manipulation—allowing users to rotate physical objects and see corresponding digital representations displayed on screen, creating an immersive experience for trade show attendees.",
      video: "https://www.youtube.com/embed/H_HtrIflKpg",
      videoType: "embed",
      category: "Custom Software"
    },
    {
      id: 5,
      name: "Mobile Customer Loyalty App – Healthcare Provider Solution",
      description: "Led the end-to-end delivery of a native mobile loyalty application for a major healthcare provider in Mexico, published on both the App Store and Google Play Store. The app featured comprehensive customer engagement tools, rewards programs, and gamification elements designed to enhance user experience and incentivize continued platform usage.",
      category: "Custom Software"
    },
    {
      id: 6,
      name: "Trade Show & Event Hub – Customizable Event Management Platform",
      description: "Developed a comprehensive web and mobile application platform with modular architecture for trade shows and corporate events. The solution featured attendee registration with unique QR code access, networking capabilities, meeting scheduling, personalized agenda management for panels and workshops, and robust gamification modules including trivia competitions, scavenger hunts, and various prize giveaway mechanics. While not a full SaaS product, the platform's modular design enabled rapid customization for different clients and event types.",
      category: "Custom Software"
    },
    {
      id: 7,
      name: "Cleverlit - Instant Digital Material Delivery",
      description: "Cleverlit is a digital platform designed for exhibitors at trade shows and events. It allows visitors to scan a code or badge at a booth, select resources (like brochures or PDFs), and receive them instantly via email, while providing analytics on engagement for the exhibitor.",
      category: "Custom Software",
      logo: "https://www.cleverlit.com/es/wp-content/uploads/sites/2/2023/03/cleverlit-logo.svg",
      link: "https://www.cleverlit.com/es"
    },
    {
      id: 8,
      name: "Global Cloud Situation Room",
      description: "We created a tool that allows the company to see, in real time, the status of all their projects worldwide. We interfaced with their existing systems to gather data.",
      image: "/global-cloud-situation-room.png",
      category: "Custom Software"
    },
    {
      id: 11,
      name: "Jurassic World III – Spain Mall Tour",
      description: "We created 3 experiences for the promo tour across 10+ Spanish malls.\n\n• Maze Runner Game: Leap Motion sensor game letting attendees control a dinosaur via hand gestures to navigate obstacles—immersive interaction that drew crowds for the movie launch.\n\n• Giveaway Roulette: A simple spinner to give out prizes to attendees.\n\n• VR Helicopter Experience: Immersive VR flight over Malta (filming site) with navigation/landing, motion chairs, and vibration feedback; full 3D development for multi-sensory thrill.",
      video: "https://player.vimeo.com/video/993943130",
      videoType: "embed",
      category: "Entertainment & Games"
    },
    {
      id: 9,
      name: "TRIPP – VR Wellness & Meditation App",
      description: "Worked for almost 2 years on TRIPP, an innovative VR wellness and meditation application available across VR devices and mobile platforms. Contributed to the release of new immersive content and experiences. Most notably, played a key role in the launch of TRIPP on the Apple Vision Pro device, being part of the team that brought the app to Apple's groundbreaking spatial computing platform. This experience provided invaluable insight into launching products on cutting-edge hardware and being part of a major Apple product ecosystem launch.",
      category: "Entertainment & Games",
      logo: "https://www.tripp.com/wp-content/uploads/2023/03/tripp-logo.svg",
      link: "https://www.tripp.com/"
    },
    {
      id: 13,
      name: "Social and Corporate Events",
      description: "I worked in all kind of social and corporate events",
      note: "Images coming soon",
      category: "Entertainment"
    },
    {
      id: 14,
      name: "Trade Shows Interactive Panels – Web & Unity",
      description: "MEDICAL ANIMATIONS\nTransforming medical concepts into interactive experiences that educate and engage.\n\nINFOGRAPHICS AND PANELS\nCreating dynamic infographics that allow users to explore data and information interactively.\n\nE-LEARNING\nDesigning e-learning content that engages and educates through interactivity.",
      image: "/medical-animations.png",
      category: "Custom Software"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 transition-colors duration-1000 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-400/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-accent-400 dark:to-accent-300 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A showcase of my work across e-commerce, custom software, and interactive experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Media Section */}
              {(project.image || project.video) && (
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-neutral-700 dark:to-neutral-600">
                  {project.video && project.videoType === 'embed' && (
                    <motion.iframe
                      src={project.video}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      animate={{
                        scale: hoveredProject === project.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  {project.video && project.videoType !== 'embed' && (
                    <motion.video 
                      src={project.video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  {project.image && !project.video && (
                    <motion.img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  {/* Overlay gradient on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="p-6">
                {/* Category Badge */}
                <motion.span 
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white mb-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: hoveredProject === project.id ? 0 : -20,
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.category}
                </motion.span>

                {/* Logo */}
                {project.logo && (
                  <div className="mb-3 flex items-center">
                    <img 
                      src={project.logo} 
                      alt={`${project.name} logo`}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                )}

                {/* Project Title */}
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 hover:underline">
                      {project.name}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                )}

                {/* Project Description */}
                <motion.div
                  initial={{ height: '4.5rem' }}
                  animate={{ 
                    height: hoveredProject === project.id ? 'auto' : '4.5rem'
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Note */}
                {project.note && (
                  <motion.p 
                    className="text-xs text-primary-600 dark:text-primary-400 italic mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.note}
                  </motion.p>
                )}
              </div>

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary-500 dark:border-primary-400 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0,
                  scale: hoveredProject === project.id ? 1 : 0.95
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
