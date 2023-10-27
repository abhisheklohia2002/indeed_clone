
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

const Protect = async (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer')
            ? req.headers.authorization.split(' ')[1]
            : null;

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Verify the token using the secret key
        const decoded = jwt.verify(token, 'hahchac');

        // Find the user in the database based on the user ID in the token
        const user = await User.findById(decoded.id);
console.log(token)
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Set the user object on req for use in subsequent middleware or controllers
        req.user = user;

        // Proceed to the next middleware or route
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = Protect;




// const jwt = require('jsonwebtoken');
// const User = require('../models/userModels');

// const Protect = async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1];
//             const decode = jwt.verify(token, 'hahchac'); // Replace 'your-secret-key' with your actual JWT secret key
// console.log(decode)
//             // Check if the user exists in the database
//             const user = await User.findById({id:decode.id});

//             if (!user) {
//                 throw new Error('User not found');
//             }

//             req.user = user;
//             next();
//         } catch (error) {
//             console.error(error);
//             res.status(401).send({ error: 'Unauthorized' });
//         }
//     } else {
//         res.status(401).send({ error: 'Unauthorized' });
//     }
// };

// module.exports = Protect;
