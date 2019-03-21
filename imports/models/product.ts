export interface Product {
  _id?: string;
  name: string;
  description?: string;
  image?: string;
  category: string;
  producer?: string;
  attributes?: object[];
  added: number;
  price?: string;
}
