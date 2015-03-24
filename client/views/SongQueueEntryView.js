// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    console.log('initialize')
   this.on('add', this.render, this)
  },

 

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
      // this.model.play();
    },

    'add remove': function() {
      console.log(this)
      this.render();
    },
    'enqueue': function() {
      console.log('test')
    }

  },

  render: function(){
    console.log(this)
    return this.$el.html(this.template(this.model.attributes));
  }
});
