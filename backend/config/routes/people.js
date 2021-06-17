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
            let people = [];

            console.log("stp")
            return fetch(`https://swapi.dev/api/people/`)
                .then(res => res.json())
                .then(json => {
                    //console.log(json);
                    people = json
                    return json.count
                }).then(count => {
                    console.log(count)
                        // exclude the first request
                    const numberOfPagesLeft = Math.ceil((count - 1) / 10);
                    let promises = [];
                    // start at 2 as you already queried the first page
                    for (let i = 2; i <= numberOfPagesLeft; i++) {
                        promises.push(fetch(`https://swapi.dev/api/people?page=${i}`));
                    }
                    console.log(promises)
                    return Promise.all(promises)
                        .then(res => res.forEach(res => res.json()
                            .then(json => {
                                people += json
                                console.log(people)
                                return people
                            })))
                }).catch(error => console.log(error))
        }
    }
];