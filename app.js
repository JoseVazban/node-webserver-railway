const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jose',
        titulo: 'Curso de Node',
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Jose',
        titulo: 'Curso de Node',
    });
})

app.get('/elements', function (req, res) {
    res.render('generic', {
        nombre: 'Jose',
        titulo: 'Curso de Node',
    });
})

// app.get('/', function (req, res) {
//   res.send('Home Page')
// })

// app.get('/generic', function (req, res) {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', function (req, res) {
//     res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('/hola-mundo', function (req, res) {
//     res.send('Hello World')
// })

app.get('*', function (req, res) {
    res.send('404 | Page Not Found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})