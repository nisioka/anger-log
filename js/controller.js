var app = angular.module('App', ['ngStorage']);

app.controller('AppController', ['$scope', '$localStorage', function ($scope, $localStorage) {
    clear($scope);

    $scope.$storage = $localStorage.$default({
        logs: []
    });

    $scope.logs = $scope.$storage.logs;
    $scope.submit = function () {
        $scope.logs.push({
            dateTime: $scope.dateTime,
            title: $scope.title,
            case: $scope.case,
            think: $scope.think,
            emotion: $scope.emotion,
            strength: $scope.strength,
            action: $scope.action,
            result: $scope.result
        });
        $scope.$storage.logs = $scope.logs;
        clear($scope);
    };
}]);

function clear($scope) {
    $scope.dateTime = '';
    $scope.title = '';
    $scope.case = '';
    $scope.think = '';
    $scope.emotion = '';
    $scope.strength = '';
    $scope.action = '';
    $scope.result = '';
}