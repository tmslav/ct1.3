(function () {
    function loginFactory($http, $rootScope, $q) {
            var loggedin = false;
            var loginDuration = null;
            var isLoggedin = function () {
                return loggedin
            }
            var getLoginDuration = function(){
                return loginDuration;
            }
            var login = function (username, password) {
                var deffered = $q.defer()

                $http.post("/api/values/", { 'username': username, 'password': password })
                    .then(function (response) {
                        loginDuration = response.config.responseTimestamp - response.config.requestTimestamp;

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
                isLoggedin: isLoggedin,
                loginDuration: getLoginDuration
            };

        }
        angular.module("myApp").factory('loginFactory', ['$http', '$rootScope', '$q', loginFactory]);

})();