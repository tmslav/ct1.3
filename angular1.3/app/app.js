(function () {
	angular.module("carsApp",['ngRoute'])
    .factory('selecetedCarService', function () { 
        var selectedCar=null
        function get(){
            return selectedCar
        }
        function set(car){
            selectedCar = car
        }

        return {
            get: get,
            set: set
        }
    })
    .config(function ($routeProvider){
        $routeProvider
        .when("/info",
            {
                templateUrl : "app/views/info.html",
                controller : "infoCtr",
            })
        .when("/detail/",
            {
                templateUrl : "app/views/carDetail.html",
                controller : "carDetailCtr",
            })
        .when("/car-offers",
            {
                templateUrl : "app/views/car-offers.html",
                controller : "carOffersCtr",
            })
        .otherwise({
            redirectTo:"/info"})
        })

})();
