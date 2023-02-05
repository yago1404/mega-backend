const jwt = require('jsonwebtoken');

const authMiddleware = async function (req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.search('Bearer')) return res.status(403).json({'message': 'É preciso fazer login para continuar'});
    jwt.verify(authorization.replace("Bearer", ""), "a", {}, async (error, decoded) => {
        if (error) {
            console.log(error);
            return res.status(403).json({'message': error.message});
        }
        next();
    });
};

module.exports = { authMiddleware };
