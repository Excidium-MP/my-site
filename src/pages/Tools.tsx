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
      description: "Platforms for team coordination, task tracking, and agile project delivery.",
      tools: [
        {
          name: "Jira",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#0052CC" d="M11.531 10.154L1.314 0H0v11.69c0 .644.52 1.163 1.163 1.163h10.368L11.531 10.154z"/>
              <path fill="#0052CC" d="M11.531 10.154l10.217 10.154L24 24V12.31c0-.644-.52-1.164-1.164-1.164H12.469L11.531 10.154z" opacity=".8"/>
              <path fill="#2684FF" d="M11.531 10.154L1.314 20.308l1.314 1.314c.644.644 1.688.644 2.332 0L11.531 15.05l6.571 6.572c.644.644 1.688.644 2.332 0l1.314-1.314L11.531 10.154z"/>
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
          name: "Miro",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#FFD02F" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path fill="#050038" d="M11 7h2v10h-2z"/>
            </svg>
          ),
          link: "https://miro.com/"
        },
        {
          name: "Monday.com",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="6" cy="12" r="3" fill="#FF3D57"/>
              <circle cx="12" cy="12" r="3" fill="#FFCB00"/>
              <circle cx="18" cy="12" r="3" fill="#00C875"/>
            </svg>
          ),
          link: "https://monday.com/"
        },
        {
          name: "Slack",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#36C5F0" d="M5 10c0-1.1.9-2 2-2h2v2H7c-1.1 0-2-.9-2-2zm2-7c1.1 0 2 .9 2 2v5H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z"/>
              <path fill="#2EB67D" d="M14 5c1.1 0 2 .9 2 2v2h-2c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm7 2c0 1.1-.9 2-2 2h-5v-2c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2z"/>
              <path fill="#ECB22E" d="M19 14c0 1.1-.9 2-2 2h-2v-2h2c1.1 0 2 .9 2 2zm-2 7c-1.1 0-2-.9-2-2v-5h2c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2z"/>
              <path fill="#E01E5A" d="M10 19c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zm-7-2c0-1.1.9-2 2-2h5v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2z"/>
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
              <path fill="#0079BF" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 16.5c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v9zm8-4c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v5z"/>
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
      description: "Tools for UI/UX design, visual collaboration, and prototyping.",
      tools: [
        {
          name: "Figma",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#F24E1E" d="M12 12a3 3 0 110-6 3 3 0 010 6z"/>
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
      description: "Customer relationship management and sales automation platform.",
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
              <path fill="#00B67A" d="M13 7h-2v10h2z"/>
            </svg>
          ),
          link: "https://www.pipedrive.com/"
        }
      ]
    },
    {
      title: "AI & Innovation Tools",
      description: "Cutting-edge AI assistants for content creation, design, and productivity enhancement.",
      tools: [
        {
          name: "ChatGPT",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#74aa9c" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5122-4.9102 6.0462 6.0462 0 0 0-4.303-3.1204 6.0858 6.0858 0 0 0-5.1863.9572 6.0566 6.0566 0 0 0-2.8341 3.9056 5.9818 5.9818 0 0 0-3.3283 1.1099 6.0483 6.0483 0 0 0-2.3168 3.7314 6.0863 6.0863 0 0 0 .5245 4.9131 6.046 6.046 0 0 0 4.303 3.1204 6.0858 6.0858 0 0 0 5.1863-.9572 6.0566 6.0566 0 0 0 2.8341-3.9056 5.9818 5.9818 0 0 0 3.3283-1.1099 6.0483 6.0483 0 0 0 2.3168-3.7314 6.0833 6.0833 0 0 0-.5122-4.9131zm-10.282 12.3702a4.57 4.57 0 0 1-2.203-.5646l.092-.0525 3.3934-1.9213a.816.816 0 0 0 .4102-.711v-4.83l1.7144.99a.074.074 0 0 1 .0385.0645v3.911a4.5938 4.5938 0 0 1-3.4455 4.1139zm-8.8143-6.52a4.5681 4.5681 0 0 1-.1683-2.2715l.092.0525 3.3934 1.9213a.8159.8159 0 0 0 .8204 0l4.1827-2.415v1.98a.0741.0741 0 0 1-.0385.0645l-3.3868 1.9547a4.5938 4.5938 0 0 1-4.8929-.2865zm-1.0289-8.5252a4.5681 4.5681 0 0 1 2.0347-1.7069l.092.0525 3.3934 1.9213a.816.816 0 0 0 .4102.1086h.0001a.8159.8159 0 0 0 .4102-.1086l4.1827-2.415v-1.98a.0742.0742 0 0 1 .0385-.0645l3.3868 1.9547a4.5938 4.5938 0 0 1 1.5473 4.6738z"/>
            </svg>
          ),
          link: "https://chat.openai.com/"
        },
        {
          name: "Claude",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#D97757" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
            </svg>
          ),
          link: "https://claude.ai/"
        },
        {
          name: "Grok",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#000000" className="dark:fill-white" d="M12 2L2 22h20L12 2zm0 4.5L18.5 19H5.5L12 6.5z"/>
            </svg>
          ),
          link: "https://x.ai/"
        },
        {
          name: "Midjourney",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3"/>
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
              <path fill="#000000" className="dark:fill-white" d="M0 0v24h24V0H0zm20 20H4V4h16v16z"/>
              <path fill="#000000" className="dark:fill-white" d="M17 17h-2V7h2v10zM13 17h-2V9h2v8zM9 17H7v-4h2v4z"/>
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
