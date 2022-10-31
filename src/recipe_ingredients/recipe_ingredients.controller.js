const uuid = require("uuid")
const RecipeIngs = require("../models/recipes_ingredients.models")

const getAllRecipeIngs = async () => {
    const data = RecipeIngs.findAll()

    return data
}

const getRecipeIngById = async (id) => {
    const data = await RecipeIngs.findOne({
        where: {
            id
        }
    })
    return data
}

const createRecipeIng = async (data) => {
    const newRecipeIng = await RecipeIngs.create({
        id: uuid.v4(),
        amount: data.amount,
        recipeId: data.recipeId,
        ingredientId: data.ingredientId
    })
    return newRecipeIng
}

const deleteRecipeIng = async (id) => {
    const data = await RecipeIngs.destroy({
        where: {
            id
        }
    })
    return data
}

const updateRecipeIng = async (id, data) => {
    const result = await RecipeIngs.update(data, {
        where: {
            id
        }
    })
    return result
}



module.exports = {
    getAllRecipeIngs,
    getRecipeIngById,
    createRecipeIng,
    deleteRecipeIng,
    updateRecipeIng
}
