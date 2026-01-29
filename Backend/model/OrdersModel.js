const{model}=require('mongoose');

const {OdersSchema}=require('../schemas/OrdersSchema');

const OrdersModel=new model('order',OdersSchema);
module.exports={OrdersModel};
