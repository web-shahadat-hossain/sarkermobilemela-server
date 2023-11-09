import apiError from '../../../errors/apiError';
import { IOrder, IOrderCart } from './order.interface';
import { Order, OrderCart } from './order.modal';


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
    throw new apiError(400, 'Failed to Order Update!');
  }

  return result;
};
const  deleteSingleOrder = async (id:string): Promise<IOrder | null> => {

  const result = (
    await Order.findByIdAndDelete({ _id: id })
  );


  return result;
};

const  createOrderCart = async (data: IOrderCart): Promise<IOrderCart | null> => {
 
 data.status=false
const result = (await OrderCart.create(data))

if (!result) {
  throw new apiError(400, 'Failed to Order!');
}

return result;
};

const  allGetCartOrder = async (): Promise<IOrderCart[] | null> => {

  const result = await OrderCart.find({});

  if (!result) {
    throw new apiError(400, 'Failed to Order get!');
  }

  return result;
};
const  randomFindCartOrder = async (email:string): Promise<IOrderCart[] | null> => {

  const result = await OrderCart.find({email:email});

  if (!result) {
    throw new apiError(400, 'Failed to Order get!');
  }

  return result;
};

const  updateCartOrder = async (id:string): Promise<IOrderCart | null> => {

  const result = (
    await OrderCart.findOneAndUpdate({ _id: id }, {status:true}, {
      new: true,
    })
  )


  if (!result) {
    throw new apiError(400, 'Failed to Order Update!');
  }

  return result;
};
const  deleteCartOrder = async (id:string): Promise<IOrderCart | null> => {

  const result = (
    await OrderCart.findByIdAndDelete({ _id: id })
  );


  return result;
};

export const orderServices = {
  createSingleOrder,
  allGetSingleOrder,
  updateSingleOrder,
  deleteSingleOrder,
  createOrderCart,
  allGetCartOrder,
  randomFindCartOrder,
  updateCartOrder,
  deleteCartOrder 
  
};
