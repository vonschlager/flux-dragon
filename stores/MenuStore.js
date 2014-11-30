'use strict';

var
  createStore = require( 'fluxible-app/utils/createStore' )
, routes = require( '../configs/routes' )
, debug = require( 'debug' )( 'MenuStore' )
, MenuStore
;

MenuStore = createStore({
  storeName: 'MenuStore'
, initialize: function ( dispatcher ) {
    this.page = null;
    this.route = null;
    this.pages = routes;
  }
, handlers: {
    'CHANGE_ROUTE_SUCCESS': '_handleChangeRouteSuccess'
  }
, _handleChangeRouteSuccess: function ( payload ) {
    debug('_handleChangeRouteSuccess', payload);

    if ( this.page !== payload.config.page ) {
      this.page = payload.config.page;
      this.route = payload;
      this.emit('change');
    }
  }
, getState: function () { 
    return {
      page: this.page
    , route: this.route
    , pages: this.pages
    };
  }
, dehydrate: function () {
    return this.getState();
  }
, rehydrate: function ( state ) {
    this.page = state.page;
    this.route = state.route;
    this.pages = state.pages;
  }
});

module.exports = MenuStore;
