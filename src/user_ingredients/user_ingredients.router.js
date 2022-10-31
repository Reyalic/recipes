const router = require("express").Router()
const passport = require("passport")

const userIngredientServices = require("./user_ingredients.services")
require("../middlewares/auth.middleware")(passport)

router.route("/")
    .get(
        passport.authenticate("jwt", {session: false}),
        userIngredientServices.getAllUserIngredients
    )
    .post(
        passport.authenticate("jwt", {session: false}),
        userIngredientServices.addUserIngredient
    )

router.route("/:id")
    .get(
        passport.authenticate("jwt", {session: false}),
        userIngredientServices.getUserIngredientById
    )
    .patch(
        passport.authenticate("jwt", {session: false}),
        userIngredientServices.patchUserIngredient
    )
    .delete(
        passport.authenticate("jwt", {session: false}),
        userIngredientServices.deleteUserIngredient
    )

module.exports = router