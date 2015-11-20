'use strict';

var Hapi = require('hapi'),
    Vision = require('vision'),
    HapiReactViews = require('hapi-react-views'),
    path = require('path');

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
        path: 'components'
    });
});

server.route({
    method: 'GET',
    path: '/assets/client.js',
    handler: {
        file: path.join(__dirname, './assets/client.js')
    }
});

server.route({
    method: 'GET',
    path: '/', 
    handler: function(request, reply) {

        var state = {};

        // Kind of shitty solution haha
        GLOBAL.navigator = {
            userAgent: request.headers['user-agent']
        }

        server.render('app', state, {
            runtimeOptions: {
                renderMethod: 'renderToString'
            }
        }, function(err, output) {
            if (err) {
                throw err;
            }
            var context = {
                remount: output,
                state: 'window.state = ' + JSON.stringify(state) + ';'
            };
            server.render('html', context, function(err, html) {
                if (err) {
                    throw err;
                }
                reply(html);
            });
        });

    }
});

server.start(function(err) {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});