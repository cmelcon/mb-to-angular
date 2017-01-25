var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "carousel"
        })
        .when("/404", {
            templateUrl: "partials/404.html"
        })
        .when("/about", {
            templateUrl: "partials/about.html"
        })
        .when("/blog-home-1", {
            templateUrl: "partials/blog-home-1.html"
        })
        .when("/blog-home-2", {
            templateUrl: "partials/blog-home-2.html"
        })
        .when("/blog-post", {
            templateUrl: "partials/blog-post.html"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html"
        })
        .when("/faq", {
            templateUrl: "partials/faq.html"
        })
        .when("/full-width", {
            templateUrl: "partials/full-width.html"
        })
        .when("/portfolio-1-col", {
            templateUrl: "partials/portfolio-1-col.html"
        })
        .when("/portfolio-2-col", {
            templateUrl: "partials/portfolio-2-col.html"
        })
        .when("/portfolio-3-col", {
            templateUrl: "partials/portfolio-3-col.html"
        })
        .when("/portfolio-4-col", {
            templateUrl: "partials/portfolio-4-col.html"
        })
        .when("/portfolio-item", {
            templateUrl: "partials/portfolio-item.html"
        })
        .when("/pricing", {
            templateUrl: "partials/pricing.html"
        })
        .when("/services", {
            templateUrl: "partials/services.html"
        })
        .when("/sidebar", {
            templateUrl: "partials/sidebar.html"
        })
}]);


app.controller('carousel', function(/*$scope, $location, $http*/) {
  console.log("carousel is runnig");

  $('.carousel').carousel({
      interval: 5000 //changes the speed
  })
});
