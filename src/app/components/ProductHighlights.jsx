import React from "react";
import Link from "next/link";
import dbConnect from "@/lib/dbConnect";

export default async function ProductHighlights() {
  const productsCollection = await dbConnect("products");
  const allProducts = await productsCollection.find({}).toArray();

  // Take only the first 6 products
  const bestProducts = allProducts.slice(0, 6);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-100 via-teal-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Best Products
        </h2>

        {bestProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {bestProducts.map((product) => (
              <div
                key={product._id.toString()}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative w-full h-64">
                  <img
                    src={product.image || "/placeholder.png"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description.length > 80
                        ? product.description.slice(0, 80) + "..."
                        : product.description}
                    </p>
                    <p className="text-green-600 font-bold text-lg mb-2">
                      ${Number(product.price)}
                    </p>
                  </div>

                  <Link
                    href={`/products/${product._id}`}
                    className="mt-2 inline-block w-full text-center py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
