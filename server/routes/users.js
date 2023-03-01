import express from 'express'
import { AllUser, register, searchUser } from '../Controllers/User.js';



const router = express.Router()

router.post("/register",register)
router.get("/search/:id",searchUser)
router.get("/allUser",AllUser)


export default router;