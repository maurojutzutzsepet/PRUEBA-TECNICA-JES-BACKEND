const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI :'mongodb+srv://mauro:mauro123@cluster0-juqxa.mongodb.net/test?retryWrites=true&w=majority'; 

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
});

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log(' DB is connected ')
});