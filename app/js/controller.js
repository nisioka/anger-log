var app = angular.module('App', ['ngStorage']);

app.controller('AppController', ['$scope', '$localStorage', function ($scope, $localStorage) {
    $scope.date = '';
    $scope.time = '';
    $scope.title = '';
    $scope.case = '';
    $scope.think = '';
    $scope.emotion = '';
    $scope.strength = '';
    $scope.action = '';
    $scope.result = '';

    $scope.$storage = $localStorage.$default({
        logs: []
    });

    $scope.logs = $scope.$storage.logs;
    $scope.submit = function () {
        $scope.logs.push({
            date: $scope.date,
            time: $scope.time,
            title: $scope.title
        });
        $scope.$storage.logs = $scope.logs;
    };
}]);