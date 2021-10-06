var app = angular.module("myApp", []);
app.controller("myController", function($scope) {
  $scope.tasks = [];
  $scope.saveTask = function() {
    $scope.tasks.push({ task_name: $scope.yourTask, status: false });
  };
  $scope.getTask = function() {
    var oldTasks = $scope.tasks;
    $scope.tasks = [];
    angular.forEach(oldTasks, function(task) {
      if (!task.done) $scope.tasks.push(task);
    });
    localStorage.setItem("tasks", JSON.stringify($scope.tasks));
  };
  $scope.delete = function(i) {
    $scope.tasks.splice(i, 1);
  };
  $scope.finished = function(i) {
    $scope.tasks[i].status = true;
  };
});