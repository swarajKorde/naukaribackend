import result from "../model/result.js"
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