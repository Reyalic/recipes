const userRecipeControllers = require("./users_recipes.controller")

const getAllUserRecipes = (req, res) => {
    userRecipeControllers.getAllUserRecipes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getUserRecipesById = (req, res) => {
    const id = req.params.id
    userRecipeControllers.getUserRecipesById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const addUserRecipe = (req, res) => {
    const userId = req.user.id
    const {favorite, recipeId} = req.body

    if(recipeId) {
        userRecipeControllers.addUserRecipe({favorite, userId, recipeId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: "Missing Data", fields: {
            recipeId: "uuid"
        }})
    }
}

const patchUserRecipe = (req, res) => {
    const id = req.params.id
    const {favorite} = req.body

    userRecipeControllers.updateUserRecipe(id, {favorite})
        .then(data => {
            if(data[0]) {
                res.status(200).json({message: `User recipe with ID: ${id}, edited successfully`})
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })

}

const deleteUserRecipe = (req, res) => {
    const id = req.params.id
    userRecipeControllers.deleteUserRecipe(id)
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

module.exports = {
    getAllUserRecipes,
    getUserRecipesById,
    addUserRecipe,
    patchUserRecipe,
    deleteUserRecipe
}