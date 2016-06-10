(function(){
    "use strict";

    angular
        .module('app')
        .directive('h3Name', h3Name);

    function h3Name () {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/common/directives/h3-name.directive.html',
            scope: {
                name: '='
            },
            link: linkH3Name,
            controller: ctrlH3Name,
            controllerAs: 'vm'
        };

        return directive;

        function linkH3Name (scope, el, attr, vm) {
            // manipulação do DOM da diretiva
        }
    }

})();

ctrlH3Name.$inject = ['$scope'];

function ctrlH3Name ($scope) {
    "use strict";

    // logica da diretiva
    var vm = this;

    vm.seuNome = $scope.name;
}
