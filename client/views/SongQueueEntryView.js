// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    this.on('enqueue dequeue', this.render, this)
  },

  // render: function() {
  //   return this.$el;
  // }

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
      // this.model.play();
    },

    'add remove': function() {
      this.render();
    }

  },

  render: function(){
    console.log(this)
    return this.$el.html(this);
  }
});
