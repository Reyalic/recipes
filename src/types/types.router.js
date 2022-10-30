const router = require("express").Router()

const adminValidate = require("../middlewares/auth.middleware")

const typeServices = require("./types.services")

router.route("/")
    .get(typeServices.getAllTypes)
    .post(
        typeServices.postType,
        adminValidate
    )

router.route("/:id")
    .get(typeServices.getTypeById)
    .delete(
        typeServices.deleteType,
        adminValidate
    )

module.exports = router