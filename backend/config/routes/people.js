const fetch = require("node-fetch");

const cache = {}

module.exports = [{
        method: 'GET',
        path: '/getPeopleById',
        handler: (request, h) => {
            let params = request.query
            return fetch(`https://swapi.dev/api/people/${params.id}/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    },
    {
        method: 'GET',
        path: '/getAllPeople',
        handler: (request, h) => {
            if (!cache.allPeople) {
                cache.allPeople = fetch(`https://swapi.dev/api/people/`)
                    .then(res => res.json())
                    .then(people => {
                        const numberOfPagesLeft = Math.ceil((people.count - 1) / 10);
                        const promises = [];
                        for (let i = 1; i <= numberOfPagesLeft; i++) {
                            console.log("i", i)
                            promises.push(fetch(`https://swapi.dev/api/people?page=${i}`));
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