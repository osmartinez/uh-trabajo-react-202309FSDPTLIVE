const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

async function isAuthenticated(req,res,next){
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg: "no estás autenticado"})
    }
    else{
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userId = tokenDecoded.userId
        const foundUser = await User.findById(userId)
        if(!foundUser){
            return res.status(401).json({msg: "token no valido"})
        }
        else{
            next()
        }
    }
}

async function isAdmin(req,res,next){
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg: "no estás autenticado"})
    }
    else{
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userId = tokenDecoded.userId
        const foundUser = await User.findById(userId)
        if(!foundUser){
            return res.status(401).json({msg: "token no valido"})
        }
        else{
            if(foundUser.role !== "admin"){
                return res.status(403).json({msg: "no autorizado"})
            }
            else{
                next()
            }
        }
    }
}


module.exports = {
    isAuthenticated,
    isAdmin,
}