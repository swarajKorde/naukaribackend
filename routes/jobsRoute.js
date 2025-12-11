import express from 'express'
import { isAdmin } from '../middleware/admin.Check.js'
import createJob from '../controllers/job.controller.js'
import {getJobBySlug, getJobs,updateJob} from '../controllers/getjob.controller.js'
import jobAdminAuth from '../middleware/job.admin.js'
const router =express.Router()

// add isAdmin for authorization (pending task)

router.get('/',getJobs)

router.post('/',jobAdminAuth,createJob)
// router.get('/result',getResult)
router.get('/:slug',getJobBySlug)

// update the jobs 
router.put('/:slug',jobAdminAuth,updateJob)
// router.post('/:slug')
export default router