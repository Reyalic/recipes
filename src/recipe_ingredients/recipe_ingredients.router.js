const router = require("express").Router()

const recipeIngServices = require("./recipe_ingredients.services")
const adminValidate = require("../middlewares/auth.middleware")

router.route("/")
    .get(recipeIngServices.getAllRecipeIngs)
    .post(
        recipeIngServices.postRecipeIng,
        adminValidate
    )
router.route("/:id")
    .get(recipeIngServices.getRecipeIngById)
    .patch(
        recipeIngServices.patchRecipeIng,
        adminValidate
    )
    .delete(
        recipeIngServices.deleteRecipeIng,
        adminValidate
    )

module.exports = router