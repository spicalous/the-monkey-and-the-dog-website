import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fb-page-plugin', 'Integration | Component | fb page plugin', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fb-page-plugin}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fb-page-plugin}}
      template block text
    {{/fb-page-plugin}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
