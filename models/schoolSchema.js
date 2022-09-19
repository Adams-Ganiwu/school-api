const mongoose=require("mongoose")
const { string } = require("yup")


const schoolSchema = mongoose.Schema({
    schoolname: {
        type: String,
        required: true,
        unique:true
    },
    location: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
},
    facilities: {
        type: Array,
        required: true,
        maxlength:3
},
    numOfStudents: {
        type: Number,
        required:true
    },
    Address: {
        gps: String,
        box: String
} ,
    contact: {
        phone: String,
        email: String
}

}, {
    timestamps: true
}
)

const School = mongoose.model("school", schoolSchema)
module.exports=School