const express= require("express")
const userRouter =  express.Router
const UserController = require("../controllers/usersController")


userRouter.get('/user',UserController.getAllUsers)


module.exports = userRouter