const AllUSER = require("../models/userModels");

const AllUser = async (req, res) => {
    const params = req.query.search
        ? {
            $or: [
                {
                    name: { $regex: req.query.search, $options: "i" },
                },
                {
                    email: { $regex: req.query.search, $options: "i" },
                },
            ],
        }
        : {};

    try {
        const Users = await AllUSER.find(params).find({ _id: { $ne: req.user._id } });

        if (Users.length > 0) {
            res.send({ Users });
        } else {
            res.send({ message: "No users found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = AllUser;
