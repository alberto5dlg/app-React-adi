var handlebars = require('handlebars');
var UsuarioTemplates = require('./templates/UserTemplates');
var UserAPI = require('./UsersService/UserAPI');

var tmp_user = handlebars.compile(UsuarioTemplates.templateUsuario);
var tmpl_table = handlebars.compile(UsuarioTemplates.templateTabla);


document.addEventListener('DOMContentLoaded', function(){
    console.log("Página cargada!" +  new Date().toLocaleString());
    UserAPI.getAllUsers()
        .then(function(datos) {
            var listaHTML = tmpl_table(datos.data);
            document.getElementById("miComponente").innerHTML = listaHTML
        })
});