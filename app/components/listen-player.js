import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    let player = document.getElementById('player-audio');
    if (player.currentSrc !== '') {
      player.play();
    }
  }
});
