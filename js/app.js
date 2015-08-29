
var dragdropModule = angular.module('dragdrop', ['ui']);

dragdropModule.controller('dragdropController', [
	'$scope',
	function ($scope) {
	    $scope.msg = "hi";
	    $scope.list = [
            { name: "beer", imageUrl: "/images/beer.jpg" },
            { name: "duck", imageUrl: "/images/duck.jpg" },
            { name: "lion", imageUrl: "/images/lion.jpg" },
            { name: "puppy", imageUrl: "/images/puppy.jpg" },
            { name: "squirel", imageUrl: "/images/squirel.jpg" },
	    ];
	}]);

