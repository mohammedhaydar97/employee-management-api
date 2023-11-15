// app.get('/user', async (req, res) => {
//     try {
//         const users = await User.find(); 
//         res.json(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).send('Internal Server Error'); 
//     }
// });



// app.post('/user', async (req, res) => {
    
//     try {
//         const {
//             name,
//             lastName,
//             email,
//             bloodType,
//             occupation,
//             referredPerson
//         } = req.body; 

//         const newUser = new User({
//             name,
//             lastName,
//             email,
//             bloodType,
//             occupation,
//             referredPerson
//         });

//         const savedUser = await newUser.save();

//         res.status(201).json({
//             message: 'User created successfully',
//             user: savedUser
//         });

//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });


