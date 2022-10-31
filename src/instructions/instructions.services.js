const instructionControllers = require("./instructions.controller")

const getAllInstructions = (req, res) => {
    instructionControllers.getAllInstructions()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getInstructionsById = (req, res) => {
    const id = req.params.id
    instructionControllers.getInstructionsById(id)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postInstructions = (req, res) => {
    const {description, step, recipeId} = req.body

    if (description && step && recipeId) {
        instructionControllers.createInstructions({
            description,
            step,
            recipeId
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: "All fields must be completed", fields: {
            description: "string",
            step: "number",
            recipeId: "uuid"
        }})
    }
}

const patchInstructions = (req, res) => {
    const id = req.params.id
    const {description, step} = req.body

    instructionControllers.updateInstructions(id, {description, step})
        .then(data => {
            if(data[0]){
            res.status(200).json({message: `Instructions with ID: ${id}, edited successfully`})
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllInstructions,
    getInstructionsById,
    postInstructions,
    patchInstructions
}