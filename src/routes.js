(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',//,
    controller: 'CategoriesController as catController',
    resolve: {
      myData: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(function(result) {
          return result.data;
        });
      }]
    }
  })

  // Item detail
  .state('itemsView', {
    url: '/items/{param1}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      myData: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.param1).then(function(result) {
          return result.data.menu_items;
        });
      }]
    }
  });

}

})();
