const express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = express();

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTUxYzgzZjFmYzk0NzJhOTc5NDkwMzk1YWQwMDliOSIsInN1YiI6IjYxYjBiZjFhNTgwMGM0MDAxOTk5MDc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWoFujYMIHvXqRvaWZ - y4uNamg8haMKxcMxDzMLawuk"

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

app.use(cors())

app.get("/", async (req, res) => {
    try {

        let datos = await axios.get('https://api.themoviedb.org/3/search/company?api_key=0551c83f1fc9472a979490395ad009b9&query=matrix&page=1', config)
        let pelicula = await datos.data
        res.send(pelicula)
    }
    catch (err) {
        res.send("<h1>hubo un error<h1/>")
    }

})


app.listen(3001, () => {
    console.log("servidor corriendo en puerto 3001")
})