// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // console.log('initialize called')
    this.on('add',this.enqueue, this)
    this.on('ended',this.playNext, this)
    this.on('dequeue', this.dequeue, this)
  },

  //load song in player
  enqueue: function(song) {
    // this.add(song)
    // console.log('enqueue function called')
    if (this.length === 1) {
      this.playFirst();
    }
  },

  //remove item from queue
  dequeue: function(song) {
    // console.log('dequeue')
    if (this.at(0) === song) {
      this.playNext()
    } else {
      this.remove(song)
    }
  },

  //play first song in queue
  playFirst: function() {
    console.log(this.at(0))
    if (this.at(0) !== this.get('currentSong')) {
      console.log('playFirst')
      this.at(0).play();
    }

  },

  //skip to next song in queue
  playNext: function() {
    // console.log('playNext')
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  }

  

});