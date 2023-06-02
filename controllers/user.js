const userservice=require('../services/user');
const createUser=async (req,res) => {
    var username=req.body.username;
    var password=req.body.password;
    var displayName=req.body.displayName;
    var profilepic=req.body.profilePic;
    res.json(await userservice.createUser(username,password,displayName,profilepic));
};

module.exports={
    createUser
};