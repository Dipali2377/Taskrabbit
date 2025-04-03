import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
const saltRounds = 10;

const signup = (req, res) => {
  try {
    let myPlaintextPassword = req.body.password;
    //console.log("plain pass----->", myPlaintextPassword);

    bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
      // Store hash in your password DB.
      //   console.log("hashed pass--->", hash);
      let userData = { ...req.body, password: hash };
      //   console.log(userData);

      if (err) {
        console.log(err);
      } else {
        await userModel.create(userData);
      }
      res.status(200).json({
        msg: "Signed up successfully...!",
      });
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error while signup",
    });
  }
};

const login = async (req, res) => {
  // for the login I will check that the user
  let userData = await userModel.findOne({ email: req.body.email });

  if (!userData.email) {
    res.send("User is not registered. Please signup first");
  }

  try {
    let myPlaintextPassword = req.body.password;
    let hash = userData.password;
    // Load hash from your password DB.
    bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
      // result == true
      if (err) {
        console.log(err);
      }
      if (result) {
        var token = jwt.sign(
          { userId: userData._id },
          process.env.JWT_SECRET_KEY
        );

        res.status(200).json({
          msg: "Login successfull...!",
          token,
        });
      }
    });
  } catch (error) {
    console.log("Failed to login. Please try again later", error);
  }
};
export { signup, login };
