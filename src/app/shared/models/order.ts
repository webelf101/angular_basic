import {Customer} from './customers';
import {OrderLine} from './orderLine';

export class Order {
  id?: number;
  deliveryDate?: Date;
  orderDate?: Date;
  customer?: Customer;
  orderLines?: OrderLine[];
}
