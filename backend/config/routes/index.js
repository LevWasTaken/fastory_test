const people = require('./people');
const planets = require('./planets');
const species = require('./species');
const starships = require('./starships');
const vehicles = require('./vehicles');
const films = require('./films');
const auth = require('./auth');

module.exports = [].concat(people, planets, species, starships, vehicles, films, auth);