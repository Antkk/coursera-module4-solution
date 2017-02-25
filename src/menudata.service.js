(function () {
'use strict';
  
angular.module('data')
.service('MenuDataService', function ($http) {
  var service = this;
  
  service.getAllCategories = function () {
    return $http({url: 'https://davids-restaurant.herokuapp.com/categories.json'});
  };
  
  service.getItemsForCategory = function (categoryShortName) {
    return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName});
  };
});

})();
