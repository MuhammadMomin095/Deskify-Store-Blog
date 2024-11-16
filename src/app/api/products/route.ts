import { NextResponse } from 'next/server';
import { Product } from '../../../types/product'; 

// Products array (should only be declared once)
const products = [
  { id: 1, name: 'Rustic Executive Desk', description: 'A beautiful executive desk', price: '$100', image: '/images/3.jpg' },
  { id: 2, name: 'Classic Office Setup', description: 'A classic office setup for your workspace', price: '$150', image: '/images/4.jpg' },
  { id: 3, name: 'Modern Workspace', description: 'A modern workspace designed for efficiency', price: '$200', image: '/images/5.jpg' },
  { id: 4, name: 'Industrial Kitchen Counter', description: 'A robust kitchen counter design', price: '$250', image: '/images/6.jpg' },
  { id: 5, name: 'Elegant Wooden Office Desk', description: 'An elegant wooden desk for your office', price: '$300', image: '/images/7.jpg' },
  { id: 6, name: 'Luxury Office with Aquarium', description: 'A luxury office setup with an aquarium', price: '$350', image: '/images/8.jpg' },
  { id: 7, name: 'Minimalist Office Setup', description: 'A minimalist design for a modern office', price: '$400', image: '/images/9.jpg' },
  { id: 8, name: 'Executive Wooden Office Desk', description: 'An executive office desk made from fine wood', price: '$450', image: '/images/10.jpg' },
  { id: 9, name: 'Executive Wooden Desk', description: 'A classic wooden desk for your office', price: '$500', image: '/images/11.jpg' },
  { id: 10, name: 'Modern Office Setup', description: 'A modern office setup for a stylish workplace', price: '$550', image: '/images/12.jpg' },
  { id: 11, name: 'Luxury Workspace with Shelving', description: 'A luxury workspace with custom shelving', price: '$600', image: '/images/13.jpg' },
  { id: 12, name: 'Classic Wooden Workspace', description: 'A classic workspace with a wooden touch', price: '$650', image: '/images/14.jpg' },
  { id: 13, name: 'Corporate Meeting Room Table', description: 'A large table for corporate meetings', price: '$700', image: '/images/15.jpg' },
  { id: 14, name: 'Sophisticated Executive Desk', description: 'A sophisticated executive desk for the modern office', price: '$750', image: '/images/16.jpg' },
  { id: 15, name: 'Contemporary Office Design', description: 'A contemporary office design for stylish workspaces', price: '$800', image: '/images/17.jpg' },
  { id: 16, name: 'Sleek Office Desk with Storage', description: 'A sleek office desk with integrated storage', price: '$1000', image: '/images/18.jpg' },
];


// API route for fetching all products
export async function GET() {
  return NextResponse.json(products);
}
 