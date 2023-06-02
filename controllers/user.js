const userservice=require('../services/user');
const createUser=async (req,res) => {
    var username=req.body.username;
    var password=req.body.password;
    var displayName=req.body.displayName;
    var profilepic=req.body.profilePic;
    if(!(await userservice.check(username))){
    res.json(await userservice.createUser(username,password,displayName,profilepic));
    }
    else{
       console.log("there is username but not work!!!")
       return res.status(409).json({errors:['there is a user like this']});
    }
};

module.exports={
    createUser
};