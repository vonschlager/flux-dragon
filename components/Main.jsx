'use strict';

var
  React = require( 'react' )
, Menu = require( './Menu.jsx' )
, Content = require( './Content.jsx' )
, MenuStore = require( '../stores/MenuStore' )
, StoreMixin = require( 'fluxible-app').StoreMixin
, RouterMixin = require( 'flux-router-component').RouterMixin
, Main
;

Main = React.createClass({
  mixins: [ RouterMixin, StoreMixin ]
, statics: {
    storeListeners: [ MenuStore ]
  }
, getInitialState: function () {
    return this.getStore( MenuStore ).getState();
  }
, onChange: function () {
      var state;

      state = this.getStore( MenuStore ).getState();

      this.setState( state );
  }
, render: function () {
    var
      pages = this.state.pages || {}
    , selected = this.state.page || ''
    ;

    return (
      <div>
        <Menu context={this.props.context} selected={selected} pages={pages} />
        <Content />
      </div>
    );
  }
});

module.exports = Main;
