import jwt from "jsonwebtoken"

export const generatedToken= (userId, res) =>{

    const token = jwt.sign({userId} , process.env.JWT_SECRET ,{
    expiresIn:"7d"
    })

    res.cookie("jwt", token,{
         maxAge: 7 * 24 * 60 * 60 * 1000,
         httpOnly: true, //prevent xxs attacks croos-site scripting attacks
         sameSite: "strict", //CSRP attacks cross-site requests foregary attacks
         secure: process.env.NODE_ENV !=="development"
    })

    return token;
}

