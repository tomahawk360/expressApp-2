const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//db connection
const username = "pasajero";
const password = "q1w2e3r4";
const url = `mongodb://${username}:${password}@ac-eud9deb-shard-00-00.rvjlwzm.mongodb.net:27017,ac-eud9deb-shard-00-01.rvjlwzm.mongodb.net:27017,ac-eud9deb-shard-00-02.rvjlwzm.mongodb.net:27017/?ssl=true&replicaSet=atlas-ymfgu4-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose
    .connect(url)
    .then(() => console.log('Conectado a db'));

//cors
app.use(cors());

//routes
const loginRouter = require('./routes/login');

//uses
app.use('/login', loginRouter);

//listener
const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));

