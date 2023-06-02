const tokenservice=require('../services/token');
const createtoken=async (req,res) => {
    if(await tokenservice.checkusernameandpassword(req.body.username,req.body.password))
    {
       
    }
    else{
        return res.status(404).json({errors:['username or password is wrong']});
    }
}
module.exports={
    createtoken
};