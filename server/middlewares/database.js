'use strict'

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'db',
        charset: 'utf8_general_ci',
        user: 'root',
        password: 'admin'
    }
});

module.exports = function(req,res,next){
    req.knex = knex
    next()
}

module.exports.knex = knex