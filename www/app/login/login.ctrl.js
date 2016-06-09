(function () {
    'use strict';

    angular.module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', 'Storage'];

    function LoginCtrl($scope, $state, Storage) {
        var fn = {}, data = {};
        
        $scope.fn = fn;
        $scope.data = data;

        data.credentials = {
            login: '',
            password: ''
        };

        fn.login = function (credentials) {
            if (credentials.login) {
                Storage.setUser({login: credentials.login}).then(function () {
                    $state.go('app.twitts');
                });
            }
        };
    }
})();
