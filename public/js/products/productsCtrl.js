angular.module('mini-routing').controller('productsCtrl', function ($scope, $stateParams, productsService) {
    if($stateParams.id === 'shoes'){
        productsService.getShoeData().then(function (response) {
            $scope.productData = response.data;
        });
    }else if($stateParams.id === 'socks'){
        productsService.getSockData().then(function (response) {
            $scope.productData = response.data;
        });
    }
});
