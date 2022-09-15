const mongoose=require("mongoose")
const { string } = require("yup")


const schoolSchema = mongoose.Schema({
    schoolname: {
        type: string,
        required: true,
        unique:true
    },
    location: {
        type: string,
        required:true
    },
    category: {
        type: string,
        required:true
},
    facilities: {
        type: Array,
        required: true,
        maxlength:3
},
    numOfStudents: {
        type: num,
        required:true
    },
    Address: {
        gps: string,
        box:string
} ,
    contact: {
        phone: string,
        email: string
}

}, {
    timestamps: true
}
)

const School = mongoose.model("school", schoolSchema)
module.exports=Schema