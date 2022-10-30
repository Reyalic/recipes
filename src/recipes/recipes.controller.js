const uuid = require("uuid")
const Recipes = require("../models/recipes.models")


const getAllRecipes = async () => {
    const data = await Recipes.findAll()

    return data
}

const getRecipeById = async (id) => {
    const data = await Recipes.findOne({
        where: {
            id
        }
    })

    return data
}

const createRecipe = async (data) => {
    const newRecipe = await Recipes.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        userId: data.userId,
        categoryId: data.categoryId,
        origin: data.origin,
        likes: data.likes
    })
    return newRecipe
}

const deleteRecipe = async (id) => {
    const data = await Recipes.destroy({
        where: {
            id
        }
    })
    return data
}

const updateRecipe = async (id, data) => {
    const result = await Recipes.update(data, {
        where: {
            id
        }
    })
    return result
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    deleteRecipe,
    updateRecipe
}