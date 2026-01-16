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
              <path fill="#0052CC" d="M23.12 11.23l-10.35-10.35a1.16 1.16 0 0 0-1.64 0L.78 11.23a1.16 1.16 0 0 0 0 1.64l10.35 10.35a1.16 1.16 0 0 0 1.64 0l10.35-10.35a1.16 1.16 0 0 0 0-1.64zM12 19.33l-7.33-7.33 7.33-7.33 7.33 7.33z"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/jira"
        },
        {
          name: "Confluence",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#0052CC" d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5L12 4.5z"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/confluence"
        },
        {
          name: "Monday.com",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="6" cy="12" r="3" fill="#FF3D57" />
              <circle cx="12" cy="12" r="3" fill="#FFCB00" />
              <circle cx="18" cy="12" r="3" fill="#00C875" />
            </svg>
          ),
          link: "https://monday.com/"
        },
        {
          name: "Slack",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#e01e5a" d="M3.5,14.5a2,2,0,1,1-2-2h2v2Zm1,0a2,2,0,0,1,2-2h5v-5a2,2,0,1,1,2,2v5a2,2,0,0,1-2,2h-5a2,2,0,0,1-2-2Zm5-11a2,2,0,1,1,2,2v-2a2,2,0,0,1-2,2h-2a2,2,0,1,1,2-2Zm0,1a2,2,0,0,1,2,2v5h-5a2,2,0,1,1,2-2h5a2,2,0,0,1,2-2v-5a2,2,0,0,1-2-2Zm11,5a2,2,0,1,1,2,2h-2v-2Zm-1,0a2,2,0,0,1-2,2h-5v5a2,2,0,1,1-2-2v-5a2,2,0,0,1,2-2h5a2,2,0,0,1,2,2Zm-5,11a2,2,0,1,1-2-2v2a2,2,0,0,1,2-2h2a2,2,0,1,1-2,2Zm0-1a2,2,0,0,1-2-2v-5h5a2,2,0,1,1-2,2h-5a2,2,0,0,1-2,2v5a2,2,0,0,1,2,2Z"/>
              <path fill="#36c5f0" d="M2.5,9.5a2,2,0,1,0,2,2v-2a2,2,0,0,0-2,2Z"/>
              <path fill="#2eb67d" d="M14.5,2.5a2,2,0,1,0-2,2h2a2,2,0,0,0,2-2Z"/>
              <path fill="#ecb22e" d="M21.5,14.5a2,2,0,1,0-2-2h2a2,2,0,0,0,2-2Z"/>
              <path fill="#e01e5a" d="M9.5,21.5a2,2,0,1,0,2-2v2a2,2,0,0,0,2-2Z"/>
            </svg>
          ),
          link: "https://slack.com/"
        },
        {
          name: "ClickUp",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#7B68EE" d="M12 2.2c-3.2 0-5.8 2.6-5.8 5.8 0 .4 0 .8.1 1.2l3.4-1.2c-.1-.2-.1-.5-.1-.7 0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4c0 .3 0 .5-.1.7l3.4 1.2c.1-.4.1-.8.1-1.2 0-3.2-2.6-5.8-5.8-5.8z"/>
              <path fill="#FF00FF" d="M12 11.8c-2.4 0-4.4 1.6-5.4 3.8l3.1 1.1c.4-1 1.4-1.6 2.3-1.6s1.9.6 2.3 1.6l3.1-1.1c-1-2.2-3-3.8-5.4-3.8z"/>
            </svg>
          ),
          link: "https://clickup.com/"
        },
        {
          name: "Trello",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <rect width="20" height="20" x="2" y="2" rx="3" fill="#0079BF" />
              <rect width="4" height="12" x="6" y="6" rx="1" fill="#FFFFFF" />
              <rect width="4" height="7" x="14" y="6" rx="1" fill="#FFFFFF" />
            </svg>
          ),
          link: "https://trello.com/"
        },
        {
          name: "Asana",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="7" r="3.5" fill="#F06595" />
              <circle cx="7" cy="15.5" r="3.5" fill="#F06595" />
              <circle cx="17" cy="15.5" r="3.5" fill="#F06595" />
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
              <path fill="#FFD02F" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
              <path fill="#050038" d="M12 5.5l1.5 2.5 1.5-2.5h3L15 10.5l3 5h-3l-1.5-2.5-1.5 2.5h-3l3-5-3-5h3z"/>
            </svg>
          ),
          link: "https://miro.com/"
        },
        {
          name: "Whimsical",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#9C52FF" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
              <path fill="#9C52FF" d="M12 6.5l2 3.5 3.5 2-3.5 2-2 3.5-2-3.5-3.5-2 3.5-2z"/>
            </svg>
          ),
          link: "https://whimsical.com/"
        },
        {
          name: "Figma",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#F24E1E" d="M9 3a3 3 0 0 0 0 6h3V3H9z"/>
              <path fill="#FF7262" d="M15 3a3 3 0 1 0-3 3h3V3z"/>
              <path fill="#A259FF" d="M9 9a3 3 0 0 0 0 6h3V9H9z"/>
              <path fill="#1ABCFE" d="M15 9a3 3 0 1 0-3 3h3V9z"/>
              <path fill="#0ACF83" d="M9 15a3 3 0 1 0 3 3v-3H9z"/>
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
              <path fill="#FF7A59" d="M21.2 11.5c-.6 0-1.1.3-1.4.7l-2.6-1.5V9.1c1-.3 1.7-1.2 1.7-2.3 0-1.3-1.1-2.4-2.4-2.4S14 5.5 14 6.8c0 1.1.7 2 1.7 2.3v1.6l-2.6 1.5c-.3-.4-.8-.7-1.4-.7-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.6 0 1.1-.3 1.4-.7l2.6 1.5v1.6c-1 .3-1.7 1.2-1.7 2.3 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.1-.7-2-1.7-2.3v-1.6l2.6-1.5c.3.4.8.7 1.4.7 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8zM16.5 6c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zm0 12c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8zm-4.7-4.2c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z"/>
            </svg>
          ),
          link: "https://www.hubspot.com/"
        },
        {
          name: "Pipedrive",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#222222" className="dark:fill-white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path fill="#00B67A" d="M7 11h2v6H7zm4-4h2v10h-2zm4 6h2v4h-2z"/>
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
              <path fill="#74aa9c" d="M22.28 9.82a5.985 5.985 0 00-.51-4.91 6.046 6.046 0 00-4.3-3.12 6.086 6.086 0 00-5.19.96 6.057 6.057 0 00-2.83 3.91 5.982 5.982 0 00-3.33 1.11 6.048 6.048 0 00-2.32 3.73 6.086 6.086 0 00.52 4.91 6.046 6.046 0 004.3 3.12 6.086 6.086 0 005.19-.96 6.057 6.057 0 002.83-3.91 5.982 5.982 0 003.33-1.11 6.048 6.048 0 002.32-3.73 6.083 6.083 0 00-.51-4.91zm-10.28 12.37a4.57 4.57 0 01-2.2-.56l.09-.05 3.39-1.92c.26-.15.41-.43.41-.73v-4.83l1.71.99c.02.01.04.04.04.06v3.91a4.594 4.594 0 01-3.45 4.11zm10.28-12.37a4.57 4.57 0 01-2.2-.56l.09-.05 3.39-1.92c.26-.15.41-.43.41-.73v-4.83l1.71.99c.02.01.04.04.04.06v3.91a4.594 4.594 0 01-3.45 4.11z"/>
            </svg>
          ),
          link: "https://chat.openai.com/"
        },
        {
          name: "Claude",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#D97757" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
              <circle cx="12" cy="12" r="3" fill="#D97757" />
            </svg>
          ),
          link: "https://claude.ai/"
        },
        {
          name: "Grok",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path className="stroke-neutral-800 dark:stroke-white" d="M4 4l16 16M4 20L20 4" strokeLinecap="round"/>
            </svg>
          ),
          link: "https://x.ai/"
        },
        {
          name: "Midjourney",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
          ),
          link: "https://www.midjourney.com/"
        },
        {
          name: "Fireflies.ai",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#6B46C1" d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z"/>
            </svg>
          ),
          link: "https://fireflies.ai/"
        },
        {
          name: "Junie for WebStorm",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <rect width="20" height="20" x="2" y="2" rx="4" fill="#000000" className="dark:fill-white" opacity="0.1"/>
              <path fill="#000000" className="dark:fill-white" d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"/>
              <path fill="#000000" className="dark:fill-white" d="M12 8l4 4-4 4V8z"/>
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
