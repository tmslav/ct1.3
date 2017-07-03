(function (){
    angular.module('carsApp')
    .controller('carDetailCtr', function ($scope,selecetedCarService) {
        $scope.car = selecetedCarService.get()
    })
})();


