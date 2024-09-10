import { setupTest } from 'usprint/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | sprint', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('sprint', {});
    assert.ok(model, 'model exists');
  });
});
