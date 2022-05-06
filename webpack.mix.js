let mix = require('laravel-mix')

mix
  .js('resources/js/index.js', 'js')
  .js('resources/js/about.js', 'js')
  .sass('resources/scss/index.scss', 'css')
  .sass('resources/scss/about.scss', 'css')
  .sass('resources/scss/index-dark.scss', 'css')
  .sass('resources/scss/about-dark.scss', 'css')
  .sass('resources/scss/theme-light.scss', 'css')
  .sass('resources/scss/theme-dark.scss', 'css')
