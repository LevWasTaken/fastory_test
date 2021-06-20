const fetch = require("node-fetch");

const cache = {}

module.exports = [{
        method: 'GET',
        path: '/getPlanetsById',
        handler: (request, h) => {
            let params = request.query
            return fetch(`https://swapi.dev/api/planets/${params.id}/`)
                .then(res => res.json())
                .then(json => {
                    return json
                });
        }
    },
    {
        method: 'GET',
        path: '/getAllPlanets',
        handler: (request, h) => {
            if (!cache.allPeople) {
                cache.allPeople = fetch(`https://swapi.dev/api/planets/`)
                    .then(res => res.json())
                    .then(planets => {
                        const numberOfPagesLeft = Math.ceil((planets.count - 1) / 10);
                        const promises = [];
                        for (let i = 1; i <= numberOfPagesLeft; i++) {
                            promises.push(fetch(`https://swapi.dev/api/planets?page=${i}`));
                        }
                        return Promise.all(promises)
                            .then(res => Promise.all(res.map(res => res.json())))
                    }).catch(error => console.log(error))
            } else {
                console.log("caché")
            }
            return cache.allPeople
        }
    }
];