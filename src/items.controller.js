(function () {
'use strict';
  
angular.module('MenuApp')
.controller('ItemsController', function (myData) {
  var itemsController = this;
  
  itemsController.items = myData.menu_items;
  itemsController.categoryName = myData.category.name;
});
  
})();
