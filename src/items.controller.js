(function () {
'use strict';
  
angular.module('MenuApp')
.controller('ItemsController', ItemsController);
  
ItemsController.$inject = ['myData'];
function ItemsController (myData) {
  var itemsController = this;
  
  itemsController.items = myData.menu_items;
  itemsController.categoryName = myData.category.name;
}
  
})();
