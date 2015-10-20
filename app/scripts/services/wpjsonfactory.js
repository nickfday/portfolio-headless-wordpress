'use strict';

/**
 * @ngdoc service
 * @name portfolioAppApp.wpjsonFactory
 * @description
 * # wpjsonFactory
 * Factory in the portfolioAppApp.
 */
angular.module('portfolioAppApp')
  .factory('wpjsonFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
