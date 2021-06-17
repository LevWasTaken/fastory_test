const fetch = require("node-fetch");

module.exports = [{
        method: 'GET',
        path: '/getPeopleById',
        handler: (request, h) => {
            let params = request.query
            console.log(params)
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
            return fetch(`https://swapi.dev/api/people/`)
                .then(res => res.json())
                .then(people => {
                    // exclude the first request
                    const numberOfPagesLeft = Math.ceil((people.count - 1) / 10);
                    const promises = [];

                    // start at 2 as you already queried the first page
                    for (let i = 2; i <= numberOfPagesLeft; i++) {
                        promises.push(fetch(`https://swapi.dev/api/people?page=${i}`));
                    }

                    return Promise.all(promises)
                        .then(res => Promise.all(res.map(res => res.json())))
                }).catch(error => console.log(error))
        }
    }

];