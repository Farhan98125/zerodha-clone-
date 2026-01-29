const {Schema}=require('mongoose');

const OdersSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String,
});

module.exports={OdersSchema};
// to work on express use express package