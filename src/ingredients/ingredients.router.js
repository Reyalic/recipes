const router = require("express").Router()
const adminValidate = require("../middlewares/auth.middleware")

const ingredientServices = require("./ingredients.services.js")

router.route("/")
    .get(ingredientServices.getAllIngredients)
    .post(
        ingredientServices.postIngredient,
        adminValidate
    )

router.route("/:id")
    .get(ingredientServices.getIngredientsById)
    .delete(
        ingredientServices.deleteIngredient,
        adminValidate
    )

module.exports = router