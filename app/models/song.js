import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  title: DS.attr(),
  source: DS.attr()
});
