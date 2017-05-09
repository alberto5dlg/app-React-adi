# App Web React, Practica 2 ADI 

Este App Web esta diseñada para la segunda práctica de ADI(Aplicaciones Distribuidas en Internet) de la Universidad de Alicante en el Grado en Ingeniería Informática.

Se han implementado una serie de componentes con el framework React, los cuales se explicarán mas adelante, para la navegación entre los distintos componentes nos hemos apoyado en el paquete *react-router* y hemos usado *Webpack* como *module bundler*.

También se ha implementado una segunda parte con el framework de tamplates de Handlebars, para esta parte hemos creado un listado con los Usuarios.

Todo el codigo esta alojado en GitHub en el siguiente repositorio: [App Web React] (https://github.com/alberto5dlg/ap-React-adi) 

## Puesta en funcionamiento del servidor
Para poner en funcionamiento el servidor, en primer lugar tendremos que descargar todas las dependencias del mismo para ello las descargaremos con el siguiente comando: 
	
	$ npm install
	
Una vez instaladas todas las dependencias, ejecutaremos el servidor mediante el siguiente comando: 

	$ node index.js 
	
Con esto tendríamos el servidor en marcha en [http://localhost:5000](http://localhost:5000), en este servidor estaría funcionando tanto el API Rest de la práctica 1 como la Aplicación Web Cliente que se requiere para esta práctica. 

### Modo Desarrollo 
Si queremos desplegar el servidor en modo desarrollo para poder hacer cambios e ir observando sin tener que parar y arrancar el servidor tendremos que ejecutar los siguientes comandos: 

	$ nodemon index.js 
	
Para que arranque el servidor node.js con el API Rest y los componentes React, y para que las plantillas Handlebars se reconozcan los cambios tendremos que ejecutar el siguiente comando: 

	$ npm run watch
	
Este comando ejecutara un script para recompilar el archivo bundle.js que contiene todo el codigo javascript traducido para que pueda ser procesador por el compilador del navegador. 

## Componentes React

El codigo desarrollado en para los componentes React se encuentra en la carpeta ***/src*** del proyecto.

- **/login ->** Componente que comprueba el login y password del usuario y desbloquea las funcionalidades de añadir, borrar o editar noticias, como estamos en una fase de desarrollo solamente se ha implementado el siguiente usuario: 

	`Login: admin`
	`Password: 123456`
- **/noticias ->** Listado de todas las noticias dividida por paginacion como en el API, desde aqui estando registrado el usuario puede borrar o editar una noticia. Para ver el listado y los detalles de una noticia no es necesario estar registrado.

- **/noticias/nueva ->** En esta pagina se podrá agregar una nueva noticia, solo es posible si el usuario esta registrado. 

- **/noticias/:id ->** En esta se verán los detalles de una noticia seleccionada en el listado.

- **/noticias/editar/:id ->** Desde aqui editaremos los detalles de una noticia es necesario estar registrado como admin para poder hacer esto. 

- **/* ->** El resto de paginas que no son las nombradas anteriormente ni la de componente handlebar, cada vez que te metas te redireccionará a una de Error 404 Not Found.

## APIs nativo del navegador

Para esta parte nos hemos apollado en el framework de templates de Handlebars. El código desarrollado para esta parte se encuentra dentro de la carpeta ***/web*** del proyecto 

- **/usuarios ->** Se muestra un listado de Usuarios desde el cual se pueden editar y borrar dichos usuarios.
	


## Requisitos "Adicionales" implementados

- **Estilo visual de la Web:** Se ha implementado esta parte adicional de la practica con el framework CSS de Bootstrap, el cual se carga en el index.html al iniciar la Web. Se ha implementado este requisito para dotar al sitio de un aspecto mas amigable con el usuario. 
