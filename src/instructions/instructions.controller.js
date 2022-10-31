const uuid = require("uuid")

const Instructions = require("../models/instructions.models")

const getAllInstructions = async () => {
    const data = await Instructions.findAll()

    return data
}

const getInstructionsById = async (id) => {
    const data = await Instructions.findOne({
        where: {
            id
        }
    })
    return data
}

const createInstructions = async (data) => {
    const newInstructions = await Instructions.create({
        id: uuid.v4(),
        description: data.description,
        step: data.step,
        recipeId: data.recipeId
    })
    return newInstructions
}

const updateInstructions = async (id, data) => {
    const result = await Instructions.update(data, {
        where: {
            id
        }
    })
    return result
}

module.exports = {
    getAllInstructions,
    getInstructionsById,
    createInstructions,
    updateInstructions
}