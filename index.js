const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
const apiKey = '0npOC45HzaNFawD9nsZUEqsvXiUcqxckqrRJ0V1I';


app.get('/buscar/:fecha', async (req, res) => {
    try {
        const fecha = req.params.fecha;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fecha}`);
        
        if (response.ok) { // Verifica si la respuesta de la API fue exitosa
            const data = await response.json(); // Convierte la respuesta a JSON
            res.json(data); // Envía la respuesta JSON al cliente
        } else {
            console.error('Error al obtener la foto:', response.statusText);
            res.status(response.status).send('Error al obtener la foto de la NASA');
        }
    } catch (error) {
        console.error('Error al obtener la foto:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
