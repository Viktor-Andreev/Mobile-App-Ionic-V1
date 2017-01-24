angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.page1', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('1', {
    url: '/page2',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('2', {
    url: '/page3',
    templateUrl: 'templates/2.html',
    controller: '2Ctrl'
  })

  .state('3', {
    url: '/page4',
    templateUrl: 'templates/3.html',
    controller: '3Ctrl'
  })

  .state('12', {
    url: '/page5',
    templateUrl: 'templates/12.html',
    controller: '12Ctrl'
  })

  .state('page6', {
    url: '/page6',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page8', {
    url: '/singup',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('wellcome', {
    url: '/wellcome',
    templateUrl: 'templates/wellcome.html',
    controller: 'wellcomeCtrl'
  })

$urlRouterProvider.otherwise('/wellcome')

  

});