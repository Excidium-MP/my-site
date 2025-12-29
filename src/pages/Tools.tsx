import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

interface Tool {
  name: string
  icon: string
  link: string
  description?: string
}

interface ToolCategory {
  title: string
  description: string
  tools: Tool[]
}

function Tools() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  const toolCategories: ToolCategory[] = [
    {
      title: "Productivity Suite",
      description: "Essential tools for document creation, collaboration, and daily workflow management.",
      tools: [
        {
          name: "Google Suite",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
          link: "https://workspace.google.com/"
        },
        {
          name: "Microsoft Office",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftoffice.svg",
          link: "https://www.office.com/"
        }
      ]
    },
    {
      title: "Project Management & Collaboration",
      description: "Platforms for team coordination, task tracking, and agile project delivery.",
      tools: [
        {
          name: "Jira",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jira.svg",
          link: "https://www.atlassian.com/software/jira"
        },
        {
          name: "Confluence",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/confluence.svg",
          link: "https://www.atlassian.com/software/confluence"
        },
        {
          name: "Miro",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/miro.svg",
          link: "https://miro.com/"
        },
        {
          name: "Monday.com",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/monday.svg",
          link: "https://monday.com/"
        }
      ]
    },
    {
      title: "CRM & Sales",
      description: "Customer relationship management and sales automation platform.",
      tools: [
        {
          name: "HubSpot",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg",
          link: "https://www.hubspot.com/"
        }
      ]
    },
    {
      title: "AI & Innovation Tools",
      description: "Cutting-edge AI assistants for content creation, design, and productivity enhancement.",
      tools: [
        {
          name: "ChatGPT",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
          link: "https://chat.openai.com/"
        },
        {
          name: "Grok",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg",
          link: "https://x.ai/"
        },
        {
          name: "Midjourney",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/midjourney.svg",
          link: "https://www.midjourney.com/"
        },
        {
          name: "Fireflies.ai",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ai.svg",
          link: "https://fireflies.ai/"
        },
        {
          name: "Junie for WebStorm",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jetbrains.svg",
          link: "https://www.jetbrains.com/webstorm/"
        }
      ]
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const toolVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 py-20 px-4 transition-colors duration-1000 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-400/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-display font-bold text-center mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-accent-400 dark:to-accent-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Tools & Technologies
        </motion.h1>

        <motion.p
          className="text-center text-lg text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          A comprehensive toolkit I leverage daily to drive projects, collaborate with teams, and stay at the forefront of innovation.
        </motion.p>

        {/* Tool Categories */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {toolCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl"
            >
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  {category.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
                  {category.description}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.tools.map((tool) => (
                  <motion.a
                    key={tool.name}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={toolVariants}
                    className="group relative"
                    onMouseEnter={() => setHoveredTool(tool.name)}
                    onMouseLeave={() => setHoveredTool(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`
                      flex flex-col items-center justify-center p-6 rounded-2xl
                      bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-750
                      border-2 transition-all duration-300
                      ${hoveredTool === tool.name 
                        ? 'border-primary-500 dark:border-primary-400 shadow-lg shadow-primary-500/20' 
                        : 'border-transparent hover:border-accent-400 dark:hover:border-accent-500'
                      }
                    `}>
                      {/* Icon */}
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        <img 
                          src={tool.icon} 
                          alt={`${tool.name} icon`}
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 brightness-0 saturate-100 invert-[0.3] dark:invert-[0.85]"
                        />
                      </div>

                      {/* Tool Name */}
                      <h3 className="text-sm font-semibold text-center text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {tool.name}
                      </h3>

                      {/* Hover Effect Overlay */}
                      <div className={`
                        absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                      `} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Always exploring new tools and technologies to enhance productivity and innovation.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Tools
