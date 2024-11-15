// pages/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Product } from '../../../types/product'; // Adjust the import path as needed


// Sample product data with image URLs
const products: Product[] = [
  { id: 1, name: 'Rustic Executive Desk', description: 'Description for Product 1', price: '$100', image: '/images/3.jpg' },
  { id: 2, name: 'Classic Office Setup', description: 'Description for Product 2', price: '$150', image: '/images/4.jpg' },
  { id: 3, name: 'Modern Workspace', description: 'Description for Product 3', price: '$200', image: '/images/5.jpg' },
  { id: 4, name: 'Industrial Kitchen Counter', description: 'Description for Product 3', price: '$250', image: '/images/6.jpg' },
  { id: 5, name: 'Elegant Wooden Office Desk', description: 'Description for Product 3', price: '$300', image: '/images/7.jpg' },
  { id: 6, name: 'Luxury Office with Aquarium', description: 'Description for Product 3', price: '$350', image: '/images/8.jpg' },
  { id: 7, name: 'Minimalist Office Setup', description: 'Description for Product 3', price: '$400', image: '/images/9.jpg' },
  { id: 8, name: 'Executive Wooden Office Desk', description: 'Description for Product 3', price: '$450', image: '/images/10.jpg' },
  { id: 9, name: 'Executive Wooden Desk', description: 'Description for Product 3', price: '$500', image: '/images/11.jpg' },
  { id: 10, name: 'Modern Office Setup', description: 'Description for Product 3', price: '$550', image: '/images/12.jpg' },
  { id: 11, name: 'Luxury Workspace with Shelving', description: 'Description for Product 3', price: '$600', image: '/images/13.jpg' },
  { id: 12, name: 'Classic Wooden Workspace', description: 'Description for Product 3', price: '$650', image: '/images/14.jpg' },
  { id: 13, name: 'Corporate Meeting Room Table', description: 'Description for Product 3', price: '$700', image: '/images/15.jpg' },
  { id: 14, name: 'Sophisticated Executive Desk', description: 'Description for Product 3', price: '$750', image: '/images/16.jpg' },
  { id: 15, name: 'Contemporary Office Design', description: 'Description for Product 3', price: '$800', image: '/images/17.jpg' },
  { id: 16, name: 'Sleek Office Desk with Storage', description: 'Description for Product 3', price: '$1000', image: '/images/18.jpg' },
];

// API route for fetching all products
export async function GET() {
  return NextResponse.json(products);
}

// API route for fetching a single product by ID
export async function GET_PRODUCT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const productId = parseInt(id, 10);

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}