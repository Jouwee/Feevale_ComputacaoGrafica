var app = angular.module('app', ['ngRoute']);

var exercicios = [];

app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
                when('/', {
                    templateUrl: 'view/home.html',
                    controller: 'homeCtrl'
                }).
                when('/exercicios/:id', {
                    templateUrl: 'view/genericExercicio.html',
                    controller: 'dynamicExercicioCtrl'
                }).
                otherwise('/');
    }
]);

app.controller('mainCtrl', function ($scope) {
});