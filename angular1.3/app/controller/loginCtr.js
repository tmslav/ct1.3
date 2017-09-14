(function () {
    angular.module('carsApp')
        .controller('loginCtr', function ($scope,$location,loginFactory) {
            $scope.login = function (e) {
                e.preventDefault();
                var loggerdin = loginFactory.login($scope.username, $scope.password)
                    .then(function (value) {
                        if (value) {
                            $location.path("/car-offers");
                        }
                    },function (value) {
                        $location.path("/login");
                        $scope.errorMessage = "wrong username or password"
                            
                    }
                );

            }
        })
})();
