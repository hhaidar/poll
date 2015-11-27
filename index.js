'use strict';

var Hapi = require('hapi'),
    Joi = require('joi'),
    Vision = require('vision'),
    HapiReactViews = require('hapi-react-views'),
    Sequelize = require('sequelize'),
    path = require('path');

var server = new Hapi.Server();

var sequelize = new Sequelize(null, null, null, {
    dialect: 'sqlite',
    storage: 'store.db'
});

var Question = sequelize.define('question', {
    title: {
        type: Sequelize.STRING,
        require: true
    },
    description: {
        type: Sequelize.STRING
    }
});

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

server.route({
    method: 'POST',
    path: '/questions/new',
    config: {
        validate: {
            payload: {
                title: Joi.string().required(),
                description: Joi.string()
            }
        }
    },
    handler: function(request, reply) {
        sequelize.sync().then(function() {
            return Question.create({
                title: request.payload.title,
                description: request.payload.description
            }).then(function(question) {
                reply(question.get({
                    plain: true
                }));
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
