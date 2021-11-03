const router = require("express").Router()
const Post = require("../models/Post")

//Create new post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
