var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: 		{type: String},
	apellidos: 		{type: String},
	email: 			{type: String},
	login: 			{type: String},
	comentariosID:	[Number],
	userID:			{type: Number}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);