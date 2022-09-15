const School = require("../models/schoolSchema")

const createSchool = (req, res) => {
    const newschool = new School({
        schoolname: req.body.schoolname,
        location: req.body.location,
        category: req.body.category,
        facilities: req.body.facilities,
        numOfStudents: req.body.numOfStudents,
        address: req.body.contact
    })
    newschool.save();
    res.status(200).json(newSchool)
}
module.exports={createSchool}