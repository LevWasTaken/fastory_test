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
                .then(starships => {
                    // exclude the first request
                    const numberOfPagesLeft = Math.ceil((starships.count - 1) / 10);
                    const promises = [];

                    // start at 2 as you already queried the first page
                    for (let i = 2; i <= numberOfPagesLeft; i++) {
                        promises.push(fetch(`https://swapi.dev/api/starships?page=${i}`));
                    }

                    return Promise.all(promises)
                        .then(res => Promise.all(res.map(res => res.json())))
                }).catch(error => console.log(error))
        }
    }
];