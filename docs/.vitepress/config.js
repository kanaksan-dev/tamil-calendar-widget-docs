export default {
  title: 'Tamil Calendar Widget',
  description: 'A beautiful React component for displaying Tamil daily calendar sheets',

  head: [
    ['link', { rel: 'icon', href: '/22022022.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/22022022.jpg' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  define: {
    __DOCS_URL__: JSON.stringify(process.env.DOCS_BASE_URL || 'https://docs.kanaksan.com/'),
    __CONTACT_EMAIL__: JSON.stringify(process.env.API_CONTACT_EMAIL || 'helpdesk@kanaksan.com')
  },

  themeConfig: {
    logo: '/22022022.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/guide/installation' },
      { text: 'Demo', link: '/demo' }
    ],
    sidebar: {
      '/guide/': [
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Quick Start', link: '/guide/quick-start' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kanaksan-dev/tamil-calendar-widget-docs' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 Kanaksan'
    }
  }
}
