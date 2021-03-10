module.exports = {
  content: ['./build/content/**/*.html', './build/content/**/*.js'],
  css: ['./build/content/**/*.css'],
  defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
  safelist: [/hljs/, /prose/, /secondary-button/, /drawer/, /theme-switch/]
}
