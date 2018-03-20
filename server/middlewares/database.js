'use strict'

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'db',
        charset: 'utf8_general_ci',
        user: 'root',
        password: '@dmin'
    }
});

module.exports = app;