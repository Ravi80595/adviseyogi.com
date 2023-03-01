import express from 'express'
import { register, searchUser } from '../Controllers/User.js';



const router = express.Router()

router.post("/register",register)
router.get("/search/:id",searchUser)


export default router;