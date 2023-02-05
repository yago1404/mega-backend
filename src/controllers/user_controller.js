const express = require('express');
const routes = express.Router();
const { authMiddleware } = require('../middlewares/auth_middleware');

routes.get('/users', authMiddleware, async (req, res) => {
    res.json({
        "user": {
            "name": "string",
            "email": "apiteam@swagger.io",
            "birthDate": "2015-07-20",
            "blocked": true,
            "phoneNumber": "string"
        }
    });
});
