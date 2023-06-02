const User=require('../models/user');

const createUser=async(username,password,displayName,profilePic) => {
const user= new User({username,password,displayName,profilePic});
return await user.save();
};

module.exports={
    createUser
}