import { NextResponse } from 'next/server';
import { productsData } from '../../../data/products'; // Static data (Ya aap API ya database se fetch kar sakte hain)

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;  // Dynamic ID from the URL
    const product = productsData.find((p) => p.id === parseInt(id));  // Find product by ID

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });  // Return error if not found
    }

    return NextResponse.json(product);  // Return the product details if found
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching product data' }, { status: 500 });  // Handle any server errors
  }
}
