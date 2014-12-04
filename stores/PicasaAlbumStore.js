'use strict';

var
  createStore = require( 'fluxible-app/utils/createStore' )
, debug = require( 'debug' )( 'Dragon:PicasaAlbumStore' )
, PicasaAlbumStore
;

PicasaAlbumStore = createStore({
  storeName: 'PicasaAlbumStore'
, initialize: function ( dispatcher ) {
    this.album = [];
  }
, handlers: {
    'RECEIVE_ALBUM': '_handleReceiveAlbum'
  }
, _handleReceiveAlbum: function ( album ) {
    if ( album.feed ) {
      this.album = album.feed.entry;
      this.emit( 'change' );
    }
  }
, getState: function () {
    return {
      album: this.album
    };
  }
, dehydrate: function () {
    return this.getState();
  }
, rehydrate: function ( state ) {
    this.album = state.album;
  }
});

module.exports = PicasaAlbumStore;
