const fetch = require("node-fetch");

const cache = {}

module.exports = [{
        method: 'GET',
        path: '/getStarshipsById',
        handler: (request, h) => {
            let params = request.query
            return fetch(`https://swapi.dev/api/starships/${params.id}/`)
                .then(res => res.json())
                .then(json => {
                    return json
                });
        }
    },
    {
        method: 'GET',
        path: '/getAllStarships',
        handler: (request, h) => {
            if (!cache.allPeople) {
                cache.allPeople = fetch(`https://swapi.dev/api/starships/`)
                    .then(res => res.json())
                    .then(starships => {
                        const numberOfPagesLeft = Math.ceil((starships.count - 1) / 10);
                        const promises = [];
                        for (let i = 1; i <= numberOfPagesLeft; i++) {
                            promises.push(fetch(`https://swapi.dev/api/starships?page=${i}`));
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