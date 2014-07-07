'use strict';

angular.module('projetobrasilFrontApp')
.factory('proposalsGetter', function ($http) {
  return {
    getProposals: function() {
    //return the promise directly.
      return $http.get('http://api.projetobrasil.org:4242/v1/politicians')
      .then(function(result) {
      //resolve the promise as the data
        return result.data;
      });
    }
  }
});
