angular.module('mini-routing').service('productsService', function ($http) {

  let serverUrl = 'http://localhost:3023';

  this.getShoeData = function () {
      return $http({
          method:'GET',
          url: serverUrl + '/api/shoes'
      })
  }
  this.getSockData = function () {
      return $http({
          method: 'GET',
          url: serverUrl + '/api/socks'
      })
  }

});
