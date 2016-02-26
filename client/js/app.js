var app = angular.module('app', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl: "/partials/login.html",
			controller: "UserController"
		})
		.when("/dashboard", {
			templateUrl: "/partials/lists.html",
			controller: "ListsController"
		})
		.when("/user/:id", {
			templateUrl: "/partials/userProfile.html",
			controller: "ListsController"
		})
		.otherwise('/')
	})