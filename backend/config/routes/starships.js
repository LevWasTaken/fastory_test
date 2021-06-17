const fetch = require("node-fetch");

module.exports = [{
        method: 'GET',
        path: '/getStarshipsById',
        handler: (request, h) => {
            let params = request.query
            return fetch(`https://swapi.dev/api/starships/${params.id}/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    },
    {
        method: 'GET',
        path: '/getAllStarships',
        handler: (request, h) => {
            return fetch(`https://swapi.dev/api/starships/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    }
];