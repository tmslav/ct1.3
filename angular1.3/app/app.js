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
        .factory('loginFactory', function ($http, $rootScope,$q) {
            var loggedin = false;
            var isLoggedin = function () {
                return loggedin
            }
            var login = function (username, password) {
                var deffered = $q.defer()

                $http.post("/api/values/", { 'username': username, 'password': password })
                    .then(function (response) {
                        if (response.data.Table.length > 0) {
                            $rootScope.userID = response.data.Table[0].id;
                            loggedin = true;
                            deffered.resolve(true);
                        } 
                        else {
                            loggedin = false;
                            deffered.reject(false);
                        }
                    })
                return deffered.promise;
            }
            return {
                login: login,
                isLoggedin: isLoggedin
            };
        
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
        .when("/login",
        {
            templateUrl: "app/views/login.html",
            controller: "loginCtr",
        })
        .otherwise({
            redirectTo:"/info"})
        })

})();
