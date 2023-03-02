import express from 'express'
import { allApprovedComments, allUnApprovedComments, ApproveComments, createPost, getUserPosts, likePost } from '../Controllers/posts.js';


const router = express.Router()


router.post("/addcomment",createPost)
router.get("/comments/:id",getUserPosts)
router.get("/allComments",allApprovedComments)
router.get("/unapprovedComments",allUnApprovedComments)
router.put("/approveComments",ApproveComments)
router.patch("/like/:id",likePost)

export default router;