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

        $http.get("http://portfolio-remote.dev/wp-json/pages/Key Skills")
            .success(function(response) {$scope.skills = response;});

        $http.get("http://portfolio-remote.dev/wp-json/pages/Contact Intro")
            .success(function(response) {$scope.contact = response;});    

        $http.get("http://portfolio-remote.dev/wp-json/media?parent?type=projecta")
            .success(function(response) {$scope.projects = response;});

        //close button
        $scope.close = function() {
            $scope.shown = false;
        };

        //default first item selected
        $scope.selected = 0;

        $scope.select = function(index) {           
            $scope.selected = index;
        };

        $scope.breakpoints = [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ];

  });
