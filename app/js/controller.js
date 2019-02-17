var app = angular.module('App', ['ngStorage', 'ngAnimate', 'toaster']);

app.controller('AppController', ['$scope', '$localStorage', function ($scope, $localStorage, toaster, $window) {
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

    $scope.pop = function(){
        toaster.pop('success', "title", 'Its address is https://google.com.', 15000, 'trustedHtml', 'goToLink');
        toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
        toaster.pop('error', "title", '<ul><li>Render html</li></ul>', null, 'trustedHtml');
        toaster.pop('wait', "title", null, null, 'template');
        toaster.pop('warning', "title", "myTemplate.html", null, 'template');
        toaster.pop('note', "title", "text");
    };

    $scope.goToLink = function(toaster) {
        var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
        if (match) $window.open(match[0]);
        return true;
    };

    $scope.clear = function(){
        toaster.clear();
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
