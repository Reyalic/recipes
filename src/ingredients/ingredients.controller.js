const Ingredients = require("../models/ingredients.models")

const uuid = require("uuid")

const getAllIngredients = async () => {
    const data = await Ingredients.findAll()

    return data
}

const getIngredientsById = async (id) => {
    const data = await Ingredients.findOne({
        where: {
            id
        }
    })

    return data
}

const createIngredient = async (data) => {
    const newIngredient = await Ingredients.create({
        id: uuid.v4(),
        name: data.name,
        typeId: data.typeId,
        urlImg: data.urlImg
    })
    return newIngredient
}

const deleteIngredient = async (id) => {
    const data = await Ingredients.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllIngredients,
    getIngredientsById,
    createIngredient,
    deleteIngredient
}

