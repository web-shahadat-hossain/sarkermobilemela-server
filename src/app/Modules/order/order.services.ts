import apiError from '../../../errors/apiError';
import { IOrder } from './order.interface';
import { Order } from './order.modal';


const  createSingleOrder = async (data: IOrder): Promise<IOrder | null> => {
    data.status=false
  const result = (await Order.create(data)).populate("productsId");

  if (!result) {
    throw new apiError(400, 'Failed to Order!');
  }

  return result;
};
const  allGetSingleOrder = async (): Promise<IOrder[] | null> => {

  const result = await Order.find({}).populate("productsId");

  if (!result) {
    throw new apiError(400, 'Failed to Order get!');
  }

  return result;
};
const  updateSingleOrder = async (id:string): Promise<IOrder | null> => {

  const result = (
    await Order.findOneAndUpdate({ _id: id }, {status:true}, {
      new: true,
    })
  )?.populate('productsId');


  if (!result) {
    throw new apiError(400, 'Failed to Order get!');
  }

  return result;
};
const  deleteSingleOrder = async (id:string): Promise<IOrder | null> => {

  const result = (
    await Order.findByIdAndDelete({ _id: id })
  );


  return result;
};



export const orderServices = {
  createSingleOrder,
  allGetSingleOrder,
  updateSingleOrder,
  deleteSingleOrder
  
};
