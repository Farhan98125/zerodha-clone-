// create Holding schema
const {Schema}=require('mongoose');

const HoldingSchema=new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net:  String,
    day:  String,
});
module.exports={HoldingSchema};
// to work on express use express package
// to read env file use dotenv package
