(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('housesApp', [
        // Angular modules
        'ngRoute',

        // Custom modules 
        'housesServices'

        // 3rd Party Modules
        
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/Views/list.html',
                controller: 'HousesListController'
            })
            .when('/houses/add', {
                templateUrl: '/Views/add.html',
                controller: 'HousesAddController'
            })
            .when('/houses/edit/:id', {
                templateUrl: '/Views/edit.html',
                controller: 'HousesEditController'
            })
            .when('/houses/delete/:id', {
                templateUrl: '/Views/delete.html',
                controller: 'HousesDeleteController'
            });

        $locationProvider.html5Mode(true);
    }
})();