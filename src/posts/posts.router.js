
const postServices = require('./posts.services')

const router = require('express').Router()

router.get('/post' , postServices.getAllPost)

router.get('/post/:id' , postServices.getPostById)

router.post('/post/', postServices.postNewPost)

router.patch('/post/:id', postServices.patchPost)

router.delete('/post/:id', postServices.deletePost)



module.exports = router