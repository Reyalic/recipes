const ingredientControllers = require("./ingredients.controller")

const getAllIngredients = (req, res) => {
    ingredientControllers.getAllIngredients()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getIngredientsById = (req, res) => {
    const id = req.params.id
    ingredientControllers.getIngredientsById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postIngredient = (req, res) => {
    const {name, typeId, urlImg} = req.body
    if(name && typeId && urlImg) {
        ingredientControllers.createIngredient({name, typeId, urlImg})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: "Missing Data",
            fields: {
                name: "string",
                typeId: "number",
                urlImg: "string"
            }
        })
    }
}

const deleteIngredient = (req, res) => {
    const id = req.params.id
    ingredientControllers.deleteIngredient(id)
        .then(data => {
            if(data) {
                res.status(204).json()
            } else {
                res.status(404).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.messsage})
        })

}

module.exports = {
    getAllIngredients,
    getIngredientsById,
    postIngredient,
    deleteIngredient
}