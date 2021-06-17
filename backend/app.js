'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./config/routes');
const people = require('./config/routes/people');
const planets = require('./config/routes/planets');
const species = require('./config/routes/species');
const starships = require('./config/routes/starships');
const vehicles = require('./config/routes/vehicles');


module.exports = [].concat(people, planets, species, starships, vehicles);

const init = async() => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        routes: {
            cors: true
        }
    
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();