angular.module('toDoList', []);

angular.module('toDoList').controller('MainController', function($scope){

  $scope.list = [];
  $scope.newItem = '';
  $scope.show = true;

  $scope.submitItem = function() {
    $scope.list.push($scope.newItem);
    $scope.newItem = '';
    console.log($scope.list);
  }

  $scope.removeItem = function(completedItem) {
    var index = $scope.list.indexOf(completedItem);
    $scope.list.splice(index, 1);
    console.log(completedItem, index);

  }
  // $scope.massRemove = function($scope.show){
  //   if ($scope.show == true) {
  //
  //   }
  // }





})
