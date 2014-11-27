'use strict';

var React = require( 'react' );

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head></head>
        <body>
          <section id="main" dangerouslySetInnerHTML={{__html: this.props.markup}}>
          </section>
          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          <script src="/public/js/client.js" defer></script>
        </body>
      </html>
    );
  }
});
