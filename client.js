'use strict';

var
  React = require( 'react' )
, app = require( './app' )
, dehydratedState = window.App
;

window.React = React;

app.rehydrate( dehydratedState, function ( err, context ) {
  var mountNode;

  if ( err ) {
    throw err;
  }

  window.context = context;

  mountNode = document.getElementById( 'layout' );

  React.render(
    app.getAppComponent()({ context: context.getComponentContext() })
  , mountNode
  );
});
