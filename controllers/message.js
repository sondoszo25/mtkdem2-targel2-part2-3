const messageservice=require('../services/message');

const sendmessage=async (req, res, data) => {
    res.json(await messageservice.createMessage(req.params.id,data,req.body.msg));
}
const getmessage=async(req,res,data) =>{
    res.json(await messageservice.getMessage(req.params.id));

}
module.exports={
    sendmessage,getmessage
};

