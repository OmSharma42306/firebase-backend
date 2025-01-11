const admin = require('../admin-config')


const authenticateFirebaseToken = async(req,res,next) =>{
const token = req.headers.authorization?.split(" ")[1]; // extract the Bearer Token.
if(!token){
    return res.status(401).json({error:"Unautorized!"})
}

try{
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
}catch(error){
res.status(401).json({error:"Invalid or Expired Token!"})
}

}

module.exports = authenticateFirebaseToken;