var app = angular.module('App', []);

app.controller('AppController', function($scope){
    $scope.comments = [
        {name: "Yamada", text: "Hello!"},
        {name: "Tanaka", text: "Thanks!"},
        {name: "Nakamura", text: "Yeah!"}
    ];
});