(function () {
    angular.module("myApp", ['ngRoute'])
        .config(['$provide', function ($provide) {
            $provide.decorator('$log', [
                '$delegate',
                function $logDecorator($delegate) {
                    var originalWarn = $delegate.warn;
                    $delegate.warn = function decoratedWarn(msg) {
                        msg = 'Decorated Warn: ' + msg;
                        originalWarn.apply($delegate, arguments);
                    };
                    return $delegate;
                }]
            )
        }])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/info",
                {
                    templateUrl: "app/views/info.html",
                    controller: "infoCtr",
                })
                .when("/detail/",
                {
                    templateUrl: "app/pages/details/views/carDetail.html",
                    controller: "carDetailCtr",
                })
                .when("/car-offers",
                {
                    templateUrl: "app/views/car-offers.html",
                    controller: "carOffersCtr",
                })
                .when("/login",
                {
                    templateUrl: "app/views/login.html",
                    controller: "loginCtr",
                })
                .otherwise({
                    redirectTo: "/info"
                })
        });
})();
