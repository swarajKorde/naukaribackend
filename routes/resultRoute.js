import express from 'express'
import { getResult,createResult , getResultBySlug ,updateResult} from '../controllers/result.controller.js'
import jobAdminAuth from '../middleware/job.admin.js'
// import { isAdmin } from '../middleware/admin.Check.js'


const router =express.Router()


router.get('/',getResult)
router.get('/:slug',getResultBySlug)
router.post('/',jobAdminAuth,createResult)
router.put('/:slug',updateResult)
// router.get('/limit',getLimitResult) // for future purpose

export default router