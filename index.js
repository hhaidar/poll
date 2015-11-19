'use strict';

var Hapi = require('hapi'),
    Vision = require('vision'),
    HapiReactViews = require('hapi-react-views');

var server = new Hapi.Server();

require('babel-core/register')({
    presets: ['react', 'es2015']
});

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.register(require('inert'), function (err) {
    if (err) {
        throw err;
    }
});

server.register(Vision, function (err) {
    if (err) {
        throw err;
    }
    server.views({
        engines: {
            jsx: HapiReactViews
        },
        relativeTo: __dirname,
        path: 'views'
    });
});

server.route({
    method: 'GET',
    path: '/', 
    handler: function(request, reply) {
        reply.view('index');
    }
});

server.start(function(err) {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});