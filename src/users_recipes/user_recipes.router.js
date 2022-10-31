const router = require("express").Router()
const passport = require("passport")

const userRecipeServices = require("./user_recipes.services")
require("../middlewares/auth.middleware")(passport)

router.route("/")
    .get(
        passport.authenticate("jwt", {session: false}),
        userRecipeServices.getAllUserRecipes
    )
    .post(
        passport.authenticate("jwt", {session: false}),
        userRecipeServices.addUserRecipe
    )

router.route("/:id")
    .get(
        passport.authenticate("jwt", {session: false}),
        userRecipeServices.getUserRecipesById
    )
    .patch(
        passport.authenticate("jwt", {session: false}),
        userRecipeServices.patchUserRecipe
    )
    .delete(
        passport.authenticate("jwt", {session: false}),
        userRecipeServices.deleteUserRecipe
    )

module.exports = router