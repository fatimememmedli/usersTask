// const jwt = require('jsonwebtoken');

// const userAuthMidd= (req, res, next)=> {
//     const token = req.headers.authorization.split(" ")[1]


//     jwt.verify(token, process.env.SECRET_TOKEN,(err, user) => {
//         console.log(err)
    
//         if (err) return res.sendStatus(403)
    
//         req.user = user
    
//         next()
//       })
// //   const authHeader = req.headers['authorization']
// //   const token = authHeader && authHeader.split(' ')[1]

// //   if (token == null) return res.sendStatus(401)

 
// }
// module.exports=userAuthMidd