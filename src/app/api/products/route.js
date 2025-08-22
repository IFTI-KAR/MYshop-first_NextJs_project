// app/api/products/route.js
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  const data = await req.json();

  try {
    const productsCollection = await dbConnect("products");
    const result = await productsCollection.insertOne({
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      image: data.image,
    });

    return new Response(JSON.stringify({ message: "Product added", id: result.insertedId }), {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Failed to add product" }), { status: 500 });
  }
}
