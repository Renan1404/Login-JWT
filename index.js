const express = require( 'express' );
const mongoose = require( 'mongoose' );
const cors = require( 'cors' );

const app = express();


app.use(cors);
app.use(express.json());     




mongoose
.connect('mongodb://127.0.0.1:27017/authentication')
.then(() => console.log('MongoDB Connected...'))
.catch((error) => console.log('Failed to connect to MongoDB:', error));




const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`App is running on ${PORT}`);
});



