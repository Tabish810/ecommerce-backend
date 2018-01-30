var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var record ={
    title : 'Application',
    statusCode : 200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://Tabish:ecommerse@ds117878.mlab.com:17878/ecommerseweb',{useMongoClient:true});


var CartHealthImagesSchema = new Schema({
    title: {
        type:String,
        required:true
    },
     amount: {
        type:Number,
        required:true
    }, 
   path: {
        type:String,
        required:true
    }
},{collection : 'CartHealthImages'});

var model = mongoose.model("CartHealthImages", CartHealthImagesSchema);

// for cart images
record.saveData = function(req,res){

        var postBody = req.body;
        var data = {
           title:postBody.title,
           amount:postBody.amount,
           path:postBody.path
        }
        var addData = new model(data);
        addData.save(function(err,newdata){
            if (err){
                console.log(err)
                res.send({
                statusCode : 505,
                message : "Unable To Save a Data"
            });
            }
            else{
                res.send({
                statusCode : 200,
                message : "Image inserted",
                newdata : data
            })
            }

        });
    }

  record.getData = function(req,res){
    model.find({},function(err,newdata){
            if (err){
                res.send({
                    statusCode : 505,
                    message : "Some thing went wrong"
                   });
                }
              else{
                res.send({
                  statusCode : 200,
                   message : "Data has been displayed",
                   data:newdata 
                })
            }
        
        });
    }

  

module.exports = record;