const express = require ('express');
const path = require ('path');

const app = express ();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.set('port', process.env.PORT || 3030)

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});