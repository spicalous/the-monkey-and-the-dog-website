import Component from '@ember/component';
import $ from 'jquery';

const API_URL = 'https://maps.googleapis.com/maps/api/js?key=';
const KEY = 'AIzaSyDLN-mlvAKcBcen1R7f6UkBE6cJG4s29PQ';

export default Component.extend({

  classNames: ['google-maps', 'bg-palette-grey', 'panel', 'panel-outline'],

  didInsertElement() {

    if (typeof window.google !== 'object' || typeof window.google.maps !== 'object') {

      $.getScript(API_URL + KEY).done(() => this._initMaps());
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
