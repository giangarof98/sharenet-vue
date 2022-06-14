const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/vuenet';

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => console.log('connected with mongodb'))
    .catch((error) => console.error(error))

const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error:"))
db.once('open', () => {
    console.log('Database connected')
});