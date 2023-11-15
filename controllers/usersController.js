const userModel = require('../models/User');

class UserController {


  async getAllUsers (req, res) {
    try {
        const users = await userModel.find(); 
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error'); 
    }
};


async findUserById(req, res) {
  try {
      const userId = req.params.id; 

      const user = await userModel.findById(userId);

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.json({ user });
  } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).send('Internal Server Error');
  }
}


  async createUser(req, res) {
     try {
        const {
            name,
            lastName,
            email,
            bloodType,
            occupation,
            referredPerson
        } = req.body; 

        const newUser = new userModel({
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
  }


      async deleteUser(req, res) {
        try {

            const userId = req.params.id;
            console.log(userId);
            const deletedUser = await userModel.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json({ message: 'User deleted successfully', user: deletedUser });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).send('Internal Server Error');
        }
    }




}

module.exports = new UserController(); 
