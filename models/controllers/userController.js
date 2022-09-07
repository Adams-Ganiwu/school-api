const User = require("../moduls/userSchema")
const bcryptjs = ("bcryptjs")

// adding a user


const addUser = async (req, res) => {
    // encrypting a password
    const salt = await bcryptjs.genSalt(10)
    const hashedpassword = await bcryptjs.hash(req.body.password,salt)

    const newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    await newuser.save();
    res.statuse(201).json({
        _id: newuser._id,
        username: newUser.username,
        email:newUser.email
    })
}
module.exports={addUser}
