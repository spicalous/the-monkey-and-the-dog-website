import Ember from 'ember';

const API_URL = 'https://maps.googleapis.com/maps/api/js?key=';
const KEY = '';

export default Ember.Component.extend({

  classNames: ['google-maps', 'p-3', 'theme-bg', 'theme-panel'],

  didInsertElement() {

    if (typeof window.google !== 'object' || typeof window.google.maps !== 'object') {

      Ember.$.getScript(API_URL + KEY).done(() => this._initMaps());
    } else {

      this._initMaps();
    }
  },

  _initMaps() {
    const theMonkeyAndTheDog = { lat: 53.967614, lng: -1.081936 };
    const map = new google.maps.Map(document.getElementById('google-maps'), {
      zoom: 15,
      center: theMonkeyAndTheDog
    });
    const marker = new google.maps.Marker({
      position: theMonkeyAndTheDog,
      map: map,
      title: 'The Monkey and the Dog Eat Thai'
    });
  }

});
