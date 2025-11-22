import jwt from "jsonwebtoken"
export const isAdmin=(req,res,next)=>{

  const token = req.headers.authorization;

  if (!token)
    return res.status(401).send("No token provided");

  // Expected format → "Bearer eyJhbGci…"
  

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded; // attach decoded data to request
    next();              // go ahead
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};