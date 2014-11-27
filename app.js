'use strict';

var
  React = require( 'react' )
, FluxibleApp = require( 'fluxible-app' )
, MainComponent = require( './components/Main.jsx' )
, app
;

app = new FluxibleApp({
  appComponent: React.createFactory( MainComponent )
});

module.exports = app;
