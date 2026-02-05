import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  if (!data) {
    return (
      <h1 className="mt-40 text-center text-xl font-semibold text-gray-700">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src={data.image}
              alt="product"
              className="h-80 object-contain transition hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <span className="mb-2 w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              {data.category}
            </span>

            <h1 className="text-2xl font-bold text-gray-900">
              {data.title}
            </h1>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {data.description}
            </p>

            <p className="mt-4 text-3xl font-semibold text-gray-900">
              ${data.price}
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              ⭐ {data.rating.rate}
              <span className="text-xs text-gray-500">
                ({data.rating.count} reviews)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="flex-1 rounded-lg bg-gray-900 py-3 text-white font-semibold transition hover:bg-gray-800">
                Add to Cart
              </button>

              <button className="flex-1 rounded-lg border border-gray-900 py-3 font-semibold text-gray-900 transition hover:bg-gray-100">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
