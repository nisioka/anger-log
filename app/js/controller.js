var app = angular.module('App', ['ngStorage']);

app.controller('AppController', function($scope){
    $scope.$storage = $localStorage.$default({});
    $scope.$storage.date = '';
    $scope.$storage.time = '';
    $scope.$storage.title = '';
    $scope.$storage.case = '';
    $scope.$storage.think = '';
    $scope.$storage.emotion = '';
    $scope.$storage.strength = '';
    $scope.$storage.action = '';
    $scope.$storage.result = '';

    $scope.$storage.users = [];
    $scope.$storage.submit = function () {
        $scope.$storage.users.push({
            date: $scope.$storage.date,
            time: $scope.$storage.time,
            title: $scope.$storage.title
        });
    };
    $scope.$storage.save();
});


// https://stackoverrun.com/ja/q/9407145