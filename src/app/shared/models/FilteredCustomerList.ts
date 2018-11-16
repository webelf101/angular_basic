import {Customer} from './customers';

export interface FilteredCustomerList {
  list: Customer[];
  count: number;
}
