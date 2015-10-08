'use strict';

describe('Directive: TelephonePrefix', function () {

  // load the directive's module
  beforeEach(module('bebCrmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-telephone-prefix></-telephone-prefix>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the TelephonePrefix directive');
  }));
});
