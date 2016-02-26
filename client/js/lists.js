angular.module('app')
  .controller("ListsController", ListsController)
  .factory("ListsFactory", ListsFactory);

  function ListsController($scope,UserFactory, ListsFactory, $location, $routeParams) {

    $scope.names = [];
    $scope.users = [];

    UserFactory.getUsers(function(data) {
      $scope.users = data.data;
      for (var i=0; i < $scope.users.length; i++)
        $scope.names.push($scope.users[i].name);
    });

    ListsFactory.getLists(function(response) {
      $scope.lists = response.data;
    });

    $scope.createList = function() {
      ListsFactory.createList($scope.newList, function() {
        alert("List successfully added!");
        ListsFactory.getLists(function(response) {
          $scope.lists = response.data;
        });
        $scope.newList = {};
      });
    }
    UserFactory.showProfile($routeParams.id, function(response) {
      $scope.user = response.data;
    })
  }

  function ListsFactory($http) {
    var List = {};

    List.getLists = function(callback) {
      $http.get('/lists').then(callback);
    }
    List.createList = function(list, callback) {
      $http.post('/lists', list).then(callback);
    }
    List.showProfile = function(id, callback) {
      $http.get('/user/' + id).then(callback);
    }

    return List;
  }