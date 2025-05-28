const express = require('express');
const app = express();

// El puerto en el que la aplicación escuchará.
// La variable de entorno PORT es proporcionada por App Hosting.
const port = process.env.PORT || 8080;

// Definimos una ruta para la URL raíz ('/')
app.get('/', (req, res) => {
  // Esta es una respuesta similar a la de tu función helloWorld original
  console.log('¡Hola logs! Se recibió una solicitud.'); 
  res.send('¡Hola desde Firebase, servido por App Hosting!');
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
  console.log('Presiona Ctrl+C para salir si se ejecuta localmente.');
});