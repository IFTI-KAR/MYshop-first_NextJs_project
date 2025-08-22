// app/products/[id]/page.jsx
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function ProductDetails({ params }) {
  const productsCollection = await dbConnect("products");
  const product = await productsCollection.findOne({
    _id: new ObjectId(params.id),
  });

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="mt-2 text-xl font-semibold">Price: ${product.price}</p>
    </div>
  );
}

