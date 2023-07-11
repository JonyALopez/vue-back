const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./dataBase/connectDB');

//middleware
app.use(express.json());
app.use(cors());
//settings
app.set('port', process.env.PORT || 5000);

app.use('/api/auth',require('./routes/auth'));

app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
});  