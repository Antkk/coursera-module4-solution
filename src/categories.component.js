(function () {
'use strict';
  
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/categories.template.html',
  controller: 'CategoriesController as catController',
  bindings: {
    myData: '<'
  }
});
  
})();
