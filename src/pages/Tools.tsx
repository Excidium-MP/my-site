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
              <path fill="#0052CC" d="M11.53 10.154L1.314 0H0v11.69c0 .644.52 1.163 1.163 1.163h10.368L11.53 10.154z"/>
              <path fill="#0052CC" d="M11.53 10.154l10.217 10.154L24 24V12.31c0-.644-.52-1.164-1.164-1.164H12.47l-.94-.992z" opacity=".8"/>
              <path fill="#2684FF" d="M11.53 10.154L1.314 20.308l1.314 1.314c.644.644 1.688.644 2.332 0L11.53 15.05l6.571 6.572c.644.644 1.688.644 2.332 0l1.314-1.314-10.217-10.154z"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/jira"
        },
        {
          name: "Confluence",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#0052CC" d="M12.469 13.846L22.686 24H24V12.31c0-.644-.52-1.163-1.163-1.163H12.469v2.699z"/>
              <path fill="#0052CC" d="M12.469 13.846l-10.217-10.154L0 0v11.69c0 .644.52 1.164 1.164 1.164h10.367l.938.992z" opacity=".8"/>
              <path fill="#2684FF" d="M12.469 13.846l10.217-10.154-1.314-1.314c-.644-.644-1.688-.644-2.332 0l-6.571 6.572-6.571-6.572c-.644-.644-1.688-.644-2.332 0L2.252 3.692l10.217 10.154z"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/confluence"
        },
        {
          name: "Monday.com",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#FF3D57" d="M6 3a3 3 0 100 6 3 3 0 000-6zM6 15a3 3 0 100 6 3 3 0 000-6zM12 9a3 3 0 100 6 3 3 0 000-6zM18 3a3 3 0 100 6 3 3 0 000-6zM18 15a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
          ),
          link: "https://monday.com/"
        },
        {
          name: "Slack",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#36C5F0" d="M5.045 15.114a2.52 2.52 0 01-2.523-2.52c0-1.392 1.13-2.523 2.523-2.523h2.52v5.043h-2.52zm0-10.086a2.52 2.52 0 012.52 2.52v2.523h-2.52a2.52 2.52 0 110-5.043z"/>
              <path fill="#2EB67D" d="M8.886 5.045a2.52 2.52 0 012.52-2.523c1.393 0 2.523 1.13 2.523 2.523v2.52h-5.043v-2.52zm10.086 0a2.52 2.52 0 01-2.52 2.52h-2.523V5.045a2.52 2.52 0 115.043 0z"/>
              <path fill="#ECB22E" d="M18.955 8.886a2.52 2.52 0 012.523 2.52c0 1.393-1.13 2.523-2.523 2.523h-2.52V8.886h2.52zm0 10.086a2.52 2.52 0 01-2.52-2.52v-2.523h2.52a2.52 2.52 0 110 5.043z"/>
              <path fill="#E01E5A" d="M15.114 18.955a2.52 2.52 0 01-2.52 2.523c-1.393 0-2.523-1.13-2.523-2.523v-2.52h5.043v2.52zm-10.086 0a2.52 2.52 0 012.52-2.52h2.523v2.52a2.52 2.52 0 11-5.043 0z"/>
            </svg>
          ),
          link: "https://slack.com/"
        },
        {
          name: "ClickUp",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#7B68EE" d="M12 2L4 10h16L12 2z"/>
              <path fill="#FF00FF" d="M4 14h16l-8 8-8-8z"/>
            </svg>
          ),
          link: "https://clickup.com/"
        },
        {
          name: "Trello",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#0079BF" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              <path fill="#FFFFFF" d="M10.5 6h-3.5c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h3.5c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5zm6.5 0h-3.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5h3.5c.28 0 .5-.22.5-.5v-5c0-.28-.22-.5-.5-.5z"/>
            </svg>
          ),
          link: "https://trello.com/"
        },
        {
          name: "Asana",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#F06595" d="M12 2l4.5 7.8h-9L12 2z"/>
              <path fill="#F06595" d="M16.5 14.2l4.5 7.8h-9l4.5-7.8z"/>
              <path fill="#F06595" d="M7.5 14.2l4.5 7.8h-9l4.5-7.8z"/>
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
              <path fill="#050038" d="M16.32 15.36c.48-2.64-1.2-5.28-3.84-5.76-1.44-.24-2.88 0-4.08.72L6.72 6.48c-.24-.48-.96-.48-1.2 0-.24.48 0 1.2.48 1.44l1.68 3.84c-1.44 1.68-1.68 4.32-.48 6.48 1.2 2.16 3.84 2.88 6.24 1.92 1.44-.48 2.4-1.68 2.88-3.12z"/>
            </svg>
          ),
          link: "https://miro.com/"
        },
        {
          name: "Whimsical",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#9C52FF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              <path fill="#9C52FF" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity=".5"/>
              <path fill="#9C52FF" d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
            </svg>
          ),
          link: "https://whimsical.com/"
        },
        {
          name: "Figma",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#F24E1E" d="M12 12c1.657 0 3-1.343 3-3s-1.343-3-3-3H9v6h3z"/>
              <path fill="#FF7262" d="M9 12a3 3 0 110-6 3 3 0 010 6z"/>
              <path fill="#A259FF" d="M9 18a3 3 0 110-6 3 3 0 010 6z"/>
              <path fill="#1ABCFE" d="M12 18a3 3 0 110-6 3 3 0 010 6z"/>
              <path fill="#0ACF83" d="M9 24a3 3 0 110-6 3 3 0 010 6z"/>
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
              <path fill="#FF7A59" d="M18.9 10.3c-.6 0-1.1.2-1.5.5L14 8.2c.1-.4.1-.7.1-1.1 0-2.3-1.9-4.1-4.1-4.1S5.9 4.8 5.9 7.1c0 .4 0 .7.1 1.1l-3.4 2.6c-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.6 0 1.1-.2 1.5-.5l3.4 2.6c-.1.4-.1.7-.1 1.1 0 2.3 1.9 4.1 4.1 4.1s4.1-1.8 4.1-4.1c0-.4 0-.7-.1-1.1l3.4-2.6c.4.3.9.5 1.5.5 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5zm-8.9-4.1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z"/>
            </svg>
          ),
          link: "https://www.hubspot.com/"
        },
        {
          name: "Pipedrive",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#222222" className="dark:fill-white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path fill="#00B67A" d="M11 7h2v10h-2V7zm5 3h-2v7h2v-7zm-10 3h2v4H6v-4z"/>
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
              <path fill="#74aa9c" d="M22.28 9.82a5.985 5.985 0 00-.51-4.91 6.046 6.046 0 00-4.3-3.12 6.086 6.086 0 00-5.19.96 6.057 6.057 0 00-2.83 3.91 5.982 5.982 0 00-3.33 1.11 6.048 6.048 0 00-2.32 3.73 6.086 6.086 0 00.52 4.91 6.046 6.046 0 004.3 3.12 6.086 6.086 0 005.19-.96 6.057 6.057 0 002.83-3.91 5.982 5.982 0 003.33-1.11 6.048 6.048 0 002.32-3.73 6.083 6.083 0 00-.51-4.91zm-10.28 12.37a4.57 4.57 0 01-2.2-.56l.09-.05 3.39-1.92c.26-.15.41-.43.41-.73v-4.83l1.71.99c.02.01.04.04.04.06v3.91a4.594 4.594 0 01-3.45 4.11z"/>
            </svg>
          ),
          link: "https://chat.openai.com/"
        },
        {
          name: "Claude",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#D97757" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
              <circle cx="12" cy="12" r="3" fill="#D97757" opacity="0.5"/>
            </svg>
          ),
          link: "https://claude.ai/"
        },
        {
          name: "Grok",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
              <path className="stroke-neutral-800 dark:stroke-white" d="M4 4l16 16M4 20L20 4" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="9" className="stroke-neutral-800 dark:stroke-white"/>
            </svg>
          ),
          link: "https://x.ai/"
        },
        {
          name: "Midjourney",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity="0.5"/>
            </svg>
          ),
          link: "https://www.midjourney.com/"
        },
        {
          name: "Fireflies.ai",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#6B46C1" d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z"/>
              <path fill="#9F7AEA" d="M12 5.5l1.5 4.5H18l-3.5 2.5 1.5 4.5-4-3-4 3 1.5-4.5L6 10h4.5z" opacity="0.5"/>
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
              <path fill="#000000" className="dark:fill-white" d="M10.5 8.5v7l5-3.5-5-3.5z"/>
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
