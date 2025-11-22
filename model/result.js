import mongoose from 'mongoose'

const resultSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        
    },
    slug: {
        type: String,
        required: true,
        unique: true,     // No two jobs can have the same slug
        lowercase: true,
        trim: true
    },
    date:Date,
    
})

export default mongoose.model('Result', resultSchema)
