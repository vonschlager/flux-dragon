'use strict';

module.exports = function ( context, payload, done ) {
  context.dispatch( 'INIT', {} );
  done();
};
