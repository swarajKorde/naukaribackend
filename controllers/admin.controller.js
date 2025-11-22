// controllers/adminController.js
import Admin from "../model/admin.js"
// import bcrypt from 'bcrypt'

export const createAdmin = async (req, res) => {
  

  try {
    const { name, email, password } = req.body

    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) {
      return res.status(400).send("Admin with this email already exists")
    }

    const newAdmin = await Admin.create({ name, email, password })

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

export const getAdmin = async (req, res) => {
  // const {email,password}=req.body
  // console.log(email)
  // res.status(200).send(email)
  try {
    const {email,password}=req.body
    const isUser = await Admin.findOne({email})
    if(!isUser) return res.status(400).send("admin does not exist")
    if(isUser.password!==password) return res.status(400).send("Wrong Password")
    res.status(200).send("user found")
  } catch (error) {
      console.log(error)
  }

}