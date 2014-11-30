'use strict';

var React = require( 'react' );

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css" />
          <link rel="stylesheet" href="/public/css/side-menu.css" />
        </head>
        <body>
          <div id="layout" dangerouslySetInnerHTML={{__html: this.props.markup}}>
          </div>
          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          <script src="/public/js/client.js" defer></script>
        </body>
      </html>
    );
  }
});
