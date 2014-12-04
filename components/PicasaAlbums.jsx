'use strict';

var
  React = require( 'react' )
, PicasaAlbumsStore = require( '../stores/PicasaAlbumsStore' )
, StoreMixin = require( 'fluxible-app' ).StoreMixin
, NavLink = require( 'flux-router-component' ).NavLink
, PicasaAlbumLink
, PicasaAlbums
;

PicasaAlbumLink = React.createClass({
  render: function() {
    return (
      <div className="pure-u-3-24">
        <NavLink href={"/picasa/album/" + this.props.albumid}
                 context={this.props.context}
                 className="thumbnail">
          <img src={this.props.thumbnail}></img>
        </NavLink>
      </div>
    );
  }
});

PicasaAlbums = React.createClass({
  mixins: [ StoreMixin ]
, statics: {
    storeListeners: {
      onPicasaAlbumsStoreChange: [ PicasaAlbumsStore ]
    }
  }
, getInitialState: function () {
    return this.getStore( PicasaAlbumsStore ).getState();
  }
, onPicasaAlbumsStoreChange: function () {
    var state = this.getStore( PicasaAlbumsStore ).getState();

    this.setState( state );
  }
, render: function () {
    var
      albumsFeed = this.state.albums
    , albums = []
    , self = this
    ; 

    albums = albumsFeed.map( function ( album, idx ) {
      return <PicasaAlbumLink context={self.props.context}
                          albumid={album['gphoto$id']['$t']}
                          key={'album-' + idx}
                          thumbnail={album['media$group']['media$thumbnail'][0].url}>
             </PicasaAlbumLink>;
    });

    return (
      <div className="pure-g">
        {albums}
      </div>
    );
  }
});

module.exports = PicasaAlbums;
