(function () {
    'use strict';

    angular.module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$state'];

    function MainCtrl($state) {
        var vm = this;

        // bindings
        vm.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        vm.nome = 'Olá fulano!';
        vm.empresa = 'WGBN Software House';

        // actions
        vm.loginClick = _loginClick;

        /////////////////////////////

        function _loginClick () {
            console.log('loginClick()');
            $state.go('login');
        }
    }
})();
