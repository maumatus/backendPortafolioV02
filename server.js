//Importamos todas las funcionalidades de app. Capa logica negocios
const app = require('../backend-portaf02/app');
const port = 3000;


//Aquí desarrollaremos capa controlador
//EJS
app.get('/', (req, res) => {
  res.send("Comienzo desarrollo backend portafolio")
  //Nos falta decidir y mostrar que interface por defecto presenta
});


//Aquí desarrollaremos las peticiones de subscripción y contacto de cleinte
//Base de datos simple, un CRUD
app.post('/clientes', (req, res) => {
  res.send('Recibi petición POST')
  //Nos falta cargar y manejar parametros
});


//Por mientras desarrollaremos aqui la opcion de borrar post
//pero es mejor crear un dashboard de administración y separar este modulo
app.delete('/user', (req, res) => {
  res.send('Petición DELETE a ruta /usuario')
});

//Ejecutamos el puerto de escucha
app.listen(port, ()=> {
  console.log(`Ejecutando server en http://localhost:${port}`)
});

