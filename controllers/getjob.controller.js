import { response } from "express";
import Job from "../model/job.js";
import { updateResult } from "./result.controller.js";

// function dateFormat(){
//        console.log("i am valid")

// }
// get job controller This is for the Front Page gets only first 10 page
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


//  Slug Controller
export const getJobBySlug = async (req, res) => {

       const job = await Job.findOne({ slug: req.params.slug });
       if (!job) return res.status(404).json({"msg":"sorry job doesnt exist"});
       res.json(job);
}


// Update job Controller logic

export const updateJob = async (req, res) => {
  try {
    const { slug } = req.params;

       const job = await Job.findOneAndUpdate(
      { slug: slug },
      {
        ...req.body,
        updatedBy: req.user.id,
        $push: {
          updateHistory: {
            updatedBy: req.user.id,
            updatedAt: new Date()
          }
        }
      },
      { new: true }
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Job updated successfully", job });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// export const getResult = async (req, res) => {
//        const results = await Job.find().where((result))
// }