var app = angular.module('App', []);

app.controller('AppController', function($scope){
    $scope.date = '';
    $scope.time = '';
    $scope.title = '';
    $scope.case = '';
    $scope.think = '';
    $scope.emotion = '';
    $scope.strength = '';
    $scope.action = '';
    $scope.result = '';

    $scope.users = [];
    $scope.submit = function () {
        $scope.users.push({
            date: $scope.date,
            time: $scope.time,
            title: $scope.title
        });
    };
});