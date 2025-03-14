import { Model, ObjectId } from 'mongoose';
import { IUser } from '../user/user.interface'; 
import { IContract } from '../contract/contract.interface';

export interface IPayment {
    _id?: ObjectId;
  user: ObjectId | IUser;
  contract: ObjectId | IContract;
  amount: number;
  tranId: string;
  isPaid: boolean;
  isDeleted: boolean;
}

export type ISubscriptionsModel = Model<IPayment, Record<string, unknown>>;
