'use strict';

var
  React = require( 'react' )
, PicasaAlbums = require( './PicasaAlbums' )
, PicasaAlbum = require( './PicasaAlbum' )
, Content
;

Content = React.createClass({
  render: function () {
    switch ( this.props.page ) {
    case 'albums':
      return (
        <PicasaAlbums context={this.props.context} />
      );
    case 'album':
      return (
        <PicasaAlbum context={this.props.context} />
      );
    default:
      return <div>{this.props.page}</div>;
    }
  }
});

module.exports = Content;
