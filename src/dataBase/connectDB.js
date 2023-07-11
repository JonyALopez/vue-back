const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log('Conexion correcta BD'))
    .catch((err) => console.log(`ERROR to connect : ${err.message}`));

    module.exports = mongoose;

