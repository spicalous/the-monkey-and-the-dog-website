import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {

    if (FB && FB.XFBML && FB.XFBML.parse) {
      FB.XFBML.parse(this.$()[0]);
    }

  }

});
