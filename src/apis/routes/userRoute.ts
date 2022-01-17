import express from "express";
import UserController from "../controllers/userController";

const router = express.Router()
const userService = new UserController()

router.post('/signup', userService.signup)
router.post('/signin', userService.signin)
router.get('/activate-account/:email/:token', userService.activeAccount)

export default router;