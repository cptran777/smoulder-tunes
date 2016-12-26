import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    playSong(idx) {
      this.get('playSong')(idx);
    }
  }
});
