'use strict';

require( 'node-jsx' ).install({ extension: '.jsx' });

var
  express = require( 'express' )
, expressState = require( 'express-state' )
, server = express()
, port = process.env.PORT || 8080
, main = require( './actions/main' )
, app = require( './app' )
, React = require( 'react' )
, htmlComponent = require( './components/Html.jsx' )
, HtmlComponent = React.createFactory( htmlComponent )
;

expressState.extend( server );
server.set( 'state namespace', 'App' );

server.use( '/public', express.static( __dirname + '/build' ) );

server.use( function ( req, res, next ) {
  var
    context = app.createContext()
  , _handleError
  ;

  _handleError = function ( err, next ) {
    if ( err ) {
      if ( err.status && err.status === 404 ) {
        return next();
      }
      else {
        return next( err );
      }
    }
  }

  context.executeAction( main, {}, function ( err ) {
    var
      AppComponent
    , html
    ;

    _handleError( err, next );

    res.expose( app.dehydrate( context ), 'App' );

    AppComponent = app.getAppComponent();

    html = React.renderToStaticMarkup(
      HtmlComponent({
        state: res.locals.state
      , markup: React.renderToString(
          AppComponent({
            context: context.getComponentContext()
          })
        )
      })
    );

    res.write( html );
    res.end();
  });
});

server.listen( port );
