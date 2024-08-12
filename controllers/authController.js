import userModal from '../models/user-modal.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';

const registerUser = async function (req, res) {
  try {
    let { fullname, email, password } = req.body;
    let existingUser = await userModal.findOne({ email });

    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    bcrypt.genSalt(10, async function (err, salt) {
      if (err) return res.status(500).send('Server error: Unable to generate salt');

      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.status(500).send('Server error: Unable to hash password');

        try {
          let user = await userModal.create({
            fullname,
            password: hash,
            email,
          });

          let token = generateToken(user);
          res.cookie('token', token);
          res.status(201).send({ message: "User created successfully", user });
        } catch (err) {
          res.status(500).send('Server error: Unable to create user');
        }
      });
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export default registerUser;
