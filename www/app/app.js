(function () {
    'use strict';
    angular.module('app', ['ionic'])
        .config(configBlock)
        .run(runBlock);

    configBlock.$inject = ['$stateProvider', '$urlRouterProvider', '$provide'];

    function configBlock($stateProvider, $urlRouterProvider, $provide) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl'
            })
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/main');

        // catch Angular errors
        $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
            return function (exception, cause) {
                $delegate(exception, cause);
                var data = {};
                if (cause) {
                    data.cause = cause;
                }
                if (exception) {
                    if (exception.message) {
                        data.message = exception.message;
                    }
                    if (exception.name) {
                        data.name = exception.name;
                    }
                    if (exception.stack) {
                        data.stack = exception.stack;
                    }
                }
                Logger.error('Angular error: ' + data.message, {cause: data.cause, stack: data.stack});
            };
        }]);
    }

    // catch JavaScript errors
    window.onerror = function (message, url, line, col, error) {
        var stopPropagation = false;
        var data = {};
        if (message) {
            data.message = message;
        }
        if (url) {
            data.fileName = url;
        }
        if (line) {
            data.lineNumber = line;
        }
        if (col) {
            data.columnNumber = col;
        }
        if (error) {
            if (error.name) {
                data.name = error.name;
            }
            if (error.stack) {
                data.stack = error.stack;
            }
        }
        if (navigator) {
            if (navigator.userAgent) {
                data['navigator.userAgent'] = navigator.userAgent;
            }
            if (navigator.platform) {
                data['navigator.platform'] = navigator.platform;
            }
            if (navigator.vendor) {
                data['navigator.vendor'] = navigator.vendor;
            }
            if (navigator.appCodeName) {
                data['navigator.appCodeName'] = navigator.appCodeName;
            }
            if (navigator.appName) {
                data['navigator.appName'] = navigator.appName;
            }
            if (navigator.appVersion) {
                data['navigator.appVersion'] = navigator.appVersion;
            }
            if (navigator.product) {
                data['navigator.product'] = navigator.product;
            }
        }
        Logger.error('JavaScript error: ' + data.message, {cause: data.cause, stack: data.stack});
        return stopPropagation;
    };

    runBlock.$inject = ['$rootScope'];

    function runBlock($rootScope) {
        $rootScope.safeApply = function (fn) {
            var phase = this.$root ? this.$root.$$phase : this.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    }
})();
