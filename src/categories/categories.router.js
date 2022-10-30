const router = require("express").Router()

const adminValidate = require("../middlewares/auth.middleware")

const categoryServices = require("./categories.services")

router.route("/")
    .get(categoryServices.getAllCategories)
    .post(
        categoryServices.postCategory,
        adminValidate
    )

router.route("/:id")
    .get(categoryServices.getCategoryById)
    .delete(
        categoryServices.deleteCategory,
        adminValidate
    )

module.exports = router