import { module, test } from 'qunit';
import { setupTest } from 'usprint/tests/helpers';

module('Unit | Route | versions/sprints/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:versions/sprints/index');
    assert.ok(route);
  });
});
