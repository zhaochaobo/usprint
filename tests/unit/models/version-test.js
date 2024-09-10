import { setupTest } from 'usprint/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | version', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('version', {});
    assert.ok(model, 'model exists');
  });
});
