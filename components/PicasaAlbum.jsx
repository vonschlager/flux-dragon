'use strict';

var
  React = require( 'react' )
, PicasaAlbumStore = require( '../stores/PicasaAlbumStore' )
, StoreMixin = require( 'fluxible-app' ).StoreMixin
, PicasaImage
, PicasaAlbum
;

PicasaImage = React.createClass({
  render: function() {
    return (
      <div className="pure-u-3-24">
        <img src={this.props.thumbnail}></img>
      </div>
    );
  }
});

PicasaAlbum = React.createClass({
  mixins: [ StoreMixin ]
, statics: {
    storeListeners: {
      onPicasaAlbumStoreChange: [ PicasaAlbumStore ]
    }
  }
, getInitialState: function () {
    return this.getStore( PicasaAlbumStore ).getState();
  }
, onPicasaAlbumStoreChange: function () {
    var state;

    state = this.getStore( PicasaAlbumStore ).getState();

    this.setState( state );
  }
, render: function () {
    var
      albumFeed = this.state.album
    , album = []
    , self = this
    ; 

    album = albumFeed.map( function ( image, idx ) {
      return <PicasaImage context={self.props.context}
                          key={'image-' + idx}
                          thumbnail={image['media$group']['media$thumbnail'][0].url}>
             </PicasaImage>;
    });

    return (
      <div className="pure-g">
        {album}
      </div>
    );
  }
});

module.exports = PicasaAlbum;
