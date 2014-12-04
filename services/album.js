'use strict';

var
  superagent = require( 'superagent' )
, picasaConfig = require( '../configs/picasa' )
;

module.exports = {
  name: 'album'
, read: function( req, resource, params, config, callback ) {
    superagent.get( picasaConfig.urlRoot
                  + picasaConfig.path
                  + picasaConfig.userid
                  + '/albumid/'
                  + params.albumid
                  + picasaConfig.photosParams)
              .set( 'Accept', 'application/json' )
              .end( function ( res ) {
                      var album = JSON.parse( res.text );

                      callback( null, album );
                    }
              );
  }
};
