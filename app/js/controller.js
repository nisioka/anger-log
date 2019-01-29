var app = angular.module('App', []);

app.controller('AppController', function($scope){
    $scope.username = '';
    $scope.users = [];
    $scope.submit = function () {
        $scope.users.push({
            username: $scope.username,
            url: '//twitter.com/' + $scope.username
        });
    };
});