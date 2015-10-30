'use strict';

/**
 * @ngdoc function
 * @name portfolioAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioAppApp
 */
angular.module('portfolioAppApp')
  .value('duScrollBottomSpy', true)
  .controller('MainCtrl', function ($scope, wpjsonFactory, $http, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $http.get("http://finley-day.com/wp-json/media?parent?type=project")
        .success(function(response) {$scope.projects = response;});

        $scope.fromFactory = wpjsonFactory.sayHello("World");
        $rootScope.activeNav = 'home';

        $http.get("http://finley-day.com/wp-json/pages/welcome")
            .success(function(response) {$scope.welcome = response;});

        $http.get("http://finley-day.com/wp-json/pages/Key Skills")
            .success(function(response) {$scope.skills = response;});

        $http.get("http://finley-day.com/wp-json/pages/Contact Intro")
            .success(function(response) {$scope.contact = response;});

        //close button
        $scope.close = function() {
            $scope.shown = false;
        };

        $scope.breakpoints = [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ];

  });
