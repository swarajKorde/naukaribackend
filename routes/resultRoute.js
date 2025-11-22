import express from 'express'
import { getResult,createResult } from '../controllers/result.controller.js'

const router =express.Router()


router.get('/',getResult)
router.post('/',createResult)
// router.get('/limit',getLimitResult) // for future purpose

export default router