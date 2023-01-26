import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | material-tab-bar/button/label', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MaterialTabBar::Button::Label />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <MaterialTabBar::Button::Label>
        template block text
      </MaterialTabBar::Button::Label>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
