

angular.
  module('onCallApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');
      $locationProvider.hashPrefix('');

      $routeProvider.
        when('/babes', {
          template: '<babe-list></babe-list>'
        }).
        when('/babes/:babeId', {
          template: '<babe-detail></babe-detail>'
        }).
        otherwise('/babes');
    }
  ]);
