const fetch = require("node-fetch");

module.exports = [{
        method: 'GET',
        path: '/getPlanetsById',
        handler: (request, h) => {
            let params = request.query
            return fetch(`https://swapi.dev/api/planets/${params.id}/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    },
    {
        method: 'GET',
        path: '/getAllPlanets',
        handler: (request, h) => {
            return fetch(`https://swapi.dev/api/planets/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    }
];