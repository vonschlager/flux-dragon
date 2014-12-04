'use strict';

var
  debug = require( 'debug' )( 'Dragon:getPicasaAlbums' )
, ActionTypes = require( '../constants/ActionTypes' )
;

module.exports = function ( context, payload, done ) {
  debug( 'fetching albums' );

  context.service.read( 'albums', {}, {}, function ( err, albums ) {
    context.dispatch( ActionTypes.RECEIVE_ALBUMS, albums );
    done();
  });
};
