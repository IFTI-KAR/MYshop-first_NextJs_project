import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
  const productsCollection = await dbConnect("products");
  const product = await productsCollection.findOne({
    _id: new ObjectId(params.id),
  });

  if (!product) {
    return <div className="p-6 text-center text-red-500">Product not found.</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="md:w-1/2 h-80 md:h-auto">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600">
              ${Number(product.price)}
            </p>
          </div>

          {/* Back Button */}
          <Link
            href="/products"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
