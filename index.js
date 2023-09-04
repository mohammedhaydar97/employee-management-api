const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000; 

app.use(express.json())

dotenv.config({ path: '.env' });


const User = require('./models/User');
const userRoute = require('./routes/UserRoute');

app.use(userRoute);

mongoose.connect("mongodb+srv://admin:5550125@cluster0.c9ert.mongodb.net/employee-managemnet?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// app.get('/user', async (req, res) => {
//     try {
//         const users = await User.find(); 
//         res.json(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).send('Internal Server Error'); 
//     }
// });



app.post('/user', async (req, res) => {
    
    try {
        const {
            name,
            lastName,
            email,
            bloodType,
            occupation,
            referredPerson
        } = req.body; 

        const newUser = new User({
            name,
            lastName,
            email,
            bloodType,
            occupation,
            referredPerson
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'User created successfully',
            user: savedUser
        });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
