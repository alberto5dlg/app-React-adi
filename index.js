var express = require("express");
var bodyParser = require("body-parser");
var db = require('./db');
var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

var app = express();
app.use(bodyParser.json());
module.exports = app;

var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//Declaracion de variables segun la ruta
var usuario = require('./routes/usuario');
var noticia = require('./routes/noticia');
var comentario = require('./routes/comentario');

//Rutas de los metodos, segun clase
app.use('/api/comentarios', comentario);
app.use('/api/usuarios', usuario);
app.use('/api/noticias', noticia);


//Ruta para mostrar la documentacion del API
app.use('/api/documentation', express.static('documentation/api'));
//Ruta Generica del Servidor
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'src/views/index.html'));
});

//Conexion
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Aplicacion Node.js ejecutandose en el puerto: '+ app.get('port'));
});

//Conectamos con la Base de Datos
db.start();










