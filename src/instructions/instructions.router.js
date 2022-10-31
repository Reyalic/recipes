const router = require("express").Router()

const instructionServices = require("./instructions.services")
const adminValidate = require("../middlewares/auth.middleware")

router.route("/")
    .get(instructionServices.getAllInstructions)
    .post(
        instructionServices.postInstructions,
        adminValidate
    )

router.route("/:id")
    .get(instructionServices.getInstructionsById)
    .patch(
        instructionServices.patchInstructions,
        adminValidate
    )

module.exports = router;