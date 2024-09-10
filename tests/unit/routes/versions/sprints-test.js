import { module, test } from 'qunit';
import { setupTest } from 'usprint/tests/helpers';

module('Unit | Route | versions/sprints', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:versions/sprints');
    assert.ok(route);
  });
});
