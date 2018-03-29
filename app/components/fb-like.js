import Component from '@ember/component';

export default Component.extend({

  didInsertElement() {

    if (FB && FB.XFBML && FB.XFBML.parse) {
      FB.XFBML.parse(this.$()[0]);
    }

  }

});
