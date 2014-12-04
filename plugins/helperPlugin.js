'use strict';

var
  getPicasaAlbums = require( '../actions/getPicasaAlbums' )
, getPicasaAlbum = require( '../actions/getPicasaAlbum' )
, ActionNames = require( '../constants/ActionNames' )
, helperPlugin
;

helperPlugin = function ( options ) {
  return {
    name: 'HelperPlugin' 
  , plugContext: function () {
      return {
        plugActionContext: function ( actionContext ) {
          actionContext.getAction = function ( actionName ) {
            switch ( actionName ) {
            case ActionNames.GET_PICASA_ALBUM:
              return getPicasaAlbum;
              break;
            case ActionNames.GET_PICASA_ALBUMS:
              return getPicasaAlbums;
              break;
            }
          };
        }
      };
    }
  };
};

module.exports = helperPlugin;
