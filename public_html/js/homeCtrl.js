app.controller('homeCtrl', function ($scope) {
    $scope.exerciciosKeys = Object.keys(exercicios);
    $scope.exercicios = exercicios;
});

