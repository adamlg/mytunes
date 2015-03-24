// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    },

    // 'ended': function() {
    //   this.model.dequeue();
    // }
  

    // 'click .addQueue': function(e) {
    //   // console.log(this.model.attributes);
    //   e.stopPropagation();
    //   this.trigger('enqueue',this.model.attributes);
    //   // this.model.add();

    //   //this.queue.enqueue(this.model.attributes);
    //   //this.songQueue.enqueue(this);
    // } 
  },

  render: function(){
    // console.log(this.model.attributes);
    return this.$el.html(this.template(this.model.attributes));
  }

});
