(function (){
    angular.module('myApp')
        .controller('carDetailCtr', function ($scope, $location, loginFactory, selecetedCarFactory) {
        if (loginFactory.isLoggedin()) {
            $scope.car = selecetedCarFactory.get()
        } else {
            $location.path("/login");
        }
    })
})();


