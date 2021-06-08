// 1. Incluir recursos necesarios (librerías globales y rutas)
const express = require('express');
const homeRoutes = require('./routes/home.routes');


// 2. Crear la aplicación
const app = express();
app.set('view engine', 'pug');
app.set('views', './src/views')


// 3. Configurar los RequestHandler
app.use(function(req, res, next){
  console.log('Estas solicitando datos de Express.Js');
  next();
});

app.use(homeRoutes);


// 4. Escucar un puerto
app.listen(3000, function(){
  console.log('Servidor ejecutandos en http://localhost:3000')
});