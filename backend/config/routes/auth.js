module.exports = [{
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            if(request.payload.username === 'Luke' && request.payload.password === 'dadSucks') {
                request.cookieAuth.set({username : request.payload.username, password: request.payload.password})
                return 'may the force be with you'
            }
            else {
                return 'nope'
            }
        },
        options : {
            auth: {
            mode: 'try'
            }
        }
    }
];