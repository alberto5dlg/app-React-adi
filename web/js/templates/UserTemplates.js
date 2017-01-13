

var templateUsuario = `
<tr id="row_{{userID}}">
    <td>{{login}}</td>
    <td>{{nombre}}</td>
    <td>{{apellidos}}</td>
    <td>{{email}}</td>
    <td>
            <a  class="badge glyphicon glyphicon-eye-open"> </a>
            <a id="borrar_{{userID}}" name={{login}} href="javascript:borrarUsuario({{userID}})" class="badge glyphicon glyphicon-trash"> </a>
            <a id="editar_{{userID}}" name={{login}} href="javascript:editarUsuario({{userID}})" class="badge glyphicon glyphicon-edit"> </a>
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
        <a href="javascript:lastPage()" class="col-md-4 text-left">Anterior</a>
        <button class="col-md-4 btn btn-primary">Añadir Usuario</button>
        <a href="javascript:nextPage()" class="col-md-4 text-right ">Siguiente</a>
    </div>
</div>
        `;

var editForm = `
<div class="container">
    <h2 class="text-center">Editar Usuario</h2>
    <hr />

    <div class="col-md-2"></div>

    <div class=" row col-md-8 jumbotron ">

        <label class="control-label">Nombre:</label>
        <input class="form-control focus" type="text"
               id="nombre" value={{nombre}} />
        
        <label class="control-label">Apellidos:</label>
        <input class="form-control focus" type="text"
               id="apellidos" value={{apellidos}} />
               
        <label class="control-label">Email:</label>
        <input class="form-control focus" type="text"
               id="email" value={{email}} />
               
        <label class="control-label">Login:</label>
        <input class="form-control focus" type="text" id="login" value={{login}} />

        <h6></h6>

        <div class="form-group text-center">
            <button class="btn btn-primary" id="boton" type="submit" onclick="javascript:modifyUser({{userID}})">
                Actualizar
            </button>
        </div>
        <input type="hidden" id="oldLogin" value="{{login}}">

    </div>
</div>
`

exports.templateUsuario = templateUsuario;
exports.templateTabla = templateTabla;
exports.editForm = editForm;