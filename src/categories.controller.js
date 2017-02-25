(function () {
'use strict';
  
angular.module('MenuApp')
.controller('CategoriesController', function (myData) {
  var categoriesController = this;
  categoriesController.items = [];
  
  console.log('CategoriesController');

  categoriesController.items = myData.data;
});
  
})();
