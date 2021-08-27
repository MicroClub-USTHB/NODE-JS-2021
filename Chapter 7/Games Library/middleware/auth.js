module.exports = {
    logPage: (req, res) => {
        if (req.user) return res.redirect("/");
        res.locals.title = "login";
        res.render("login");
    },
    signedUp: (req, res) => {
        if (req.user) return res.redirect("/");
        res.locals.title = "signup";
        res.render("signup");
    },
    logOut: (req, res) => {
        res.clearCookie("token");
        res.redirect("/");
    },
    isLoggedIn: async (req, res, next) => {
        if (req.user) return next();
        else return res.status(401).send(req.AuthError);
    },
    isAdmin: async function (req, res, next) {
        if (!req.user.isAdmin) return res.status(403).send("user is not an Admin");
        next();
    },
};
