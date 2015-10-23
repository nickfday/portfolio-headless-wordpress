'use strict';

/**
 * @ngdoc function
 * @name portfolioAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioAppApp
 */
angular.module('portfolioAppApp')
  .controller('AboutCtrl', function ($scope, $http, $rootScope) {
        $http.get("http://portfolio-remote.dev/wp-json/pages/about")
            .success(function(response) {$scope.about = response;});

        $rootScope.activeNav = 'about';

    });