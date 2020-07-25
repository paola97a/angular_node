
const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const cors = require('cors')

const { mysql } = require('./dbconection')

// configuración

app.set('port', process.env.PORT || 3000);


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'})); //modulo cors: de comunicacion 

//routes

app.use(require('./routes/libreria'));

//serevidor
app.listen(app.get('port'), () => {
    console.log('servidor en ', app.get('port'));

});


