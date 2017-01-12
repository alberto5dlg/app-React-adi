
var templateUsuario = `
<tr>
    <td>{{login}}</td>
    <td>{{nombre}}</td>
    <td>{{apellidos}}</td>
    <td>{{email}}</td>
    <td>
            <a class="badge glyphicon glyphicon-eye-open"> </a>
            <a class="badge glyphicon glyphicon-trash"> </a>
            <a class="badge glyphicon glyphicon-edit"> </a>
    </td>
</tr>`;

var templateTabla = `
<div class="container">
    <h2 class="text-center">Listado de Usuarios</h2>
    <hr />
    <div class="jumbotron">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th>Login</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th>Opciones</th>
            </tr>
            </thead>
            <tbody>
                {{#.}}
                   ${templateUsuario}
                {{/.}}
            </tbody>
        </table>
        <a class="col-md-4 text-left">Anterior</a>
        <button class="col-md-4 btn btn-primary">Añadir Usuario</button>
        <a class="col-md-4 text-right ">Siguiente</a>
    </div>
</div>
        `;

exports.templateUsuario = templateUsuario;
exports.templateTabla = templateTabla;
