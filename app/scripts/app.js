'use strict';

/**
 * @ngdoc overview
 * @name bebCrmApp
 * @description
 * # bebCrmApp
 *
 * Main module of the application.
 */
var conAngular = angular
  .module('bebCrmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lbServices',
    'angularMoment',
    'ui.calendar',
   // 'ui.bootstrap',
     "ui.router",
  "ui.materialize",
  "oc.lazyLoad",
  'ngSanitize'
])
  .config(function(LoopBackResourceProvider,$httpProvider) {
 
   LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

    // Inside app config block
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            //Now clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/signin.html');
          }
          return $q.reject(rejection);
        }
      };
    });
 
  })


/*
 * Con Full Assets List
 *
 * Usage:
 * var result = conAssets('simpleWeather,d3,nvd3')
 * result ==>
 *  [
 *    'assets/simpleWeather/jquery.simpleWeather.min.js',
 *    'assets/d3/d3.min.js',
 *    'assets/nvd3/nv.d3.min.css',
 *    'assets/nvd3/nv.d3.min.js',
 *    'assets/nvd3/angular-nvd3.min.js'
 *  ]
 */
window.conAssets = function(get) {
  var list = {
    simpleWeather: ['conTemplate/assets/simpleWeather/jquery.simpleWeather.min.js'],

    sparkline: [
      'conTemplate/assets/sparkline/jquery.sparkline.min.js',
      'conTemplate/assets/angularjs-sparkline/angularjs.sparkline.js'
    ],

    flot: [
      'conTemplate/assets/flot/jquery.flot.min.js',
      'conTemplate/assets/flot/jquery.flot.time.min.js',
      'conTemplate/assets/flot/jquery.flot.pie.min.js',
      'conTemplate/assets/flot/jquery.flot.tooltip.min.js',
      'conTemplate/assets/flot/jquery.flot.categories.min.js',
      'conTemplate/assets/angularjs-flot/angular-flot.js'
    ],

    nvd3: [
      'conTemplate/assets/d3/d3.min.js',
      'conTemplate/assets/nvd3/nv.d3.min.css',
      'conTemplate/assets/nvd3/nv.d3.min.js',
      'conTemplate/assets/angularjs-nvd3/angular-nvd3.min.js'
    ],

    rickshaw: [
      'conTemplate/assets/d3/d3.min.js',
      'conTemplate/assets/rickshaw/rickshaw.min.css',
      'conTemplate/assets/rickshaw/rickshaw.min.js',
      'conTemplate/assets/angularjs-rickshaw/rickshaw-angularjs.js'
    ],

    markitup: [
      'conTemplate/assets/markitup/skins/_con/style.css',
      'conTemplate/assets/markitup/sets/default/style.css',
      'conTemplate/assets/markitup/sets/default/set.js',
      'conTemplate/assets/markitup/jquery.markitup.js'
    ],

    ckeditor: ['conTemplate/assets/ckeditor/ckeditor.js'],

    select2: [
      'conTemplate/assets/select2/css/select2.min.css',
      'conTemplate/assets/select2/js/select2.full.min.js'
    ],

    tagsinput: [
      'conTemplate/assets/jquery-tags-input/jquery.tagsinput.css',
      'conTemplate/assets/jquery-tags-input/jquery.tagsinput.js'
    ],

    dropzone: [
      'conTemplate/assets/dropzone/dropzone.min.css',
      'conTemplate/assets/dropzone/dropzone.min.js'
    ],

    clockpicker:[
      'conTemplate/assets/jquery-clockpicker/jquery-clockpicker.min.css',
      'conTemplate/assets/jquery-clockpicker/jquery-clockpicker.min.js'
    ],

    pikaday: [
      'conTemplate/assets/pikaday/pikaday.css',
      'conTemplate/assets/pikaday/pikaday.js',
      'conTemplate/assets/pikaday/pikaday.jquery.js'
    ],

    spectrum: [
      'conTemplate/assets/spectrum/spectrum.css',
      'conTemplate/assets/spectrum/spectrum.js'
    ],

    inputmask: ['conTemplate/assets/jquery-input-mask/jquery.inputmask.bundle.min.js'],

    parsley: ['conTemplate/assets/parsley/parsley.min.js'],

    gmaps: ['conTemplate/assets/gmaps/gmaps.min.js'],

    jvectormap: [
      'conTemplate/assets/jquery-jvectormap/jquery-jvectormap.css',
      'conTemplate/assets/jquery-jvectormap/jquery-jvectormap.min.js',
      'conTemplate/assets/jquery-jvectormap/jquery-jvectormap-world-mill-en.js',
      'conTemplate/assets/jquery-jvectormap/gdp-data.js',
      'conTemplate/assets/angulajs-jvectormap/angularjs-jvectormap.js'
    ],

    dataTables: [
      'conTemplate/assets/dataTables/media/js/jquery.dataTables.min.js',
      'conTemplate/assets/dataTables/extensions/TableTools/js/dataTables.tableTools.min.js',
      'conTemplate/assets/dataTables/extensions/Scroller/js/dataTables.scroller.min.js',
      'conTemplate/assets/angularjs-dataTables/angular-datatables.js'
    ],

    /*fullcalendar: [
      'conTemplate/assets/fullcalendar/fullcalendar.min.css',
      'conTemplate/assets/fullcalendar/moment.min.js',
      'conTemplate/assets/fullcalendar/jquery-ui.custom.min.js',
      'conTemplate/assets/fullcalendar/fullcalendar.min.js'
    ],*/

    sortable: ['conTemplate/assets/sortable/Sortable.min.js'],

    wowjs: ['conTemplate/assets/wow.js/wow.min.js'],

    animatecss: ['conTemplate/assets/animate.css/animate.css'],

    photoswipe: [
      'conTemplate/assets/PhotoSwipe/photoswipe.css',
      'conTemplate/assets/PhotoSwipe/default-skin/default-skin.css',
      'conTemplate/assets/PhotoSwipe/photoswipe.min.js',
      'conTemplate/assets/PhotoSwipe/photoswipe-ui-default.min.js'
    ],

    isotope: ['conTemplate/assets/isotope/isotope.pkgd.min.js'],

    videojs: [
      'conTemplate/assets/video.js/video-js.css',
      'conTemplate/assets/video.js/video.js',
      'conTemplate/assets/video.js/plugins/vjs.youtube.js',
      'conTemplate/assets/video.js/plugins/media.vimeo.js'
    ]
  };

  // return result array
  var get = get.split(',');
  var result = [];
  for(var k in get) {
    if(typeof list[ get[k] ] !== 'undefined') {
      for(var n in list[ get[k] ]) {
        result.push( list[ get[k] ][n] );
      }
    }
  }

  return result;
}





// Config ocLazyLoader
conAngular.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    // lazy load config
  });
}]);


// Global Options
conAngular.factory('settings', ['$rootScope', function($rootScope) {
  var settings = {
    rtl: false, // rtl mode
    navbar: {
      dark:   false, // dark color scheme
      static: false, // static
      under:  false  // navbar under sidebar
    },
    sidebar: {
      hideToSmall:     true,    // hide to small sidebar
      static:          false,   // static
      gestures:        true,    // gestures support
      light:           false,   // light color scheme
      overlapContent:  false,   // Overlay content when opened
      effect:          'shrink' // show effect: [shrink, push, overlay]
    },
    chat: {
      light: false // light color scheme
    }
  };

  $rootScope.settings = settings;

  return settings;
}]);



// App Controller
conAngular.controller('AppController', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
  $scope.$on('$viewContentLoaded', function() {
    // init plugins
    conApp.initPlugins();
    conApp.initCards();
    conApp.initCardTodo();
    conApp.initCardWeather();
  });
}]);

// Navbar Controller
conAngular.controller('NavbarController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
  });
}]);

// Sidebar Controller
conAngular.controller('SidebarController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
    conApp.initSidebar();
  });
}]);

// Search Controller
conAngular.controller('SearchController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
    conApp.initSearchBar();
  });
}]);

// Chat Controller
conAngular.controller('ChatController', ['$scope', function($scope) {
  $scope.$on('$includeContentLoaded', function() {
    conApp.initChat();
  });
}]);


// Setup Rounting For All Pages
conAngular.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // Redirect any unmatched url
  $urlRouterProvider.otherwise("/dashboard.html");

  // pages
  $stateProvider

    .state('/admin', {
      url: "/admin.html",
      templateUrl: "views/admin.html",
      controller: "AdminCtrl",
      data: {
        pageTitle: 'Admin page',
        crumbs: [{
          title: '<i class="fa fa-home"></i> Home',
          href: '#'
        }, {
          title: 'Admin',
          href: '#/admin.html'
        }]
      }
    })
    .state('/signin', {
      url: "/signin.html",
      templateUrl: "views/page-sign-in.html",
      controller: "AuthCtrl",
      data: {
        pageTitle: 'Reservation page',
        crumbs: [{
          title: '<i class="fa fa-home"></i> Home',
          href: '#'
        }, {
          title: 'Login',
          href: '#/signin.html'
        }]
      }
    })
    .state('/signup', {
      url: "/signup.html",
      templateUrl: "views/page-sign-up.html",
      controller: "AuthCtrl",
      data: {
        pageTitle: 'Singup page',
        crumbs: [{
          title: '<i class="fa fa-home"></i> Home',
          href: '#'
        }, {
          title: 'Singup',
          href: '#/signup.html'
        }]
      }
    })

  .state('/reservation_detail', {
      url: "/reservation_detail/:id",
      templateUrl: "views/reservation_detail.html",
      controller: "ReservationDetailCtrl",
      data: {
        pageTitle: 'Reservation page',
        crumbs: [{
          title: '<i class="fa fa-home"></i> Home',
          href: '#'
        }, {
          title: 'Reservation',
          href: '#/reservation.html'
        }]
      }
    })
    .state('/reservation', {
      url: "/reservation.html",
      templateUrl: "views/reservation.html",
      controller: "ReservationCtrl",
      data: {
        pageTitle: 'Reservation page',
        crumbs: [{
          title: '<i class="fa fa-home"></i> Home',
          href: '#'
        }, {
          title: 'Reservation',
          href: '#/reservation.html'
        }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('select2,dropzone,tagsinput,clockpicker,spectrum,inputmask,parsley')
          }, {
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('pikaday')
          }]);
        }]
      }
    })
    .state('/reservation_list', {
      url: "/reservation_list.html",
      templateUrl: "views/reservation_list.html",
      controller: "ReservationListCtrl",
      data: {
        pageTitle: 'Reservation page',
        crumbs: [{
          title: '<i class="fa fa-home"></i> Home',
          href: '#'
        }, {
          title: 'Reservation',
          href: '#/reservation_list.html'
        }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('dataTables')
          }]);
        }]
      }
    })

    .state('/today', {
      url: "/today.html",
      templateUrl: "views/today.html",
      controller: "TodayCtrl",
      data: {
        pageTitle: 'Reservation page',
        crumbs: [{
          title: '<i class="fa fa-home"></i> Home',
          href: '#'
        }, {
          title: 'Reservation',
          href: '#/reservation_list.html'
        }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('dataTables')
          }]);
        }]
      }
    })




    // Dashboard
    .state('/dashboard', {
      url: "/dashboard.html",
      templateUrl: "conTemplate/tpl/dashboard.html",
      controller: "DashboardController",
      data: {
        pageTitle: 'Admin Dashboard with Material Design',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            files: conAssets('simpleWeather,sortable')
          }, {
            name: 'conAngular',
            serie: true, // used for synchronous load chart scripts
            insertBefore: '#ngInsertBefore',
            files: conAssets('sparkline,flot,rickshaw,jvectormap')
          }]);
        }]
      }
    })

    // Dashboard v1
    .state('/dashboard-v1', {
      url: "/dashboard-v1.html",
      templateUrl: "conTemplate/tpl/dashboard-v1.html",
      controller: "DashboardV1Controller",
      data: {
        pageTitle: 'Dashboard v1',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard v1',
            href: '#/dashboard-v1.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('simpleWeather,sortable')
          }, {
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('flot,nvd3')
          }]);
        }]
      }
    })

    // Angular Options
    .state('/angular-settings', {
      url: "/angular-settings.html",
      templateUrl: "conTemplate/tpl/angular-settings.html",
      controller: "PageController",
      data: {
        pageTitle: 'Angular Settings',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Angular Settings',
            href: '#/angular-settings.html'
          }]
      }
    })

    // Widgets
    .state('/widgets', {
      url: "/widgets.html",
      templateUrl: "conTemplate/tpl/widgets.html",
      controller: "PageController",
      data: {
        pageTitle: 'Widgets',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Widgets',
            href: '#/widgets.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('sparkline,simpleWeather')
          }]);
        }]
      }
    })

    // Forms Base
    .state('/forms-base', {
      url: "/forms-base.html",
      templateUrl: "conTemplate/tpl/forms-base.html",
      controller: "PageController",
      data: {
        pageTitle: 'Base Forms',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Base Forms',
            href: '#/forms-base.html'
          }]
      }
    })

    // Forms Advanced
    .state('/forms-advanced', {
      url: "/forms-advanced.html",
      templateUrl: "conTemplate/tpl/forms-advanced.html",
      controller: "PageController",
      data: {
        pageTitle: 'Advanced Forms',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Advanced Forms',
            href: '#/forms-advanced.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('select2,dropzone,tagsinput,clockpicker,spectrum,inputmask,parsley')
          }, {
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('pikaday')
          }]);
        }]
      }
    })

    // Forms Validation
    .state('/forms-validation', {
      url: "/forms-validation.html",
      templateUrl: "conTemplate/tpl/forms-validation.html",
      controller: "PageController",
      data: {
        pageTitle: 'Forms Validation',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Validation',
            href: '#/forms-validation.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('parsley')
          }]);
        }]
      }
    })

    // Forms Editors
    .state('/forms-editors', {
      url: "/forms-editors.html",
      templateUrl: "conTemplate/tpl/forms-editors.html",
      controller: "PageController",
      data: {
        pageTitle: 'Editors',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Forms',
            href: '#'
          }, {
            title: 'Editors',
            href: '#/forms-editors.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('markitup,ckeditor')
          }]);
        }]
      }
    })

    // Mail Inbox
    .state('/mail-inbox', {
      url: "/mail-inbox.html",
      templateUrl: "conTemplate/tpl/mail-inbox.html",
      controller: "PageController",
      data: {
        pageTitle: 'Mail Inbox',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Mail',
            href: '#'
          }, {
            title: 'Inbox',
            href: '#/mail-inbox.html'
          }]
      }
    })

    // Mail View
    .state('/mail-view', {
      url: "/mail-view.html",
      templateUrl: "conTemplate/tpl/mail-view.html",
      controller: "PageController",
      data: {
        pageTitle: 'Mail View',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Mail',
            href: '#'
          }, {
            title: 'View',
            href: '#/mail-view.html'
          }]
      }
    })

    // Mail Compose
    .state('/mail-compose', {
      url: "/mail-compose.html",
      templateUrl: "conTemplate/tpl/mail-compose.html",
      controller: "PageController",
      data: {
        pageTitle: 'Mail Compose',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Mail',
            href: '#'
          }, {
            title: 'Compose',
            href: '#/mail-compose.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('ckeditor')
          }]);
        }]
      }
    })

    // Charts Flot
    .state('/charts-flot', {
      url: "/charts-flot.html",
      templateUrl: "conTemplate/tpl/charts-flot.html",
      controller: "ChartFlotController",
      data: {
        pageTitle: 'Flot Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'Flot',
            href: '#/charts-flot.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('flot')
          }]);
        }]
      }
    })

    // Charts NVD3
    .state('/charts-nvd3', {
      url: "/charts-nvd3.html",
      templateUrl: "conTemplate/tpl/charts-nvd3.html",
      controller: "ChartNVD3Controller",
      data: {
        pageTitle: 'NVD3 Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'NVD3',
            href: '#/charts-nvd3.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('nvd3')
          }]);
        }]
      }
    })

    // Charts Rickshaw
    .state('/charts-rickshaw', {
      url: "/charts-rickshaw.html",
      templateUrl: "conTemplate/tpl/charts-rickshaw.html",
      controller: "ChartRickshawController",
      data: {
        pageTitle: 'Rickshaw Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'Rickshaw',
            href: '#/charts-rickshaw.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('rickshaw')
          }]);
        }]
      }
    })

    // Charts Sparkline
    .state('/charts-sparkline', {
      url: "/charts-sparkline.html",
      templateUrl: "conTemplate/tpl/charts-sparkline.html",
      controller: "ChartSparkController",
      data: {
        pageTitle: 'Sparkline Charts',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Charts',
            href: '#'
          }, {
            title: 'Sparkline',
            href: '#/charts-sparkline.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('sparkline')
          }]);
        }]
      }
    })

    // Google Maps
    .state('/maps-google', {
      url: "/maps-google.html",
      templateUrl: "conTemplate/tpl/maps-google.html",
      controller: "PageController",
      data: {
        pageTitle: 'Google Maps',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Maps',
            href: '#'
          }, {
            title: 'Google',
            href: '#/maps-google.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            insertBefore: '#ngInsertBefore',
            files: conAssets('gmaps')
          }]);
        }]
      }
    })

    // Vector Maps
    .state('/maps-vector', {
      url: "/maps-vector.html",
      templateUrl: "conTemplate/tpl/maps-vector.html",
      controller: "MapsVectorController",
      data: {
        pageTitle: 'Vector Maps',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Maps',
            href: '#'
          }, {
            title: 'Vector',
            href: '#/maps-vector.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('jvectormap')
          }]);
        }]
      }
    })

    // Data Tables
    .state('/data-tables', {
      url: "/data-tables.html",
      templateUrl: "conTemplate/tpl/data-tables.html",
      controller: "DatatablesController",
      data: {
        pageTitle: 'Data Tables',
        crumbs: [{
            title: '<i class="fa fa-home"></i> Home',
            href: '#'
          }, {
            title: 'Dashboard',
            href: '#/dashboard.html'
          }, {
            title: 'Data Tables',
            href: '#/data-tables.html'
          }]
      },
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            name: 'conAngular',
            serie: true,
            insertBefore: '#ngInsertBefore',
            files: conAssets('dataTables')
          }]);
        }]
      }
    })

}]);

/* Init global settings and run the app */
conAngular.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
  $rootScope.$state = $state; // state to be accessed from view
}]);
