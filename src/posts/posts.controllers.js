

const Post = require('../models/posts.models')

const findAllPosts = async() => {
    //? Your code here:
    const findAllData = await Post.findAll()

    return findAllData

}

const findPostById = async(id) => {
    //? Your code here:

    const dataByID = await Post.findOne({
        where: {
            id: id
        }
    })

    return dataByID

}

const createPost = async(postObj) => {
    //? Your code here:

    const newPost = {
        
        content: postObj.content,
        userName: postObj.userName,
        isPublished: postObj.isPublished
    }

    const dataCreatePost = await Post.create(newPost)

    return dataCreatePost

      //? 2 posibles respuestas que nos dara "return dataUpdate"
    // [1] --> La cantidad de productos que se modificaron
    // [0] --> Error en caso de que el Where no haya encontrado el id

}

const updatePost = async(id, postObj) => {
    //? Your code here:
    const dataUpdate = await Post.update(postObj, {
        where: {
            id : id
        }
    })

    return dataUpdate

}

const deletePost = async(id) => {
    //? Your code here:

    const dataDelete = await Post.destroy({
        where: {
            id: id
        }
    })

    return dataDelete

}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
