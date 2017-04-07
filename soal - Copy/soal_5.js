var sismiop = angular.module('sismiop',[
  'ngCookies'
]);
sismiop.controller('page', ['$scope', '$cookieStore', function($scope, $cookieStore){
  $scope.struktur_list = {
    nama:'NoName',
  };
  $scope.list = [
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
    $scope.struktur_list,
  ];
}]);


sismiop.controller('perulangan2', ['$scope', function($scope) {
  $scope.list2=[
  {nama:'', umur:''},
  {nama:'', umur:''},
  {nama:'', umur:''},
  ];
  $scope.submit=function(){
    console.log($scope.list2);
  }
}]);