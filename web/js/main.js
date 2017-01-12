var handlebars = require('handlebars');
var UsuarioTemplates = require('./templates/UserTemplates');
var HeaderTemplates = require('./templates/Header');
var UserAPI = require('./UsersService/UserAPI');
var nPag = 0;

var tmp_user = handlebars.compile(UsuarioTemplates.templateUsuario);
var tmpl_table = handlebars.compile(UsuarioTemplates.templateTabla);
var tmpl_header = handlebars.compile(HeaderTemplates.myNavBar);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("myNavBar").innerHTML = tmpl_header();
    cargarDatos()
});

function cargarDatos(){
    UserAPI.getAllUsers(nPag)
        .then(function (datos) {
            var listaHTML = tmpl_table(datos.data);
            document.getElementById("miComponente").innerHTML = listaHTML
        })
}

function borrarUsuario(userID) {
    var login = document.getElementById('borrar_'+userID).name;
    console.log(userID);
    console.log(login);
    UserAPI.deleteUser(login);
    document.getElementById('row_'+userID).outerHTML = '';
}

function nextPage(){
    nPag ++;
    cargarDatos();
}

function lastPage(){
    if(nPag > 0) {
        nPag--;
        cargarDatos();
    }
}

window.nextPage = nextPage;
window.lastPage = lastPage;
window.borrarUsuario = borrarUsuario;