import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  name: string
  description: string
  note?: string
  image?: string
  video?: string
}

interface Category {
  id: number
  title: string
  description: string
  gradient: string
  darkGradient: string
  icon: string
  projects: Project[]
}

function Projects() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id)
  }

  const categories: Category[] = [
    {
      id: 1,
      title: "E-Commerce",
      description: "Online shopping platforms and digital marketplaces",
      gradient: "from-blue-500 to-blue-600",
      darkGradient: "dark:from-blue-600 dark:to-blue-700",
      icon: "🛒",
      projects: [
        {
          name: "Jazmín Chebar – Innovative E-Commerce Feature Development",
          description: "Working closely with an experienced Delivery Manager who handled client relations, I led the internal development team for Jazmín Chebar's fashion e-commerce platform. Focused on building innovative features that were cutting-edge at the time, such as personalized styling tools, advanced filtering, 3D Images, and so on that elevated the shopping journey for a premium fashion brand.",
          note: "Live site: www.jazminchebar.com.ar",
          video: "/Jazmin.mp4"
        },
        {
          name: "SommierCenter – E-Commerce Platform Migration & Feature Development",
          description: "As the main PM for SommierCenter (a leading Argentine mattress and furniture retailer), I led the full migration from Magento 1 to Magento 2 (now Adobe Commerce). This upgrade improved performance, security, and scalability for high-traffic seasons. Post-migration, I managed ongoing feature development and marketing campaigns on a time-and-materials basis delivering promotions, UX improvements, and checkout optimizations that supported consistent growth.",
          note: "Live site: www.sommiercenter.com.ar",
          image: "/sommier-center.png"
        },
        {
          name: "Rex – Multi-Industry E-Commerce Transformation",
          description: "Supported Rex's strategic pivot from a traditional paint retailer to a broad multi-industry e-commerce platform, expanding from home improvement products to tech gadgets, appliances, and more. Managed roadmap, feature prioritization, and cross-functional delivery to create a unified, scalable online store that reflected the brand's new 'everything you need' positioning.",
          note: "Live site: somosrex.com",
          image: "/rex.png"
        }
      ]
    },
    {
      id: 2,
      title: "Custom Software",
      description: "Tailored software solutions for unique business needs",
      gradient: "from-teal-500 to-teal-600",
      darkGradient: "dark:from-teal-600 dark:to-teal-700",
      icon: "⚙️",
      projects: [
        {
          name: "AR Interactive Panel",
          description: "Augmented reality interactive panel for tradeshows"
        },
        {
          name: "AR Experiences For Products",
          description: "Product visualization using augmented reality"
        },
        {
          name: "Mobile Clients Loyalty App",
          description: "Customer loyalty and rewards mobile application"
        },
        {
          name: "Tradeshows/Events Hub",
          description: "Centralized platform for managing events and tradeshows"
        }
      ]
    },
    {
      id: 3,
      title: "Video Games",
      description: "Gaming experiences and interactive entertainment",
      gradient: "from-indigo-500 to-indigo-600",
      darkGradient: "dark:from-indigo-600 dark:to-indigo-700",
      icon: "🎮",
      projects: [
        {
          name: "Unity",
          description: "Game development using Unity engine"
        },
        {
          name: "VR",
          description: "Virtual reality experiences and applications"
        },
        {
          name: "Leap Motion",
          description: "Hand tracking and gesture-based interactions"
        }
      ]
    },
    {
      id: 4,
      title: "Products",
      description: "Digital products and innovative solutions",
      gradient: "from-emerald-500 to-emerald-600",
      darkGradient: "dark:from-emerald-600 dark:to-emerald-700",
      icon: "📦",
      projects: []
    },
    {
      id: 5,
      title: "Entertainment",
      description: "Interactive experiences and entertainment solutions",
      gradient: "from-purple-500 to-purple-600",
      darkGradient: "dark:from-purple-600 dark:to-purple-700",
      icon: "🎭",
      projects: [
        {
          name: "Social and Corporate Events",
          description: "I worked in all kind of social and corporate events",
          note: "Images coming soon"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-100 via-neutral-50 to-white dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-900 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore my work across different categories
          </p>
        </motion.div>

        {/* Vertical Category Banners */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r ${category.gradient} ${category.darkGradient}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header - Clickable */}
              <div
                onClick={() => toggleCategory(category.id)}
                className="relative p-8 md:p-12 flex items-center justify-between cursor-pointer group"
              >
                {/* Left Content */}
                <div className="flex items-center space-x-6">
                  <div className="text-6xl md:text-7xl opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {category.title}
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Right Arrow - Changes based on expanded state */}
                <div className="text-white/80 group-hover:text-white transition-all duration-300">
                  <svg
                    className={`w-12 h-12 transform transition-transform duration-300 ${
                      expandedCategory === category.id ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
              </div>

              {/* Collapsible Projects Section */}
              <AnimatePresence>
                {expandedCategory === category.id && category.projects.length > 0 && (
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm border-t border-white/20"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 md:p-8 space-y-4">
                      {category.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/20 backdrop-blur-md rounded-lg p-6 hover:bg-white/30 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{ x: 8, scale: 1.02 }}
                        >
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            {project.name}
                          </h3>
                          <p className="text-white/90 text-base md:text-lg">
                            {project.description}
                          </p>
                          {project.note && (
                            <p className="text-white/70 text-sm italic mt-2">
                              {project.note}
                            </p>
                          )}
                          {project.image && (
                            <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                              <img 
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          )}
                          {project.video && (
                            <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                              <video 
                                src={project.video}
                                controls
                                className="w-full h-auto"
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Empty State for Products */}
                {expandedCategory === category.id && category.projects.length === 0 && (
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm border-t border-white/20"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 md:p-8 text-center">
                      <p className="text-white/70 text-lg">
                        No projects yet. Coming soon!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
