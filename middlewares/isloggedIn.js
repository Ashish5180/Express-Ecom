import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/user-modal.js";

const jwt = jsonwebtoken;

const isloggedIn = async function(req, res, next) {
    if (!req.cookies.token) {
        req.flash('error', 'Please login first');
        return res.redirect('/');
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
            .findOne({ email: decoded.email })
            .select('-password');
        req.user = user;
        next();
    } catch (err) {
        req.flash('error', 'Something went wrong');
        return res.redirect('/');
    }
};

export default isloggedIn;
