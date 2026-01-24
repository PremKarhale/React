import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Our Store
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Your one-stop destination for quality products and unbeatable prices
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a modern e-commerce platform committed to delivering
            high-quality products across multiple categories. Our goal is
            to make online shopping simple, secure, and enjoyable for
            everyone.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            With a strong focus on customer satisfaction, we carefully
            curate our products and partner with trusted brands to
            ensure value and reliability.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=60"
            alt="Ecommerce"
            className="rounded-xl shadow-lg"
          />
        </div>

      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Why Choose Us
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                Quality Products
              </h3>
              <p className="mt-2 text-gray-600">
                Every product goes through strict quality checks before
                reaching you.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                Secure Payments
              </h3>
              <p className="mt-2 text-gray-600">
                We use trusted and encrypted payment gateways for safe
                transactions.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                Fast Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Quick and reliable shipping to get your orders on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Shop With Confidence
          </h2>
          <p className="mt-3 text-indigo-200">
            Join thousands of happy customers shopping with us every day.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;
