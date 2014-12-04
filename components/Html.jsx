'use strict';

var
  React = require( 'react' )
;

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
