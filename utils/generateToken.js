import jsonwebtoken from 'jsonwebtoken';
const jwt = jsonwebtoken;
const generateToken = (user)=>{
    return jwt.sign({ email:user.email, id:user._id }, process.env.JWT_KEY);
}

export default generateToken;