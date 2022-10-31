const uuid = require("uuid")
const UserIngredients = require("../models/users_ingredients.models")

const getAllUserIngredients = async () => {
    const data = await UserIngredients.findAll()

    return data
}

const getUserIngredientById = async (id) => {
    const data = await UserIngredients.findOne({
        where: {
            id
        }
    })
    return data
}

const addUserIngredient = async (data) => {
    const newIngredientUsers = await UserIngredients.create({
        id: uuid.v4(),
        amount: data.amount,
        userId: data.userId,
        ingredientId: data.ingredientId
        
    })
    return newIngredientUsers
}

const updateUserIngredient = async (id, data) => {
    const result = await UserIngredients.update(data, {
        where: {
            id
        }
    })
    return result
}

const deleteUserIngredient = async (id) => {
    const data = await UserIngredients.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllUserIngredients,
    getUserIngredientById,
    addUserIngredient,
    updateUserIngredient,
    deleteUserIngredient
}