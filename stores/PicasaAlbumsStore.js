'use strict';

var
  createStore = require( 'fluxible-app/utils/createStore' )
, debug = require( 'debug' )( 'Dragon:PicasaAlbumsStore' )
, PicasaAlbumsStore
;

PicasaAlbumsStore = createStore({
  storeName: 'PicasaAlbumsStore'
, initialize: function ( dispatcher ) {
    this.albums = [];
  }
, handlers: {
    'RECEIVE_ALBUMS': '_handleReceiveAlbums'
  }
, _handleReceiveAlbums: function ( albums ) {
    if ( albums.feed ) {
      this.albums = albums.feed.entry;
      this.emit( 'change' );
    }
  }
, getState: function () {
    return {
      albums: this.albums
    };
  }
, dehydrate: function () {
    return this.getState();
  }
, rehydrate: function ( state ) {
    this.albums = state.albums;
  }
});

module.exports = PicasaAlbumsStore;
