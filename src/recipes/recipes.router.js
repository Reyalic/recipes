const router = require("express").Router()
const passport = require("passport")

const recipeServices = require("./recipes.services")
require("../middlewares/auth.middleware")(passport)
const adminValidate = require("../middlewares/auth.middleware")


router.route("/")
    .get(recipeServices.getAllRecipes)
    .post(
        passport.authenticate("jwt", {session: false}),
        recipeServices.postRecipe
    )

router.route("/:id")
    .get(recipeServices.getRecipeById)
    .patch(
        recipeServices.patchRecipe,
        adminValidate
    )
    .delete(
        recipeServices.deleteRecipe,
        adminValidate
    )

module.exports = router