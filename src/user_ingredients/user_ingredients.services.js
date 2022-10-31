const userIngredientControllers = require("./user_ingredients.controller")

const getAllUserIngredients = (req, res) => {
    userIngredientControllers.getAllUserIngredients()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getUserIngredientById = (req, res) => {
    const id = req.params.id
    userIngredientControllers.getUserIngredientById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const addUserIngredient = (req, res) => {
    const userId = req.user.id
    const {amount, ingredientId} = req.body

    if(amount && ingredientId) {
        userIngredientControllers.addUserIngredient({amount, userId, ingredientId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: "Missing Data", fields: {
            amount: "string",
            ingredientId: "uuid"
        }})
    }
}

const patchUserIngredient = (req, res) => {
    const id = req.params.id
    const {amount} = req.body

    userIngredientControllers.updateUserIngredient(id, {amount})
        .then(data => {
            if(data[0]) {
                res.status(200).json({message: `User ingredient with ID: ${id}, edited successfully`})
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })

}

const deleteUserIngredient = (req, res) => {
    const id = req.params.id
    userIngredientControllers.deleteUserIngredient(id)
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
    getAllUserIngredients,
    getUserIngredientById,
    addUserIngredient,
    patchUserIngredient,
    deleteUserIngredient
}