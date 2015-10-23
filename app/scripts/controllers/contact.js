'use strict';

/**
 * @ngdoc function
 * @name portfolioAppApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the portfolioAppApp
 */
angular.module('portfolioAppApp')
  .controller('ContactCtrl', function ($scope, $rootScope, $http) {
        $rootScope.activeNav = 'contact';
        $http.get("http://portfolio-remote.dev/wp-json/pages/contact")
            .success(function(response) {$scope.contact = response;});

    });
