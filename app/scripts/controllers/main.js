'use strict';

/**
 * @ngdoc function
 * @name portfolioAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioAppApp
 */
angular.module('portfolioAppApp')
  .controller('MainCtrl', function ($scope, wpjsonFactory, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.fromFactory = wpjsonFactory.sayHello("World");

        $http.get("http://portfolio-remote.dev/wp-json/media?parent?type=project")
            .success(function(response) {$scope.projects = response;});

        $scope.test = function (project) {
            $scope.selectedTest = project;
        };
        $scope.close = function() {
            $scope.shown = false;
        };

        $scope.selectedTest = null;
        $scope.shown = false;
        $scope.dataLoaded = true;

        $scope.test = function (project) {
            $scope.selectedTest = project;
            $scope.shown = true;
            //window.location.href = '/#projects';
            //var currentSlide = $('.slick-slider').slick('slickCurrentSlide');

        };

  });
