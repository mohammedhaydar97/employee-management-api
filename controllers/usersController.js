const userModel = require('../models/User');

class UserController {
  
  getAllUsers(req, res) {
    const users = userModel.find(); 
    res.render('index', { users }); 
  }


  async createUser(req, res) {
    try {
      const { name, lastName } = req.body;

      const newUser = new userModel({
        username,
        email,
      });

      await newUser.save();
      res.status(201)

    } catch (error) {
      console.error(error);
      res.status(500).send('Error adding user');
    }
  }


}

module.exports =  UserController;
