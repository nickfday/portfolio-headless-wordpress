'use strict';

/**
 * @ngdoc service
 * @name portfolioAppApp.wpjsonFactory
 * @description
 * # wpjsonFactory
 * Factory in the portfolioAppApp.
 */
angular.module('portfolioAppApp')
  .factory('wpjsonFactory', function ($http) {

    // Public API here
    return {

        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        }
    };
  });
