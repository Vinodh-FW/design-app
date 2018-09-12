'use strict';

define('design-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/app-comp/index-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/app-comp/index-form/component.js should pass ESLint\n\n4:5 - Use import Component from \'@ember/component\'; instead of using Ember destructuring (ember/new-module-imports)\n14:13 - \'selectedMenu\' is assigned a value but never used. (no-unused-vars)\n72:17 - Unexpected console statement. (no-console)\n134:9 - \'$\' is not defined. (no-undef)\n134:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n143:9 - \'$\' is not defined. (no-undef)\n143:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n144:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n144:17 - \'$\' is not defined. (no-undef)\n145:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n145:17 - \'$\' is not defined. (no-undef)\n147:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n147:17 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('design-app/tests/test-helper', ['design-app/app', 'design-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('design-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define('design-app/config/environment', [], function() {
  var prefix = 'design-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('design-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
