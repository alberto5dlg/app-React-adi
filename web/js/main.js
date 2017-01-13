var handlebars = require('handlebars');
var UsuarioTemplates = require('./templates/UserTemplates');
var HeaderTemplates = require('./templates/Header');
var UserAPI = require('./UsersService/UserAPI');
var nPag = 0;

var tmp_user = handlebars.compile(UsuarioTemplates.templateUsuario);
var tmpl_table = handlebars.compile(UsuarioTemplates.templateTabla);
var tmpl_header = handlebars.compile(HeaderTemplates.myNavBar);
var tmpl_editUser = handlebars.compile(UsuarioTemplates.editForm);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("myNavBar").innerHTML = tmpl_header();
    cargarDatos()
});

function cargarDatos(){
    UserAPI.getAllUsers(nPag)
        .then(function (datos) {
            var listaHTML = tmpl_table(datos.data);
            document.getElementById("miComponente").innerHTML = listaHTML;
        })
}

function borrarUsuario(userID) {
    var login = document.getElementById('borrar_'+userID).name;
    UserAPI.deleteUser(login);
    location.reload();
}

function editarUsuario(userID) {
    var login = document.getElementById('editar_'+userID).name;
    UserAPI.getByLogin(login)
        .then(function(datos) {
            console.log(datos.usuario.apellidos);
            var editHTML = tmpl_editUser(datos.usuario);
            document.getElementById("miComponente").innerHTML = editHTML;
        })
}

function modifyUser(userID){
    var oldLogin = document.getElementById('oldLogin').value;
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var login = document.getElementById('login').value;
    var email = document.getElementById('email').value;
    UserAPI.editUser(oldLogin,login,nombre,apellidos,email);
    location.reload();
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

window.modifyUser = modifyUser;
window.editarUsuario = editarUsuario;
window.nextPage = nextPage;
window.lastPage = lastPage;
window.borrarUsuario = borrarUsuario;