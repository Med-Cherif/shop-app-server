import express from "express";
import UserController from "../controllers/userController";
import { testRefreshToken } from "../middlewares/private"

const router = express.Router()
const userService = new UserController()

router.post('/signup', userService.signup)
router.post('/signin', userService.signin)
router.get('/signout/:userId', userService.signout)
router.get('/activate-account/:email/:token', userService.activeAccount)
router.get('/resend-activate-link/:email', userService.resendActivateAccountLink)
router.post('/access-token', testRefreshToken, userService.createNewAccessToken)

export default router;
