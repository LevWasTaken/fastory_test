const fetch = require("node-fetch");

const cache = {}

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
            if (!cache.allPeople) {
                cache.allPeople = fetch(`https://swapi.dev/api/species/`)
                    .then(res => res.json())
                    .then(species => {
                        const numberOfPagesLeft = Math.ceil((species.count - 1) / 10);
                        const promises = [];
                        for (let i = 2; i <= numberOfPagesLeft; i++) {
                            promises.push(fetch(`https://swapi.dev/api/species?page=${i}`));
                        }
                        return Promise.all(promises)
                            .then(res => Promise.all(res.map(res => res.json())))
                    }).catch(error => console.log(error))
                return cache.allPeople
            } else {
                console.log("caché")
            }
            console.log(cache.allPeople)
            return cache.allPeople
        }
    }
];