const fetch = require("node-fetch");

module.exports = [{
        method: 'GET',
        path: '/getSpeciesById',
        handler: (request, h) => {
            let params = request.query
            return fetch(`https://swapi.dev/api/species/${params.id}/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    },
    {
        method: 'GET',
        path: '/getAllSpecies',
        handler: (request, h) => {
            return fetch(`https://swapi.dev/api/species/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    }
];