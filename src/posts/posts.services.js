

const postControllers = require("./posts.controllers");

//TODO ------------------

const getAllPost = (req, res) => {
    postControllers
        .findAllPosts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

//TODO ------------------

const getPostById = (req, res) => {
    const id = Number(req.params.id);

    postControllers.findPostById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

//TODO ------------------

const postNewPost = (req, res) => {
    const postObj = req.body;

    postControllers.createPost(postObj)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};


//TODO ------------------


const deletePost = (req, res) => {
    const id = req.params.id

    postControllers.deletePost(id)
        .then((data) => {
            if (data) {
                res.status(204).json({ message: "Hola" });
            } else {
                res.status(404).json({ message: "product not      found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};


//TODO ------------------

const patchPost = (req, res) => {
    const id = Number(req.params.id)
    const postObj = req.body

    postControllers.updatePost(id, postObj)
    .then(data =>{
        if(data){
          res.status(200).json({message: `Product with id: ${id} update success`})
        }else{
          res.status(404).json({message: 'Product not found' })
        }
      })
      .catch(err => {
        res.status(400).json(err)
      })
}


module.exports = {
    getAllPost,
    deletePost,
    getPostById,
    patchPost,
    postNewPost

}