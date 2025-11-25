
import Result from "../model/result.js"

export const getResult=async(req,res)=>{
    // const result = await Results.find()
    const result =await Result.find()
    res.status(200).send(result)
}

export const createResult =async(req,res)=>{
    const {title,slug} = req.body
    const result ={title:title,slug:slug}
    Result.create(result)
    res.send("result is added")
}

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
