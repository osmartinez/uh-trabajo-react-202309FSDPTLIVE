const express = require("express")
const router = express.Router()
const {findAll, insert, deleteOne} = require("../controllers/film.controller")
const {isAuthenticated , isAdmin} = require("../middlewares/auth.middleware")

router.get("/", isAuthenticated, findAll)
router.post("/", isAdmin, insert)
router.delete("/:id", isAdmin, deleteOne)

module.exports = router


//get localhost:3000/api/peliculas
//post localhost:3000/api/peliculas/id
//delete localhost:3000/api/peliculas/302031823dkfja912831203
