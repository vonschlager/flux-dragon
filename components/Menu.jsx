'use strict';

var
  React = require( 'react' )
, Menu
, MenuItem
;

MenuItem = React.createClass({
  render: function () {
    return (
      <li><a href={this.props.url}>{this.props.name}</a></li>
    );
  }
});

Menu = React.createClass({
  render: function () {
    var menuItems;

    menuItems = this.props.menuItems.map( function ( menuItem, idx ) {
      return <MenuItem key={'menuitem-' + idx} name={menuItem.name} url={menuItem.url} />;
    });

    return (
      <div id="menu">
        <div className="pure-menu pure-menu-open">
          <a className="pure-menu-heading" href="#">7 DH Dragon</a>
          <ul>
            {menuItems}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Menu;
