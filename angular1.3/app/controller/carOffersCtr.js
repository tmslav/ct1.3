(function (){
 angular.module('carsApp')
     .controller('carOffersCtr', function ($scope, $http,$location, selecetedCarService, loginFactory) {
         if (loginFactory.isLoggedin()) {
            $scope.cars = []
            $http.get("/api/values/").then(function (response) {
                $scope.cars = response.data;
            });

            $scope.selectCar = function (car) {
               selecetedCarService.set(car)
               console.log("selected:",car)
            }
         } else {
             $location.path("/login")
         }

        })
})();

