import express from 'express'
import { allApprovedComments, Allmails, allUnApprovedComments, ApproveComments, createPost, EditComments, getUserPosts, likePost } from '../Controllers/posts.js';
import { Mailer } from '../Utils/Mailer.js';


const router = express.Router()


router.post("/addcomment",createPost)
router.get("/comments/:id",getUserPosts)
router.get("/allComments",allApprovedComments)
router.get("/unapprovedComments",allUnApprovedComments)
router.put("/approveComments",ApproveComments)
router.patch("/like/:id",likePost)
router.patch("/addEmail",Allmails)
router.patch("/editComment/:id",EditComments)

export default router;