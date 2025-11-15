import Job from "../model/job.js";

const createJob = async (req, res) => {
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
      createdBy
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
      createdBy
    });

    return res.status(201).json(newJob);

  } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
};

export default createJob;
