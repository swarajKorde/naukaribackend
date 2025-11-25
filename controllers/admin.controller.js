// controllers/adminController.js
import Admin from "../model/admin.js"
import jwt from "jsonwebtoken";
// import bcrypt from 'bcrypt'


// SIGN UP ROUTE
export const createAdmin = async (req, res) => {


  try {
    const { name, email, password } = req.body

    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) {
      return res.status(400).send("Admin with this email already exists")
    }

    const newAdmin = await Admin.create({ name, email, password })
    // sending the token
    const payload = {
      id: newAdmin._id,
      email: newAdmin.email,
      role: "admin",
    };
    // const token = jwt.sign(payload, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    // })
    // res.cookie("token", token, {
    //   httpOnly: true,        // ⛔ Prevent JS access (XSS safe)
    //   secure: true,          // ⛔ Only HTTPS (production)
    //   sameSite: "strict",    // ⛔ Blocks cross-site attacks
    //   maxAge: 24 * 60 * 60 * 1000  // 1 day
    // });

    return res.status(201).send({
      _id: newAdmin._id,
      name: newAdmin.name,
      email: newAdmin.email
    })

  } catch (error) {
    console.log(error)
    return res.status(500).send("Server Error")
  }
}


// LOGIN ROUTE
export const getAdmin = async (req, res) => {
  // const {email,password}=req.body
  // console.log(email)
  // res.status(200).send(email)
  try {
    const { email, password } = req.body
    const isUser = await Admin.findOne({ email })
    if (!isUser) return res.status(400).send("admin does not exist")
    if (isUser.password !== password) return res.status(400).send("Wrong Password")

    // creating the payload for jwt
    const payload = {
      id: isUser._id,
      email: isUser.email,
      role: "admin",
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    })
    res.cookie("token", token, {
      httpOnly: true,        // ⛔ Prevent JS access (XSS safe)

    });
    return res.status(200).json({
      msg: "login success",

      admin: {
        id: isUser._id,
        name: isUser.name,
        email: isUser.email
      }
    })
    // res.status(200).send("user found") // doesnt required now old cold scrap this when needed
  } catch (error) {
    console.log(error)
    res.status(400).send("server error")
  }

}

export const getLoggedOut = async (req, res) => {
  try {
    res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    domain: "localhost"
  });
  res.status(200).sent("its done cookie is deleted")

    return res.json({ success: true, message: "Logged out" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Error logging out" });
  }
}