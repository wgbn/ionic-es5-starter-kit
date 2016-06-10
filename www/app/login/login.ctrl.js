(function () {
    'use strict';

    angular.module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state'];

    function LoginCtrl($state) {
        var vm = this;

        // bindings
        vm.credenciais = {
            login: '',
            senha: ''
        };

        // actions
        vm.fazLogin = _fazLogin;

        /////////////////////////////

        function _fazLogin () {
            // logica do login
            console.info(vm.credenciais);
            $state.go('main');
        }
    }
})();
