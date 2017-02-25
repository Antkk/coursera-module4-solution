(function () {
'use strict';
  
angular.module('MenuApp')
.controller('CategoriesController', function (myData) {
  var categoriesController = this;

  categoriesController.items = myData;
});
  
})();
