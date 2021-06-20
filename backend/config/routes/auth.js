module.exports = [{
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            if(request.payload.username === 'Luke' && request.payload.password === 'dadSucks') {
                return 'may the force be with you'
            }
            else {
                return 'nope'
            }
        }
        
    }
];