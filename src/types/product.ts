// types/product.ts
import { Review } from './review'; // Import the Review type

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  reviews?: Review[]; // Optional property for reviews
};
