const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());


app.get('/servidor/:fecha', async (req, res) => {
    try {
        const fecha = req.params.fecha;
        const response = await axios.get(`http://localhost:4000/buscar/${fecha}`); // Utiliza axios para hacer la solicitud HTTP
        
        res.json(response.data); // Envía la respuesta JSON al cliente
    } catch (error) {
        console.error('Error al obtener la foto:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
