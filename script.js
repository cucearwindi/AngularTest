var sismiop = angular.module('sismiop',[]);

sismiop.controller('menucon', ['$scope', function($scope) {
  $scope.kasus = 'ingat';
  $scope.namaUser='';
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
  	$scope.inputStatis = 'FX';
}]);



sismiop.controller('inputan2', ['$scope', function($scope) {
  	$scope.inputStatis = 'FX';
  	$scope.inputSelect = '0';
  	$scope.dataSelection = {
  		'0': '-- Pilih Makanan Favorit --',
  		'1': 'French Fries',
  		'2': 'Steak',
  		'3': 'Toast',
  		'4': 'Froyo',
  		'5': 'Pina Colada'
  	};
  	$scope.dataSelectionKeys = Object.keys($scope.dataSelection)
}]);