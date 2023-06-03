const Chat=require('../models/chat');
const User=require('../models/user');

const createchat = async (id, user, lastMessage, username) => {
    try {
      const chat = new Chat({ id, user, lastMessage, username });
      const username2 = user.username;
      if(username !== username2){
      const user2 = await User.findOne({ username: username });
      const chat2 = new Chat({ id, user: user2, lastMessage, username: username2 });
      await chat2.save();
      }
      await chat.save();
      return chat;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

    const check =async (username,me) =>{
        const user= await User.findOne({username:username});
        if(user)
        {
            const chat = await Chat.findOne({ $and: [{ user: user }, { username: me }] });
            if(!chat)
            {
                return user;
            }
            return null;
            
        }
        else{
            return null;
        }
    }

    const getchats=async(data) =>{
        return await Chat.find({username:data});
    }
module.exports={
    createchat,check,getchats
}