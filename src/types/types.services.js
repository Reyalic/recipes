const typeControllers = require("./types.controller")

const getAllTypes = (req, res) => {
    typeControllers.getAllTypes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getTypeById = (req, res) => {
    const id = req.params.id
    typeControllers.getTypeById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postType = (req, res) => {
    const { name } = req.body
    if (name) {
        typeControllers.createType(name)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: "Invalid Data",
            fields: {
                name: "string"
            }
        })
    }
}

const deleteType = (req, res) => {
    id = req.params.id
    typeControllers.deleteType(id)
        .then(data => {
            if(data) {
                res.status(204).json()
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllTypes,
    getTypeById,
    postType,
    deleteType
}