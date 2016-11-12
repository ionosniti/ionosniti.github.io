var routerApp = angular.module('routerApp',["ui.router"]);
routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});

routerApp.controller('scotchController', function($scope,$filter) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            'name-test': 'Macallan 12',
            'price-test': 50
        },
        {
            'name-test': 'Chivas Regal Royal Salute',
            'price-test': 10000
        },
        {
            'name-test': 'Glenfiddich 1937',
            'price-test': 20000
        }
    ];

    $scope.sort = function (val) {
        $scope.scotches = $filter('orderBy')($scope.scotches,val);

    }
});