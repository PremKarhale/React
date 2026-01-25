import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Shop Smarter, Live Better
          </h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-2xl">
            Discover premium products at unbeatable prices. Fast delivery,
            secure payments, and quality you can trust.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to='/products'>
            <button className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition " style={{marginRight:"5px"}}>
              Shop Now

            </button>
            <button className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-indigo-600 transition">
              Explore Deals
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">
              Free Shipping
            </h3>
            <p className="mt-2 text-gray-600">
              Enjoy free delivery on all orders with no hidden charges.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">
              Secure Payments
            </h3>
            <p className="mt-2 text-gray-600">
              Your transactions are protected with industry-grade security.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">
              Quality Guarantee
            </h3>
            <p className="mt-2 text-gray-600">
              Only the best products curated from trusted brands.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Featured Products
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-100 rounded mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Product Name
                </h3>
                <p className="mt-1 text-gray-600">₹999</p>
                <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}   
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Start Shopping Today
          </h2>
          <p className="mt-4 text-indigo-200">
            Join thousands of customers who trust us for their daily needs.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Browse Products
          </button>
        </div>
      </section>

    </div>
  );
}

export default Home;
