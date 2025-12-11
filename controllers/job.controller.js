import Job from "../model/job.js";

// create job controller
const createJob = async (req, res) => {

  // endpoint for creating the job
  const adminId = await req.user.id
  try {
    const {
      title,
      slug,
      applyLink,
      vacancy,
      openingdate,
      lastdate,
      charge,
      location,
      agelimit,
      qualification,
      posts,
      imageurl,
      description,
      
    } = req.body;

    const newJob = await Job.create({
      title,
      slug,
      applyLink,
      vacancy,
      openingdate,
      lastdate,
      charge,
      location,
      agelimit,
      qualification,
      posts,
      imageurl,
      description,
      createdBy:adminId,
    });

    return res.status(201).json(newJob);

  } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
};

export default createJob;
