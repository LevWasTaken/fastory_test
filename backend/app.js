'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./config/routes');
const auth = require('./config/routes/auth');
const people = require('./config/routes/people');
const planets = require('./config/routes/planets');
const species = require('./config/routes/species');
const starships = require('./config/routes/starships');
const vehicles = require('./config/routes/vehicles');

const users = {
    Luke: {
        username: 'Luke',
        password: 'DadSucks',
        id: 0,
        name: 'Luke Skywalker'
    }
}

module.exports = [].concat(people, planets, species, starships, vehicles, auth);

const init = async() => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        routes: {
            cors: true
        }

    });
    await server.register([{ plugin: require('@hapi/cookie') }])

    server.auth.strategy('login', 'cookie', {
        cookie: {
            name: 'session',
            password: ';RtU8S9.v?5pS.gPeb#tNd2.3sD]8w"k',
            isSecure: false
        },
        validateFunc: async(request, session) => {
            if(session.username === 'Luke' && session.password === 'dadSucks') {
                return {valid : true}
            }
            else {
                return {valid : true}
            }
        }
    })
    server.auth.default('login')
    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();