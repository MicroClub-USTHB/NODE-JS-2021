const User = require("../models/user"),
    jwt = require("jsonwebtoken");
module.exports = {
    isLoggedIn: async (req, res, next) => {
        const token = req.headers.authorization.replace("Bearer ", "");
        try {
            let payload = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await User.findById(payload.id).select({ password: 0 });
            next();
        } catch (e) {
            switch (e.constructor) {
                case jwt.TokenExpiredError:
                    return res.send("Your token has been expired");
                case jwt.JsonWebTokenError:
                    return res.send("Your token is unvalid");
            }
        }
    },
};
