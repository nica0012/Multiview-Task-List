var app = angular.module('myApp', ['ngRoute', 'LocalStorageModule']);



app.controller('MainCtrl', function ($scope, $route, $routeParams, $location, localStorageService) {
    if (localStorageService.isSupported) {
        console.log('storage working');
    };
});

app.controller('PageOneCtrl', function ($scope, $routeParams, localStorageService) {


    if (localStorageService.get('ListOne')) {

    } else {

        localStorageService.set('ListOne', ['Brush Teeth', 'Call Johnny', 'Check Email']);
    }

    $scope.tasks = localStorageService.get('ListOne');
    console.log($scope.tasks);

    $scope.addTask = function () {
        $scope.tasks.push($scope.enteredTask);
        $scope.enteredTask = '';
        localStorage.setItem('ListOne', JSON.stringify($scope.tasks));
    };

    $scope.removeTask = function (task) {
        var i = $scope.tasks.indexOf(task);

        var pageOne = JSON.parse(localStorage.ListOne);
        pageOne.splice(i, 1);
        localStorage.setItem('ListOne', JSON.stringify(pageOne));
        $scope.tasks.splice(i, 1);



    };

});

app.controller('PageTwoCtrl', function ($scope, $routeParams, localStorageService) {

       if (localStorageService.get('ListTwo')) {

    } else {

        localStorageService.set('ListTwo', ['Brush Teeth', 'Call Johnny', 'Check Email']);
    }

    $scope.tasks = localStorageService.get('ListTwo');
    console.log($scope.tasks);

    $scope.addTask = function () {
        $scope.tasks.push($scope.enteredTask);
        $scope.enteredTask = '';
        localStorage.setItem('ListTwo', JSON.stringify($scope.tasks));
    };

    $scope.removeTask = function (task) {
        var i = $scope.tasks.indexOf(task);

        var pageTwo = JSON.parse(localStorage.ListTwo);
        pageTwo.splice(i, 1);
        localStorage.setItem('ListTwo', JSON.stringify(pageTwo));
        $scope.tasks.splice(i, 1);



    };

});

app.controller('PageThreeCtrl', function ($scope, $routeParams, localStorageService) {

     if (localStorageService.get('ListThree')) {

    } else {

        localStorageService.set('ListThree', ['Brush Teeth', 'Call Johnny', 'Check Email']);
    }

    $scope.tasks = localStorageService.get('ListThree');
    console.log($scope.tasks);

    $scope.addTask = function () {
        $scope.tasks.push($scope.enteredTask);
        $scope.enteredTask = '';
        localStorage.setItem('ListThree', JSON.stringify($scope.tasks));
    };

    $scope.removeTask = function (task) {
        var i = $scope.tasks.indexOf(task);

        var pageThree = JSON.parse(localStorage.ListThree);
        pageThree.splice(i, 1);
        localStorage.setItem('ListThree', JSON.stringify(pageThree));
        $scope.tasks.splice(i, 1);



    };

});


app.config(function ($routeProvider, $locationProvider, localStorageServiceProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page-one.html',
            controller: 'PageOneCtrl'

        })
        .when('/page-one', {
            templateUrl: 'page-one.html',
            controller: 'PageOneCtrl'
        })
        .when('/page-two', {
            templateUrl: 'page-two.html',
            controller: 'PageTwoCtrl'
        })
        .when('/page-three', {
            templateUrl: 'page-three.html',
            controller: 'PageThreeCtrl'
        });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
    localStorageServiceProvider.setPrefix('');

});