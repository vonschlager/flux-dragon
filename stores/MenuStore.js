'use strict';

var
  createStore = require( 'fluxible-app/utils/createStore' )
, routes = require( '../configs/routes' )
, MenuStore
;

MenuStore = createStore({
  storeName: 'MenuStore'
, initialize: function ( dispatcher ) {
    this.page = 'one';
    this.pages = routes;
  }
, handlers: {
    'CHANGE_ROUTE_SUCCESS': '_handleChangeRouteSuccess'
  }
, _handleChangeRouteSuccess: function ( payload ) {
    if ( this.page !== payload.config.page ) {
      this.page = payload.config.page;
      this.emit('change');
    }
  }
, getState: function () { 
    return {
      page: this.page
    , pages: this.pages
    };
  }
, dehydrate: function () {
    return this.getState();
  }
, rehydrate: function ( state ) {
    this.page = state.page;
    this.pages = state.pages;
  }
});

module.exports = MenuStore;
