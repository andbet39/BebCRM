'use strict';

describe('Directive: rooom', function () {

  // load the directive's module
  beforeEach(module('bebCrmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rooom></rooom>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rooom directive');
  }));
});
