export interface Product {
  _id?: string;
  name: string;
  description?: string;
  image?: string;
  parent?: string;
  category: string;
  attributes?: object[];
}
