var soal = angular.module('soal',[]);

soal.controller('soal1', ['$scope', function($scope) {
    $scope.namaUser = '' ;
}]);

soal.controller('soal2', ['$scope', '$filter', function($scope, $filter) {
    $scope.uang = 0;
}]);

soal.controller('soal3', ['$scope', function($scope) {
  $scope.list=[
  {nama:"Budi"},
  {nama:"Icha"},
  {nama:"Fajar"},
  {nama:"Candra"},
  {nama:"Anton"},
  {nama:"Winny"},
  {nama:"Danu"},
  ];
  $scope.submit=function(){
  	console.log($scope.list);
  }
}]);

soal.controller('soal4', ['$scope', function($scope) {
    $scope.user = '0';
    $scope.dataSelection = {
        '0': '-- Pilih User -- ',
        '1': 'Budi',
        '2': 'Icha',
        '3': 'Fajar',
        '4': 'Candra',
        '5': 'Anton',
        '4': 'Winny',
        '5': 'Danu',
    };
    $scope.dataSelectionKeys = Object.keys($scope.dataSelection);
}]);

soal.controller('aaa', ['$scope', function($scope) {
   $scope.data = {
    singleSelect: null,
    option1: 'Budi'
   };
}]);