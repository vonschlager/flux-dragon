'use strict';

var
  React = require( 'react' )
, FluxibleApp = require( 'fluxible-app' )
, routrPlugin = require( 'fluxible-plugin-routr' )
, fetchrPlugin = require( 'fluxible-plugin-fetchr' )
, helperPlugin = require( './plugins/helperPlugin' )
, MainComponent = require( './components/Main.jsx' )
, MenuStore = require( './stores/MenuStore' )
, PicasaAlbumStore = require( './stores/PicasaAlbumStore' )
, PicasaAlbumsStore = require( './stores/PicasaAlbumsStore' )
, routesConfig = require( './configs/routes' )
, debug = require( 'debug' )( 'Dragon:app' )
, app
;

app = new FluxibleApp({
  appComponent: React.createFactory( MainComponent )
});

app.plug(
  routrPlugin({
    routes: routesConfig
  })
);

app.plug(
  fetchrPlugin()
);

app.plug(
  helperPlugin()
);

app.registerStore( MenuStore );
app.registerStore( PicasaAlbumStore );
app.registerStore( PicasaAlbumsStore );

module.exports = app;
