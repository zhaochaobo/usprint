import { module, test } from 'qunit';
import { setupTest } from 'usprint/tests/helpers';

module('Unit | Route | versions', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:versions');
    assert.ok(route);
  });
});
