import { json } from "express";
import jwt from "jsonwebtoken";
const AuthMiddleware = (req, res, next) => {
  // if token is present and verified then only allow next
  // how token comes in request
  // whether user puts token? currently i am putting but generally it sends from frontend
  // official place is header
  // else send not authorized

  let token = req.headers.authorization.split(" ")[1];
  try {
    // if the token is not available then user is not logged in
    if (!token) {
      res.status(401).json({
        msg: "User not logged in",
      });
    } else {
      // if the token is available then verify the token by decoding it
      var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //console.log(decoded);
      req.body.userId = decoded.userId; // attach the decoded useId to the request userId
      next();
    }
  } catch (error) {
    res.status(500).json({
      json: "Please login again...",
    });
  }
};

export default AuthMiddleware;
