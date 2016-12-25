import Ember from 'ember';

export default Ember.Controller.extend({
  mytest: 'Hello',
  currentSong: {
    artist: 'Re Zero',
    title: 'Ending Theme',
    source: 'http://127.0.0.1:8000/media?name=21643900'
  },
  nextSong: {
    artist: 'FFXIII',
    title: 'Last Wanderer',
    source: 'http://127.0.0.1:8000/media?name=10034897'
  },
  actions: {
    newSong(song) {
      this.set('currentSong', song);
    }
  }
});
