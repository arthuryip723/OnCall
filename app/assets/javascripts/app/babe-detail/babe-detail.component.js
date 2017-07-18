angular.
  module('babeDetail').
  component('babeDetail', {
    // template: 'TBD: Detail view for <span>{{$ctrl.babeId}}</span>',
    templateUrl: 'babe-detail.template.html',
    controller: ['$routeParams',
      function PhoneDetailController($routeParams) {
        this.babeId = $routeParams.babeId;
      }
    ]
  });
