'use strict';
const Bcrypt = require('bcrypt');
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

const validate = async(request, username, password, h) => {
    let isValid = false
    if (username === 'help') {
        return { response: h.redirect('https://hapijs.com/help') }; // custom response
    }

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }
    if (username === 'Luke' && password === 'dadSucks') {
        isValid = true
    }
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};


module.exports = [].concat(people, planets, species, starships, vehicles, auth);

const init = async() => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        routes: {
            cors: true
        }

    });

    await server.register([{ plugin: require('@hapi/basic') }])

    server.auth.strategy('login', 'basic', { validate });
    server.auth.default('login');
    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();