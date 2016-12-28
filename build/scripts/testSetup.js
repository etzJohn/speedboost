// no transpile, use CommonJS/es5
require('babel-register')();

// disable webpack feature, Mocha does not understand
require.extensions['.css'] = function() {};
