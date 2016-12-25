import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    document.getElementById('player-audio').play();
  }
});
