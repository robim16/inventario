const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');


    mix.styles([
        // 'public/adminLte/plugins/fontawesome-free/css/all.min.css',
        'public/adminLte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
        'public/adminLte/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
        'public/adminLte/plugins/jqvmap/jqvmap.min.css',
        'public/adminLte/dist/css/adminlte.min.css',
        'public/adminLte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
        'public/adminLte/plugins/daterangepicker/daterangepicker.css',
        'public/adminLte/plugins/summernote/summernote-bs4.min.css',
     ], 'public/css/styles.css'); //CARGA LOS ESTILOS DE ADMINLTE EN EL LAYOUT ADMIN
  


     mix.scripts([
      'public/adminLte/plugins/jquery/jquery.min.js',
    //   'public/adminLte/plugins/jquery-ui/jquery-ui.min.js',
      'public/adminLte/plugins/bootstrap/js/bootstrap.bundle.min.js',
      'public/adminLte/plugins/chart.js/Chart.min.js',
      'public/adminLte/plugins/sparklines/sparkline.js',
      'public/adminLte/plugins/jqvmap/jquery.vmap.min.js',
      'public/adminLte/plugins/jqvmap/maps/jquery.vmap.usa.js',
      'public/adminLte/plugins/jquery-knob/jquery.knob.min.js',
      'public/adminLte/plugins/moment/moment.min.js',
      'public/adminLte/plugins/daterangepicker/daterangepicker.js',
      'public/adminLte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js',
      'public/adminLte/plugins/summernote/summernote-bs4.min.js',
      'public/adminLte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
      'public/adminLte/dist/js/adminlte.js',
    //   'public/adminLte/dist/js/demo.js',
    //   'public/adminLte/dist/js/pages/dashboard.js'
   ], 'public/js/plugins.js');  //VA EN EL LAYOUT ADMIN IGUAL
  

