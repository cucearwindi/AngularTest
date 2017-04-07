var soal = angular.module('soal',[]);

soal.controller('soal1', ['$scope', function($scope) {
    $scope.namaUser = '' ;
}]);

soal.controller('soal2', ['$scope', '$filter', function($scope, $filter) {
    $scope.uang = 0;
}]);
