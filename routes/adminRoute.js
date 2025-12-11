import express from "express";
import { createAdmin ,getAdmin , getLoggedOut} from "../controllers/admin.controller.js";
import { isAdmin } from "../middleware/admin.Check.js";
import { isLogIn } from "../middleware/login.Check.js";

const router =express()

// route for /adminlogin
// router.get('/',(req,res)=>{
//     res.send('here me out we are in the /adminlogin route')
// })
// gettin user in this is referred as admin [for login purposes]
router.post('/login',getAdmin)
router.post('/logout',getLoggedOut)

// creating use in this case is referred as admin
router.post('/signup',createAdmin)


export default router