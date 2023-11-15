const express= require("express")
const userRouter = express.Router()
const UserController = require("../controllers/usersController")


userRouter.get('/user',UserController.getAllUsers)
userRouter.get('/user/:id',UserController.findUserById)
userRouter.post('/user',UserController.createUser)
userRouter.delete('/user/:id',UserController.deleteUser)


module.exports = userRouter