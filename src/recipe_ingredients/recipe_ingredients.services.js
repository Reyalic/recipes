const recipeIngControllers = require("./recipe_ingredients.controller")

const getAllRecipeIngs = (req, res) => {
    recipeIngControllers.getAllRecipeIngs()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getRecipeIngById = (req, res) => {
    const id = req.params.id
    recipeIngControllers.getRecipeIngById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postRecipeIng = (req, res) => {
    const {amount, recipeId, ingredientId} = req.body
        if(amount && recipeId && ingredientId) {
            recipeIngControllers.createRecipeIng({amount, recipeId, ingredientId})
                .then(data => {
                    res.status(201).json(data)
                })
                .catch(err => {
                    res.status(400).json({message: err.message})
                })
        } else {
            res.status(400).json({message: "Invalid Data", fields: {
                amount: "number",
                recipeId: "uuid",
                ingredientId: "uuid"
            }})
        }
}

const deleteRecipeIng = (req, res) => {
    const id = req.params.id
    recipeIngControllers.deleteRecipeIng(id)
        .then(data => {
            if(data) {
                res.status(204).json()
            } else {
                res.status(404).json("Invalid ID")
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const patchRecipeIng = (req, res) => {
    const id = req.params.id
    const {amount} = req.body

    recipeIngControllers.updateRecipeIng(id, {amount})
        .then(data => {
            if(data[0]) {
                res.status(200).json({message: `Recipe ingredients with ID: ${id}, edited successfully`})
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllRecipeIngs,
    getRecipeIngById,
    postRecipeIng,
    deleteRecipeIng,
    patchRecipeIng
}