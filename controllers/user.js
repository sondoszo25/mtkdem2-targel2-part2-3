const userservice = require('../services/user');
const tokenservice=require('../services/token');

const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var displayName = req.body.displayName;
    var profilepic = req.body.profilePic;
    if (!(await userservice.check(username))) {
        res.json(await userservice.createUser(username, password, displayName, profilepic));
    }
    else {
        return res.status(409).json({ errors: ['there is a user like this'] });
    }
};



const isLoggedIn = (req, res, next) => {
    // If the request has an authorization header
    if (req.headers.authorization) {
        // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];
        try {
            // Verify the token is valid
            tokenservice.checktoken(token);
            // Token validation was successful. Continue to the actual function (index)
            return next()
        } catch (err) {

            return res.status(401).send("Invalid Token");
        }
    }
    else
        return res.status(403).send('Token required');
}


const index = async (req, res) => {
    const user = await userservice.getuser(req.params.id);
   
    res.json(user);
}



module.exports = {
    createUser, isLoggedIn, index
};