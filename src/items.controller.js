(function () {
'use strict';
  
angular.module('MenuApp')
.controller('ItemsController', function (MenuDataService) {
  var itemsController = this;
  itemsController.items = [];
  
  console.log('ItemsController');
  MenuDataService.getItemsForCategory('L').then(function (result) {
    itemsController.items = result.data.menu_items;
  });
});
  
})();
