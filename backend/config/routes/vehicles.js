const fetch = require("node-fetch");

module.exports = [{
        method: 'GET',
        path: '/getVehiclesById',
        handler: (request, h) => {
            let params = request.query
            return fetch(`https://swapi.dev/api/vehicles/${params.id}/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    },
    {
        method: 'GET',
        path: '/getAllVehicles',
        handler: (request, h) => {
            return fetch(`https://swapi.dev/api/vehicles/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    }
];