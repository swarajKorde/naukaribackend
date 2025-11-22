import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,     // No two jobs can have the same slug
    lowercase: true,
    trim: true
  },
  applyLink:{
    type:String,
    required:true
  },
  vacancy: {
    type: Number,
    required: true
  },
  imageurl:{
    type:String,
    required:true
  },
  openingdate: {
    type: Date,
    required: true
  },
  lastdate: {
    type: Date,
    required: true
  },
  charge:{
    type:String,
    required:true
  },
  location:{
    type:String
  },
  result:{
    type:String,
    required:false
  },
  agelimit:{
    type:String,
   required: true
  },
  qualification: {
    type: [String],
    required: true
  },
  posts: [
    {
      name: { type: String, required: true },
      division: { type: String, required: true },
      postAvailable:{type:Number,required:true}
    }
  ],
   // ADD THIS
  description: {
    type: String,
    required: true,   // make true if you want mandatory
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: false
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin"
  },
  updateHistory: [
    {
      updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
      updatedAt: { type: Date, default: Date.now }
    }
  ]

}, { timestamps: true })

export default mongoose.model('Job', jobSchema)
