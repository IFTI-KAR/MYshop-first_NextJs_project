import Link from "next/link";
import dbConnect from "@/lib/dbConnect";

export default async function ProductsPage() {
  const productsCollection = await dbConnect("products");
  const products = await productsCollection.find({}).toArray();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {products.length === 0 ? (
        <p>No products available. Please add some data.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id.toString()}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-2 font-bold">${Number(product.price)}</p>
              <Link
                href={`/products/${product._id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
