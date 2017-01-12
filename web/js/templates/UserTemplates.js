
var templateUsuario = `
<tr>
    <td id={{login}}> </td>
    <td id={{nombre}}> </td>
    <td id={{apellidos}}> </td>
    <td id={{email}}> </td>
    <td>
            <a className="badge glyphicon glyphicon-eye-open" > </a>
            <a className="badge glyphicon glyphicon-trash" onClick={this.removeNews}> </a>
            <a className="badge glyphicon glyphicon-edit"> </a>
    </td>
</tr>`;

var templateTabla = `
<table className="table table-bordered table-hover">
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
</table>`

var templateContenedor = `
<div className="container">
    <h2 className="text-center">Listado de Usuarios</h2>
    <hr />
    <div className="jumbotron">
        {{#.}}
           ${templateTabla}
        {{/.}}
        <a className="col-md-4 text-left">Anterior</a>
        <button className="col-md-4 btn btn-primary">Añadir Usuario</button>
        <a className="col-md-4 text-right ">Siguiente</a>
    </div>
</div>`

exports.templateUsuario = templateUsuario;
exports.templateTabla = templateTabla;
exports.templateContenedor = templateContenedor;
