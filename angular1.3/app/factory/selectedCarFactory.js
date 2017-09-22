(function () {
    angular.module("myApp").factory('selecetedCarFactory',selectedCarFactory);

    function selectedCarFactory() {
        var selectedcar = null
        function get() {
            return selectedcar
        }
        function set(car) {
            selectedcar = car
        }

        return {
            get: get,
            set: set
        }
    }
})();