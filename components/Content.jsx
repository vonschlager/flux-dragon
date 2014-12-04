'use strict';

var
  React = require( 'react' )
, PicasaAlbums = require( './PicasaAlbums' )
, Content
;

Content = React.createClass({
  render: function () {
    return (
      <PicasaAlbums context={this.props.context} />
    );
  }
});

module.exports = Content;
