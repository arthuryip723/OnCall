angular.
  // module('onCallApp').
  module('babeList').
  component('babeList', {
    template:
      '<ul>' +
        '<li ng-repeat="babe in $ctrl.babes">' +
          // '<span>{{ babe.name }}</span>' +
          '<a href="#/babes/{{ babe.id }}">{{ babe.name }}</a>' +
        '</li>' +
      '</ul>',
    controller: function BabeListController() {
      this.babes = [{id: 1, name: 'babe_one'}, {id: 2, name: 'babe_two'}];
    }
  });
