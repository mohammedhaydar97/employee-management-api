const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000; 

app.use(express.json())

dotenv.config({ path: '.env' });

const userRoute = require('./routes/UserRoute');

app.use(userRoute);

mongoose.connect("mongodb+srv://admin:5550125@cluster0.c9ert.mongodb.net/employee-managemnet?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
