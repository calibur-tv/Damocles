const mix = require('laravel-mix');

mix.disableNotifications();

mix.js('public/assets/js/manifest.js', 'public/assets/js')
  .js('public/assets/js/vendor.js', 'public/assets/js')
  .js('public/assets/js/app.js', 'public/assets/js')
  .styles('public/assets/css/style.css', 'public/assets/css/style.css')
  .version();