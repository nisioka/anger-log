var app = angular.module('App', ['ngStorage']);

app.controller('AppController', function($scope, storage){
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
        storage.bind($scope, 'angerLogs', $scope.users)
    };
});

// https://stackoverrun.com/ja/q/9407145
// https://qiita.com/daikon_buu/items/e898eafe8cf05c8814a2