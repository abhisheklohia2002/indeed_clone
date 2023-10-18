const jwt = require('jsonwebtoken');
const User = require("../models/userModels");

const Protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token, "hahchac");
            req.user = await User.findById(decode.id);
            next();
        } catch (error) {
            res.status(401).send({ error: "Unauthorized" });
            console.log(error);
            return;
        }
    } else {
        res.status(401).send({ error: "Unauthorized" });
        return; 
    }
};

module.exports = Protect;
