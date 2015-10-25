'use strict';

/**
 * @ngdoc function
 * @name portfolioAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioAppApp
 */
angular.module('portfolioAppApp')
  .controller('MainCtrl', function ($scope, wpjsonFactory, $http, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.fromFactory = wpjsonFactory.sayHello("World");
        $rootScope.activeNav = 'home';

        $http.get("http://portfolio-remote.dev/wp-json/pages/welcome")
            .success(function(response) {$scope.welcome = response;});

        $http.get("http://portfolio-remote.dev/wp-json/media?parent?type=project")
        //$http.get("http://portfolio-2015.app/wp-json/media?parent?type=project")
            .success(function(response) {$scope.projects = response;});

        //close button
        $scope.close = function() {
            $scope.shown = false;
        };

        //default first item selected
        $scope.selected = 0;



        $scope.select = function(index) {
            console.log($scope.projects.length);
            $scope.selected = index;
            if (index > 8) {
                console.log('high');
            }
            if (index < 0) {
                console.log('low');
            }
        };

  });
