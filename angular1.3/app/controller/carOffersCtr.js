(function (){
 angular.module('myApp')
     .controller('carOffersCtr', function ($scope, $http,$location, selecetedCarFactory, loginFactory) {
         if (loginFactory.isLoggedin()) {
            $scope.cars = []
            $http.get("/api/values/").then(function (response) {
                $scope.cars = response.data;
            });

            $scope.selectCar = function (car) {
               selecetedCarFactory.set(car)
               console.log("selected:",car)
            }
         } else {
             $location.path("/login")
         }

        })
})();

