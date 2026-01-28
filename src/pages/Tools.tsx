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
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          ),
          link: "https://workspace.google.com/"
        },
        {
          name: "Microsoft Office",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#EB3C00" d="M24 7.387v9.226a.8.8 0 0 1-.48.735l-6.56 2.88a.8.8 0 0 1-.32.067.8.8 0 0 1-.32-.067L9.76 17.35l-6.56 2.878a.8.8 0 0 1-.32.067.8.8 0 0 1-.8-.8V10.27a.8.8 0 0 1 .48-.735l6.56-2.88a.8.8 0 0 1 .64 0l6.56 2.88 6.56-2.88a.8.8 0 0 1 1.12.732z"/>
              <path fill="#FF6C40" d="M16.64 20.295a.8.8 0 0 0 .32-.067l6.56-2.88a.8.8 0 0 0 .48-.735V7.387a.8.8 0 0 0-1.12-.732l-6.56 2.88a.8.8 0 0 0-.48.735v9.226a.8.8 0 0 0 .8.8z"/>
              <path fill="#D62300" d="M2.08 19.495a.8.8 0 0 0 .8.8.8.8 0 0 0 .32-.067l6.56-2.88a.8.8 0 0 0 .48-.735V7.387a.8.8 0 0 0-.8-.8.8.8 0 0 0-.32.067l-6.56 2.88a.8.8 0 0 0-.48.735v9.226z"/>
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
              <defs>
                <linearGradient id="jiraGradient1" x1="98.031%" x2="58.888%" y1="0.161%" y2="40.766%">
                  <stop offset="18%" stopColor="#0052CC"/>
                  <stop offset="100%" stopColor="#2684FF"/>
                </linearGradient>
                <linearGradient id="jiraGradient2" x1="100.665%" x2="55.402%" y1="0.455%" y2="44.727%">
                  <stop offset="18%" stopColor="#0052CC"/>
                  <stop offset="100%" stopColor="#2684FF"/>
                </linearGradient>
              </defs>
              <path fill="#2684FF" d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z" transform="scale(1)"/>
              <path fill="url(#jiraGradient1)" d="M17.308 5.77H5.736a5.215 5.215 0 0 0 5.215 5.216h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.775a1.005 1.005 0 0 0-1.005-1.005h.018z" transform="scale(1)"/>
              <path fill="url(#jiraGradient2)" d="M23.044 0H11.472a5.215 5.215 0 0 0 5.215 5.215h2.129v2.058A5.218 5.218 0 0 0 24.03 12.49V1.005A1.005 1.005 0 0 0 23.025 0h.019z" transform="scale(1)"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/jira"
        },
        {
          name: "Confluence",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <defs>
                <linearGradient id="confluenceGradient1" x1="99.14%" x2="33.86%" y1="112.745%" y2="37.769%">
                  <stop offset="0%" stopColor="#0052CC"/>
                  <stop offset="92.3%" stopColor="#2684FF"/>
                </linearGradient>
                <linearGradient id="confluenceGradient2" x1="0.86%" x2="66.14%" y1="-12.745%" y2="62.231%">
                  <stop offset="0%" stopColor="#0052CC"/>
                  <stop offset="92.3%" stopColor="#2684FF"/>
                </linearGradient>
              </defs>
              <path fill="url(#confluenceGradient1)" d="M1.422 17.636c-.238.397-.51.85-.748 1.222a.911.911 0 0 0 .312 1.248l5.263 3.2a.91.91 0 0 0 1.248-.312c.204-.34.476-.793.782-1.303 2.154-3.598 4.343-3.156 8.3-1.361l5.106 2.318a.91.91 0 0 0 1.19-.476l2.318-5.106a.91.91 0 0 0-.476-1.19c-1.19-.544-3.564-1.622-5.93-2.693-6.8-3.088-12.58-2.863-17.365 4.453z"/>
              <path fill="url(#confluenceGradient2)" d="M22.578 6.364c.238-.397.51-.85.748-1.222a.911.911 0 0 0-.312-1.248l-5.263-3.2a.91.91 0 0 0-1.248.312c-.204.34-.476.793-.782 1.303-2.154 3.598-4.343 3.156-8.3 1.361L2.315 1.352a.91.91 0 0 0-1.19.476L-1.193 6.934a.91.91 0 0 0 .476 1.19c1.19.544 3.564 1.622 5.93 2.693 6.8 3.088 12.58 2.863 17.365-4.453z"/>
            </svg>
          ),
          link: "https://www.atlassian.com/software/confluence"
        },
        {
          name: "Monday.com",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#FF3D57" d="M2.597 17.118a2.597 2.597 0 1 1 0-5.194 2.597 2.597 0 0 1 0 5.194zm0-10.236a2.597 2.597 0 1 1 0-5.194 2.597 2.597 0 0 1 0 5.194z"/>
              <path fill="#FFCB00" d="M9.062 17.118c-1.434 0-2.597-1.163-2.597-2.597V4.285a2.597 2.597 0 0 1 5.194 0v10.236c0 1.434-1.163 2.597-2.597 2.597z"/>
              <path fill="#00D647" d="M15.527 17.118c-1.434 0-2.597-1.163-2.597-2.597V9.48a2.597 2.597 0 0 1 5.194 0v5.041c0 1.434-1.163 2.597-2.597 2.597z"/>
              <path fill="#0073EA" d="M21.403 17.118a2.597 2.597 0 1 1 0-5.194 2.597 2.597 0 0 1 0 5.194z"/>
            </svg>
          ),
          link: "https://monday.com/"
        },
        {
          name: "Slack",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
              <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
              <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.521 2.522v6.312z"/>
              <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z"/>
            </svg>
          ),
          link: "https://slack.com/"
        },
        {
          name: "ClickUp",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <defs>
                <linearGradient id="clickupGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8930FD"/>
                  <stop offset="100%" stopColor="#49CCF9"/>
                </linearGradient>
                <linearGradient id="clickupGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF02F0"/>
                  <stop offset="100%" stopColor="#FFC800"/>
                </linearGradient>
              </defs>
              <path fill="url(#clickupGradient1)" d="M3.092 16.752l2.988-2.304c1.97 2.556 4.104 3.72 5.92 3.72 1.8 0 3.916-1.148 5.87-3.672l2.996 2.28c-2.696 3.496-5.944 5.392-8.866 5.392-2.94 0-6.2-1.912-8.908-5.416z"/>
              <path fill="url(#clickupGradient2)" d="M12 6.848l-6.392 5.616-2.608-2.968L12 2l9 7.496-2.608 2.968z"/>
            </svg>
          ),
          link: "https://clickup.com/"
        },
        {
          name: "Trello",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <defs>
                <linearGradient id="trelloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0079BF"/>
                  <stop offset="100%" stopColor="#0052CC"/>
                </linearGradient>
              </defs>
              <rect width="21" height="21" x="1.5" y="1.5" rx="3" fill="url(#trelloGradient)"/>
              <rect width="5" height="11" x="4.5" y="4.5" rx="1" fill="#FFFFFF"/>
              <rect width="5" height="7" x="11.5" y="4.5" rx="1" fill="#FFFFFF"/>
            </svg>
          ),
          link: "https://trello.com/"
        },
        {
          name: "Asana",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#F06A6A" d="M18.78 12.653c-2.882 0-5.22 2.337-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.337 5.22-5.22-2.337-5.22-5.22-5.22zm-13.56 0c-2.882 0-5.22 2.337-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.337 5.22-5.22-2.337-5.22-5.22-5.22zM12 1.907c-2.882 0-5.22 2.337-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.337 5.22-5.22-2.337-5.22-5.22-5.22z"/>
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
              <path fill="#FFD02F" d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 9.27 6.949 24h3.495L17 7.428 13.899 24h3.493L24 5.063V0h-6.608z"/>
            </svg>
          ),
          link: "https://miro.com/"
        },
        {
          name: "Whimsical",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#7B68EE" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <circle fill="#7B68EE" cx="12" cy="12" r="5"/>
            </svg>
          ),
          link: "https://whimsical.com/"
        },
        {
          name: "Figma",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#1ABCFE" d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
              <path fill="#0ACF83" d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0z"/>
              <path fill="#FF7262" d="M12 0v8h4a4 4 0 0 0 0-8h-4z"/>
              <path fill="#F24E1E" d="M4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4z"/>
              <path fill="#A259FF" d="M4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z"/>
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
              <path fill="#FF7A59" d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.2 2.2 0 0 0 17.231.834h-.066a2.2 2.2 0 0 0-2.2 2.2v.066c0 .873.51 1.626 1.248 1.98V7.93a6.27 6.27 0 0 0-3.525 1.49L5.36 3.9a2.5 2.5 0 1 0-1.058 1.452l7.2 5.392a6.27 6.27 0 0 0-.104 1.14 6.3 6.3 0 0 0 6.3 6.3 6.27 6.27 0 0 0 2.394-.475l2.76 2.76a1.972 1.972 0 1 0 1.18-1.18l-2.67-2.67a6.3 6.3 0 0 0-3.198-9.689zm-.966 9.89a3.098 3.098 0 1 1 0-6.196 3.098 3.098 0 0 1 0 6.196z"/>
            </svg>
          ),
          link: "https://www.hubspot.com/"
        },
        {
          name: "Pipedrive",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#00B67A" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5h-2v-6h2v6zm4 0h-2v-9h2v9zm4 0h-2v-4h2v4z"/>
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
              <path fill="#10A37F" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
            </svg>
          ),
          link: "https://chat.openai.com/"
        },
        {
          name: "Claude",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#D97757" d="M4.709 15.955l4.72-2.647.08-.08 2.726-1.133-.08-.398-6.593-3.78-2.408 6.593zm8.632-6.91l2.249.796 4.72-6.99-6.99 4.72zm5.913 3.064l-2.647 4.72-.08.08-1.133 2.726.398.08 3.78-6.593zm-6.91 8.632l.796-2.249-6.99-4.72 4.72 6.99zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"/>
            </svg>
          ),
          link: "https://claude.ai/"
        },
        {
          name: "Grok",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="currentColor" className="text-neutral-800 dark:text-white" d="M2.04 9.048h4.92l2.46 8.199L12 24l2.58-6.753 2.46-8.199h4.92L12 0 2.04 9.048zM12 14.058L9.42 5.859h5.16L12 14.058z"/>
            </svg>
          ),
          link: "https://x.ai/"
        },
        {
          name: "Midjourney",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="currentColor" className="text-neutral-800 dark:text-white" d="M2.4 2.4h7.2v7.2H2.4V2.4zm12 0h7.2v7.2h-7.2V2.4zm-12 12h7.2v7.2H2.4v-7.2zm12 0h7.2v7.2h-7.2v-7.2zM6 6v-1.2h-1.2V6H6zm12 0v-1.2h-1.2V6H18zM6 18v-1.2H4.8V18H6zm12 0v-1.2h-1.2V18H18z"/>
            </svg>
          ),
          link: "https://www.midjourney.com/"
        },
        {
          name: "Fireflies.ai",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#7C3AED" d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
            </svg>
          ),
          link: "https://fireflies.ai/"
        },
        {
          name: "Junie for WebStorm",
          icon: (
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <defs>
                <linearGradient id="webstormGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#07C3F2"/>
                  <stop offset="100%" stopColor="#087CFA"/>
                </linearGradient>
                <linearGradient id="webstormGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#087CFA"/>
                  <stop offset="100%" stopColor="#FE2857"/>
                </linearGradient>
              </defs>
              <path fill="url(#webstormGradient1)" d="M0 0h24v24H0z"/>
              <path fill="#000" d="M2.4 2.4h19.2v19.2H2.4z"/>
              <path fill="#FFF" d="M4.2 18.6h7.2v1.2H4.2z"/>
              <path fill="#FFF" d="M4.8 5.4h1.8l1.8 5.4 1.8-5.4h1.8l1.8 5.4 1.8-5.4h1.8l-2.7 7.2h-1.8l-1.8-5.1-1.8 5.1H7.5z"/>
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
