angular.
  module('babeDetail').
  component('babeDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.babeId}}</span>',
    controller: ['$routeParams',
      function PhoneDetailController($routeParams) {
        this.babeId = $routeParams.babeId;
      }
    ]
  });
