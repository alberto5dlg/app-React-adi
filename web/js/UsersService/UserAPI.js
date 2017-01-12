
exports.getAllUsers = function() {
    return fetch('http://localhost:5000/api/usuarios')
        .then(function(response) {
            if (response.ok)
                return response.json()
        })
};