const uuid = require("uuid")
const UserRecipes = require("../models/users_recipes.models")

const getAllUserRecipes = async () => {
    const data = await UserRecipes.findAll()

    return data
}

const getUserRecipesById = async (id) => {
    const data = await UserRecipes.findOne({
        where: {
            id
        }
    })
    return data
}

const addUserRecipe = async (data) => {
    const newUserRecipe = await UserRecipes.create({
        id: uuid.v4(),
        favorite: data.favorite,
        userId: data.userId,
        recipeId: data.recipeId
    })
    return newUserRecipe
}

const updateUserRecipe = async (id, data) => {
    const result = await UserRecipes.update(data, {
        where: {
            id
        }
    })
    return result
}

const deleteUserRecipe = async (id) => {
    const data = await UserRecipes.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllUserRecipes,
    getUserRecipesById,
    addUserRecipe,
    updateUserRecipe,
    deleteUserRecipe
}