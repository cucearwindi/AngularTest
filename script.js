var sismiop = angular.module('sismiop',['ngCookies']);

sismiop.controller('menucon', ['$scope', function($scope) {
    $scope.kasus = 'ingat';
    $scope.namaUser = '' ;
}]);
sismiop.controller('submenucon', ['$scope', function($scope) {
  $scope.kasus = 'lupa';
}]);




sismiop.controller('perulangan', ['$scope', function($scope) {
  $scope.list=[1,2,3,4,5,6,7,8,9];
}]);
sismiop.controller('perulangan2', ['$scope', function($scope) {
  $scope.list2=[
  {nama:'',	umur:''},
  {nama:'',	umur:''},
  {nama:'',	umur:''},
  ];
  $scope.submit=function(){
  	console.log($scope.list2);
  }
}]);
sismiop.controller('cobahttp', ['$scope', '$http',function($scope, $http) {
  $scope.list3=[
  {nama:'',	umur:''},
  {nama:'',	umur:''},
  {nama:'',	umur:''},
  ];
  $scope.submit = function(){
  	$http({
  		method:'POST',
  		url:'ping.php',
  		data: $.param({
  			list3:$scope.list3
  		}),
  		headers: {
  			'Content-Type' : 'application/x-www-form-urlencoded'
  		}
  	}).then(function(response){
  		console.log(response.data);
  	});
	};
}]);




sismiop.controller('inputan', ['$scope', function($scope) {
    $scope.inputStatis = 'CUCE';
    $scope.inputSelect = '0';
    $scope.dataSelection = {
        '0': '-- Pilih Makanan Favorit -- ',
        '1': 'French Fries',
        '2': 'Steak',
        '3': 'Toast',
        '4': 'Froyo',
        '5': 'Pina Colada',
    };
    $scope.dataSelectionKeys = Object.keys($scope.dataSelection);
    $scope.inputCheckbox = false;

    $scope.inputNumber = 0;
    $scope.tanggalnya = new Date();
    $scope.waktunya = new Date();

    $scope.inputPaste = false;
    $scope.inputCut = false;
    $scope.inputCopy = false;
}]);




sismiop.controller('menumemory', ['$scope', function($scope) {
    $scope.kasus = 'ingat';
    $scope.namaUser = {
      pertama:'Cuce',
      kedua:'Arwindi',
    };
    $scope.namaKaryawan = angular.copy($scope.namaUser);
}]);
sismiop.controller('menufilterjs', ['$scope', '$filter', function($scope, $filter) {
    $scope.kasus = 'ingat';
    $scope.namaUser = {
      pertama: $filter('uppercase')('iLyArYaN'),
    };
}]);
sismiop.controller('menufiltermodul', ['$scope', '$filter', function($scope, $filter) {
    $scope.kasus = 'ingat';
    $scope.namaUser = {
      pertama: ('iLyArYaN'),
    };
}]);
sismiop.controller('latcurrency', ['$scope', '$filter', function($scope, $filter) {
    $scope.kasus = 'ingat';
    $scope.namaUser = {
      pertama: ('iLyArYaN'),
    };
    $scope.uang = 0;
}]);




sismiop.controller('latCookie', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    $scope.kasus = 'ingat';
    $scope.namaUser = {
      pertama: ('iLyArYaN'),
    };
    $scope.uang = 0;
    console.log($cookieStore.get('val'));
    $scope.saveCookie = function(){
      $cookieStore.put('val','TERISI');
    }
    $scope.removeCookie = function(){
      $cookieStore.remove('val');
    }
}]);