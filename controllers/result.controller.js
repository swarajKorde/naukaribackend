
import Result from "../model/result.js"

// get all result? 
export const getResult=async(req,res)=>{
    // const result = await Results.find()
    const result =await Result.find()
    res.status(200).json(result)
    res.status(400).json({
      massage:"the wrong way brother"
    })
}

export const createResult = async (req, res) => {
   
  try {
    const {
      title,
      slug,
      company,
      logo,
      resultDate,
      resultLink,
      cutoffs,
      
    } = await req.body;

    const result = await Result.create({
      title,
      slug,
      company,
      logo,
      resultDate,
      resultLink,
      cutoffs,
      createdBy:req.user.id
    });

    console.log(result);

    return res.status(201).json({
      message: "Result Added Successfully",
      result
    });

  } catch (error) {
    console.error(error);

    return res.status(400).json({
      message: "Result is not Added",
      error: "brother this is from here"
    });
  }
};


// result by slug
export const getResultBySlug = async (req, res) => {
    const { slug } = req.params;

    try {
        const result = await Result.findOne({ slug });

        if (!result) {
            return res.status(404).json({ message: "Result not found" });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// update Result by Id

export const updateResult = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await Result.findByIdAndUpdate(id, req.body, {
      new: true, // return updated doc
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating result:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
