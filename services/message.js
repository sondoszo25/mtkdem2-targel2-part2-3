const Message=require('../models/message');
const Chat=require('../models/chat');
const createMessage=async(id,name,msg)=>{
         sender={username:name}
        const message= new Message({id,sender,content:msg});
        const lastmessage={id:id,created:message.created,content:msg};
        const result = await Chat.updateMany({ id: id }, { $set: { lastMessage: lastmessage } });
        return await message.save();
}

const getMessage=async(id)=>{
    const messages = await Message.find({ id: id }).sort({ _id: -1 });
    return messages;
   
}

module.exports={
    createMessage,getMessage
}