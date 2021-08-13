const User = require("../models/user"),
    jwt = require("jsonwebtoken");
module.exports = {
    isLoggedIn: async (req, res, next) => {
        if (!req.headers.authorization)
            return res.status(400).send("You don't have the authorization");
        const token = req.headers.authorization.replace("Bearer ", "");
        try {
            let payload = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await User.findById(payload.id).select({ password: 0 });
            next();
        } catch (e) {
            switch (e.constructor) {
                case jwt.TokenExpiredError:
                    return res.status(401).send("Your token has been expired");
                case jwt.JsonWebTokenError:
                    return res.status(401).send("Your token is unvalid");
            }
        }
    },
    isAdmin: async function (req, res, next) {
        if (!req.user.isAdmin) return res.status(403).send("user is not an Admin");
        next();
    },
};
