'use strict';

var
  superagent = require( 'superagent' )
, picasaConfig = require( '../configs/picasa' )
;

module.exports = {
  name: 'albums'
, read: function( req, resource, params, config, callback ) {
    superagent.get( picasaConfig.urlRoot
                  + picasaConfig.path
                  + picasaConfig.userid
                  + picasaConfig.albumsParams)
              .set( 'Accept', 'application/json' )
              .end( function ( res ) {
                      var albums = JSON.parse( res.text );

                      callback( null, albums );
                    }
              );
  }
};
