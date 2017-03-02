angular.module('app').controller('dynamicExercicioCtrl', function ($scope, $routeParams) {
    exercicios[$routeParams.id].controller($scope, $routeParams);
});