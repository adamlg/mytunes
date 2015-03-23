// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',this.enqueue, this)
  },

  //load song in player
  enqueue: function(song) {
    // this.add(song)
    if (this.length === 1) {
      this.playFirst();
    }
  },

  //remove item from queue
  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext()
    } else {
      this.remove(song)
    }
  },

  //play first song in queue
  playFirst: function() {
    this.at(0).play();

  },

  //skip to next song in queue
  playNext: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  }

  

});