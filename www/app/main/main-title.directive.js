(function(){
    "use strict";

    angular
        .module('app')
        .directive('mainTitle', mainTitle);

    function mainTitle () {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/main/main-title.directive.html',
            scope: {
                titulo: '='
            },
            link: linkMainTitle,
            controller: ctrlMainTitle,
            controllerAs: 'vm'
        };

        return directive;

        function linkMainTitle (scope, el, attr, vm) {
            // manipulação do DOM da diretiva
        }
    }

})();

ctrlMainTitle.$inject = ['$scope'];

function ctrlMainTitle ($scope) {
    "use strict";

    // logica da diretiva
    var vm = this;
    vm.titulo = $scope.titulo;
}
