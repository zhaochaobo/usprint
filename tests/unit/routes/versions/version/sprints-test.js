import { module, test } from 'qunit';
import { setupTest } from 'usprint/tests/helpers';

module('Unit | Route | versions/version/sprints', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:versions/version/sprints');
    assert.ok(route);
  });
});
