const express = require("express")
const router = express.Router()
const {findAll, insert, deleteOne} = require("../controllers/film.controller")

router.get("/", findAll)
router.post("/", insert)
router.delete("/:id", deleteOne)

module.exports = router


//get localhost:3000/api/peliculas
//post localhost:3000/api/peliculas/id
//delete localhost:3000/api/peliculas/302031823dkfja912831203
