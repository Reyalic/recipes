const router = require("express").Router()
const passport = require("passport")

const userServices = require("./user.services")

require("../middlewares/auth.middleware")(passport)

router.get("/", userServices.getAllUsers)

// router.get("/:id")
// router.patch("/:id")
// router.delete("/:id")

router.route("/me")
    .get(
        passport.authenticate("jwt", {session:false}),
        userServices.getMyUser)
    .patch(
        passport.authenticate('jwt', {session: false}),
        userServices.updateMyUser
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        userServices.deleteMyUser
    )

router.route("/:id")
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)

module.exports = router