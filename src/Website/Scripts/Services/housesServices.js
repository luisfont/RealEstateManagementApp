(function () {
    'use strict';

    angular
        .module('housesServices', ['ngResource'])
        .factory('House', House);

    House.$inject = ['$resource'];

    function House($resource) {
        return $resource('/api/houses/:id');
    }

    //var housesServices = angular.module('housesServices', ['ngResource']);

    //housesServices.factory('Houses', ['$resource',
    //  function ($resource) {
    //      return $resource('/api/houses/', {}, {
    //          query: { method: 'GET', params: {}, isArray: true }
    //      });
    //  }]);
})();