var onCallApp = angular.module('onCallApp', []);

onCallApp.controller('BabeListController', function BabeListController($scope) {
  $scope.babes = [{name: 'babe1'}, {name: 'babe2'}];
});
