describe('Hello Service', function() {
    it('should return hello in english and spanish', function() {
        var HelloService;
        module('app');
        inject(function($injector) {
            HelloService = $injector.get('HelloService');
        });
        var hellos = HelloService.getHellos();

        expect(hellos.length).toEqual(2);
    });
});

describe('Hello Service Differently', function() {
    it('should return hello in english and spanish', function() {
        var HelloService;
        module('app');
        /* 
        *   inject() is really a shortcut to angular.mock.inject()
        *   it gets aliased to window.inject() for easy use the
        *   same is true for app above it is aliased to window
        *   from angular.mock.module 
        */
        inject(function(_HelloService_) {
            HelloService = _HelloService_;
        });
        var hellos = HelloService.getHellos();

        expect(hellos.length).toEqual(2);
    });
});

