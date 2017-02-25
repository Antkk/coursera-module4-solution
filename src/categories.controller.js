(function () {
'use strict';
  
angular.module('MenuApp')
.controller('CategoriesController', function (MenuDataService) {
  var categoriesController = this;
  categoriesController.items = [];
  
  console.log('CategoriesController');
  MenuDataService.getAllCategories().then(function (result) {
    categoriesController.items = result.data;
  });
});
  
})();
