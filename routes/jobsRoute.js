import express from 'express'
import { isAdmin } from '../middleware/admin.Check.js'
import createJob from '../controllers/job.controller.js'
import {getJobBySlug, getJobs} from '../controllers/getjob.controller.js'
const router =express.Router()



router.get('/',isAdmin,getJobs)

router.post('/',isAdmin,createJob)
// router.get('/result',getResult)
router.get('/:slug',getJobBySlug)

export default router