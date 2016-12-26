import Ember from 'ember';

export default Ember.Controller.extend({
  mytest: 'Hello',
  currentSong: {
    artist: '...',
    title: '...',
    source: ''
  },
  songQueue: [],
  actions: {
    newSong(song) {
      this.set('currentSong', song);
    },
    addQueue(song) {
      song.set('idx', this.get('songQueue').length);
      this.set('songQueue', this.get('songQueue').concat(song));
    },
    playFromQueue(idx) {
      let queue = this.get('songQueue').slice();
      let newSong = queue.splice(idx, 1)[0];

      for (let x = 0; x < queue.length; x++) {
        queue[x].set('idx', x);
      }

      this.set('songQueue', queue);
      this.set('currentSong', newSong);
    }
  }
});
