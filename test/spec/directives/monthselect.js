'use strict';

describe('Directive: monthSelect', function () {

  // load the directive's module
  beforeEach(module('bebCrmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<month-select></month-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the monthSelect directive');
  }));
});
