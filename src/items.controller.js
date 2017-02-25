(function () {
'use strict';
  
angular.module('MenuApp')
.controller('ItemsController', function (myData) {
  var itemsController = this;
  itemsController.items = [];
  
  console.log('ItemsController');

  itemsController.items = myData;
});
  
})();
