import userModal from '../models/user-modal.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';

const loginUser = async function (req, res) {
    let { email, password } = req.body;

    try {
        let existingUser = await userModal.findOne({ email });
        if (!existingUser) {
            return res.status(400).send('User does not exist');
        }

        bcrypt.compare(password, existingUser.password, async function (err, result) {
            if (result) {
                let token = generateToken(existingUser);
                res.cookie('token', token);
                return res.status(200).send("User Logged in successfully");
            } else {
                return res.status(400).send('Invalid credentials');
            }
        });
    } catch (error) {
        return res.status(500).send('Server error');
    }
}

export default loginUser;
