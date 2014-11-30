'use strict';

var
  React = require( 'react' )
, Menu = require( './Menu.jsx' )
, Content = require( './Content.jsx' )
, Main
;

Main = React.createClass({
  render: function () {
    var menuItems = [ { 'name': 'one', 'url': '/one' }
                    , { 'name': 'two', 'url': '/two' }
                    , { 'name': 'three', 'url': '/three' }
                    ];

    return (
      <div>
        <Menu menuItems={menuItems} />
        <Content />
      </div>
    );
  }
});

module.exports = Main;
