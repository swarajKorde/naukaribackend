import { response } from "express";
import Job from "../model/job.js";

// function dateFormat(){
//        console.log("i am valid")

// }
export const getJobs=async(req,res)=>{
        const response =await Job.find();
       const formatedResponse = response.map(job=>({
              ...job._doc,lastdate: new Date(job.lastdate).toLocaleDateString("en-IN")
       }))
        
       return res.status(201).send(formatedResponse)

       }


export const getJobBySlug=async(req,res)=>{
       const job = await Job.findOne({ slug: req.params.slug });
  if(!job) return res.status(404).send('Not found');
  res.json(job);
}