const User=require('../models/user');


const checkusernameandpassword=async(username,password) =>{
try{
const user= await User.findOne({username:username});
if(user)
{
    if(user.password === password)
    {
    return true;
    }
    else{
        return false;
    }
}
else{
    return false;
}
}
catch(error)
{
 return false;
}
}

module.exports={
    checkusernameandpassword
}