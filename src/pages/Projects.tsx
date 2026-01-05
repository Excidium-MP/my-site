import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: number
  name: string
  description: string
  note?: string
  image?: string
  video?: string
  videoType?: 'local' | 'embed'
  tags: string[]
  logo?: string
  link?: string
  images?: string[]
}

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Color mapping for tags
  const getTagColor = (tag: string): string => {
    const tagLower = tag.toLowerCase()
    
    // E-commerce - Blue
    if (tagLower.includes('e-commerce')) return 'from-blue-500 to-blue-600'
    
    // Unity - Purple
    if (tagLower.includes('unity')) return 'from-purple-500 to-purple-600'
    
    // VR - Pink/Magenta
    if (tagLower.includes('vr')) return 'from-pink-500 to-pink-600'
    
    // AR - Fuchsia
    if (tagLower.includes('ar')) return 'from-fuchsia-500 to-fuchsia-600'
    
    // Mobile - Green
    if (tagLower.includes('mobile')) return 'from-green-500 to-green-600'
    
    // Web - Cyan
    if (tagLower.includes('web')) return 'from-cyan-500 to-cyan-600'
    
    // AI - Violet
    if (tagLower.includes('ai')) return 'from-violet-500 to-violet-600'
    
    // Custom Software - Indigo
    if (tagLower.includes('custom software')) return 'from-indigo-500 to-indigo-600'
    
    // Product - Emerald
    if (tagLower.includes('product')) return 'from-emerald-500 to-emerald-600'
    
    // Games - Red
    if (tagLower.includes('games')) return 'from-red-500 to-red-600'
    
    // Art - Rose
    if (tagLower.includes('art')) return 'from-rose-500 to-rose-600'
    
    // Growth - Lime
    if (tagLower.includes('growth')) return 'from-lime-500 to-lime-600'
    
    // Marketing - Orange
    if (tagLower.includes('marketing')) return 'from-orange-500 to-orange-600'
    
    // Blockchain - Teal
    if (tagLower.includes('blockchain')) return 'from-teal-500 to-teal-600'
    
    // Fintech - Sky
    if (tagLower.includes('fintech')) return 'from-sky-500 to-sky-600'
    
    // Years (dates) - Amber
    if (/\d{4}/.test(tag)) return 'from-amber-500 to-amber-600'
    
    // Default - Slate
    return 'from-slate-500 to-slate-600'
  }

  const projects: Project[] = [
    {
      id: 5,
      name: "AR Interactive Panel - Real life Object interactions",
      description: "Delivered and Led the team developing a Unity-based interactive panel featuring augmented reality capabilities that mapped physical movements with target image recognition. This enabled real-time object manipulation, allowing users to rotate physical objects and see corresponding digital representations displayed on screen, creating an immersive experience for trade show attendees.",
      video: "https://www.youtube.com/embed/H_HtrIflKpg",
      videoType: "embed",
      tags: ["Unity", "Custom Software", "Product", "2022"]
    },
    {
      id: 14,
      name: "Pacer - comprehensive automation of financial transactions",
      description: "I work with a team designing and implementing core setup and processes for a platform streamlining payments across Latin America as well as driving customer satisfaction through active listening and rapid response to client requirements.",
      tags: ["Fintech", "Product", "Custom Software", "2025-2026"],
      image: "/pacer-thumb.png"
    },
    {
      id: 2,
      name: "Jazmín Chebar",
      description: "Working closely with an experienced Delivery Manager who handled client relations, I led the internal development team for Jazmín Chebar's fashion e-commerce platform. Focused on building innovative features that were cutting-edge at the time, such as personalized styling tools, advanced filtering, 3D Images, and split payment methods.",
      note: "Live site: www.jazminchebar.com.ar",
      video: "https://www.youtube.com/embed/_c-cX0drytQ",
      videoType: "embed",
      tags: ["E-commerce", "2020 to 2021"]
    },
    {
      id: 11,
      name: "TRIPP - Wellness and Meditation App",
      description: "Worked on TRIPP, an innovative VR wellness and meditation application available across VR devices and mobile platforms. Contributed to the release of new immersive content and experiences. Most notably, played a key role in the launch of TRIPP on the Apple Vision Pro device, being part of the team that brought the app to Apple's groundbreaking spatial computing platform. This experience provided invaluable insight into launching products on cutting-edge hardware and being part of a major Apple product ecosystem launch.",
      tags: ["VR", "Mobile", "Art", "Growth", "Product", "Marketing", "2023 to 2025"],
      logo: "/tripp-logo.png",
      image: "/tripp-thumb.png",
      link: "https://www.tripp.com/"
    },
    {
      id: 1,
      name: "Whatsapp AI Chatbot and Payments Bot",
      description: "We developed a Whatsapp bot with AI integrated to work as a support assistant by using an AI Wrapper which we could choose different models and jump in as humans if needed or the AI detects any \"bad or angry answer\" also notifies the Support area.\n\nWe also developed many microservices to be able to use WhatsApp for users to make payments through Debit from their bank accounts while doing a series of validations to ensure data security and a smooth experience.",
      tags: ["AI", "Custom Software", "2025"],
      image: "/whatsapp-bot-thumb.png"
    },
    {
      id: 12,
      name: "Jurassic World III – Spain Mall Tour",
      description: "We created 3 experiences for the promo tour across 10+ Spanish malls.\n\n• Maze Runner Game: Leap Motion sensor game letting attendees control a dinosaur via hand gestures to navigate obstacles.\n\n• Giveaway Roulette: A simple spinner to give out prizes to attendees.\n\n• VR Helicopter Experience: Immersive VR flight over Malta (filming site) with navigation/landing, motion chairs, and vibration feedback; full 3D development for multi-sensory experience.",
      video: "https://player.vimeo.com/video/993943130",
      videoType: "embed",
      image: "/jurassic-thumb.png",
      tags: ["VR", "Games", "Custom Software", "2022"]
    },
    {
      id: 4,
      name: "Pinturerias Rex",
      description: "Supported Rex's strategic pivot from a traditional paint retailer to a broad multi-industry e-commerce platform, expanding from home improvement products to tech gadgets, appliances, and more. Managed roadmap, feature prioritization, and cross-functional delivery to create a unified, scalable online store that reflected the brand's new 'everything you need' positioning.",
      note: "Live site: somosrex.com",
      image: "/rex.png",
      tags: ["E-commerce", "2020 to 2021"]
    },
    {
      id: 8,
      name: "Cleverlit - Literature Kiosk",
      description: "Cleverlit is a digital platform designed for exhibitors at trade shows and events. It allows visitors to scan a code or badge at a booth, select resources (like brochures or PDFs), and receive them instantly via email, while providing analytics on engagement for the exhibitor.",
      tags: ["Custom Software", "2021 to 2023"],
      logo: "/cleverlit-logo.png",
      image: "/cleverlit-4.png",
      images: ["/cleverlit-1.png", "/cleverlit-2.png", "/cleverlit-3.png", "/cleverlit-4.png", "/cleverlit-5.png", "/cleverlit-6.png"],
      link: "https://www.cleverlit.com/es"
    },
    {
      id: 9,
      name: "Global Cloud Situation Room",
      description: "We created a tool that allows the company to see, in real time, the status of all their projects worldwide. We interfaced with their existing systems to gather data.",
      image: "/global-cloud-situation-room.png",
      tags: ["Web", "Custom Software", "2021 to 2022"]
    },
    {
      id: 10,
      name: "Trade Shows Interactive Panels",
      description: "Worked with many projects transforming medical concepts into interactive experiences that educate and engage.\n\nWe created dynamic infographics that allow users to explore data and information interactively.\n\nWorked in Projects finding creative ways to design e-learning experiences and content that engages and educates through interactivity and Technology.",
      image: "/medical-animations.png",
      tags: ["Web", "Unity", "VR", "AR", "Marketing", "2021 to 2023"]
    },
    {
      id: 3,
      name: "Sommier Center",
      description: "As the main PM for SommierCenter (a leading Argentine mattress and furniture retailer), I led the full migration from Magento 1 to Magento 2 (now Adobe Commerce). This upgrade improved performance, security, and scalability for high-traffic seasons. Post-migration, I managed ongoing feature development and marketing campaigns on a time-and-materials basis delivering promotions, UX improvements, and checkout optimizations that supported consistent growth.",
      note: "Live site: www.sommiercenter.com.ar",
      image: "/sommier-center.png",
      tags: ["E-commerce", "2020 to 2021"]
    },
    {
      id: 6,
      name: "Customer Loyalty Mobile App",
      description: "Led the end-to-end design, development, and delivery of a native mobile loyalty application for a major healthcare provider in Mexico, published on both the App Store and Google Play Store. The app featured comprehensive customer engagement tools, rewards programs, and gamification elements designed to enhance user experience and incentivize continued platform usage.",
      tags: ["Mobile", "Product", "2023"]
    },
    {
      id: 7,
      name: "Customizable Event Hub & Management Platform",
      description: "Developed a comprehensive web and mobile application platform with modular architecture for trade shows and corporate events. The solution featured attendee registration with unique QR code access, networking capabilities, meeting scheduling, personalized agenda management for panels and workshops, and robust gamification modules including trivia competitions, scavenger hunts, and various prize giveaway mechanics. While not a full SaaS product, the platform's modular design enabled rapid customization for different clients and event types.",
      tags: ["Custom Software", "Product", "2022 to 2023"]
    },
    {
      id: 13,
      name: "Trantorian - Strategy Blockchain Game",
      description: "Trantorian was my deep dive into the wild world of blockchain gaming: an ambitious 4X space strategy game where players would build empires, trade assets on-chain, and battle across galaxies.\n\nFor almost two years I wore many different hats:\nI was behind partnerships and networked like crazy in the blockchain/gaming space connecting with other projects, influencers, and ecosystems.\nKept an eye on pretty much every moving part of development: from tweaking game mechanics and economy balance to making sure the tech side stayed on track with our distributed dev team.\nWorked hand-in-hand with the community and social media team and got to represent the project on stage at a couple of panels in Dubai and New York which was definitely a highlight, meeting awesome people and soaking up knowledge from the industry's sharpest minds.\n\nIn the end, the game never made it to full launch, but honestly? I wouldn't trade the experience.",
      tags: ["Games", "Blockchain", "Unity", "Mobile", "2022 to 2023"],
      image: "/trantorian-thumb.png"
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
            Projects Gallery
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Here is a walkthrough of many projects I delivered or participated in over the years across many different fields in IT from ecommerce, web apps, mobile apps, to VR games and immersive experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
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
              onClick={() => setSelectedProject(project)}
            >
              {/* Media Section */}
              {(project.image || project.video) && (
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-neutral-700 dark:to-neutral-600">
                  {project.video && project.videoType === 'embed' && (
                    <div className="relative w-full h-full">
                      {/* Show thumbnail when not hovering */}
                      <AnimatePresence>
                        {hoveredProject !== project.id && (
                          <motion.div
                            className="absolute inset-0 z-10"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img 
                              src={project.image || `https://img.youtube.com/vi/${project.video.includes('youtube.com') ? project.video.split('/').pop() : 'default'}/maxresdefault.jpg`}
                              alt={project.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (project.video?.includes('youtube.com')) {
                                  target.src = `https://img.youtube.com/vi/${project.video.split('/').pop()}/hqdefault.jpg`;
                                }
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-black/30">
                              <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-white/80 flex items-center justify-center shadow-2xl">
                                <svg className="w-10 h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {/* Show video preview on hover */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            className="absolute inset-0 z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <iframe
                              src={`${project.video}?autoplay=1&muted=1&loop=1`}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
                  {/* Click to view indicator */}
                  {(project.video || project.image) && (
                    <motion.div 
                      className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 dark:bg-neutral-800/90 rounded-full text-xs font-semibold text-neutral-900 dark:text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Click to view
                    </motion.div>
                  )}
                </div>
              )}

              {/* Content Section */}
              <div className="p-6">
                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getTagColor(tag)} text-white`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredProject === project.id ? 1 : 0,
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

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

      {/* Modal for expanded view */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-900/90 flex items-center justify-center hover:bg-white dark:hover:bg-neutral-900 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 text-neutral-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Media Section */}
              {(selectedProject.video || selectedProject.image) && (
                <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                  {selectedProject.video && selectedProject.videoType === 'embed' && (
                    <iframe
                      src={selectedProject.video}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  {selectedProject.video && selectedProject.videoType !== 'embed' && (
                    <video 
                      src={selectedProject.video}
                      className="absolute inset-0 w-full h-full"
                      controls
                      autoPlay
                    />
                  )}
                  {selectedProject.image && !selectedProject.video && (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.name}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  )}
                </div>
              )}

              {/* Content Section */}
              <div className="p-6 md:p-8 max-h-96 overflow-y-auto">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getTagColor(tag)} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Logo */}
                {selectedProject.logo && (
                  <div className="mb-4 flex items-center">
                    <img 
                      src={selectedProject.logo} 
                      alt={`${selectedProject.name} logo`}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                )}

                {/* Project Title */}
                {selectedProject.link ? (
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline">
                      {selectedProject.name}
                    </h2>
                  </a>
                ) : (
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    {selectedProject.name}
                  </h2>
                )}

                {/* Project Description */}
                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>

                {/* Note */}
                {selectedProject.note && (
                  <p className="text-sm text-primary-600 dark:text-primary-400 italic mt-4">
                    {selectedProject.note}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
