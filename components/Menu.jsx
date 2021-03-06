'use strict';

var
  React = require( 'react' )
, NavLink = require ( 'flux-router-component' ).NavLink
, Menu
, MenuItem
;

MenuItem = React.createClass({
  render: function () {
    var selectedClass;

    if (this.props.selected === this.props.page) {
      selectedClass = 'pure-menu-selected';
    }

    return (
      <li className={selectedClass}>
        <NavLink context={this.props.context}
                 routeName={this.props.page}
                 href={this.props.path}
        >{this.props.page}</NavLink>
      </li>
    );
  }
});

Menu = React.createClass({
  render: function () {
    var
      context = this.props.context
    , pages = this.props.pages
    , selected = this.props.selected
    , menuItems
    ;

    menuItems = Object.keys( pages ).map( function ( name, idx ) {
      if ( pages[name].menu ) {
        return <MenuItem context={context}
                         key={'menuitem-' + name + idx}
                         page={pages[name].page}
                         path={pages[name].path}
                         selected={selected}
               />;
      }
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
