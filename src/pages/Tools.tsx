import { motion, Variants } from 'framer-motion'
import { useState, ReactNode } from 'react'

interface Tool {
  name: string
  icon: ReactNode
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
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#4285F4" d="M22.5 12c0-.8-.1-1.5-.2-2.2H12v4.2h5.9c-.3 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3.3-4.6 3.3-7.7z"/>
              <path fill="#34A853" d="M12 22.7c2.9 0 5.3-1 7.1-2.6l-3.4-2.6c-1 .7-2.2 1.1-3.7 1.1-2.8 0-5.2-1.9-6.1-4.5H2.4v2.8c1.8 3.5 5.5 5.8 9.6 5.8z"/>
              <path fill="#FBBC05" d="M5.9 14.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V7.1H2.4C1.6 8.9 1.1 10.4 1.1 12s.5 3.1 1.3 4.9l3.5-2.8z"/>
              <path fill="#EA4335" d="M12 5.3c1.6 0 3 .5 4.1 1.6l3.1-3.1C17.3 2 14.9 1.3 12 1.3 7.9 1.3 4.2 3.6 2.4 7.1l3.5 2.8c.9-2.6 3.3-4.6 6.1-4.6z"/>
            </svg>
          ),
          link: "https://workspace.google.com/"
        },
        {
          name: "Microsoft Office",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#D83B01" d="M11 2L2 3.5v17L11 22V2z"/>
              <path fill="#EA3E23" d="M22 5h-11v14h11V5z"/>
              <path fill="#F2F2F2" d="M16.5 8.5h-3v7h3v-7z"/>
            </svg>
          ),
          link: "https://www.office.com/"
        }
      ]
    },
    {
      title: "Project Management & Collaboration",
      tools: [
        {
          name: "Jira",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#0052CC" d="M11.5 1.1L2.1 10.5c-.8.8-.8 2 0 2.8l9.4 9.4c.8.8 2 .8 2.8 0l9.4-9.4c.8-.8.8-2 0-2.8L14.3 1.1c-.8-.8-2-.8-2.8 0z"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/jira"
        },
        {
          name: "Confluence",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#0052CC" d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/confluence"
        },
        {
          name: "Monday.com",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="6" r="3.5" fill="#FF3D57" />
              <circle cx="12" cy="12" r="3.5" fill="#FFCB00" />
              <circle cx="12" cy="18" r="3.5" fill="#00C875" />
            </svg>
          ),
          link: "https://monday.com/"
        },
        {
          name: "Slack",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="#36C5F0" />
              <rect x="13" y="2" width="9" height="9" rx="2" fill="#2EB67D" />
              <rect x="2" y="13" width="9" height="9" rx="2" fill="#ECB22E" />
              <rect x="13" y="13" width="9" height="9" rx="2" fill="#E01E5A" />
            </svg>
          ),
          link: "https://slack.com/"
        },
        {
          name: "ClickUp",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#7B68EE" d="M12 3L4 12h16L12 3z"/>
              <path fill="#FF00FF" d="M12 21l-8-9h16l-8 9z"/>
            </svg>
          ),
          link: "https://clickup.com/"
        },
        {
          name: "Trello",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <rect width="20" height="20" x="2" y="2" rx="3" fill="#0079BF" />
              <rect width="4" height="12" x="6" y="6" rx="1" fill="#FFFFFF" opacity="0.8" />
              <rect width="4" height="7" x="14" y="6" rx="1" fill="#FFFFFF" opacity="0.8" />
            </svg>
          ),
          link: "https://trello.com/"
        },
        {
          name: "Asana",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="8" r="3" fill="#F06595" />
              <circle cx="8" cy="16" r="3" fill="#F06595" />
              <circle cx="16" cy="16" r="3" fill="#F06595" />
            </svg>
          ),
          link: "https://asana.com/"
        }
      ]
    },
    {
      title: "Design & Creative",
      tools: [
        {
          name: "Miro",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="10" fill="#FFD02F" />
              <path fill="#050038" d="M8 8l4 4-4 4h3l4-4-4-4H8z" />
            </svg>
          ),
          link: "https://miro.com/"
        },
        {
          name: "Whimsical",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#9C52FF" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
            </svg>
          ),
          link: "https://whimsical.com/"
        },
        {
          name: "Figma",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="8" cy="6" r="3" fill="#F24E1E" />
              <circle cx="16" cy="6" r="3" fill="#FF7262" />
              <circle cx="8" cy="12" r="3" fill="#A259FF" />
              <circle cx="16" cy="12" r="3" fill="#1ABCFE" />
              <circle cx="8" cy="18" r="3" fill="#0ACF83" />
            </svg>
          ),
          link: "https://www.figma.com/"
        }
      ]
    },
    {
      title: "CRM & Sales",
      tools: [
        {
          name: "HubSpot",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="6" r="2.5" fill="#FF7A59" />
              <circle cx="6" cy="16" r="2.5" fill="#FF7A59" />
              <circle cx="18" cy="16" r="2.5" fill="#FF7A59" />
              <path stroke="#FF7A59" strokeWidth="2" d="M12 6l-6 10M12 6l6 10" />
            </svg>
          ),
          link: "https://www.hubspot.com/"
        },
        {
          name: "Pipedrive",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <rect x="4" y="4" width="16" height="16" rx="4" fill="#222222" className="dark:fill-white" opacity="0.1" />
              <path fill="#00B67A" d="M7 14h2v4H7zM11 8h2v10h-2zM15 11h2v7h-2z" />
            </svg>
          ),
          link: "https://www.pipedrive.com/"
        }
      ]
    },
    {
      title: "AI & Innovation Tools",
      tools: [
        {
          name: "ChatGPT",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#74aa9c" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z"/>
            </svg>
          ),
          link: "https://chat.openai.com/"
        },
        {
          name: "Claude",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#D97757" d="M12 4l8 14H4L12 4z"/>
            </svg>
          ),
          link: "https://claude.ai/"
        },
        {
          name: "Grok",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="currentColor" d="M4 4h16v16H4z" className="text-neutral-800 dark:text-white" opacity="0.1" />
              <path stroke="currentColor" strokeWidth="2" d="M4 4l16 16M20 4L4 20" className="text-neutral-800 dark:text-white" />
            </svg>
          ),
          link: "https://x.ai/"
        },
        {
          name: "Midjourney",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
          ),
          link: "https://www.midjourney.com/"
        },
        {
          name: "Fireflies.ai",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#6B46C1" d="M12 2l3 7h7l-6 5 2 8-6-5-6 5 2-8-6-5h7z"/>
            </svg>
          ),
          link: "https://fireflies.ai/"
        },
        {
          name: "Junie for WebStorm",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
              <path fill="currentColor" d="M12 7l5 5-5 5V7z" />
            </svg>
          ),
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
                <h2 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  {category.title}
                </h2>
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
                      <div className="w-12 h-12 mb-3 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
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
