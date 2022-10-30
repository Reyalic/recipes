const recipeControllers = require("./recipes.controller")

const getAllRecipes = (req, res) => {
    recipeControllers.getAllRecipes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getRecipeById = (req, res) => {
    const id = req.params.id
    recipeControllers.getRecipeById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postRecipe = (req, res) => {
    const userId = req.user.id
    const {title, description, urlImg, time, portions, categoryId, origin, likes} = req.body

    if (
        title &&
        description &&
        urlImg &&
        time &&
        portions &&
        categoryId &&
        origin
    ) {
        recipeControllers.createRecipe({
            title, description, urlImg, time, portions, userId, categoryId, origin, likes
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: "All fields must be completed", fields: {
            title: "string",
            description: "string",
            urlImg: "string",
            time: "number",
            portions: "number",
            categoryId: "number",
            origin: "string"
        }
    })
    }
}

const deleteRecipe = (req, res) => {
    const id = req.params.id
    recipeControllers.deleteRecipe(id)
        .then(data => {
            if(data) {
                res.status(204).json()
            } else {
                res.status(404).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const patchRecipe = (req, res) => {
    const id = req.params.id
    const { title, description, urlImg, time, portions, categoryId, origin } = req.body

    recipeControllers.updateRecipe(id, { title, description, urlImg, time, portions, categoryId, origin, likes })
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Recipe with ID: ${id}, edited successfully`})
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
                res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    postRecipe,
    deleteRecipe,
    patchRecipe
}