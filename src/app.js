const express = require("express");
const db = require("./utils/database")

const { port } = require("./config")

const userRouter = require("./users/users.router")
const authRouter = require("./auth/auth.router")
const categoryRouter = require("./categories/categories.router")
const typeRouter = require("./types/types.router")
const ingredientRouter = require("./ingredients/ingredients.router")
const recipeRouter = require("./recipes/recipes.router")

const initModels = require("./models/initModels")

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log("Database Authenticated")
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log("Database Synced")
    })
    .catch(err => {
        console.log(err)
    })

initModels()

app.get("/", (req, res) => {
    res.status(200).json({
        message: "OK!",
        users: `localhost:${port}/api/v1/users`
    })
})

app.use("/api/v1/users", userRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/categories", categoryRouter)
app.use("/api/v1/types", typeRouter)
app.use("/api/v1/ingredients", ingredientRouter)
app.use("/api/v1/recipes", recipeRouter)

app.listen(port, () => {
    console.log(`Listening at ${port}` )
})