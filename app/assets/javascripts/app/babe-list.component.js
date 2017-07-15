angular.
  module('onCallApp').
  component('babeList', {
    template:
      '<ul>' +
        '<li ng-repeat="babe in $ctrl.babes">' +
          '<span>{{ babe.name }}</span>' +
        '</li>' +
      '</ul>',
    controller: function BabeListController() {
      this.babes = [{name: 'babe_one'}, {name: 'babe_two'}];
    }
  });
