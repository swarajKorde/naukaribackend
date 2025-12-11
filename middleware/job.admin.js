import  jwt  from "jsonwebtoken"
export default async function jobAdminAuth(req,res,next) {
    const token = await req.cookies.token
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user=decoded
    console.log(decoded)
    next()
}