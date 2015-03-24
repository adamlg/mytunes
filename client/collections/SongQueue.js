// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // console.log('initialize called')
    this.on('add',this.enqueue, this)
    this.on('ended', this.playNext, this)
    this.on('dequeue', this.dequeue, this)
  },

  //load song in player
  enqueue: function(song) {
    console.log('SongQueue enqueue called');
    this.add(song);
    if (this.length === 1) {
      this.playFirst();
    }
    console.log('SongQueue : ', this);
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
    if (this.at(0) !== this.get('currentSong')) {
      this.at(0).play();
    }

  },

  //skip to next song in queue
  playNext: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  }

  

});