angular.module("umbraco").controller("MGL.TextboxDefaultValueController", [

    "$scope",
    function ($scope) {
        if ($scope.model.value === null || $scope.model.value === "") {
            $scope.model.value = $scope.model.config.defaultValue;
        }
    }
]);