(function () {
'use strict';
  
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['myData'];
function CategoriesController (myData) {
  var categoriesController = this;

  categoriesController.items = myData;
}
  
})();
