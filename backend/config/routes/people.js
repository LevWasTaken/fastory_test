const fetch = require("node-fetch");

const cacheTime = 10000;
const cache = {}
let cacheTimer = 0

const getCacheTimer = time => {
    const now = new Date().getTime()
    if (cacheTimer < now + time) {
        cacheTimer = now + time
    }
    return cacheTimer
}


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
        handler: (request, h, time = cacheTime) => {
            const now = new Date().getTime()
            console.log("ca marche?")
            if(!cache.allPeople || cache.allPeople.cacheTimer < now) {
                console.log("non caché")
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
                cache.allPeople.cacheTimer = getCacheTimer(time)
            }
            console.log(cache.allPeople)
            return cache.allPeople
        }
    }

];