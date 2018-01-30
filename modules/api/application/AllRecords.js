var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var record ={
    title : 'Application',
    statusCode : 200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://Tabish:ecommerse@ds117878.mlab.com:17878/ecommerseweb',{useMongoClient:true});


var CartItemsSchema = new Schema({
    phone_no: {
        type:String,
        required:true
    },
     email: {
        type:String,
        required:true
    }, 
    quantity: {
        type:Number,
        required:true
    },
    total: {
        type:Number, 
        required:true
    }
},{collection : 'CartItems'});

var model = mongoose.model("CartItems", CartItemsSchema);

// for cart items
record.saveData = function(req,res){

        var postBody = req.body;
        var data = {
            phone_no: postBody.phone_no,
            email: postBody.email,
            quantity: postBody.quantity,
            total : postBody.total
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
                message : "Data inserted",
                newdata : data
            })
            }

        });
    }
module.exports = record;