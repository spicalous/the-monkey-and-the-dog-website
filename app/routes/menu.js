import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.$.getJSON('menu/menu.json');
  }

});
