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
            console.log("stp")
            return fetch(`https://swapi.dev/api/people/`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    return json
                });
        }
    }
];