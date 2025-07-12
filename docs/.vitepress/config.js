export default {
  title: 'Tamil Calendar Widget',
  description: 'A beautiful React component for displaying Tamil daily calendar sheets',

  head: [
    ['link', { rel: 'icon', href: '/22022022.jpg' }], // Your calendar image
    ['link', { rel: 'apple-touch-icon', href: '/22022022.jpg' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],
  
  define: {
    __DOCS_URL__: JSON.stringify(process.env.DOCS_BASE_URL || 'https://docs.kanaksan.com/'),
    __CONTACT_EMAIL__: JSON.stringify(process.env.API_CONTACT_EMAIL || 'helpdesk@kanaksan.com')
  }
}