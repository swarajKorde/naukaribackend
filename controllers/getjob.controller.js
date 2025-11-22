import { response } from "express";
import Job from "../model/job.js";

// function dateFormat(){
//        console.log("i am valid")

// }
export const getJobs = async (req, res) => {
       const page = Number(req.query.page) || 1;
       const limit = Number(req.query.limit) || 10;  // ⭐ now dynamic
       const skip = (page - 1) * limit;

       const response = await Job.find()
              .sort({ createdAt: -1 })
              .skip(skip)
              .limit(limit);

       const formatedResponse = response.map(job => ({
              ...job._doc,
              lastdate: new Date(job.lastdate).toLocaleDateString("en-IN")
       }));

       res.status(200).json(formatedResponse);
};



export const getJobBySlug = async (req, res) => {

       const job = await Job.findOne({ slug: req.params.slug });
       if (!job) return res.status(404).send('Not found');
       res.json(job);
}

// export const getResult = async (req, res) => {
//        const results = await Job.find().where((result))
// }