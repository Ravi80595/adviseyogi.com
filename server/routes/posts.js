import express from 'express'
import { allApprovedComments, allUnApprovedComments, ApproveComments, createPost, getUserPosts } from '../Controllers/posts.js';


const router = express.Router()

router.post("/addcomment",createPost)
router.get("/comments/:id",getUserPosts)
router.get("/allComments",allApprovedComments)
router.get("/unapprovedComments",allUnApprovedComments)
router.put("/approveComments",ApproveComments)

export default router;