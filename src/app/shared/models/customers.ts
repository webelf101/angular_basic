import {CustomerType} from './customerType';

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  friend?: number;
  type?: CustomerType;
}
