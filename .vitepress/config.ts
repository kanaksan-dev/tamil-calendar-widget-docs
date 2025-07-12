export default {
  title: 'Tamil Calendar Widget',
  description: 'A beautiful React component for displaying Tamil daily calendar sheets',
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/docs' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Demo', link: '/demo' },
      { text: 'npm', link: 'https://www.npmjs.com/package/@kanaksan/tamil-calendar-widget' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'API Access', link: '/guide/api-access' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Basic Usage', link: '/guide/basic-usage' },
            { text: 'Custom Styling', link: '/guide/custom-styling' },
            { text: 'Error Handling', link: '/guide/error-handling' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Props', link: '/api/props' },
            { text: 'Types', link: '/api/types' },
            { text: 'Methods', link: '/api/methods' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/tamil-calendar-widget' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Kanaksan'
    }
  }
}
