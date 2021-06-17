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
                .then(vehicles => {
                    // exclude the first request
                    const numberOfPagesLeft = Math.ceil((vehicles.count - 1) / 10);
                    const promises = [];

                    // start at 2 as you already queried the first page
                    for (let i = 2; i <= numberOfPagesLeft; i++) {
                        promises.push(fetch(`https://swapi.dev/api/vehicles?page=${i}`));
                    }

                    return Promise.all(promises)
                        .then(res => Promise.all(res.map(res => res.json())))
                }).catch(error => console.log(error))
        }
    }
];