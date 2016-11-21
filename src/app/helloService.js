(function() {
    angular.module('app').service('HelloService', HelloService)

        function HelloService() {
            return {
                getHellos: function() {
                    return [
                        { 'english': 'hello' },
                        { 'spanish': 'hola' }
                    ];

                }
            };
        }
})();

