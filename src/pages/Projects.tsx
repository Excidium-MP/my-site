import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  name: string
  description: string
  note?: string
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
      title: "Entertainment",
      description: "Interactive experiences and entertainment solutions",
      gradient: "from-primary-500 to-primary-600",
      darkGradient: "dark:from-primary-600 dark:to-primary-700",
      icon: "🎭",
      projects: [
        {
          name: "Social and Corporate Events",
          description: "I worked in all kind of social and corporate events",
          note: "Images coming soon"
        }
      ]
    },
    {
      id: 2,
      title: "E-Commerce",
      description: "Online shopping platforms and digital marketplaces",
      gradient: "from-accent-500 to-accent-600",
      darkGradient: "dark:from-accent-600 dark:to-accent-700",
      icon: "🛒",
      projects: [
        {
          name: "Sommier Center",
          description: "E-commerce platform for mattresses and bedding"
        },
        {
          name: "Jazmin Chebar",
          description: "Fashion e-commerce solution"
        },
        {
          name: "Pinturerias Rex",
          description: "Online store for paint and hardware products"
        }
      ]
    },
    {
      id: 3,
      title: "Custom Software",
      description: "Tailored software solutions for unique business needs",
      gradient: "from-primary-600 to-accent-500",
      darkGradient: "dark:from-primary-700 dark:to-accent-600",
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
      id: 4,
      title: "Video Games",
      description: "Gaming experiences and interactive entertainment",
      gradient: "from-accent-600 to-primary-500",
      darkGradient: "dark:from-accent-700 dark:to-primary-600",
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
      id: 5,
      title: "Products",
      description: "Digital products and innovative solutions",
      gradient: "from-primary-500 to-accent-500",
      darkGradient: "dark:from-primary-600 dark:to-accent-600",
      icon: "📦",
      projects: []
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
              animate={{ opacity: 1, x: 0 }}
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
