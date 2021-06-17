const people = require('./people');
const planets = require('./planets');
const species = require('./species');
const starships = require('./starships');
const vehicles = require('./vehicles');

module.exports = [].concat(people, planets, species, starships, vehicles);