'use strict';

var
  debug = require( 'debug' )( 'Dragon:getPicasaAlbum' )
, ActionTypes = require( '../constants/ActionTypes' )
;

module.exports = function ( context, payload, done ) {
  var options = {};

  debug( 'fetching album', payload );

  if ( payload.params.albumid ) {
    options.albumid = payload.params.albumid;
  }

  context.service.read( 'album', options, {}, function ( err, album ) {
    context.dispatch( ActionTypes.RECEIVE_ALBUM, album );
    done();
  });
};
