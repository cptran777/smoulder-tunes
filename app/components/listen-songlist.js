import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    playSong(song) {
      this.get('newSong')(song);
    },
    queueSong(song) {
      this.get('addQueue')(song);
    }
  }
});
