(function () {
    'use strict';

    angular
        .module('housesApp')
        .controller('housesListController', HousesListController)
        .controller('housesAddController', HousesAddController)
        .controller('housesEditController', HousesEditController)
        .controller('housesDeleteController', HousesDeleteController);

    HousesListController.$inject = ['$scope', 'House']; 

    function HousesListController($scope, House) {
        $scope.houses = House.query();
    }

    /* Houses Create Controller */
    HousesAddController.$inject = ['$scope', '$location', 'House'];

    function HousesAddController($scope, $location, House) {
        $scope.house = new House();
        $scope.add = function () {
            $scope.house.$save(function () {
                $location.path('/');
            });
        };
    }

    /* Houses Edit Controller */
    HousesEditController.$inject = ['$scope', '$routeParams', '$location', 'House'];

    function HousesEditController($scope, $routeParams, $location, House) {
        $scope.house = House.get({ id: $routeParams.id });
        $scope.edit = function () {
            $scope.house.$save(function () {
                $location.path('/');
            });
        };
    }

    /* Houses Delete Controller  */
    HousesDeleteController.$inject = ['$scope', '$routeParams', '$location', 'House'];

    function HousesDeleteController($scope, $routeParams, $location, House) {
        $scope.house = House.get({ id: $routeParams.id });
        $scope.remove = function () {
            $scope.house.$remove({ id: $scope.house.Id }, function () {
                $location.path('/');
            });
        };
    }
})();
