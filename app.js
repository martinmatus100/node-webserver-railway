const express = require("express");
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set( 'view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

/// Servir contenido estatico

app.use( express.static('public') );

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Martin Matus',
        titulo: 'Node webserver'
    });
});

app.get("/generic", (req, res) => {
    res.render('generic', {
        nombre: 'Martin Matus',
        titulo: 'Node webserver'
    });
});

app.get("/elements", (req, res) => {
    res.render('elements', {
        nombre: 'Martin Matus',
        titulo: 'Node webserver'
    });
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
