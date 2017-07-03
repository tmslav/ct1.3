(function (){
 angular.module('carsApp')
    .controller('carOffersCtr', function ($scope, $http, selecetedCarService) {
        $scope.cars = []

        $http.get("/Content/cars-offers.json").then(function (response) {
            $scope.cars = response.data.data;
        });

        $scope.selectCar = function (car) {
           selecetedCarService.set(car)
           console.log("selected:",car)

        }
    })
})();

