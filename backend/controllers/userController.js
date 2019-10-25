import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {
    res.render("join");
}

export const postJoin = async (req, res, next) => {
    const {
        body: { username, password, rePassword }
    } = req;

    if(password !== rePassword){
        res.status(400);
        res.render("join");
    }else{
        try{
            const user = await User({
                username
            });

            await User.register(user, password);
            next();
        }catch(error){
            console.log(error);
            res.redirect(routes.home);
        }
    }
}

export const getLogin = (req, res) => res.render("login");

export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

export const logout = (req, res) => {
    req.logout();
    res.redirect("login");
}