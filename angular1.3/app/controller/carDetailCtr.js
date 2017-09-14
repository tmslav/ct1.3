(function (){
    angular.module('carsApp')
    .controller('carDetailCtr', function ($scope,$location,loginFactory,selecetedCarService) {
        if (loginFactory.isLoggedin()) {
            $scope.car = selecetedCarService.get()
        } else {
            $location.path("/login");
        }
    })
})();


