'use strict';

module.exports = {
  home: {
    page: 'home'
  , path: '/'
  , method: 'get'
  , menu: true
  }
, one: {
    page: 'one'
  , path: '/one'
  , method: 'get'
  , menu: true
  }
, two: {
    page: 'two'
  , path: '/two'
  , method: 'get'
  , menu: true
  }
, three: {
    page: 'three'
  , path: '/three'
  , method: 'get'
  , menu: true
  }
, picasaalbums: {
    page: 'albums'
  , path: '/picasa/albums'
  , method: 'get'
  , action: 'GET_PICASA_ALBUMS'
  , menu: true
  }
, picasaalbum: {
    page: 'album'
  , path: '/picasa/album/:albumid'
  , method: 'get'
  , action: 'GET_PICASA_ALBUM'
  , menu: false
  }
};
