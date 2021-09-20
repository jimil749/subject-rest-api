const subjectModel = require('../models/subjects');

module.exports = {
    getById: function(req, res, next) {
        subjectModel.findById(req.params.subjectID, function(err, subjectInfo){
        if (err) {
            next(err);
        } else {
            res.json({status:"success", message: "Subject found", data:{subjects: subjectInfo}});
        }
    });
 },

getAll: function(req, res, next) {
    let subjectList = [];
    subjectModel.find({}, function(err, subjects){
    if (err) {
        next(err);
    } else {
        for (let subject of subjects) {
            subjectList.push({id: subject._id, name: subject.name, professor: subject.professor });
        }
        res.json({status:"success", message: "Subject List Found", data:{subject: subjectList}});     
    }
    });
 },

updateById: function(req, res, next) {
    subjectModel.findByIdAndUpdate(req.params.subjectID,{name:req.body.name}, function(err, subjectInfo){
    if(err)
        next(err);
    else {
        res.json({status:"success", message: "Subject updated successfully", data:null});
    }
  });
 },

deleteById: function(req, res, next) {
    subjectModel.findByIdAndRemove(req.params.subjectID, function(err, subjectInfo){
    if(err)
        next(err);
    else {
        res.json({status:"success", message: "Subject Deleted Successfully", data:null});
    }
  });
 },


create: function(req, res, next) {
  subjectModel.create({ name: req.body.name, professor: req.body.professor }, function (err, result) {
      if (err) 
        next(err);
      else
       res.json({status: "success", message: "Subject Added Successfully", data: null});
    });
 },
}