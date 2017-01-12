var auth = require('../../../utils/auth');

exports.getAllUsers = function(nPag) {
    return fetch('http://localhost:5000/api/usuarios/pag/' + nPag)
        .then(function(response) {
            if (response.ok){
                return response.json();
            }
        })
};

exports.deleteUser = function(login){
    return fetch('http://localhost:5000/api/usuarios/'+ login, {
        method:'DELETE',
        headers:{
            'Authorization':'Basic '+ auth.loginPassTob64(localStorage.username, localStorage.password)
        }
    }).then(function (response) {

    })
};

exports.editUser = function(login,nombre,apellidos,email){
    fetch('http://localhost:5000/api/noticias/'+id, {
        method:'PUT',
        headers:{
            'Authorization':'Basic '+ auth.loginPassTob64(localStorage.username, localStorage.password),
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            "nombre":nombre,
            "apellidos":apellidos,
            "login":login,
            "email":email
        })
    }).then(function (response) {
        if(response.ok) {
        }
    })
};

