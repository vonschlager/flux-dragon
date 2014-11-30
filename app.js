'use strict';

var
  React = require( 'react' )
, FluxibleApp = require( 'fluxible-app' )
, routrPlugin = require( 'fluxible-plugin-routr' )
, MainComponent = require( './components/Main.jsx' )
, MenuStore = require( './stores/MenuStore' )
, routes = require( './configs/routes.js' )
, app
;

app = new FluxibleApp({
  appComponent: React.createFactory( MainComponent )
});

app.plug( routrPlugin({
  routes: routes
}));

app.registerStore( MenuStore );

module.exports = app;
