const AllUSER = require('../models/userModels');

const AllUser = async (req, res) => {
    const params = req.query.search
    console.log(params)
        ? {
            $or: [
                {
                    name: { $regex: req.query.search, $options: 'i' },
                },
                {
                    email: { $regex: req.query.search, $options: 'i' },
                },
            ],
        }
        : {};
        // hahchac
    try {
        const Users = await AllUSER.find({ _id: { $ne: req.user.id }, ...params });

        if (Users.length > 0) {
            res.send({ Users });
        } else {
            res.send({ message: 'No users found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = AllUser;
