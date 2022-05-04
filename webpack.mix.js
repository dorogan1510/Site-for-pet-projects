let mix = require('laravel-mix')

mix
  .js('resources/js/app.js', 'js')
  .sass('resources/scss/index.scss', 'css')
  .sass('resources/scss/about.scss', 'css')
